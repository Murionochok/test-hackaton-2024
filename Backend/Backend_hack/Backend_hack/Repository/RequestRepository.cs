using Backend_hack.Data;
using Backend_hack.Models;
using Backend_hack.Repository.IRepository;

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
    }
}
