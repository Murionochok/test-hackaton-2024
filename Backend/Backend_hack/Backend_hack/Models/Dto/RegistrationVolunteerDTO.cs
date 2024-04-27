
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Runtime.InteropServices;

namespace Backend_hack.Models.Dto
{
    public class RegistrationVolunteerDTO
    {
/*        public RegistrationVolunteerDTO()
        {
            InputFile = null;
        }*/
        [Required]
        public string Surname { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string Password { get; set; }
        public string PhoneNumber { get; set; }
        [DefaultValue(null)]
        public string ShortInfo { get; set; }
 /*       public IFormFile InputFile { get; set; }*/
    }
}
