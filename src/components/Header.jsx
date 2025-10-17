// Importa o hook 'useState' do React para gerenciar o estado do componente.
import { useState } from 'react';

// Define o componente funcional do cabeçalho.
export default function Header() {
  // Cria um estado 'cartCount' para armazenar o número de itens no carrinho.
  const [cartCount, setCartCount] = useState(3);
  // Cria um estado 'searchQuery' para armazenar o valor do campo de busca.
  const [searchQuery, setSearchQuery] = useState('');

  // Renderiza o elemento header, que é fixo no topo da página.
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo da loja. */}
        <div className="text-2xl font-bold text-amber-600">MinhaLoja</div>

        {/* Links de navegação, visíveis apenas em telas médias e maiores. */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-slate-700 hover:text-amber-500 font-medium">Home</a>
          <a href="#" className="text-slate-700 hover:text-amber-500 font-medium">Produtos</a>
          <a href="#" className="text-slate-700 hover:text-amber-500 font-medium">Ofertas</a>
          <a href="#" className="text-slate-700 hover:text-amber-500 font-medium">Contato</a>
        </div>

        {/* Seção de busca e carrinho de compras. */}
        <div className="flex items-center space-x-4">
          {/* Campo de busca com um ícone. */}
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 border border-slate-200 rounded-lg text-sm w-32 md:w-64 focus:outline-none focus:ring-2 focus:ring-amber-200"
            />
            <i className="fas fa-search absolute right-3 top-2.5 text-slate-400"></i>
          </div>

          {/* Ícone do carrinho de compras. */}
          <div className="relative cursor-pointer">
            <i className="fas fa-shopping-cart text-xl text-slate-900"></i>
            {/* Exibe um contador no ícone do carrinho se houver itens. */}
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}