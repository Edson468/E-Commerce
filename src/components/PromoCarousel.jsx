// Importa o hook 'useState' do React e as imagens das promoções.
import { useState } from 'react';
import ofertaImg from "../assets/images/promos/relogio-promo1.jpg";
import freteImg from "../assets/images/promos/tenis.jpg";
import clienteImg from "../assets/images/promos/cliente-carteira.jpg";
import lancamentoImg from "../assets/images/promos/oculos.jpg";

// Define um array de objetos, cada um representando um card de promoção.
const promos = [
  { id: 1, title: 'Até 50% OFF', image: ofertaImg },
  { id: 2, title: 'Frete Grátis', image: freteImg },
  { id: 3, title: 'Dia do Cliente', image: clienteImg },
  { id: 4, title: 'Lançamentos', image: lancamentoImg },
];

// Define o componente funcional do carrossel de promoções.
export default function PromoCarousel() {
  // Cria um estado 'currentIndex' para controlar a posição inicial do carrossel.
  const [currentIndex, setCurrentIndex] = useState(0);
  // Calcula quantos itens são visíveis com base na largura da tela para responsividade.
  const visible = typeof window !== 'undefined' 
    ? (window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3)
    : 3;

  // Funções para avançar e retroceder os slides do carrossel.
  const next = () => setCurrentIndex((prev) => Math.min(prev + 1, promos.length - visible));
  const prev = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  // Renderiza a seção do carrossel de promoções.
  return (
    <section className="mt-16 bg-slate-50 py-14">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-8">Promoções da Semana</h2>
        {/* Container principal do carrossel com botões de navegação. */}
        <div className="relative overflow-hidden">
          {/* Container flexível que se move horizontalmente para criar o efeito de slide. */}
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visible)}%)` }}
          >
            {/* Mapeia o array de promoções e renderiza um card para cada uma. */}
            {promos.map((promo) => (
              <div key={promo.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2">
                <div className="bg-white p-5 rounded-xl shadow-sm text-center border border-slate-100">
                  <img src={promo.image} className="mx-auto mb-3" alt={promo.title} />
                  <p className="font-bold text-amber-600">{promo.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Botão "Anterior", exibido apenas se não estiver no primeiro slide. */}
          {currentIndex > 0 && (
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 p-2.5 rounded-r-lg shadow-md hover:bg-white"
            >
              <i className="fas fa-chevron-left text-slate-700"></i>
            </button>
          )}
          {/* Botão "Próximo", exibido apenas se houver mais slides para mostrar. */}
          {currentIndex < promos.length - visible && (
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 p-2.5 rounded-l-lg shadow-md hover:bg-white"
            >
              <i className="fas fa-chevron-right text-slate-700"></i>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}