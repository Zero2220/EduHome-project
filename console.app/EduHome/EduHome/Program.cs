﻿using EduHome;
using EduHome.Entities;

AppDbContext appDbContext = new AppDbContext();

var appBuilder = WebApplication.CreateBuilder();

appBuilder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

var app = appBuilder.Build();

app.UseCors("AllowAll");

app.MapGet("/", () =>
{
    return "H!";
});

app.MapGet("/courses", () =>
{
    return appDbContext.Courses.ToList();
});

app.MapGet("/courses/search", (string name) =>
{
    return appDbContext.Courses.Where(x => x.Name.Contains(name)).ToList();
});


app.MapGet("/courses/{id}", (int id) =>
{
    var data = appDbContext.Courses.Find(id);

    if (data == null) return Results.NotFound("course not found!");

    return Results.Ok(data);
});

app.Run();