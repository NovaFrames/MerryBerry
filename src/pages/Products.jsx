import React, { useState } from 'react';
import { IceCream, ChefHat, Star, Eye, ShoppingCart, Clock, Flame } from 'lucide-react';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const iceCream = <img src="https://www.foodnetwork.com/content/dam/images/food/fullset/2022/02/9/0/KC3004_katie-lee-biegel-edible-cereal-treat-bowls-for-ice-cream-sundae-2_s4x3.jpg" alt="" />
    const friedChickens = <img src="https://recipes.baccarat.com.au/wp-content/uploads/2021/10/FRIED-CHICKEN-DRUMSTICKS-1024x1024.png" alt="" />
    const iceCreams = [
        {
            id: 1,
            name: "Vanilla Bean Supreme",
            price: 200,
            description: "Rich Madagascar vanilla with real bean specks",
            image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2022/02/9/0/KC3004_katie-lee-biegel-edible-cereal-treat-bowls-for-ice-cream-sundae-2_s4x3.jpg",
            rating: 4.8,
            category: "ice-cream"
        },
        {
            id: 2,
            name: "Chocolate Fudge Delight",
            price: 150,
            description: "Double chocolate with fudge swirls",
            image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2022/02/9/0/KC3004_katie-lee-biegel-edible-cereal-treat-bowls-for-ice-cream-sundae-2_s4x3.jpg",
            rating: 4.9,
            category: "ice-cream"
        },
        {
            id: 3,
            name: "Strawberry Fields",
            price: 130,
            description: "Fresh strawberries with cream base",
            image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2022/02/9/0/KC3004_katie-lee-biegel-edible-cereal-treat-bowls-for-ice-cream-sundae-2_s4x3.jpg",
            rating: 4.7,
            category: "ice-cream"
        },
        {
            id: 4,
            name: "Mint Chocolate Chip",
            price: 110,
            description: "Cool mint with dark chocolate chips",
            image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2022/02/9/0/KC3004_katie-lee-biegel-edible-cereal-treat-bowls-for-ice-cream-sundae-2_s4x3.jpg",
            rating: 4.6,
            category: "ice-cream"
        },
        {
            id: 5,
            name: "Caramel Swirl",
            price: 200,
            description: "Buttery caramel ribbons in vanilla",
            image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2022/02/9/0/KC3004_katie-lee-biegel-edible-cereal-treat-bowls-for-ice-cream-sundae-2_s4x3.jpg",
            rating: 4.8,
            category: "ice-cream"
        },
        {
            id: 6,
            name: "Rocky Road Adventure",
            price: 180,
            description: "Chocolate with marshmallows and nuts",
            image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2022/02/9/0/KC3004_katie-lee-biegel-edible-cereal-treat-bowls-for-ice-cream-sundae-2_s4x3.jpg",
            rating: 4.9,
            category: "ice-cream"
        }
    ];

    const friedChicken = [
        {
            id: 7,
            name: "Classic Crispy Wings",
            price: 129,
            description: "8 pieces of golden crispy chicken wings",
            image: "https://recipes.baccarat.com.au/wp-content/uploads/2021/10/FRIED-CHICKEN-DRUMSTICKS-1024x1024.png",
            rating: 4.7,
            category: "chicken",
            spicy: false
        },
        {
            id: 8,
            name: "Spicy Buffalo Tenders",
            price: 149,
            description: "Hand-breaded tenders with buffalo sauce",
            image: "https://recipes.baccarat.com.au/wp-content/uploads/2021/10/FRIED-CHICKEN-DRUMSTICKS-1024x1024.png",
            rating: 4.8,
            category: "chicken",
            spicy: true
        },
        {
            id: 9,
            name: "Southern Fried Drumsticks",
            price: 139,
            description: "6 juicy drumsticks with secret spices",
            image: "https://recipes.baccarat.com.au/wp-content/uploads/2021/10/FRIED-CHICKEN-DRUMSTICKS-1024x1024.png",
            rating: 4.9,
            category: "chicken",
            spicy: false
        },
        {
            id: 10,
            name: "Nashville Hot Sandwich",
            price: 119,
            description: "Fiery hot chicken breast on brioche bun",
            image: "https://recipes.baccarat.com.au/wp-content/uploads/2021/10/FRIED-CHICKEN-DRUMSTICKS-1024x1024.png",
            rating: 4.6,
            category: "chicken",
            spicy: true
        },
        {
            id: 11,
            name: "Family Bucket",
            price: 249,
            description: "12 pieces mixed chicken for sharing",
            image: "https://recipes.baccarat.com.au/wp-content/uploads/2021/10/FRIED-CHICKEN-DRUMSTICKS-1024x1024.png",
            rating: 4.8,
            category: "chicken",
            spicy: false
        },
        {
            id: 12,
            name: "Honey BBQ Thighs",
            price: 159,
            description: "Glazed chicken thighs with honey BBQ",
            image: "https://recipes.baccarat.com.au/wp-content/uploads/2021/10/FRIED-CHICKEN-DRUMSTICKS-1024x1024.png",
            rating: 4.7,
            category: "chicken",
            spicy: false
        }
    ];

    const allProducts = [...iceCreams, ...friedChicken];

    const filteredProducts = activeCategory === 'all'
        ? allProducts
        : allProducts.filter(product => product.category === activeCategory);

    const viewProduct = (product) => {
        alert(`Viewing ${product.name}\n\nPrice: ${product.price}\nDescription: ${product.description}\nRating: ${product.rating}/5`);
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                size={14}
                className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
            />
        ));
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-white to-orange-50">
            {/* Category Filter */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="flex justify-center space-x-4 mb-12">
                    <button
                        onClick={() => setActiveCategory('all')}
                        className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === 'all'
                                ? 'bg-gradient-to-r from-yellow-500 to-yellow-500 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                            }`}
                    >
                        All Items
                    </button>
                    <button
                        onClick={() => setActiveCategory('ice-cream')}
                        className={`flex items-center space-x-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === 'ice-cream'
                                ? 'bg-gradient-to-r from-yellow-500 to-yellow-500 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                            }`}
                    >
                        <IceCream size={20} />
                        <span>Ice Cream</span>
                    </button>
                    <button
                        onClick={() => setActiveCategory('chicken')}
                        className={`flex items-center space-x-2 px-8 py-3 rounded-full font-semibold transition-all duration-300 ${activeCategory === 'chicken'
                                ? 'bg-gradient-to-r from-yellow-500 to-yellow-500 text-white shadow-lg'
                                : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                            }`}
                    >
                        <ChefHat size={20} />
                        <span>Fried Chicken</span>
                    </button>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
                        >
                            <div className="h-50 w-full overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name || "product"}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="p-6">
                                <div className=" mb-3">
                                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black group-hover:bg-clip-text transition-all duration-300">
                                        {product.name}
                                    </h3>
                                    <div className="flex items-center space-x-1 mt-1">
                                        {renderStars(product.rating)}
                                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                    {product.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-gray-800">
                                        ₹{product.price}
                                    </span>

                                    <button
                                        onClick={() => viewProduct(product)}
                                        className={`flex items-center space-x-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 ${product.category === 'ice-cream'
                                                ? 'bg-yellow-500 hover:bg-yellow-600'
                                                : 'bg-yellow-500 hover:bg-yellow-600'
                                            } text-white shadow-md hover:shadow-lg transform hover:scale-105`}
                                    >
                                        <Eye size={16} />
                                        <span>View</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div className="mt-16 text-center">
                    <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
                        <Clock size={20} />
                        <span>Open Daily: 10:00 AM - 10:00 PM</span>
                    </div>
                    <p className="text-gray-500">
                        The perfect combination of sweet treats and savory delights!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Products;