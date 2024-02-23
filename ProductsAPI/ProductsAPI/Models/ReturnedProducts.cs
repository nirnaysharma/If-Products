using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ProductsAPI.Models
{
    public record ReturnedProducts(
         [property: JsonPropertyName("products")]  List<Product> Products,
         [Range(0, int.MaxValue)] [property: JsonPropertyName("total")] int Total,
         [Range(0, int.MaxValue)][property: JsonPropertyName("skip")]  int Skip,
         [Range(0, int.MaxValue)][property: JsonPropertyName("limit")]  int Limit);
}
