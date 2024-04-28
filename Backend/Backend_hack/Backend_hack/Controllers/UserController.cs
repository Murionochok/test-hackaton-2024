using AutoMapper;
using Backend_hack.Models;
using Backend_hack.Repository.IRepository;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Backend_hack.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class UserController : Controller
    {
        protected APIResponse _response;
        private readonly IUserRepository _userRepository;
        private readonly IMapper _mapper;
        public UserController(IUserRepository userRepository, IMapper mapper)
        {
            _userRepository = userRepository;
            _mapper = mapper;
            _response = new();
        }
        [HttpGet("GetAllVolunteers")]
        public async Task<ActionResult<APIResponse>> GetAllVolunteers() 
        {
/*            IEnumerable<ApplicationUser> userlist;*/
            var userlist = await _userRepository.GetAllVolunteers();
            _response.Result = _mapper.Map<List<ApplicationUser>>(userlist);
            _response.StatusCode = HttpStatusCode.OK;
            return Ok(_response);

        }

    }
}
