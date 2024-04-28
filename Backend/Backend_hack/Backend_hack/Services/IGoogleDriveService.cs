namespace Backend_hack.Services
{
    public interface IGoogleDriveService
    {
        Task<string> UploadFileToGoogleDrive(IFormFile file);
    }
}
