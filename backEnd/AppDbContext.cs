using Microsoft.EntityFrameworkCore;
using Livros.Entidade;
using System;

namespace Livros
{
    public class AppDbContext : DbContext
    {
        public DbSet<Livro> Livros { get; set; }

        public AppDbContext() : base(new DbContextOptionsBuilder<AppDbContext>().UseInMemoryDatabase(databaseName: "EmMemoria").Options)
        { }
    }
}
