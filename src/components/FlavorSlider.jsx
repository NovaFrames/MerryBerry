import React, { useState, useEffect } from "react";
import one from '../assets/Icecreams/1.png'
import two from '../assets/Icecreams/2.png'
import three from '../assets/Icecreams/3.png'

const flavors = [
    {
      name: "MANGO CHAMOY",
      headline: "FULL MOON PARTY",
      subtext: "It's a party for your taste buds! A pint of this will have you dancing all night long.",
      description: "Tangy mango with lime, honey, and chamoy. A full-blown explosion of spicy, sweet, and sour.",
      backgroundColor: "#FFE9B6", // Light Amber
      textColor: "#8B4513",       // Warm Brown
      keyword: "If Thailand's full moon party was a flavor",
      theme: "PARTY",
      mainImage: three,
    },
    {
      name: "UBE DREAM",
      headline: "DREAM NIGHT",
      subtext: "Sweet, smooth ube cream to end your day perfectly.",
      description: "Creamy, nutty purple yam with sweet coconut for a dreamy flavor.",
      backgroundColor: "#F7F0FF", // Soft Lavender
      textColor: "#6A1B9A",       // Rich Purple
      keyword: "A dreamy purple delight",
      theme: "DREAM",
      mainImage: two,
    },
    {
      name: "RASPBERRY",
      headline: "BERRY BLAST",
      subtext: "Bursting with raspberry joy – fruity and fun!",
      description: "Raspberry punch with bold berry flavor and smooth creamy texture.",
      backgroundColor: "#FFDDEB", // Soft Pink
      textColor: "#B71C5E",       // Deep Raspberry
      keyword: "Bold. Bright. Berrylicious.",
      theme: "BERRY",
      mainImage: one,
    },
  ];
  

