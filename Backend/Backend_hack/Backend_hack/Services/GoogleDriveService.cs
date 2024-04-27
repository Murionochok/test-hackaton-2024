using Google.Apis.Auth.OAuth2;
using Google.Apis.Drive.v3;
using Google.Apis.Services;
using Google.Apis.Util.Store;
using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using System.Threading;
using System.Threading.Tasks;

namespace Backend_hack.Services
{
    public class GoogleDriveService
    {
        private static readonly string[] Scopes = { DriveService.Scope.Drive };
        private static readonly string ApplicationName = "Backend_hack";

        public async Task<string> UploadFileToGoogleDrive(IFormFile file)
        {
            UserCredential credential;
            var credentialsFilePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "AppData", "hackaton-421610-112f76074a4c");
            var tokenFilePath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "AppData", "token.json");

            using (var stream = new FileStream(credentialsFilePath, FileMode.Open, FileAccess.Read))
            {
                string credPath = tokenFilePath;
                credential = await GoogleWebAuthorizationBroker.AuthorizeAsync(
                    GoogleClientSecrets.Load(stream).Secrets,
                    Scopes,
                    "user",
                    CancellationToken.None,
                    new FileDataStore(credPath, true));
            }

            var service = new DriveService(new BaseClientService.Initializer()
            {
                HttpClientInitializer = credential,
                ApplicationName = ApplicationName,
            });

            var fileMetadata = new Google.Apis.Drive.v3.Data.File()
            {
                Name = Path.GetFileName(file.FileName)
            };

            FilesResource.CreateMediaUpload request;

            using (var stream = file.OpenReadStream())
            {
                request = service.Files.Create(fileMetadata, stream, "application/pdf");
                request.Fields = "id";
                await request.UploadAsync();
            }

            var uploadedFile = request.ResponseBody;
            return uploadedFile.Id;
        }
    }
}
