using Backend_hack.Models;
using System.Linq.Expressions;

namespace Backend_hack.Repository.IRepository
{
    public interface IRequestRepository:IRepository<RequestToDo>
    {
        Task<List<RequestToDo>> GetAllwithStateAsync(RequestState? statusFilter = null);
        Task<RequestToDo> UpdateAsync(RequestToDo entity);
    }
}
