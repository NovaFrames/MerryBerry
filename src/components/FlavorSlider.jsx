import React, { useState } from "react";
import one from '../assets/Icecreams/1.png'
import two from '../assets/Icecreams/2.png'
import three from '../assets/Icecreams/3.png'
import h12 from '../assets/home/12.png'
const flavors = [
    {
        name: "MANGO CHAMOY",
        headline: "FULL MOON PARTY",
        subtext: "It's a party for your taste buds! A pint of this will have you dancing all night long.",
        description: "Tangy mango with lime, honey, and chamoy. A full-blown explosion of spicy, sweet, and sour.",
        backgroundColor: "#ffed8c",
        textColor: "#d8222a",
        keyword: "If Thailand's full moon party was a flavor",
        theme: "PARTY",
        // mainImage: "https://images.ctfassets.net/j8k8klriwj2h/6kpjysvBK78pLbaVnrGl6x/968158796de59dea868a24a82aa6fe28/Mango_Chamoy.png?h=390&w=351&q=100&&fm=webp&q=80",
        mainImage: h12,
    },
    {
        name: "UBE DREAM",
        headline: "DREAM NIGHT",
        subtext: "Sweet, smooth ube cream to end your day perfectly.",
        description: "Creamy, nutty purple yam with sweet coconut for a dreamy flavor.",
        backgroundColor: "#d2b4f2",
        textColor: "#3b1c5e",
        keyword: "A dreamy purple delight",
        theme: "DREAM",
        // mainImage: "https://images.ctfassets.net/j8k8klriwj2h/01MWGFwgHjGFGI8nElbR9Y/7afe1d857f61eab7bb57b91edf7f4522/Salted_Ube_Smores.png?h=390&w=351&q=100&&fm=webp&q=80",
        mainImage: two,
    },
    {
        name: "RASPBERRY",
        headline: "BERRY BLAST",
        subtext: "Bursting with raspberry joy – fruity and fun!",
        description: "Raspberry punch with bold berry flavor and smooth creamy texture.",
        backgroundColor: "#E30B5D",
        textColor: "#ffffff",
        keyword: "Bold. Bright. Berrylicious.",
        theme: "BERRY",
        // mainImage: "https://images.ctfassets.net/j8k8klriwj2h/6dpa3z9jquNuYhDecfno4I/4d0539e4a088755f40bd0d47fbeee849/Churro_Raspberry.png?h=390&w=351&q=100&&fm=webp&q=80",
        mainImage: one,
    },
];

export default function FlavorSlider() {
    const [index, setIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);

    const current = flavors[index];
    const nextIndex = (index + 1) % flavors.length;
    const prevIndex = (index - 1 + flavors.length) % flavors.length;

    const changeSlide = (newIndex) => {
        if (transitioning) return;
        setTransitioning(true);
        setTimeout(() => {
            setIndex(newIndex);
            setTransitioning(false);
        }, 500); // match animation duration
    };

    return (
        <div className="relative overflow-hidden w-full">

            {/* Static Background */}
            <div
                className="absolute inset-0 z-0 transition-colors duration-500"
                style={{ background: `${current.backgroundColor}` }}
            />

            {/* Animated Wave Overlay */}
            {transitioning && (
                <div
                    className="absolute bottom-0 left-0 w-full z-10 animate-slideUp overflow-hidden"
                    style={{ height: "100%", background: `${flavors[nextIndex].backgroundColor}` }}
                >
                    {/* Wave SVG on top of new background */}
                    <svg
                        className="absolute top-0 left-0 w-full h-[80px]"
                        viewBox="0 0 1440 80"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill={flavors[index].backgroundColor} // the *previous* flavor color
                            d="M0,40 
                C120,0 240,80 360,40 
                C480,0 600,80 720,40 
                C840,0 960,80 1080,40 
                C1200,0 1320,80 1440,40 
                L1440,0 L0,0Z"
                        />
                    </svg>
                </div>
            )}


            {/* Main Container */}
            <div
                className="relative z-20 py-6 sm:py-8 text-center"
                style={{ color: current.textColor }}
            >
                <div className="mt-4 sm:mt-6 min-h-[26rem] sm:min-h-[30rem] md:min-h-[32rem]">
                    {/* Headings */}
                    <div
                        className={`transition-all duration-300 ${transitioning
                            ? "opacity-0 translate-y-4"
                            : "opacity-100 translate-y-0"
                            }`}
                    >
                        <h2 className="text-lg sm:text-xl font-bold">{current.name}</h2>
                        <p className="uppercase font-bold mt-1 text-xs sm:text-sm max-w-xl mx-auto">
                            {current.keyword}
                        </p>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mt-1">
                            {current.headline}
                        </h1>
                    </div>

                    {/* Images */}
                    <div className="relative flex justify-center items-center my-4 sm:my-6 gap-5">
                        {/* Previous */}
                        <div
                            className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 cursor-pointer"
                            onClick={() => changeSlide(prevIndex)}
                        >
                            <img
                                src={flavors[prevIndex].mainImage}
                                alt="Previous flavor"
                                className="w-30 md:w-50"
                            />
                        </div>

                        {/* Main Image */}
                        <div
                            className={`relative z-20 transition-all duration-500 ${transitioning
                                ? "opacity-0 -translate-y-10 scale-95"
                                : "opacity-100 translate-y-0 scale-100"
                                }`}
                        >
                            <img
                                src={current.mainImage}
                                alt={current.name}
                                className="w-[16rem] md:w-[25rem] mx-auto max-h-[24rem] object-contain"
                            />
                        </div>

                        {/* Next */}
                        <div
                            className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 cursor-pointer"
                            onClick={() => changeSlide(nextIndex)}
                        >
                            <img
                                src={flavors[nextIndex].mainImage}
                                alt="Next flavor"
                                className="w-30 md:w-50"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div
                        className={`transition-all duration-300 ${transitioning
                            ? "opacity-0 translate-y-4"
                            : "opacity-100 translate-y-0"
                            }`}
                    >
                        <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold mt-2">
                            {current.theme}
                        </h2>
                        <p className="text-xs sm:text-sm font-medium max-w-md mx-auto mt-1">
                            {current.description}
                        </p>
                        <p className="text-xs sm:text-sm font-medium max-w-md mx-auto mt-2">
                            {current.subtext}
                        </p>
                    </div>
                </div>
            </div>

            {/* Slide Animation */}
            <style>
                {`
                    @keyframes slideUp {
                        0% {
                            transform: translateY(100%);
                        }
                        100% {
                            transform: translateY(0%);
                        }
                    }
                    .animate-slideUp {
                        animation: slideUp 0.5s ease-in-out forwards;
                    }
                `}
            </style>
        </div>
    );
}
