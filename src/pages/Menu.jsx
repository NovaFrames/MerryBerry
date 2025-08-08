import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { allProducts } from "./AllProducts";

const categories = ["All", "Ice-Cream", "Chicken", "Milkshake", "Mojito", "Burger", "Sandwich"];

const Menu = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

  const scrollLock = useRef(false);
  let scrollTimeout = useRef(null);

  // Filter products
  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter(
          (product) =>
            product.category &&
            product.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  // Navigation functions
  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredProducts.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? filteredProducts.length - 1 : prev - 1
    );
  };

  // Handle scroll (desktop) + swipe (mobile)
  useEffect(() => {
    const lockScroll = () => {
      scrollLock.current = true;
      clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        scrollLock.current = false;
      }, 500);
    };

    // Desktop wheel scroll
    const handleWheel = (e) => {
      if (scrollLock.current) return;
      lockScroll();

      if (e.deltaY > 0) {
        nextProduct();
      } else if (e.deltaY < 0) {
        prevProduct();
      }
    };

    // Mobile swipe
    let touchStartY = 0;
    let touchEndY = 0;

    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e) => {
      touchEndY = e.changedTouches[0].clientY;
      if (scrollLock.current) return;
      lockScroll();

      const swipeDistance = touchStartY - touchEndY;
      if (swipeDistance > 50) {
        // swipe up → next
        nextProduct();
      } else if (swipeDistance < -50) {
        // swipe down → previous
        prevProduct();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      clearTimeout(scrollTimeout.current);
    };
  }, [filteredProducts.length]);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const currentProduct = filteredProducts[currentIndex] || {};

  return (
    <div className="relative min-h-screen w-full overflow-hidden font-sans">
      {/* Static Background */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: `url('/static-bg.jpg')`,
        }}
      />
      <div className="absolute inset-0 bg-white" />

      {/* Filter Button */}
      <div className="absolute top-40 md:top-40 left-10 md:left-20 z-30">
        <button
          className="bg-red-600 text-white px-4 py-2 rounded shadow-lg hover:bg-red-700 transition"
          onClick={() => setIsCategoryModalOpen(true)}
        >
          {selectedCategory === "All" ? "Filter" : selectedCategory}
        </button>
      </div>

      {/* Category Modal */}
      <AnimatePresence>
        {isCategoryModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-xl p-6 w-80"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <h2 className="text-lg font-bold mb-4">Select Category</h2>
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`block w-full text-left px-4 py-2 rounded hover:bg-red-100 ${
                    selectedCategory === cat ? "font-bold text-red-600" : ""
                  }`}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setIsCategoryModalOpen(false);
                  }}
                >
                  {cat}
                </button>
              ))}
              <button
                className="mt-4 bg-gray-300 px-4 py-2 rounded w-full hover:bg-gray-400"
                onClick={() => setIsCategoryModalOpen(false)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        {filteredProducts.length > 0 ? (
          <>
            {/* Product Image */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentProduct.image}
                src={currentProduct.image}
                alt={currentProduct.name}
                className="w-96 md:w-80 lg:w-[32rem] object-contain mb-4 mt-20 drop-shadow-2xl"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
            </AnimatePresence>

            {/* Product Name */}
            <motion.h2
              key={currentProduct.name}
              className="text-4xl md:text-5xl font-bold text-red-600 uppercase tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {currentProduct.name}
            </motion.h2>
          </>
        ) : (
          <p className="text-gray-500 mt-20">No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default Menu;
