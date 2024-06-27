using System.ComponentModel.DataAnnotations;

namespace Livros.Entidade
{
    public class Livro
    {
        [Key]
        public int Id { get; set; }
        public string? Titulo { get; set; }
        public string? Autor { get; set; }
        public string? Genero { get; set; }
        public string? Ano { get; set; }
    }
}
