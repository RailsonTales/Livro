using Microsoft.AspNetCore.Mvc;
using Livros.Repositories;
using Livros.Entidade;

namespace Livros.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LivroController : ControllerBase
    {
        private readonly LivroRepository _livroRepository;

        public LivroController(LivroRepository livroRepository)
        {
            _livroRepository = livroRepository;
        }

        // GET: api/<LivroController>
        [HttpGet]
        public IEnumerable<Livro> Get()
        {
            return _livroRepository.Get().ToList();
        }

        // GET api/<LivroController>/5
        [HttpGet("{id}")]
        public Livro? Get(int id)
        {
            return _livroRepository.Get(id);
        }

        // POST api/<LivroController>
        [HttpPost]
        public string Post([FromBody] Livro livro)
        {
            return _livroRepository.Post(livro);
        }

        // PUT api/<LivroController>/5
        [HttpPut("{id}")]
        public string Put(int id, [FromBody] Livro livro)
        {
            return _livroRepository.Put(id, livro);
        }

        // DELETE api/<LivroController>/5
        [HttpDelete("{id}")]
        public IEnumerable<Livro> Delete(string id)
        {
            return _livroRepository.Delete(id);
        }
    }
}
