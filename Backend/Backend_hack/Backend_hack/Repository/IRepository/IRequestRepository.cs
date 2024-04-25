using Backend_hack.Models;

namespace Backend_hack.Repository.IRepository
{
    public interface IRequestRepository:IRepository<RequestToDo>
    {
        Task<RequestToDo> UpdateAsync(RequestToDo entity);
    }
}
