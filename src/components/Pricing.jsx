import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-stone-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Chips" && (
                  <span className="bg-gradient-to-r from-[#b7ff4a] to-[#cad01f] text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-stone-400 tracking-tight">/Me</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center px-[.1em] py-1 w-full h-12 mt-20 tracking-tight text-xl hover:bg-orange-900 gradient-animation rounded-md transition duration-200"
              >
                <span className="block bg-[#121212] hover:bg-stone-800 rounded-md w-full px-5 py-2 ">Subscribe</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;