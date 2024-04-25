using Backend_hack.Models.Dto;

namespace Backend_hack.Repository.IRepository
{
    public interface IUserRepository
    {
        bool IsUniqueUser(string email);
        Task<LoginResponseDTO> Login(LoginRequestDTO loginRequestDTO);
        Task<UserDTO> RegisterUser(RegistrationUserDTO registerationUserDTO);
/*        Task<UserDTO> RegisterVolunteeer(RegistrationVolunteerDTO registerationUserDTO);*/
    }
}
