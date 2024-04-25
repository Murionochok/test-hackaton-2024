using Microsoft.AspNetCore.Identity;

namespace Backend_hack.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string Surname { get; set; }
    }
}
