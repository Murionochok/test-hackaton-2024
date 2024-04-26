using Backend_hack.Models.Dto;
using Microsoft.AspNetCore.Http;

namespace Backend_hack.Repository.IRepository
{
    public interface IUserRepository
    {
        bool IsUniqueUser(string email);
        Task<LoginResponseDTO> Login(LoginRequestDTO loginRequestDTO);
        Task<UserDTO> RegisterUser(RegistrationUserDTO registerationUserDTO);
        Task<UserDTO> RegisterVolunteer(RegistrationUserDTO registerationUserDTO);
    }
}
