import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Star, Clock, Flame, ArrowLeft, ShoppingCart } from 'lucide-react';

const ProductDetails = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const { product, categoryName } = state || {};

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Product Not Found</h2>
                    <button 
                        onClick={() => navigate('/')}
                        className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        Back to Home
                    </button>
                </div>
            </div>
        );
    }

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                size={20}
                className={i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
            />
        ));
    };

    return (
        <div className="min-h-screen mt-30 bg-gradient-to-br from-gray-50 via-white to-blue-50">
            <div className="max-w-6xl mx-auto px-4 py-8">
                <button 
                    onClick={() => navigate(-1)}
                    className="flex items-center space-x-2 text-blue-500 hover:text-blue-700 mb-6"
                >
                    <ArrowLeft size={20} />
                    <span>Back to {categoryName}</span>
                </button>

                <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                    <div className="md:flex">
                        {/* Product Image */}
                        <div className="md:w-1/2">
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Product Details */}
                        <div className="md:w-1/2 p-8">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <span className="text-sm font-medium text-blue-600">{categoryName}</span>
                                    <h1 className="text-3xl font-bold text-gray-800 mt-1">{product.name}</h1>
                                </div>
                                
                            </div>

                            {product.spicy && (
                                <div className="flex items-center space-x-1 mb-4">
                                    <Flame size={16} className="text-red-500" />
                                    <span className="text-sm font-medium text-red-500">Spicy</span>
                                </div>
                            )}

                            <p className="text-gray-600 mb-6">{product.description}</p>
                            <div className="flex items-center space-x-1 rounded-full px-3 py-1">
                                    {renderStars(product.rating)}
                                    <span className="text-sm font-medium text-gray-700 ml-1">{product.rating}</span>
                                </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;