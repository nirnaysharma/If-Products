using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using ProductsAPI.Models;
using ProductsAPI.Services;
using System.Collections.Generic;
using System.Text.Json;

namespace ProductsAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private readonly IProductService _productService;
        private readonly ILogger<ProductController> _logger;

        public ProductController(IProductService productService, ILogger<ProductController> logger)
        {
            _productService = productService;
            _logger = logger;
        }

        [HttpGet]
        [ResponseCache(Duration = 30)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(500)]
        [ProducesResponseType(typeof(ReturnedProducts), 200)]
        public async Task<ActionResult<ReturnedProducts>> GetProductsAsync()
        {
            var response = await _productService.GetProductsAsync();
            if (response.IsSuccessStatusCode)
            {
                var jsonString = await response.Content.ReadAsStringAsync();
                var returnedProducts = JsonSerializer.Deserialize<ReturnedProducts>(jsonString);
                _logger.LogInformation("Product list has been successfully returned.");
                return Ok(returnedProducts);
            }
            else
            {
                _logger.LogError("Error while trying to get the list of products.");
                return NotFound();
            }
        }
    }
}
