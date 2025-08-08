import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IceCream, ChefHat, Star, Eye, ShoppingCart, Clock, Flame, Sandwich, Coffee, X, ArrowRight, CupSoda, Drumstick, ChevronLeft, ChevronRight } from 'lucide-react';
import one from '../assets/bg/1.png'
import two from '../assets/bg/2.png'
import three from '../assets/bg/3.png'
import four from '../assets/bg/4.png'
import five from '../assets/bg/5.png'
import six from '../assets/bg/6.png'
import seven from '../assets/bg/7.png'
import { allProducts } from './AllProducts';


// Mock background images
const backgroundImages = {
  'ice-cream': one,
  'chicken':two ,
  'burger': three,
  'sandwich': four,
  'mojito': five,
  'fries': six
};

const Products = () => {
    const [currentIndices, setCurrentIndices] = useState({});

    const categories = [
        { id: 'ice-cream', name: 'Ice Creams', icon: IceCream },
        { id: 'chicken', name: 'Fried Chicken', icon: Drumstick },
        { id: 'burger', name: 'Burger', icon: ShoppingCart },
        { id: 'sandwich', name: 'Sandwich', icon: Sandwich },
        { id: 'milkshake', name: 'Milkshake', icon: CupSoda },
        { id: 'fries', name: 'Fries', icon: Flame }
    ];

    const getCategoryProducts = (categoryId) => {
        return allProducts.filter(product => product.category === categoryId);
    };

    const getCurrentIndex = (categoryId) => {
        return currentIndices[categoryId] || 0;
    };

    const setCurrentIndex = (categoryId, index) => {
        setCurrentIndices(prev => ({
            ...prev,
            [categoryId]: index
        }));
    };

    const handleNext = (categoryId) => {
        const products = getCategoryProducts(categoryId);
        const currentIndex = getCurrentIndex(categoryId);
        if (currentIndex < products.length - 1) {
            setCurrentIndex(categoryId, currentIndex + 1);
        }
    };

    const handlePrevious = (categoryId) => {
        const currentIndex = getCurrentIndex(categoryId);
        if (currentIndex > 0) {
            setCurrentIndex(categoryId, currentIndex - 1);
        }
    };

    // Animation variants
    const imageVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8,
        }),
        center: {
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            scale: 0.8,
        }),
    };

    const textVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 50 : -50,
            opacity: 0,
        }),
    };

    const CategorySection = ({ category }) => {
        const products = getCategoryProducts(category.id);
        const currentIndex = getCurrentIndex(category.id);
        const currentProduct = products[currentIndex];
        const [direction, setDirection] = useState(0);

        if (products.length === 0) return null;

        const paginate = (newDirection) => {
            setDirection(newDirection);
            if (newDirection === 1) {
                handleNext(category.id);
            } else {
                handlePrevious(category.id);
            }
        };

        return (
            <div
                className="min-h-screen bg-cover bg-center bg-no-repeat relative"
                style={{
                    backgroundImage: `url(${backgroundImages[category.id]})`
                }}
            >
                <div className="absolute inset-0 bg-black/60 z-0"></div>
                <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 lg:px-6 md:px-4 sm:px-4">
                    {/* Desktop Layout */}
                    <div className="hidden lg:flex items-center space-x-8 w-full max-w-6xl">
                        {/* Previous Button */}
                        <motion.button
                            onClick={() => currentIndex > 0 && paginate(-1)}
                            disabled={currentIndex === 0}
                            className={`p-4 rounded-full transition-all ${currentIndex === 0
                                ? 'bg-white/10 text-white/30 cursor-not-allowed'
                                : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30'
                                }`}
                            whileHover={{ scale: currentIndex === 0 ? 1 : 1.1 }}
                            whileTap={{ scale: currentIndex === 0 ? 1 : 0.9 }}
                        >
                            <ChevronLeft size={24} />
                        </motion.button>

                        {/* Product Card */}
                        <div className="flex-1 flex items-center space-x-8">
                            {/* Product Image */}
                            <div className="w-1/2">
                                <div className="relative">
                                    <div className="w-96 h-96 mx-auto flex items-center justify-center drop-shadow-2xl">
                                        <AnimatePresence mode="wait" custom={direction}>
                                            <motion.img
                                                key={currentProduct?.id || currentIndex}
                                                src={currentProduct?.image}
                                                alt={currentProduct?.name}
                                                className="w-full h-full object-contain drop-shadow-2xl"
                                                custom={direction}
                                                variants={imageVariants}
                                                initial="enter"
                                                animate="center"
                                                exit="exit"
                                                transition={{
                                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                                    opacity: { duration: 0.2 },
                                                    scale: { duration: 0.3 }
                                                }}
                                            />
                                        </AnimatePresence>
                                    </div>
                                    {currentProduct?.spicy && (
                                        <motion.div
                                            className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg"
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ delay: 0.3, type: "spring", stiffness: 500 }}
                                        >
                                            <Flame size={20} className="text-red-500" />
                                        </motion.div>
                                    )}
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="w-1/2 text-white">
                                <div className="mb-8">
                                    <motion.h2
                                        className="text-3xl font-bold mb-2 tracking-wider"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                    >
                                        {category.name}
                                    </motion.h2>
                                    <motion.p
                                        className="text-white/80 text-sm uppercase tracking-widest"
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        Presented by Merry Berry
                                    </motion.p>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <AnimatePresence mode="wait" custom={direction}>
                                            <motion.div
                                                key={currentProduct?.id || currentIndex}
                                                custom={direction}
                                                variants={textVariants}
                                                initial="enter"
                                                animate="center"
                                                exit="exit"
                                                transition={{
                                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                                    opacity: { duration: 0.2 }
                                                }}
                                            >
                                                <h3 className="text-3xl font-bold mb-2">
                                                    {currentProduct?.name}
                                                </h3>
                                                <p className="text-white/80 text-lg">
                                                    {currentProduct?.description}
                                                </p>
                                            </motion.div>
                                        </AnimatePresence>
                                    </div>
                                </div>
                                
                                {/* Product Counter */}
                                <div className="mt-8 flex items-center space-x-2">
                                    {products.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`w-2 h-2 rounded-full transition-all ${
                                                index === currentIndex ? 'bg-white' : 'bg-white/30'
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Next Button */}
                        <motion.button
                            onClick={() => currentIndex < products.length - 1 && paginate(1)}
                            disabled={currentIndex === products.length - 1}
                            className={`p-4 rounded-full transition-all ${currentIndex === products.length - 1
                                ? 'bg-white/10 text-white/30 cursor-not-allowed'
                                : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30'
                                }`}
                            whileHover={{ scale: currentIndex === products.length - 1 ? 1 : 1.1 }}
                            whileTap={{ scale: currentIndex === products.length - 1 ? 1 : 0.9 }}
                        >
                            <ChevronRight size={24} />
                        </motion.button>
                    </div>

                    {/* Mobile Layout */}
                    <div className="lg:hidden flex flex-col items-center w-full max-w-lg space-y-6">
                        {/* Mobile Image */}
                        <div className="relative flex items-center w-full">
                            <div className="flex-1 flex justify-center pt-30">
                                <div className="relative">
                                    <div className="w-72 h-72 md:w-80 md:h-80 flex items-center justify-center drop-shadow-2xl">
                                        <AnimatePresence mode="wait" custom={direction}>
                                            <motion.img
                                                key={currentProduct?.id || currentIndex}
                                                src={currentProduct?.image}
                                                alt={currentProduct?.name}
                                                className="w-full h-full object-contain drop-shadow-2xl"
                                                custom={direction}
                                                variants={imageVariants}
                                                initial="enter"
                                                animate="center"
                                                exit="exit"
                                                transition={{
                                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                                    opacity: { duration: 0.2 },
                                                    scale: { duration: 0.3 }
                                                }}
                                            />
                                        </AnimatePresence>
                                    </div>
                                    {currentProduct?.spicy && (
                                        <motion.div
                                            className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg"
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ delay: 0.3, type: "spring", stiffness: 500 }}
                                        >
                                            <Flame size={16} className="text-red-500" />
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Mobile Navigation */}
                        <div className='flex justify-around w-full'>
                            <motion.button
                                onClick={() => currentIndex > 0 && paginate(-1)}
                                disabled={currentIndex === 0}
                                className={`p-3 rounded-full transition-all ${currentIndex === 0
                                    ? 'bg-white/10 text-white/30 cursor-not-allowed'
                                    : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30'
                                    }`}
                                whileHover={{ scale: currentIndex === 0 ? 1 : 1.1 }}
                                whileTap={{ scale: currentIndex === 0 ? 1 : 0.9 }}
                            >
                                <ChevronLeft size={20} />
                            </motion.button>

                            <motion.button
                                onClick={() => currentIndex < products.length - 1 && paginate(1)}
                                disabled={currentIndex === products.length - 1}
                                className={`p-3 rounded-full transition-all ${currentIndex === products.length - 1
                                    ? 'bg-white/10 text-white/30 cursor-not-allowed'
                                    : 'bg-white/20 backdrop-blur-md text-white hover:bg-white/30'
                                    }`}
                                whileHover={{ scale: currentIndex === products.length - 1 ? 1 : 1.1 }}
                                whileTap={{ scale: currentIndex === products.length - 1 ? 1 : 0.9 }}
                            >
                                <ChevronRight size={20} />
                            </motion.button>
                        </div>

                        {/* Mobile Product Info */}
                        <div className="text-white text-center px-4 mt-1">
                            <div className="mb-6">
                                <motion.h2
                                    className="text-3xl md:text-4xl font-bold mb-3 tracking-wider"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                >
                                    {category.name}
                                </motion.h2>
                                <motion.p
                                    className="text-white/80 text-xs md:text-sm uppercase tracking-widest"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Presented by Merry Berry
                                </motion.p>
                            </div>

                            <div className="space-y-4">
                                <div>
                                    <AnimatePresence mode="wait" custom={direction}>
                                        <motion.div
                                            key={currentProduct?.id || currentIndex}
                                            custom={direction}
                                            variants={textVariants}
                                            initial="enter"
                                            animate="center"
                                            exit="exit"
                                            transition={{
                                                x: { type: "spring", stiffness: 300, damping: 30 },
                                                opacity: { duration: 0.2 }
                                            }}
                                        >
                                            <h3 className="text-xl md:text-2xl font-bold mb-2">
                                                {currentProduct?.name}
                                            </h3>
                                            <p className="text-white/80 text-sm md:text-base">
                                                {currentProduct?.description}
                                            </p>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                            
                            {/* Mobile Product Counter */}
                            <div className="mt-6 flex justify-center items-center space-x-2">
                                {products.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`w-2 h-2 rounded-full transition-all ${
                                            index === currentIndex ? 'bg-white' : 'bg-white/30'
                                        }`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div>
            {categories.map((category) => (
                <CategorySection key={category.id} category={category} />
            ))}
        </div>
    );
};

export default Products;