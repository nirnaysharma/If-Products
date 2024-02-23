using System.ComponentModel.DataAnnotations;

namespace ProductsAPI.Validations
{
    public class ListOfUrlsAttribute: ValidationAttribute
    {
        protected override ValidationResult IsValid(object value, ValidationContext validationContext)
        {
            //return base.IsValid(value, validationContext);

            if (value is List<string> urls)
            {
                var urlAttribute = new UrlAttribute();

                foreach (var url in urls)
                {
                    if (!urlAttribute.IsValid(url))
                    {
                        return new ValidationResult(ErrorMessage);
                    }
                }

                return ValidationResult.Success;
            }

            // If the value is not a list of strings, consider it as a validation success.
            return ValidationResult.Success;
        }
    }
}
