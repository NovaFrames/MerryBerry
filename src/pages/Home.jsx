import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FlavorSlider from '../components/FlavorSlider';
import FranchiseSection from '../components/FranchiseSection';
import OurStory from '../components/OurStory';
import Gallery from '../components/Gallery';

const flavors = [
  {
    name: "Ube",
    bgColor: "#9F4C87",
    imgs: [
      "https://images.ctfassets.net/j8k8klriwj2h/1OjxEwoD5tTfRWuEMzPKyt/e7b2f8dc1ce2a88eb170ed5c2bb43aba/Boba_x_Ice_Cream_UBE.png",
      "https://images.ctfassets.net/j8k8klriwj2h/1OjxEwoD5tTfRWuEMzPKyt/e7b2f8dc1ce2a88eb170ed5c2bb43aba/Boba_x_Ice_Cream_UBE.png",
      "https://images.ctfassets.net/j8k8klriwj2h/1OjxEwoD5tTfRWuEMzPKyt/e7b2f8dc1ce2a88eb170ed5c2bb43aba/Boba_x_Ice_Cream_UBE.png",
    ]
  },
  {
    name: "Banana",
    bgColor: "#F4D13D",
    imgs: [
      "https://images.ctfassets.net/j8k8klriwj2h/3W5W2yk2jbULRv1yTamjli/77e529d150811ed9ce12997c9c14c9b9/Boba_x_Ice_Cream_Banana.png",
      "https://images.ctfassets.net/j8k8klriwj2h/3W5W2yk2jbULRv1yTamjli/77e529d150811ed9ce12997c9c14c9b9/Boba_x_Ice_Cream_Banana.png",
      "https://images.ctfassets.net/j8k8klriwj2h/3W5W2yk2jbULRv1yTamjli/77e529d150811ed9ce12997c9c14c9b9/Boba_x_Ice_Cream_Banana.png",
    ]
  },
  {
    name: "Raspberry",
    bgColor: "#E30B5D",
    imgs: [
      "https://images.ctfassets.net/j8k8klriwj2h/3R4DGEkjMI6ORb3ieGZeov/529982783301b739116f5f88fea2cde2/Boba_x_Ice_Cream_PikaChurro.png?w=1560&q=80&&fm=webp&q=80",
      "https://images.ctfassets.net/j8k8klriwj2h/3R4DGEkjMI6ORb3ieGZeov/529982783301b739116f5f88fea2cde2/Boba_x_Ice_Cream_PikaChurro.png?w=1560&q=80&&fm=webp&q=80",
      "https://images.ctfassets.net/j8k8klriwj2h/3R4DGEkjMI6ORb3ieGZeov/529982783301b739116f5f88fea2cde2/Boba_x_Ice_Cream_PikaChurro.png?w=1560&q=80&&fm=webp&q=80",
    ]
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [circleColor, setCircleColor] = useState(null);
  const [circlePos, setCirclePos] = useState({ x: 0, y: 0 });
  const [animating, setAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const containerRef = useRef(null);
  const desktopFlavorRefs = useRef({});
  const mobileFlavorRefs = useRef({});

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const triggerExpansionAnimation = (index) => {
    const containerRect = containerRef.current?.getBoundingClientRect();
    const refs = isMobile ? mobileFlavorRefs : desktopFlavorRefs;
    const button = refs.current[index];
    const buttonRect = button?.getBoundingClientRect();

    if (button && containerRect && buttonRect) {
      const x = buttonRect.left + buttonRect.width / 2 - containerRect.left;
      const y = buttonRect.top + buttonRect.height / 2 - containerRect.top;

      setCircleColor(flavors[index].bgColor);
      setCirclePos({ x, y });
      setAnimating(true);

      setTimeout(() => {
        setActiveIndex(index);
      }, 200);

      setTimeout(() => {
        setAnimating(false);
      }, 600);
    }
  };

  const handleFlavorChange = (index) => {
    if (index === activeIndex) return;
    triggerExpansionAnimation(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % flavors.length;
      triggerExpansionAnimation(nextIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isMobile]);

  const active = flavors[activeIndex];

  return (
    <>
      <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
        {/* Background Layer */}
        <motion.div
          key={active.bgColor}
          className="absolute inset-0 z-0"
          style={{ backgroundColor: active.bgColor }}
        />

        <div className="relative w-full h-full flex items-center pt-10 justify-center z-10">
          {/* Expanding Circle Animation */}
          <AnimatePresence>
            {animating && (
              <motion.div
                key={'circle-' + circleColor + Date.now()}
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 20, opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
                style={{
                  backgroundColor: circleColor,
                  position: 'absolute',
                  top: circlePos.y,
                  left: circlePos.x,
                  width: 700,
                  height: 700,
                  borderRadius: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 5,
                  pointerEvents: 'none',
                }}
              />
            )}
          </AnimatePresence>

          {/* Heading */}
          <div className="absolute top-24 text-center w-full text-white z-10">
            <h1 className="text-6xl md:text-8xl font-extrabold leading-tight">MERRY × BERRY</h1>
            <p className="text-xl font-bold mt-4 uppercase">A Magical Duo of Ice Cream & Chicken Fries</p>
          </div>

          {/* Main Images */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name} // Changes on flavor change
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex -gap-2 items-center justify-center absolute z-10"
            >
              {active.imgs.map((imgUrl, i) => (
                <motion.img
                  key={`${active.name}-${i}`} // unique key
                  src={imgUrl}
                  alt={`${active.name} ${i + 1}`}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ duration: 0 }}
                  className="w-[500px] md:w-[500px] h-auto"
                />
              ))}
            </motion.div>
          </AnimatePresence>



          {/* Flavor Selectors */}
          {/* Desktop */}
          <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 space-y-4 z-10">
            {flavors.map((flavor, index) => (
              <button
                key={`desktop-${index}`}
                ref={(el) => (desktopFlavorRefs.current[index] = el)}
                onClick={() => handleFlavorChange(index)}
                className={`w-14 h-14 rounded-full border-2 flex items-center justify-center overflow-hidden shadow-md 
              ${activeIndex === index ? 'border-white scale-110' : 'border-transparent'} transition-transform duration-3000`}
                style={{ backgroundColor: flavor.bgColor }}
                title={flavor.name}
              >
                <img src={flavor.imgs[0]} alt={flavor.name} className="w-10 h-10 object-contain" />
              </button>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden absolute pt-80 left-1/2 -translate-x-1/2 flex space-x-4 z-10">
            {flavors.map((flavor, index) => (
              <button
                key={`mobile-${index}`}
                ref={(el) => (mobileFlavorRefs.current[index] = el)}
                onClick={() => handleFlavorChange(index)}
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center overflow-hidden shadow-md 
              ${activeIndex === index ? 'border-white scale-110' : 'border-transparent'} transition-transform duration-3000`}
                style={{ backgroundColor: flavor.bgColor }}
                title={flavor.name}
              >
                <img src={flavor.imgs[0]} alt={flavor.name} className="w-8 h-8 object-contain" />
              </button>
            ))}
          </div>
        </div>

        {/* Decorative Bubbles */}
        <div className="absolute bottom-0 w-full h-[20vh] md:h-48 bg-pink-200 rounded-t-[50%] z-20 flex items-center justify-center px-4">
          <p
            className="text-2xl md:text-4xl lg:text-5xl font-bold text-center"
            style={{ color: active.bgColor }}
          >
            Your Flavour is Waiting!
          </p>
        </div>


      </div>

      <FlavorSlider />
      <OurStory />
      <FranchiseSection />
      <Gallery />

    </>
  );
};

export default Home;
