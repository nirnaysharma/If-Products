using ProductsAPI.Models;

namespace ProductsAPI.Services
{
    public class ProductService: IProductService
    {
        private readonly HttpClient _httpClient;
        string _getProductUrl = "https://dummyjson.com/products";

        public ProductService(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<HttpResponseMessage> GetProductsAsync()
        {
            HttpClient client = new HttpClient();
            var result = await client.GetAsync(_getProductUrl);
            return result;
        }
    }
}
