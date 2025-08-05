import React, { useState } from 'react';
import { motion } from 'framer-motion';

const flavors = [
  {
    name: "Ube",
    bgColor: "#9F4C87", // purple-pink
    img: "https://images.ctfassets.net/j8k8klriwj2h/1OjxEwoD5tTfRWuEMzPKyt/e7b2f8dc1ce2a88eb170ed5c2bb43aba/Boba_x_Ice_Cream_UBE.png",
  },
  {
    name: "Banana",
    bgColor: "#F4D13D", // banana yellow
    img: "https://images.ctfassets.net/j8k8klriwj2h/3W5W2yk2jbULRv1yTamjli/77e529d150811ed9ce12997c9c14c9b9/Boba_x_Ice_Cream_Banana.png",
  },
  // Add more flavors as needed
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleFlavorChange = (index) => {
    setActiveIndex(index);
  };

  const active = flavors[activeIndex];

  return (
    <>
      <div
        className="relative w-full h-screen flex items-center pt-10 justify-center overflow-hidden"
        style={{ backgroundColor: active.bgColor, transition: 'background-color 0.5s ease' }}
      >
        {/* Large Heading Text */}
        <div className="absolute top-24 text-center w-full text-white z-10">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">MERRY × BERRY</h1>
          <p className="text-xl font-bold mt-4 uppercase">A Magical Duo of Ice Cream & Chicken Fries</p>
        </div>

        {/* Centered Animated Image */}
        <motion.img
          key={active.img}
          src={active.img}
          alt={active.name}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-[300px] md:w-[400px] h-auto z-10"
        />

        {/* Right Side Flavor Selectors */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 space-y-4 z-10">
          {flavors.map((flavor, index) => (
            <button
              key={index}
              onClick={() => handleFlavorChange(index)}
              className={`w-14 h-14 rounded-full border-2 flex items-center justify-center overflow-hidden shadow-md 
        ${activeIndex === index ? 'border-white scale-110' : 'border-transparent'} transition-transform duration-300`}
              style={{ backgroundColor: flavor.bgColor }}
              title={flavor.name}
            >
              <img
                src={flavor.img}
                alt={flavor.name}
                className="w-10 h-10 object-contain"
              />
            </button>
          ))}
        </div>

        {/* Decorative Bubbles (optional, you can design more as per the original image) */}
        <div className="absolute bottom-0 w-full h-48 bg-pink-200 rounded-t-[50%]"></div>
      </div>
      <div
        className="relative w-full h-screen flex items-center pt-10 justify-center overflow-hidden"
        style={{ backgroundColor: active.bgColor, transition: 'background-color 0.5s ease' }}
      >
        {/* Large Heading Text */}
        <div className="absolute top-24 text-center w-full text-white z-10">
          <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">MERRY × BERRY</h1>
          <p className="text-xl font-bold mt-4 uppercase">A Magical Duo of Ice Cream & Chicken Fries</p>
        </div>

        {/* Centered Animated Image */}
        <motion.img
          key={active.img}
          src={active.img}
          alt={active.name}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="w-[300px] md:w-[400px] h-auto z-10"
        />

        {/* Right Side Flavor Selectors */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 space-y-4 z-10">
          {flavors.map((flavor, index) => (
            <button
              key={index}
              onClick={() => handleFlavorChange(index)}
              className={`w-14 h-14 rounded-full border-2 flex items-center justify-center overflow-hidden shadow-md 
        ${activeIndex === index ? 'border-white scale-110' : 'border-transparent'} transition-transform duration-300`}
              style={{ backgroundColor: flavor.bgColor }}
              title={flavor.name}
            >
              <img
                src={flavor.img}
                alt={flavor.name}
                className="w-10 h-10 object-contain"
              />
            </button>
          ))}
        </div>

        {/* Decorative Bubbles (optional, you can design more as per the original image) */}
        <div className="absolute bottom-0 w-full h-48 bg-pink-200 rounded-t-[50%]"></div>
      </div>

    </>
  );
};

export default Home;
