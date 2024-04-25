using Microsoft.AspNetCore.Mvc;

namespace Backend_hack.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
