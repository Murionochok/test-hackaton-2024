using Microsoft.AspNetCore.Mvc;

namespace Backend_hack.Controllers
{
    public class RequestController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
