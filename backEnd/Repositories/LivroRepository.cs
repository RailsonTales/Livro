using Microsoft.EntityFrameworkCore;
using Livros.Entidade;

namespace Livros.Repositories
{
   
    public class LivroRepository : AppDbContext
    {
        public readonly AppDbContext _context;

        public LivroRepository(AppDbContext context)
        {
            _context = context;
        }
        public IEnumerable<Livro> Get()
        {
            return _context.Livros;            
        }

        public Livro? Get(int id)
        {
            return _context.Livros.Where(u => u.Id == id).FirstOrDefault();
        }

        public string Post(Livro livro)
        {
            if (livro == null)
                return "Preencher os campos do livro";

            _context.Add(livro);
            _context.SaveChanges();

            return "Livro cadastrado com sucesso";
        }

        public string Put(int id, Livro livro)
        {
            if (id != livro.Id)
            {
                return "erro";
            }

            try
            {
                _context.Update(livro);
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                throw;
            }
            return "Livro atualizado com sucesso";
        }

        public IEnumerable<Livro> Delete(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                return _context.Livros;
            }
            else
            {

                var user = _context.Livros.FirstOrDefault(m => m.Id == Convert.ToInt32(id));
                if (user == null)
                {
                    return _context.Livros;
                }

                try
                {
                    _context.Remove(user);
                    _context.SaveChanges();
                }
                catch (DbUpdateConcurrencyException)
                {
                    throw;
                }

                return _context.Livros;
            }
        }
    }
}
