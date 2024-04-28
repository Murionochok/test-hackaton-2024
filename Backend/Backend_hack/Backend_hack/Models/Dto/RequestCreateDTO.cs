using System.ComponentModel.DataAnnotations;

namespace Backend_hack.Models.Dto
{
    public class RequestCreateDTO
    {
        public string Title { get; set; }
        public string Description { get; set; }

        public string Address { get; set; }

        public DateTime Date { get; set; }

        public string Phone { get; set; } = string.Empty;

        [RegularExpression("^(Weapon|Grocery|Staff)$")]
        public string Type { get; set; }

    }
}
