import React, { useEffect, useState } from "react";
import { Plus, X } from "lucide-react";
import { getProducts } from "../utils/service";

const categories = [
  "ice-cream",
  "fried-chicken",
  "milk-shake",
  "burger",
  "mojito",
  "sandwich",
];

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
    const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProducts();
        setAllProducts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-[#fff9f0] min-h-screen py-12 px-4">
      {/* Main Title */}
      <h2 className="text-center text-4xl font-extrabold tracking-widest text-black mb-14 relative">
        FOOD GALLERY
        <span className="block w-16 h-1 bg-red-500 mx-auto mt-3 rounded"></span>
      </h2>

      {categories.map((category, index) => {
        const filteredProducts = allProducts.filter(
          (product) => product.category === category
        );

        if (filteredProducts.length === 0) return null;

        return (
          <div
            key={category}
            className='mb-16 p-6' 
          >
            {/* Category Heading */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex-1 h-[2px] bg-gray-300"></div>
              <h3 className="text-2xl font-bold text-black capitalize tracking-wide">
                {category.replace("-", " ")}
              </h3>
              <div className="flex-1 h-[2px] bg-gray-300"></div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="relative group cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                  />

                  {/* Gradient Overlay */}
                  <div
                    onClick={() => setSelectedProduct(product)}
                    className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                  >
                    <Plus size={40} className="text-white drop-shadow-lg" />
                  </div>

                  {/* Product Name */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white py-2 px-3 text-center text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {product.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 animate-fadeIn">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full relative overflow-hidden shadow-2xl transform scale-95 animate-zoomIn">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-red-500 bg-white rounded-full p-1 hover:text-red-400 transition"
            >
              <X size={28} />
            </button>

            {/* Image */}
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-96 object-cover"
            />

            {/* Text Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-3">
                {selectedProduct.name}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {selectedProduct.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <br />
    </div>
  );
};

export default Product;
