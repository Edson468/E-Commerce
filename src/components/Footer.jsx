// Define o componente funcional do rodapé.
export default function Footer() {
  // Renderiza o elemento footer com estilos de fundo e texto.
  return (
    <footer className="bg-slate-900 text-slate-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Container principal do conteúdo do rodapé. */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Seção do logo e descrição da loja. */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold text-amber-500">MinhaLoja</h3>
            <p className="text-slate-400 mt-2 max-w-xs">
              Seu destino para produtos premium com entrega rápida e garantia de satisfação.
            </p>
          </div>
          {/* Seção de ícones de redes sociais. */}
          <div className="flex space-x-5 mb-6 md:mb-0">
            {['facebook-f', 'instagram', 'twitter', 'whatsapp'].map((icon) => (
              <a
                key={icon}
                href="#"
                className="text-slate-300 hover:text-amber-400 transition text-xl"
                aria-label={icon}
              >
                <i className={`fab fa-${icon}`}></i>
              </a>
            ))}
          </div>
          {/* Seção de informações de contato. */}
          <div className="text-center md:text-right">
            <p className="font-medium">contato@minhaloja.com</p>
            <p className="text-slate-400">(11) 99999-9999</p>
          </div>
        </div>
        {/* Seção de direitos autorais na parte inferior do rodapé. */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} MinhaLoja. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}