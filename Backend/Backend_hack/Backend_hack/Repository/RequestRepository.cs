using Backend_hack.Data;
using Backend_hack.Models;
using Backend_hack.Repository.IRepository;
using Microsoft.EntityFrameworkCore;
using System.Linq.Expressions;
using System.Linq;

namespace Backend_hack.Repository
{

    public class RequestRepository : Repository<RequestToDo>, IRequestRepository
    {
        private readonly ApplicationDbContext _db;
        public RequestRepository(ApplicationDbContext db) : base(db)
        {
            _db = db;
        }

        public async Task<RequestToDo> UpdateAsync(RequestToDo entity)
        {

            _db.Requests.Update(entity);
            await _db.SaveChangesAsync();
            return entity;
        }
        public async Task<List<RequestToDo>> GetAllwithStateAsync(RequestState? statusFilter = null)
        {
            IQueryable<RequestToDo> query = dbSet;

            if (statusFilter.HasValue)
            {
                // Створюємо вираз фільтрації для поля, що містить enum Status
                query = query.Where(entity => entity.State.Equals(statusFilter.Value));
            }
            else
            {

            }
            return await query.ToListAsync();
        }
    }
}
