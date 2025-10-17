// Define o componente funcional ProductCard, que recebe 'name', 'price' e 'image' como propriedades (props).
export default function ProductCard({ name, price, image }) {
  // Renderiza o card de um único produto.
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-slate-100">
      {/* Container da imagem do produto com efeito de zoom no hover. */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      {/* Container com as informações do produto. */}
      <div className="p-4">
        <h3 className="font-semibold text-slate-800">{name}</h3>
        <p className="text-amber-600 font-bold mt-1 text-lg">R$ {price}</p>
        {/* Botão para adicionar o produto ao carrinho. */}
        <button className="mt-3 w-full bg-amber-600 text-white py-2 rounded-lg hover:bg-amber-700 transition font-medium">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}