using Chat.API.Hubs;

var builder = WebApplication.CreateBuilder(args);

// Adiciona CORS
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials()
            .WithOrigins("http://localhost:5173"); // frontend React
    });
});

// Adiciona SignalR
builder.Services.AddSignalR();

var app = builder.Build();

// APLICA CORS ANTES de mapear o Hub
app.UseCors();

// Mapeia o Hub na rota desejada
app.MapHub<ChatHub>("/ws-chat");

app.Run();