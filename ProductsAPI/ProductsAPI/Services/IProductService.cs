namespace ProductsAPI.Services
{
    public interface IProductService
    {
        Task<HttpResponseMessage> GetProductsAsync();
    }
}
