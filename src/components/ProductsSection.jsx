import { ArrowLeft } from "lucide-react";
import { pricingOptions } from "../constants";
import { useParams } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
const ProductSection = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10); // Converte id para número
  const product = pricingOptions.find((option) => option.id === productId);

  if (!product) {
    return <div>Produto não encontrado.</div>;
  }

  return (
    <div className="container text-start  mx-auto px-4 py-10 max-w-4xl">
      <a href="/" className="inline-flex hover:underline mb-8">
        <ArrowLeft className="w-4 h-4 mr-2 mt-1" />
        Voltar ao Início
      </a>
      <div className="space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
          <span className="text-xl bg-gradient-to-r from-[#40b346] to-[#fff200] bg-clip-text mb-4 text-transparent">
            {product.tagline}
          </span>
          <p className="text-5xl font-semibold pt-7">{product.price}</p>
        </header>

        <section className="shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Sobre Nosso Produto
          </h2>
          <p className="leading-relaxed text-center">{product.description}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Principais Características
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.feature.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-7 text-center">
            Informações Técnicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.specs.map((spec, index) => (
              <div key={index} className="flex justify-between border-b pb-2">
                <span className="font-medium">{spec.name}</span>
                <span className="text-stone-500">{spec.value}</span>
              </div>
            ))}
          </div>
        </section>
        {product.seriais ? (
          <>
            <div className="text-center">
              <p className="text-lg">Seriais Compativeis</p>
              <p className="text-stone-500">{product.seriais}</p>
            </div>
          </>
        ) : (
          <> </>
        )}

        <section className="w-full flex items-center justify-center">
          <img src={product.img} alt="" className=" w-2/3 object-cover rounded-lg shadow-xl" />
        </section>
        <section className="text-center w-full flex items-center justify-center">
          <button className="w-1/3 gap-1 transition-all hover:translate-x-3 gradient-background text-lg rounded-md p-2 flex items-center justify-center">
            <ArrowRight className="transition-all text-white" />
            <p className="transition-all text-white">Entre em Contato</p>
          </button>
        </section>
      </div>
    </div>
  );
};

export default ProductSection;
