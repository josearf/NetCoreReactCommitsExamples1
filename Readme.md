- dotnet new sln
- dotnet new webapi -n API
- dotnet new classlib -n Application

- dotnet sln add API/

- dotnet add reference Application

- dotnet new gitignore

- dotnet tool install --global dotnet-ef --version 5.0.1
- dotnet ef migrations add InitialCreate -p Persistence -s .\API\

# Create database
dotnet ef database update namemigration or make changes on API/Program.cs and then inside app run dotnet run will create database


# Seed Database
the entity framework have to be the same version as the net core version. that's why been updated the versions.