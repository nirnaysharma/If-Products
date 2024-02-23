using Microsoft.AspNetCore.Mvc;
using ProductsAPI.Validations;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace ProductsAPI.Models
{
     public record Product(
        [Required][property: JsonPropertyName("id")] int Id, 
        [Required] [StringLength(300)][property: JsonPropertyName("title")]  string Title, 
        [Required][StringLength(2000)][property: JsonPropertyName("description")] string Description, 
        [Required][Range(0, double.MaxValue)][property: JsonPropertyName("price")] double Price,
        [Range(0, 100)][DefaultValue(0)][property: JsonPropertyName("discountPercentage")] double discountPercentage,
        [Range(0, 5)][DefaultValue(0)][property: JsonPropertyName("rating")] double Rating,
        [Range(0, int.MaxValue)][property: JsonPropertyName("stock")] int Stock,
        [property: JsonPropertyName("brand")] string Brand,
        [Required] [property: JsonPropertyName("category")]  string Category,
        [Url] [property: JsonPropertyName("thumbnail")] string Thumbnail,
        [ListOfUrls][property: JsonPropertyName("images")] string[] Images
        );
}

