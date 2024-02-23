using Microsoft.Extensions.DependencyInjection;
using Microsoft.VisualStudio.TestPlatform.TestHost;
using ProductsAPI.Models;
using ProductsAPI.Services;
using System.Text.Json;

namespace ProductsAPI.Tests
{
    [TestClass]
    public class ProductTests
    {
        protected IProductService _productService;

        public ProductTests()
        {
            var services = new ServiceCollection();
            services.AddHttpClient<ProductService>();
            services.AddTransient<IProductService, ProductService>();

            var serviceProvider = services.BuildServiceProvider();
           _productService = serviceProvider.GetService<IProductService>();
        }

        [TestMethod]
        public async Task TestIfAPIIsWorking()
        {
            var response = await _productService.GetProductsAsync();

            if (!response.IsSuccessStatusCode)
            {
                //Test was a failure
                Assert.Fail("The API call to fetch products was not successful.");
            }
        }

        [TestMethod]
        public async Task TestIfAPIHasData()
        {
            var response = await _productService.GetProductsAsync();

            if (response.IsSuccessStatusCode)
            {
                var jsonString = await response.Content.ReadAsStringAsync();
                var returnedProducts = JsonSerializer.Deserialize<ReturnedProducts>(jsonString);
                if (returnedProducts?.Limit == 0 || returnedProducts?.Total == 0 || returnedProducts?.Products.Count <= 0)
                {
                    Assert.Fail("The get all products API did not fetch any data.");
                }
            }
            else
            {
                Assert.Fail("The API call to fetch products was not successful.");
            }
        }
    }
}