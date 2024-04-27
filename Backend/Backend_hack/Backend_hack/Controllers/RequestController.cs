using AutoMapper;
using Backend_hack.Models;
using Backend_hack.Models.Dto;
using Backend_hack.Repository.IRepository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;
using System.IdentityModel.Tokens.Jwt;
using System.Net;
using System.Security.Claims;

namespace Backend_hack.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class RequestController : ControllerBase
    {
        protected APIResponse _response;
        private readonly IRequestRepository _requestRepo;
        private readonly IMapper _mapper;
        private readonly UserManager<ApplicationUser> _userManager;
        public RequestController( IRequestRepository requestRepo, IMapper mapper, UserManager<ApplicationUser> userManager)
        {
            _response = new();
            _requestRepo = requestRepo;
            _mapper = mapper;
            _userManager = userManager;
        }

        [HttpGet("Get/{id:int}", Name = "GetRequest")]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        //[ProducesResponseType(200, Type =typeof(VillaDTO))]
        //        [ResponseCache(Location =ResponseCacheLocation.None,NoStore =true)]
        public async Task<ActionResult<APIResponse>> GetRequest(int id)
        {
            try
            {
                if (id == 0)
                {
                    _response.StatusCode = HttpStatusCode.BadRequest;
                    return BadRequest(_response);
                }
                var request = await _requestRepo.GetAsync(u => u.Id == id);
                if (request == null)
                {
                    _response.StatusCode = HttpStatusCode.NotFound;
                    return NotFound(_response);
                }
                _response.Result = _mapper.Map<RequestToDo>(request);
                _response.StatusCode = HttpStatusCode.OK;
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages
                     = new List<string>() { ex.ToString() };
            }
            return _response;
        }
        [HttpGet("GetAll")]
        [Authorize(Roles ="User")]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public async Task<ActionResult<APIResponse>> GetRequests([FromQuery(Name = "filterType")] string? type,
           [FromQuery] string? search)
        {
            try
            {

                IEnumerable<RequestToDo> requetlist;

                if (type == "Weapon")
                {
                    requetlist = await _requestRepo.GetAllAsync(u => u.Type =="Weapon");
                }
                else if (type =="Grocery")
                {
                    requetlist = await _requestRepo.GetAllAsync(u => u.Type == "Grocery");
                }
                else
                {
                    requetlist = await _requestRepo.GetAllAsync();
                }
                if (!string.IsNullOrEmpty(search))
                {
                    requetlist = requetlist.Where(u => u.Name.ToLower().Contains(search));
                }
                
                _response.Result = _mapper.Map<List<RequestToDo>>(requetlist);
                _response.StatusCode = HttpStatusCode.OK;
                return Ok(_response);

            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages
                     = new List<string>() { ex.ToString() };
            }
            return _response;

        }
        [HttpPost("Create")]
        [Authorize(Roles ="User")]
        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<ActionResult<APIResponse>> CreateRequest([FromBody] RequestCreateDTO createDTO)
        {
            try
            {


                if (createDTO == null)
                {
                    return BadRequest(createDTO);   
                }
                var authorizationHeader = Request.Headers["Authorization"].ToString();
                Console.WriteLine(authorizationHeader);
                var jwtToken = authorizationHeader?.Split(' ').LastOrDefault();
                var tokenHandler = new JwtSecurityTokenHandler();
                var token = tokenHandler.ReadJwtToken(jwtToken);

                var userId = token.Claims.FirstOrDefault(c => c.Type == "unique_name")?.Value;
                if(userId == null)
                {
                    return Unauthorized();
                }

                RequestToDo request = _mapper.Map<RequestToDo>(createDTO);
                request.CreatedByUserId = userId;


                await _requestRepo.CreateAsync(request);
                _response.Result = _mapper.Map<RequestToDo>(request);
                _response.StatusCode = HttpStatusCode.Created;
                return CreatedAtRoute("GetRequest", new { id = request.Id }, _response);
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages
                     = new List<string>() { ex.ToString() };
            }
            return _response;
        }
       
        [HttpPut("Edit/{id:int}", Name = "UpdateRequest")]
        [Authorize(Roles ="admin")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public async Task<ActionResult<APIResponse>> UpdateRequest(int id, [FromBody] RequestUpdateDTO updateDTO)
        {
            try
            {
                if (updateDTO == null || id != updateDTO.Id)
                {
                    return BadRequest();
                }

                RequestToDo model = _mapper.Map<RequestToDo>(updateDTO);

                await _requestRepo.UpdateAsync(model);
                _response.StatusCode = HttpStatusCode.NoContent;
                _response.IsSuccess = true;
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages
                     = new List<string>() { ex.ToString() };
            }
            return _response;
        }
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status403Forbidden)]
        [ProducesResponseType(StatusCodes.Status401Unauthorized)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [HttpDelete("Delete/{id:int}", Name = "DeleteRequest")]
        //[Authorize(Roles = "admin")]
        public async Task<ActionResult<APIResponse>> DeleteRequest(int id)
        {
            try
            {
                if (id == 0)
                {
                    return BadRequest();
                }
                var request = await _requestRepo.GetAsync(u => u.Id == id);
                if (request == null)
                {
                    return NotFound();
                }
                await _requestRepo.DeleteAsync(request);
                _response.StatusCode = HttpStatusCode.NoContent;
                _response.IsSuccess = true;
                return Ok(_response);
            }
            catch (Exception ex)
            {
                _response.IsSuccess = false;
                _response.ErrorMessages
                     = new List<string>() { ex.ToString() };
            }
            return _response;
        }


    }
}
