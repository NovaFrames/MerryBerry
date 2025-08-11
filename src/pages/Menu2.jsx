import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import bgDesktop from "../assets/menu2/bg-desktop.png";
import bgMobile from "../assets/menu2/bg-mobile.png";
import icecream from "../assets/Icecreams/icecream.png";
import icecream1 from "../assets/home/9.png";
import icecream2 from "../assets/home/10.png";
import icecream3 from "../assets/home/11.png";

const iceCreams = [
  { id: 1, name: "Vanilla Bean Supreme", image: icecream, category: "ice-cream" },
  { id: 2, name: "Strawberry Bliss", image: icecream1, category: "ice-cream" },
  { id: 3, name: "Chocolate Dream", image: icecream2, category: "ice-cream" },
  { id: 4, name: "Caramel Delight", image: icecream3, category: "ice-cream" },
];

const Menu2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bgImage, setBgImage] = useState(window.innerWidth > 768 ? bgDesktop : bgMobile);

  useEffect(() => {
    const handleResize = () => {
      setBgImage(window.innerWidth > 768 ? bgDesktop : bgMobile);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + iceCreams.length) % iceCreams.length);
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % iceCreams.length);
  };

  const currentProduct = iceCreams[currentIndex];

  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center h-screen w-full bg-no-repeat bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
        <h2 className=" md:hidden text-6xl md:text-6xl font-bold text-rose-400 mb-40 drop-shadow-lg text-center">
          {currentProduct.name}
        </h2>
      {/* Mobile: Buttons Row */}
      <div className="flex md:hidden w-full justify-between px-6 mt-4">
        <button
          onClick={prevImage}
          className="bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-pink-600"
        >
          Prev
        </button>
        <button
          onClick={nextImage}
          className="bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-pink-600"
        >
          Next
        </button>
      </div>

      {/* Desktop: Prev Button */}
      <button
        onClick={prevImage}
        className="hidden md:block md:absolute md:left-12 md:top-1/2 md:-translate-y-1/2 
                   bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-pink-600"
      >
        Prev
      </button>

      {/* Ice Cream Content */}
      <div className="flex flex-col items-center md:ml-20 mt-4 md:mt-0">
        <h2 className="hidden md:block text-4xl md:text-6xl font-bold text-rose-400 mb-4 drop-shadow-lg text-center">
          {currentProduct.name}
        </h2>
        <motion.img
          key={currentProduct.id}
          src={currentProduct.image}
          alt={currentProduct.name}
          className="w-64 md:w-96 object-contain"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Desktop: Next Button */}
      <button
        onClick={nextImage}
        className="hidden md:block md:absolute md:right-12 md:top-1/2 md:-translate-y-1/2 
                   bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-pink-600"
      >
        Next
      </button>
    </div>
  );
};

export default Menu2;
