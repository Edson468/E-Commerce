// Importa o componente ProductCard e as imagens dos produtos.
import ProductCard from './ProductCard';
import relogioImg from '../assets/images/products/relogio.jpg';
import oculosImg from '../assets/images/products/oculos.jpg';
import bolsaImg from '../assets/images/products/bolsa-de-luxo.jpg';
import tenisImg from '../assets/images/products/tenis.jpg';

// Define um array de objetos, cada um representando um produto com seus dados.
const products = [
  { id: 1, name: 'Relógio Automático Premium', price: '899,90', image: relogioImg },
  { id: 2, name: 'Óculos de Sol Armani', price: '449,90', image: oculosImg },
  { id: 3, name: 'Bolsa de Couro Genuíno', price: '699,90', image: bolsaImg },
  { id: 4, name: 'Tênis Esportivo Luxo', price: '549,90', image: tenisImg },
];

// Define o componente funcional que renderiza a seção de produtos.
export default function ProductsSection() {
  // Renderiza a seção de "Produtos em Destaque".
  return (
    <section className="mt-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-slate-800 text-center mb-10">Produtos em Destaque</h2>
        {/* Cria um grid responsivo para exibir os cards de produtos. */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Mapeia o array de produtos e renderiza um ProductCard para cada um. */}
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}