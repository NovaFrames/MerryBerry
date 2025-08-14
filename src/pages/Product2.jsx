import React, { useState } from "react";
import { allProducts } from "./AllProducts";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "../components/Footer";

const categories = [
  "ice-cream",
  "chicken",
  "burger",
  "sandwich",
  "mojito",
  "milkshake",
];

const Product2 = () => {
  // Track current product index for each category
  const [currentIndexes, setCurrentIndexes] = useState(
    categories.reduce((acc, cat) => {
      acc[cat] = 0;
      return acc;
    }, {})
  );

  const handlePrev = (category) => {
    const productsInCategory = allProducts.filter(
      (p) => p.category === category
    );
    setCurrentIndexes((prev) => ({
      ...prev,
      [category]:
        prev[category] === 0
          ? productsInCategory.length - 1
          : prev[category] - 1,
    }));
  };

  const handleNext = (category) => {
    const productsInCategory = allProducts.filter(
      (p) => p.category === category
    );
    setCurrentIndexes((prev) => ({
      ...prev,
      [category]:
        prev[category] === productsInCategory.length - 1
          ? 0
          : prev[category] + 1,
    }));
  };

  return (
    <div>
      {categories.map((category, index) => {
        const productsInCategory = allProducts.filter(
          (p) => p.category === category
        );
        const product =
          productsInCategory[currentIndexes[category]] || productsInCategory[0];

        const isEven = index % 2 !== 0; // true if even index (for alternating)
        const bgClass = isEven ? "bg-fuchsia-100" : "bg-[#fff9f0]"; // change bg for odd/even

        return (
          <section
            key={category}
            className={`${bgClass} pt-10 md:pt-20 pb-30 flex items-center justify-center px-6 md:px-16 relative`}
          >
            <div
              className={`max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10 ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Text Section */}
              <div className="flex-1">
                <h2 className="text-lg uppercase tracking-widest text-gray-500 mb-2">
                  {category}
                </h2>
                <h1 className="text-3xl md:text-7xl font-extrabold text-gray-900 mb-4">
                  {product.name.toUpperCase()}.
                </h1>

                <p className="text-gray-500 mb-8 md:text-2xl max-w-md">
                  {product.description}
                </p>
              </div>

              {/* Image Section */}
              <div className="flex-1 flex justify-center items-center relative">
                <div className="w-80 h-80 md:w-[500px] md:h-[500px] bg-white rounded-full flex justify-center items-center shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-64 h-64 md:w-110 md:h-110 object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute bottom-10 flex gap-4">
              <button
                onClick={() => handlePrev(category)}
                className="bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => handleNext(category)}
                className="bg-white p-3 rounded-full shadow hover:bg-gray-100 transition"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </section>
        );
      })}
      <Footer/>
    </div>
  );
};

export default Product2;
