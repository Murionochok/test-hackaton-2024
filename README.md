# test-hackaton-2024

Test project for participation in Best Hackaton 2024

## How to start application

### Front end part

1. Open your git bash
2. Input next commands:

for cloning repository
git clone https://github.com/Murionochok/test-hackaton-2024.git
change directory to frontend application
```
cd ./Frontend/hackaton```
install all dependencies
```
npm install```
start frontend application
```
npm run dev```

### Back end part
How to setup project
1. Open backend_hack project( if you have visualstudio and .net 8.0 runtime it should easily open)
2. Create connection to your local ms sql server db and put connection string to appsettings.json(if you want to specify db)
3. Open packet manager console and write 
```
update-database``` ( if all succeed it has to create all tables in db)
4. start application with https or http and register your first user

All requests scheme you can observe in swagger ui when launch project
*you can do this without connection to database*
## Capabilities
- Register for user and volunteer by jwt token
- create, get all request when authorized as User
- mark requests as done  when authorized as Volunteer
- approve requests when authorized as Admin
- get requests filtered by it state, type, keyword
