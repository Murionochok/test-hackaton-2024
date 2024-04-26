using System.ComponentModel.DataAnnotations;

namespace Backend_hack.Models.Dto
{
    public class RequestCreateDTO
    {
        public string Name { get; set; }
        public string Description { get; set; }

        public string Location { get; set; }

        public bool Urgency { get; set; }

        public DateTime Deadline { get; set; }

        public string UserPhone { get; set; } = string.Empty;

        [RegularExpression("^(Weapon|Grocery|Staff)$")]
        public string Type { get; set; }

        public string CreatedByUserId { get; set; }
    }
}
