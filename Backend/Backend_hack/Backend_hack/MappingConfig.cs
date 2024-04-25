using AutoMapper;
using Backend_hack.Models;
using Backend_hack.Models.Dto;

namespace Backend_hack
{
    public class MappingConfig:Profile
    {
        public MappingConfig()
        {
            CreateMap<RequestToDo, RequestCreateDTO>().ReverseMap();
            
        }
   
    }
}
