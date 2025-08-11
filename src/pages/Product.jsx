import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allProducts } from "./AllProducts";
import arrow from "../assets/arrow/arrow.png";

const categories = ["Ice-Cream", "Chicken", "Milkshake", "Mojito", "Burger", "Sandwich"];

const Product = () => {
  const [currentIndexes, setCurrentIndexes] = useState(
    Object.fromEntries(categories.map((cat) => [cat, 0]))
  );
  const [direction, setDirection] = useState(0);

  const nextProduct = (cat, length) => {
    setDirection(1);
    setCurrentIndexes((prev) => ({
      ...prev,
      [cat]: (prev[cat] + 1) % length,
    }));
  };

  const prevProduct = (cat, length) => {
    setDirection(-1);
    setCurrentIndexes((prev) => ({
      ...prev,
      [cat]: prev[cat] === 0 ? length - 1 : prev[cat] - 1,
    }));
  };

  // Push transition variants
  const pushVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      zIndex: 2,
    }),
    center: {
      x: 0,
      zIndex: 2,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      zIndex: 1,
    }),
  };

  return (
    <div className="min-h-screen">
      {categories.map((cat, index) => {
        const products = allProducts.filter(
          (p) => p.category && p.category.toLowerCase() === cat.toLowerCase()
        );
        const currentProduct = products[currentIndexes[cat]];

        if (products.length === 0) return null;

        return (
          <section
            key={cat}
            className={`min-h-[90vh] flex flex-col items-center justify-center py-0 px-4 ${
              index % 2 === 0 ? "bg-white" : "bg-white"
            }`}
          >
            {/* Category title */}
            <motion.h2
              className="text-5xl font-bold mb-12 bg-red-600 p-2 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {cat}
            </motion.h2>

            <div className="relative w-full max-w-5xl mx-auto">
              {/* Prev button */}
              <motion.button
                onClick={() => prevProduct(cat, products.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center group-hover:bg-white transition-all duration-300 border border-white/20">
                  <motion.img
                    src={arrow}
                    alt="Previous"
                    className="w-10 h-10 md:w-12 md:h-12 transform rotate-180"
                    whileHover={{ x: -2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </motion.button>

              {/* Next button */}
              <motion.button
                onClick={() => nextProduct(cat, products.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-14 h-14 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center group-hover:bg-white transition-all duration-300 border border-white/20">
                  <motion.img
                    src={arrow}
                    alt="Next"
                    className="w-10 h-10 md:w-12 md:h-12"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </motion.button>

              {/* Product display */}
              <div className="relative w-full h-[70vh] rounded-[2.5rem] overflow-hidden shadow-2xl">
                <AnimatePresence initial={false} custom={direction} mode="popLayout">
                  <motion.div
                    key={currentProduct?.id}
                    custom={direction}
                    variants={pushVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.5,
                    }}
                    className="absolute inset-0"
                  >
                    <img
                      src={currentProduct?.image}
                      alt={currentProduct?.name}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                    {/* Product info */}
                    <motion.div
                      className="absolute bottom-8 left-8 right-8 z-10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.4 }}
                    >
                      <h3 className="text-white text-2xl font-bold drop-shadow-lg mb-1">
                        {currentProduct?.name}
                      </h3>
                      {currentProduct?.price && (
                        <p className="text-white/90 text-lg font-semibold drop-shadow-lg">
                          {currentProduct.price}
                        </p>
                      )}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Progress indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                  {products.map((_, i) => (
                    <motion.div
                      key={i}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === currentIndexes[cat] ? "bg-white" : "bg-white/40"
                      }`}
                      whileHover={{ scale: 1.2 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default Product;
