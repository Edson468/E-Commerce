// Define o componente funcional para a seção de depoimentos.
export default function Testimonials() {
  // Define um array de objetos, cada um representando um depoimento de cliente.
  const testimonials = [
    { id: 1, text: 'Produto excelente, entrega rápida e atendimento impecável!', author: 'Ana Silva' },
    { id: 2, text: 'Recomendo muito! Já comprei várias vezes e sempre fico satisfeito.', author: 'Carlos Mendes' },
    { id: 3, text: 'Preço justo e qualidade surpreendente. Voltarei com certeza!', author: 'Juliana Costa' },
  ];

  // Renderiza a seção de depoimentos.
  return (
    <section className="mt-16 pb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-10">O que nossos clientes dizem</h2>
        {/* Cria um grid responsivo para exibir os cards de depoimentos. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Mapeia o array de depoimentos e renderiza um card para cada um. */}
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <p className="italic text-slate-700">"{t.text}"</p>
              <p className="mt-5 font-semibold text-slate-900">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}