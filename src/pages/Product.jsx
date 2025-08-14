import React, { useState } from "react";
import { allProducts } from "./AllProducts";
import { Plus, X } from "lucide-react";
import Footer from "../components/Footer";

const Product3 = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-[#fff9f0] min-h-screen py-12 px-4">
      <h2 className="text-center text-3xl font-bold tracking-widest text-black mb-10">
        FOOD GALLERY
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {allProducts.map((product) => (
          <div
            key={product.id}
            className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div
              onClick={() => setSelectedProduct(product)}
              className="absolute inset-0 bg-black/50 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <Plus size={40} className="text-white" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/70 bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-gray-800 rounded-lg max-w-2xl w-full relative overflow-hidden">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-red-500 bg-white rounded-4xl p-1 hover:text-red-400"
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
      <Footer/>
    </div>
  );
};

export default Product3;
