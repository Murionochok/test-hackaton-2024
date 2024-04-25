using Microsoft.AspNetCore.Mvc;

namespace Backend_hack.Controllers
{
    public class AuthController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