export default function FlavorSlider() {
    const [index, setIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const [hoverSide, setHoverSide] = useState(null);
    const [autoRotate, setAutoRotate] = useState(true);

    const current = flavors[index];
    const nextIndex = (index + 1) % flavors.length;
    const prevIndex = (index - 1 + flavors.length) % flavors.length;

    useEffect(() => {
        if (!autoRotate) return;
        const interval = setInterval(() => {
            changeSlide(nextIndex);
        }, 5000);
        return () => clearInterval(interval);
    }, [index, autoRotate]);

    const changeSlide = (newIndex) => {
        if (transitioning) return;
        setTransitioning(true);
        setTimeout(() => {
            setIndex(newIndex);
            setTransitioning(false);
        }, 500);
    };

    const handleClick = (newIndex, event) => {
        setAutoRotate(false);
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        button.appendChild(ripple);

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${event.clientX - rect.left - size/2}px`;
        ripple.style.top = `${event.clientY - rect.top - size/2}px`;

        setTimeout(() => ripple.remove(), 600);
        setTimeout(() => changeSlide(newIndex), 100);
    };

    return (
        <div className="relative overflow-hidden w-full h-screen flex flex-col">
            {/* Static Background */}
            <div
                className="absolute inset-0 z-0 transition-colors duration-500"
                style={{ background: `${current.backgroundColor}` }}
            />

            {/* Click zones */}
            <div
                className="absolute left-0 top-0 w-1/2 h-full z-30 cursor-pointer"
                onMouseEnter={() => setHoverSide('left')}
                onMouseLeave={() => setHoverSide(null)}
                onClick={(e) => handleClick(prevIndex, e)}
            />
            <div
                className="absolute right-0 top-0 w-1/2 h-full z-30 cursor-pointer"
                onMouseEnter={() => setHoverSide('right')}
                onMouseLeave={() => setHoverSide(null)}
                onClick={(e) => handleClick(nextIndex, e)}
            />

            {/* Hover indicators */}
            {hoverSide === 'left' && (
                <div className="absolute left-0 top-0 w-1/2 h-full z-20 bg-black/5 duration-300" />
            )}
            {hoverSide === 'right' && (
                <div className="absolute right-0 top-0 w-1/2 h-full z-20 bg-black/5 duration-300" />
            )}

            {/* Transition wave */}
            {transitioning && (
                <div
                    className="absolute bottom-0 left-0 w-full z-10 animate-slideUp overflow-hidden"
                    style={{ height: "100%", background: `${flavors[nextIndex].backgroundColor}` }}
                >
                    <svg
                        className="absolute top-0 left-0 w-full h-[80px]"
                        viewBox="0 0 1440 80"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill={flavors[index].backgroundColor}
                            d="M0,40 C120,0 240,80 360,40 C480,0 600,80 720,40 C840,0 960,80 1080,40 C1200,0 1320,80 1440,40 L1440,0 L0,0Z"
                        />
                    </svg>
                </div>
            )}

            {/* Main content */}
            <div
                className="relative z-20 flex-1 flex flex-col justify-center py-6 sm:py-8 text-center"
                style={{ color: current.textColor }}
            >
                <div className="mt-4 sm:mt-6">
                    {/* Headings */}
                    <div className={`transition-all duration-300 ${transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
                        <h2 className="text-lg sm:text-xl font-bold">{current.name}</h2>
                        <p className="uppercase font-bold mt-1 text-xs sm:text-sm max-w-xl mx-auto">{current.keyword}</p>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mt-1">{current.headline}</h1>
                    </div>

                    {/* Images */}
                    <div className="relative flex justify-center items-center my-4 sm:my-6 gap-5">
                        {/* Previous */}
                        <div
                            className={`absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 cursor-pointer transition-all duration-300 ${hoverSide === 'left' ? 'scale-110' : 'scale-100'}`}
                            onMouseEnter={() => setHoverSide('left')}
                            onMouseLeave={() => setHoverSide(null)}
                            onClick={(e) => handleClick(prevIndex, e)}
                        >
                            <img src={flavors[prevIndex].mainImage} alt="Previous flavor" className="w-28 md:w-40 transition-transform duration-300 hover:scale-105" />
                            <p className="uppercase font-bold mt-1 text-xs sm:text-sm">{flavors[prevIndex].name}</p>
                        </div>

                        {/* Main Image */}
                        <div className={`relative z-20 transition-all duration-500 ${transitioning ? "opacity-0 -translate-y-10 scale-95" : "opacity-100 translate-y-0 scale-100"}`}>
                            <img src={current.mainImage} alt={current.name} className="max-w-[20rem] md:max-w-[25rem] max-h-[60vh] mx-auto object-contain hover:rotate-1 transition-transform duration-500" />
                        </div>

                        {/* Next */}
                        <div
                            className={`absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 cursor-pointer transition-all duration-300 ${hoverSide === 'right' ? 'scale-110' : 'scale-100'}`}
                            onMouseEnter={() => setHoverSide('right')}
                            onMouseLeave={() => setHoverSide(null)}
                            onClick={(e) => handleClick(nextIndex, e)}
                        >
                            <img src={flavors[nextIndex].mainImage} alt="Next flavor" className="w-28 md:w-40 transition-transform duration-300 hover:scale-105" />
                            <p className="uppercase font-bold mt-1 text-xs sm:text-sm">{flavors[nextIndex].name}</p>
                        </div>
                    </div>

                    {/* Description */}
                    <div className={`transition-all duration-300 ${transitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
                        <h2 className="text-4xl sm:text-4xl md:text-5xl font-extrabold mt-2">{current.theme}</h2>
                        <p className="text-sm sm:text-sm font-medium max-w-md mx-auto mt-1">{current.description}</p>
                        <p className="text-sm sm:text-sm font-medium max-w-md mx-auto mt-2">{current.subtext}</p>
                    </div>

                    {/* Navigation dots */}
                    <div className="flex justify-center mt-6 space-x-2">
                        {flavors.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => { setAutoRotate(false); changeSlide(i); }}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? 'scale-125' : 'scale-100'}`}
                                style={{
                                    backgroundColor: i === index ? current.textColor : `${current.textColor}80`,
                                    transform: i === index ? 'scale(1.5)' : 'scale(1)'
                                }}
                                aria-label={`Go to slide ${i + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Styles */}
            <style>
                {`
                    @keyframes slideUp {
                        0% { transform: translateY(100%); }
                        100% { transform: translateY(0%); }
                    }
                    .animate-slideUp {
                        animation: slideUp 0.5s ease-in-out forwards;
                    }
                    .ripple-effect {
                        position: absolute;
                        border-radius: 50%;
                        background-color: rgba(255, 255, 255, 0.4);
                        transform: scale(0);
                        animation: ripple 0.6s linear;
                        pointer-events: none;
                    }
                    @keyframes ripple {
                        to {
                            transform: scale(4);
                            opacity: 0;
                        }
                    }
                `}
            </style>
        </div>
    );
}
