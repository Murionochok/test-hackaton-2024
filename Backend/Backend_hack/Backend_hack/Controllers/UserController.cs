using Backend_hack.Repository.IRepository;
using Microsoft.AspNetCore.Mvc;

namespace Backend_hack.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;
        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        [HttpGet("GetAllVolunteers")]
        public IActionResult GetAllVolunteers() 
        { 
            return View();
        
        }

    }
}
