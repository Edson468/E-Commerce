// Importa os hooks 'useState' e 'useEffect' do React.
import { useState, useEffect } from 'react';
// Importa as imagens dos banners que serão exibidas no carrossel.
import banner1 from '../assets/images/banners/banner1.jpg';
import banner2 from '../assets/images/banners/relogios.jpg';
import banner3 from '../assets/images/banners/banner3.jpg';

// Define um array com as imagens dos banners importadas.
const banners = [banner1, banner2, banner3];

// Define o componente funcional BannerCarousel.
export default function BannerCarousel() {
  // Cria um estado 'currentIndex' para controlar o índice do banner atual, iniciando em 0.
  const [currentIndex, setCurrentIndex] = useState(0);

  // Utiliza o hook 'useEffect' para criar um carrossel automático.
  useEffect(() => {
    // Configura um intervalo que muda o slide a cada 5 segundos.
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    // Função de limpeza que remove o intervalo quando o componente é desmontado.
    return () => clearInterval(interval);
  }, []);

  // Funções para navegar entre os slides manualmente.
  const goToSlide = (index) => setCurrentIndex(index);
  const nextSlide = () => goToSlide((currentIndex + 1) % banners.length);
  const prevSlide = () => goToSlide((currentIndex - 1 + banners.length) % banners.length);

  // Renderiza a seção do carrossel de banners.
  return (
    <section className="mt-6">
      <div className="container mx-auto px-4 relative h-64 md:h-96 overflow-hidden rounded-xl">
        {/* Exibe a imagem do banner atual. */}
        <img
          src={banners[currentIndex]}
          alt={`Banner ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />

        {/* Botão para ir para o slide anterior. */}
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2.5 rounded-full shadow-md hover:bg-white"
          aria-label="Anterior"
        >
          <i className="fas fa-chevron-left text-slate-700"></i>
        </button>
        {/* Botão para ir para o próximo slide. */}
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2.5 rounded-full shadow-md hover:bg-white"
          aria-label="Próximo"
        >
          <i className="fas fa-chevron-right text-slate-700"></i>
        </button>

        {/* Indicadores de slide (bolinhas) na parte inferior do carrossel. */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 w-2 rounded-full ${
                idx === currentIndex ? 'bg-amber-500' : 'bg-white/60'
              }`}
              aria-label={`Ir para slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}