import React, { useState } from 'react';
import { IceCream, ChefHat, Star, Eye, ShoppingCart, Clock, Flame, Sandwich, Coffee, Filter, X } from 'lucide-react';

const Products = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

    const categories = [
        { id: 'all', name: 'All Items', icon: null },
        { id: 'ice-cream', name: 'Ice Creams', icon: IceCream },
        { id: 'chicken', name: 'Fried Chicken', icon: ChefHat },
        { id: 'burger', name: 'Burger', icon: Sandwich },
        { id: 'sandwich', name: 'Sandwich', icon: Sandwich },
        { id: 'mojito', name: 'Mojito', icon: Coffee },
        { id: 'fries', name: 'Fries', icon: Flame }
    ];

    const iceCreams = [
        {
            id: 1,
            name: "Vanilla Bean Supreme",
            description: "Our signature vanilla ice cream made with premium Madagascar vanilla beans. Each scoop is packed with real vanilla bean specks for an authentic, rich flavor. The creamy base is churned slowly to create the perfect velvety texture that melts luxuriously on your tongue. A timeless classic that pairs perfectly with any topping or enjoyed on its own.",
            image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2022/02/9/0/KC3004_katie-lee-biegel-edible-cereal-treat-bowls-for-ice-cream-sundae-2_s4x3.jpg",
            rating: 4.8,
            category: "ice-cream"
        },
        {
            id: 2,
            name: "Chocolate Fudge Delight",
            description: "A chocolate lover's dream come true! We start with a rich, dark chocolate base made from premium cocoa beans, then swirl in ribbons of homemade fudge that stay perfectly soft even when frozen. The intense chocolate flavor develops in layers, starting with deep cocoa notes and finishing with a sweet fudge aftertaste. Contains real Belgian chocolate chunks for occasional bursts of extra indulgence.",
            image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2022/02/9/0/KC3004_katie-lee-biegel-edible-cereal-treat-bowls-for-ice-cream-sundae-2_s4x3.jpg",
            rating: 4.9,
            category: "ice-cream"
        },
        {
            id: 3,
            name: "Strawberry Fields",
            description: "Made with sun-ripened strawberries picked at peak season, this flavor bursts with natural fruitiness. We macerate fresh strawberries in their own juices before folding them into a sweet cream base. You'll find real strawberry pieces throughout, with just the right balance of tart and sweet. The pink hue comes entirely from the fruit - no artificial colors added. A refreshing choice for warm summer days.",
            image: "https://www.foodnetwork.com/content/dam/images/food/fullset/2022/02/9/0/KC3004_katie-lee-biegel-edible-cereal-treat-bowls-for-ice-cream-sundae-2_s4x3.jpg",
            rating: 4.7,
            category: "ice-cream"
        }
    ];

    const friedChicken = [
        {
            id: 7,
            name: "Classic Crispy Wings",
            description: "Our signature fried chicken wings with an impossibly crispy exterior that gives way to juicy, tender meat inside. Each wing is brined for 12 hours in our secret spice blend, then double-dredged in seasoned flour for extra crunch. Fried to golden perfection in small batches using a blend of oils for optimal flavor. Served with your choice of dipping sauce - try it with our house-made buttermilk ranch for the ultimate experience.",
            image: "https://recipes.baccarat.com.au/wp-content/uploads/2021/10/FRIED-CHICKEN-DRUMSTICKS-1024x1024.png",
            rating: 4.7,
            category: "chicken",
            spicy: false
        },
        {
            id: 8,
            name: "Spicy Buffalo Tenders",
            description: "Premium chicken tenders hand-breaded with our special spicy flour blend, then fried until golden and tossed in authentic Buffalo sauce made with aged cayenne peppers. The tenders are cut from whole chicken breasts for maximum juiciness, with the perfect meat-to-breading ratio. Our Buffalo sauce delivers the ideal balance of heat, tang, and buttery richness. Served with cooling blue cheese dressing and crisp celery sticks to tame the heat.",
            image: "https://recipes.baccarat.com.au/wp-content/uploads/2021/10/FRIED-CHICKEN-DRUMSTICKS-1024x1024.png",
            rating: 4.8,
            category: "chicken",
            spicy: true
        }
    ];

    const burgers = [
        {
            id: 13,
            name: "Classic Beef Burger",
            description: "Juicy beef patty with lettuce, tomato, onion, and our special sauce on a toasted bun.",
            image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500",
            rating: 4.6,
            category: "burger"
        },
        {
            id: 14,
            name: "Chicken Deluxe Burger",
            description: "Grilled chicken breast with avocado, bacon, and mayo on a brioche bun.",
            image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500",
            rating: 4.5,
            category: "burger"
        }
    ];

    const sandwiches = [
        {
            id: 15,
            name: "Club Sandwich",
            description: "Triple-layered sandwich with turkey, bacon, lettuce, and tomato.",
            image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=500",
            rating: 4.4,
            category: "sandwich"
        },
        {
            id: 16,
            name: "Grilled Cheese Supreme",
            description: "Three types of cheese grilled to perfection with crispy bacon.",
            image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=500",
            rating: 4.7,
            category: "sandwich"
        }
    ];

    const mojitos = [
        {
            id: 17,
            name: "Classic Mojito",
            description: "Fresh mint, lime, and soda water for the perfect refreshing drink.",
            image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500",
            rating: 4.8,
            category: "mojito"
        },
        {
            id: 18,
            name: "Strawberry Mojito",
            description: "Classic mojito with fresh strawberries and a hint of sweetness.",
            image: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=500",
            rating: 4.6,
            category: "mojito"
        }
    ];

    const fries = [
        {
            id: 19,
            name: "Classic French Fries",
            description: "Golden crispy fries seasoned with salt and served hot.",
            image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500",
            rating: 4.3,
            category: "fries"
        },
        {
            id: 20,
            name: "Loaded Cheese Fries",
            description: "Crispy fries topped with melted cheese, bacon bits, and green onions.",
            image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=500",
            rating: 4.7,
            category: "fries"
        }
    ];

    const allProducts = [...iceCreams, ...friedChicken, ...burgers, ...sandwiches, ...mojitos, ...fries];

    const filteredProducts = activeCategory === 'all'
        ? allProducts
        : allProducts.filter(product => product.category === activeCategory);

    const handleCategorySelect = (categoryId) => {
        setActiveCategory(categoryId);
        setIsMobileSidebarOpen(false); // Close mobile sidebar after selection
    };

    const viewProduct = (product) => {
        // View product details - you can implement your own navigation logic here
        console.log('Viewing product:', product);
        alert(`Viewing details for: ${product.name}`);
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
            <div className="flex">
                {/* Desktop Sidebar */}
                <div className="hidden lg:block fixed left-0 top-0 h-full w-64 bg-white shadow-lg overflow-y-auto z-10">
                    <div className="p-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Categories</h2>
                        <div className="space-y-2">
                            {categories.map((category) => {
                                const Icon = category.icon;
                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => handleCategorySelect(category.id)}
                                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                                            activeCategory === category.id
                                                ? 'bg-gradient-to-r from-yellow-500 to-yellow-500 text-white shadow-lg'
                                                : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                    >
                                        {Icon && <Icon size={20} />}
                                        <span>{category.name}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Mobile Sidebar Overlay */}
                {isMobileSidebarOpen && (
                    <div className="lg:hidden fixed inset-0 z-50">
                        {/* Backdrop */}
                        <div 
                            className="absolute inset-0 bg-black bg-opacity-50"
                            onClick={() => setIsMobileSidebarOpen(false)}
                        ></div>
                        
                        {/* Sidebar */}
                        <div className="absolute left-0 top-0 h-full w-80 bg-white shadow-lg overflow-y-auto">
                            <div className="p-6">
                                <div className="flex justify-between items-center mb-6">
                                    <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
                                    <button
                                        onClick={() => setIsMobileSidebarOpen(false)}
                                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                                    >
                                        <X size={24} className="text-gray-600" />
                                    </button>
                                </div>
                                <div className="space-y-2">
                                    {categories.map((category) => {
                                        const Icon = category.icon;
                                        return (
                                            <button
                                                key={category.id}
                                                onClick={() => handleCategorySelect(category.id)}
                                                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                                                    activeCategory === category.id
                                                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-500 text-white shadow-lg'
                                                        : 'text-gray-700 hover:bg-gray-100'
                                                }`}
                                            >
                                                {Icon && <Icon size={20} />}
                                                <span>{category.name}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Main Content */}
                <div className="flex-1 lg:ml-64">
                    <div className="max-w-6xl mx-auto px-4 lg:px-6 py-8">
                        {/* Mobile Header with Filter Button */}
                        <div className="lg:hidden flex justify-between items-center mb-6">
                            <div>
                                <h1 className="text-2xl font-bold text-gray-800">
                                    {activeCategory === 'all' ? 'All Products' : categories.find(cat => cat.id === activeCategory)?.name}
                                </h1>
                                <p className="text-gray-600 text-sm">
                                    {filteredProducts.length} item{filteredProducts.length !== 1 ? 's' : ''} available
                                </p>
                            </div>
                            <button
                                onClick={() => setIsMobileSidebarOpen(true)}
                                className="flex items-center space-x-2 px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
                            >
                                <Filter size={20} />
                                <span>Filter</span>
                            </button>
                        </div>

                        {/* Desktop Header */}
                        <div className="hidden lg:block mb-8">
                            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                                {activeCategory === 'all' ? 'All Products' : categories.find(cat => cat.id === activeCategory)?.name}
                            </h1>
                            <p className="text-gray-600">
                                {filteredProducts.length} item{filteredProducts.length !== 1 ? 's' : ''} available
                            </p>
                        </div>

                        {/* Products Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                            {filteredProducts.map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden group"
                                >
                                    <div className="h-48 w-full overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name || "product"}
                                            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>

                                    <div className="p-6">
                                        <div className="mb-3">
                                            <h3 className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black group-hover:bg-clip-text transition-all duration-300">
                                                {product.name}
                                            </h3>
                                            <div className="flex items-center space-x-1 mt-1">
                                                {renderStars(product.rating)}
                                                <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                                            {product.description}
                                        </p>

                                        <div className="flex justify-between items-center">
                                            <button
                                                onClick={() => viewProduct(product)}
                                                className="flex items-center space-x-2 px-6 py-2 rounded-full font-semibold transition-all duration-300 bg-yellow-500 hover:bg-yellow-600 text-white shadow-md hover:shadow-lg transform hover:scale-105"
                                            >
                                                <Eye size={16} />
                                                <span>View Details</span>
                                            </button>
                                            {product.spicy && (
                                                <div className="flex items-center space-x-1 text-red-500">
                                                    <Flame size={16} />
                                                    <span className="text-xs font-medium">Spicy</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Empty State */}
                        {filteredProducts.length === 0 && (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">🍽️</div>
                                <h3 className="text-xl font-semibold text-gray-600 mb-2">No items found</h3>
                                <p className="text-gray-500">Try selecting a different category</p>
                            </div>
                        )}

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
            </div>
        </div>
    );
};

export default Products;