using Azure;
using Backend_hack.Models.Dto;
using Backend_hack.Models;
using Backend_hack.Repository.IRepository;
using Microsoft.AspNetCore.Mvc;
using System.Net;

namespace Backend_hack.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class AuthController : Controller
    {
        private readonly IUserRepository _userRepo;
        protected APIResponse _response;
        public AuthController(IUserRepository userRepo)
        {
            _userRepo = userRepo;
            _response = new();
        }
        [HttpPost("registerUser")]
        public async Task<IActionResult> RegisterUser([FromBody] RegistrationUserDTO model)
        {
            bool ifEmailUnique = _userRepo.IsUniqueUser(model.Email);
            if (!ifEmailUnique)
            {
                _response.StatusCode = HttpStatusCode.BadRequest;
                _response.IsSuccess = false;
                _response.ErrorMessages.Add("Email already exists");
                return BadRequest(_response);
            }

            var user = await _userRepo.RegisterUser(model);
            if (user == null)
            {
                _response.StatusCode = HttpStatusCode.BadRequest;
                _response.IsSuccess = false;
                _response.ErrorMessages.Add("Error while registering");
                return BadRequest(_response);
            }
            _response.StatusCode = HttpStatusCode.OK;
            _response.IsSuccess = true;
            return Ok(_response);
        }
        [HttpPost("registerVolunteer")]
        public async Task<IActionResult> RegisterVolunteer([FromBody] RegistrationUserDTO model)
        {
            bool ifEmailUnique = _userRepo.IsUniqueUser(model.Email);
            if (!ifEmailUnique)
            {
                _response.StatusCode = HttpStatusCode.BadRequest;
                _response.IsSuccess = false;
                _response.ErrorMessages.Add("Email already exists");
                return BadRequest(_response);
            }

            var user = await _userRepo.RegisterVolunteer(model);
            if (user == null)
            {
                _response.StatusCode = HttpStatusCode.BadRequest;
                _response.IsSuccess = false;
                _response.ErrorMessages.Add("Error while registering");
                return BadRequest(_response);
            }
            _response.StatusCode = HttpStatusCode.OK;
            _response.IsSuccess = true;
            return Ok(_response);
        }
    }
}
