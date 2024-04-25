using System;
using System.ComponentModel.DataAnnotations;

namespace Backend_hack.Models
{
    public class RequestToDo
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 3)]
        public string Name { get; set; }

        [Required]
        [StringLength(500, MinimumLength = 10)]
        public string Description { get; set; }

        [Required]
        [StringLength(100, MinimumLength = 3)]
        public string Location { get; set; }

        [Required]
        public bool Urgency { get; set; }

        [Required]
        public DateTime Deadline { get; set; }

        [Required]
        [Phone]
        public string UserPhone { get; set; } = string.Empty;

        [Required]
        [RegularExpression("^(Weapon|Grocery|Staff)$")]
        public string Type { get; set; }

        [Required]
        public string CreatedByUserId { get; set; }

    }
}
