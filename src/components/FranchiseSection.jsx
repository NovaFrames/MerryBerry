import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const FranchiseSection = () => {
    const sectionRef = useRef(null);
    const wrapperRef = useRef(null);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    useEffect(() => {
        const section = sectionRef.current;
        const wrapper = wrapperRef.current;

        // Exit early if on mobile
        const isMobile = window.innerWidth < 768;
        if (isMobile) return;

        const handleScroll = () => {
            if (!section || !wrapper) return;

            const scrollY = window.scrollY;
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const windowHeight = window.innerHeight;
            const scrollEnd = sectionTop + sectionHeight - windowHeight;

            if (scrollY >= sectionTop && scrollY <= scrollEnd) {
                const progress = (scrollY - sectionTop) / (sectionHeight - windowHeight);
                const maxScroll = wrapper.scrollWidth - window.innerWidth;
                const scrollAmount = progress * maxScroll;
                wrapper.style.transform = `translateX(-${scrollAmount}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle touch events to prevent swiping between panels on mobile
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
        // Prevent horizontal scrolling/swiping
        e.preventDefault();
    };

    const panels = [
        {
            name: "Franchise Success Story",
            description: `Over the years, we've built an unshakable trust with our clients and partners. Our commitment to quality, innovation, and consistency has helped us grow a strong franchise network across regions. Each outlet reflects our shared vision — a successful, thriving brand that our franchisees proudly represent.`,
            bg: 'bg-gradient-to-br from-amber-100 to-amber-100',
            text: 'text-amber-800',
            img: "https://merryberry.co.in/wp-content/uploads/2024/03/White-Cream-and-Brown-Grand-Opening-Coffee-Shop-Presentation_20240223_145508_0000-1536x864.png",
        },
        {
            name: "Our First Outlet",
            description: `Welcome to our very first Merry Berry outlet, a cozy 32-seater space designed to offer comfort and style. Featuring a classy interior with a striking red exterior elevation, this outlet is not only a visual treat but also a bustling spot, serving over 20,000+ bills a year.`,
            bg: 'bg-gradient-to-br from-red-700 to-rose-600',
            text: 'text-white',
            img: "https://merryberry.co.in/wp-content/uploads/2024/03/White-Cream-and-Brown-Grand-Opening-Coffee-Shop-Presentation_20240223_145652_0000-1536x864.png",
        },
        {
            name: "Our Second Outlet",
            description: `Our second location expanded on our success with a modern 50-seat layout featuring an open kitchen concept. The industrial-chic design with warm wood accents creates an inviting atmosphere that has become a local favorite, serving specialty drinks and artisanal pastries to a growing customer base.`,
            bg: 'bg-gradient-to-br from-amber-600 to-orange-600',
            text: 'text-white',
            img: "https://merryberry.co.in/wp-content/uploads/2024/03/White-Cream-and-Brown-Grand-Opening-Coffee-Shop-Presentation_20240223_145508_0000-1536x864.png",
        },
    ];

    const navigate = useNavigate();

    return (
        <div
            ref={sectionRef}
            className="relative w-full bg-white"
            style={{ height: window.innerWidth < 768 ? '100vh' : `${panels.length * 100}vh` }}
        >
            <div
                ref={wrapperRef}
                className={`h-screen sticky top-0 left-0 will-change-transform transition-transform duration-200 ease-out ${window.innerWidth < 768 ? '' : 'flex'
                    }`}
                style={{ width: window.innerWidth < 768 ? '100vw' : `${panels.length * 100}vw` }}
            >
                {panels.map((panel, idx) => (
                    <section
                        key={idx}
                        className={`
                          w-screen h-full shrink-0 px-4 sm:px-6 md:px-10 
                          flex flex-col md:flex-row items-center justify-center text-center md:text-left
                          ${panel.bg}
                          ${typeof window !== 'undefined' && window.innerWidth < 768 ? (idx === 0 ? 'flex' : 'hidden') : 'flex'}
                        `}
                        onTouchStart={idx === 0 ? handleTouchStart : undefined}
                        onTouchMove={idx === 0 ? handleTouchMove : (e) => e.preventDefault()}
                    >
                        {/* Image section */}
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className={`w-full md:w-1/2 flex justify-center items-center p-4 md:p-8 lg:p-12 relative`}
                        >
                            <div className="relative w-full max-w-xl">
                                <img
                                    src={panel.img}
                                    alt={panel.name}
                                    className="rounded-xl shadow-2xl w-full transform transition-transform hover:scale-[1.02]"
                                />
                                {/* Decorative elements */}
                                <div className={`absolute -top-4 -left-4 w-16 h-16 rounded-full opacity-20 -z-10`}></div>
                                <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-20 -z-10`}></div>
                            </div>
                        </motion.div>

                        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start p-4">
                            <h2
                                className={`
                                  ${panel.text} 
                                  font-bold mb-4 
                                  text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                                `}
                            >
                                {panel.name}
                            </h2>

                            <p
                                className={`
                                  ${panel.text} 
                                  max-w-lg sm:max-w-xl 
                                  text-base sm:text-lg md:text-xl lg:text-2xl
                                `}
                            >
                                {panel.description}
                            </p>
                            {/* Button only visible on mobile */}
                            <button 
                                className="block bg-white text-black px-4 py-2 cursor-pointer rounded-md shadow-md font-semibold mt-10"
                                onClick={() => { navigate('franchise') }}
                            >
                                View Franchise
                            </button>

                            <div className="absolute md:bottom-0 -bottom-1 left-0 w-full ">
                                <svg
                                    className="w-full h-12 md:h-22 rotate-180"
                                    viewBox="0 0 1440 320"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        fill="white"
                                        d="M0,64L60,90.7C120,117,240,171,360,186.7C480,203,600,181,720,149.3C840,117,960,75,1080,64C1200,53,1320,75,1380,85.3L1440,96L1440,320L0,320Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default FranchiseSection;