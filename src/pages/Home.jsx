import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FlavorSlider from '../components/FlavorSlider';
import FranchiseSection from '../components/FranchiseSection';
import OurStory from '../components/OurStory';
import Gallery from '../components/Gallery';
import Details from '../components/Details';
import CraftedSection from '../components/CraftedSection';
import Footer from '../components/Footer';
import h6 from '../assets/home/6.png';
import h7 from '../assets/home/7.png';
import h8 from '../assets/home/8.png';
import h9 from '../assets/home/9.png';
import h10 from '../assets/home/10.png';
import h11 from '../assets/home/11.png';
import h12 from '../assets/home/12.png';
import h13 from '../assets/home/13.png';
import h14 from '../assets/home/14.png';
import h15 from '../assets/home/15.png';

const flavors = [
  {
    name: "Ube",
    bgColor: "#F4D13D",
    imgs: [h7, h12, h8],
    mobileImg: h7 // Added specific mobile image
  },
  {
    name: "Raspberry",
    bgColor: "#E30B5D",
    imgs: [h9, h10, h11],
    mobileImg: h9
  },
  {
    bgColor: "#9F4C87",
    name: "Banana",
    imgs: [h13, h14, h15],
    mobileImg: h13
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
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      if (mobile !== isMobile) {
        setIsMobile(mobile);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

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
          <div className="absolute top-16 md:top-24 text-center w-full text-black z-10 px-4">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold leading-tight">
              MERRY × BERRY
            </h1>
            <p className="text-sm md:text-xl font-bold mt-2 md:mt-4 uppercase">
              A Magical Duo of Ice Cream & Chicken Fries
            </p>
          </div>

          {/* Main Images */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center absolute z-10 mt-32 md:mt-0"
            >
              {isMobile ? (
                // Mobile - single image
                <motion.img
                  key={`${active.name}-mobile`}
                  src={active.mobileImg}
                  alt={active.name}
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="w-[350px] h-auto pb-60"
                />
              ) : (
                // Desktop - multiple images
                <div className="flex gap-8 lg:gap-16 items-center justify-center">
                  {active.imgs.map((imgUrl, i) => (
                    <motion.img
                      key={`${active.name}-${i}`}
                      src={imgUrl}
                      alt={`${active.name} ${i + 1}`}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.9, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-[200px] lg:w-[300px] h-auto"
                    />
                  ))}
                </div>
              )}
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
                className={`w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 flex items-center justify-center overflow-hidden shadow-md 
                  ${activeIndex === index ? 'border-white scale-110' : 'border-transparent'} transition-transform duration-300`}
                style={{ backgroundColor: flavor.bgColor }}
                title={flavor.name}
              >
                <img 
                  src={flavor.imgs[0]} 
                  alt={flavor.name} 
                  className="w-8 h-8 lg:w-10 lg:h-10 object-contain" 
                />
              </button>
            ))}
          </div>

          {/* Mobile */}
          <div className="md:hidden absolute bottom-50 left-1/2 -translate-x-1/2 flex space-x-4 z-10">
            {flavors.map((flavor, index) => (
              <button
                key={`mobile-${index}`}
                ref={(el) => (mobileFlavorRefs.current[index] = el)}
                onClick={() => handleFlavorChange(index)}
                className={`w-16 h-16 rounded-full border-2 flex items-center justify-center overflow-hidden shadow-md 
                  ${activeIndex === index ? 'border-white scale-110' : 'border-transparent'} transition-transform duration-300`}
                style={{ backgroundColor: flavor.bgColor }}
                title={flavor.name}
              >
                <img 
                  src={flavor.imgs[1]} 
                  alt={flavor.name} 
                  className="w-26 h-26 object-contain" 
                />
              </button>
            ))}
          </div>
        </div>

        {/* Decorative Bubbles */}
        <div className="absolute bottom-0 w-full h-[15vh] md:h-48 bg-pink-200 rounded-t-[50%] z-20 flex items-center justify-center px-4">
          <p
            className="text-xl md:text-4xl lg:text-5xl font-bold text-center"
            style={{ color: active.bgColor }}
          >
            Your Flavour is Waiting!
          </p>
        </div>
      </div>

      <OurStory />
      <FlavorSlider />
      <FranchiseSection />
      <Details />
      <Gallery />
      <CraftedSection />
      <Footer />
    </>
  );
};

export default Home;