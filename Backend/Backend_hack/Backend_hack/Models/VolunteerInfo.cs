using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Backend_hack.Models
{
    public class VolunteerInfo
    {
        public int Id { get; set; }
        public string VolunteerEmail { get; set; }
        [ForeignKey("VolunteerEmail")]
        public ApplicationUser ApplicationUser { get; set; }
        [StringLength(500, MinimumLength = 10)]
        public string ShortInfo { get; set; }
        public string? formFile { get; set; }
    }
}
