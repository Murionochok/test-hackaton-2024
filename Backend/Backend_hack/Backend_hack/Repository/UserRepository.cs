using AutoMapper;
using Backend_hack.Data;
using Backend_hack.Models;
using Backend_hack.Models.Dto;
using Backend_hack.Repository.IRepository;
using Backend_hack.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Linq;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;
using Google.Apis.Drive.v3.Data;
using System.Collections.Generic;

namespace Backend_hack.Repository
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _db;
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IGoogleDriveService _googleDriveService;
        private string secretKey;
        private readonly IMapper _mapper;
        public UserRepository(ApplicationDbContext db, IConfiguration configuration,
            UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager,
            string secretKey, IMapper mapper, IGoogleDriveService googleDriveService)
        {
            _db = db;
            _userManager = userManager;
            _roleManager = roleManager;
            _mapper = mapper;
            _googleDriveService = googleDriveService;
            this.secretKey = configuration.GetValue<string>("ApiSettings:Secret");
        }
        public async Task<List<UserDTO>> GetAllVolunteers()
        {
            var usersInRole = await _userManager.GetUsersInRoleAsync("Volunteer");

            return usersInRole.AsEnumerable().Select(_mapper.Map<UserDTO>).ToList();
        }
        public bool IsUniqueUser(string email)
        {
            var user = _db.ApplicationUsers.FirstOrDefault(x => x.Email == email);
            if (user == null)
            {
                return true;
            }
            return false;
        }

        public async Task<LoginResponseDTO> Login(LoginRequestDTO loginRequestDTO)
        {
            var user = _db.ApplicationUsers
                .FirstOrDefault(u => u.Email.ToLower() == loginRequestDTO.Email.ToLower());

            bool isValid = await _userManager.CheckPasswordAsync(user, loginRequestDTO.Password);


            if (user == null || isValid == false)
            {
                return new LoginResponseDTO()
                {
                    Token = "",
                    User = null
                };
            }

            //if user was found generate JWT Token
            var roles = await _userManager.GetRolesAsync(user);
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(secretKey);

            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                {
                    new Claim(ClaimTypes.Name, user.Id.ToString()),
                    new Claim(ClaimTypes.Role, roles.FirstOrDefault())
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            LoginResponseDTO loginResponseDTO = new LoginResponseDTO()
            {
                Token = tokenHandler.WriteToken(token),
                User = _mapper.Map<UserDTO>(user),

            };
            return loginResponseDTO;
        }

        public async Task<UserDTO> RegisterUser(RegistrationUserDTO registerationUserDTO)
        {
            ApplicationUser user = new()
            {
                Surname = registerationUserDTO.Surname,
                UserName = registerationUserDTO.Surname,
                Email = registerationUserDTO.Email,
                NormalizedEmail = registerationUserDTO.Email.ToUpper(),
                PhoneNumber = registerationUserDTO.PhoneNumber
            };

            try
            {
                var result = await _userManager.CreateAsync(user, registerationUserDTO.Password);

                if (result.Succeeded)
                {
                    if (!_roleManager.RoleExistsAsync("admin").GetAwaiter().GetResult())
                    {
                        await _roleManager.CreateAsync(new IdentityRole("admin"));
                        await _roleManager.CreateAsync(new IdentityRole("User"));
                        await _roleManager.CreateAsync(new IdentityRole("Volunteer"));
                    }
                    await _userManager.AddToRoleAsync(user, "User");
                    var userToReturn = _db.ApplicationUsers
                        .FirstOrDefault(u => u.UserName == registerationUserDTO.Surname);
                    return _mapper.Map<UserDTO>(userToReturn);

                }
            }
            catch (Exception e)
            {

            }

            return new UserDTO();
        }

        public async Task<UserDTO> RegisterVolunteer(RegistrationVolunteerDTO registerationVolunteerDTO)
        {
            ApplicationUser user = new()
            {
                Surname = registerationVolunteerDTO.Surname,
                UserName = registerationVolunteerDTO.Surname,
                Email = registerationVolunteerDTO.Email,
                NormalizedEmail = registerationVolunteerDTO.Email.ToUpper(),
                PhoneNumber = registerationVolunteerDTO.PhoneNumber
            };

            try
            {
                var result = await _userManager.CreateAsync(user, registerationVolunteerDTO.Password);
                if (result.Succeeded)
                {
                    await _userManager.AddToRoleAsync(user, "Volunteer");

                    var userId = user.Id;

                    string uploadedFileId = null;
                    if (registerationVolunteerDTO.InputFile != null)
                    {
                        try
                        {
                            uploadedFileId = await _googleDriveService.UploadFileToGoogleDrive(registerationVolunteerDTO.InputFile);
                        }
                        catch (Exception ex)
                        {
                            Console.WriteLine($"Error uploading file: {ex.Message}");
                        }
                    }

                    var info = new VolunteerInfo
                    {
                        VolunteerID = userId, 
                        ShortInfo = registerationVolunteerDTO.ShortInfo,
                        formFile = uploadedFileId
                    };
                    await _db.VolunteerInfos.AddAsync(info);
                    await _db.SaveChangesAsync();

                    return _mapper.Map<UserDTO>(user);

                }

            }
            catch (Exception e)
            {

            }

            return new UserDTO();
        }


    }
}
