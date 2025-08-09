import React from 'react';
import h10 from '../assets/home/10.png';
import h12 from '../assets/home/12.png';
import { useNavigate } from 'react-router-dom';

export default function IceCreamIntro() {

  const navigate = useNavigate();

  return (
    <section className="relative bg-gradient-to-br from-amber-50 to-rose-50 min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-amber-200/30 blur-xl"></div>
        <div className="absolute bottom-1/3 right-20 w-60 h-60 rounded-full bg-rose-200/30 blur-xl"></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-yellow-100/40 blur-lg"></div>
      </div>

      {/* Ice cream images with floating animation */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center gap-12">
        {/* Left image with shadow and animation */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <img
            src={h10}
            alt="Chocolate Ice Cream"
            className="w-full max-w-md animate-float transition-transform duration-300 hover:scale-105"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          />
          <div className="absolute -bottom-6 left-1/4 w-1/2 h-6 bg-black/10 rounded-full blur-md"></div>
        </div>

        {/* Content with improved typography */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 px-4 py-2 rounded-full mb-4">
            <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
            <span className="text-sm font-medium text-amber-900">Since 2023</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Handcrafted <span className="text-amber-600">Organic</span> Ice Cream & Fresh Chickens
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Made with milk from our own pasture-raised cows in the hills of North Wales. 
            Each scoop carries 25 years of passion for rich, creamy perfection.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button onClick={()=>{navigate('products')}} className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-200/50">
              Our Flavors
            </button>
            <button onClick={()=>{navigate('franchise')}} className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 font-semibold py-3 px-8 rounded-full transition-all duration-300">
              See our Franchise
            </button>
          </div>
        </div>

        {/* Right image that appears on larger screens */}
        <div className="hidden lg:block absolute -right-20 -top-30 opacity-90">
          <img
            src={h12}
            alt="Vanilla Ice Cream"
            className="w-64 rotate-12 animate-float-delay"
            style={{ animation: 'float 7s ease-in-out 1s infinite' }}
          />
          <div className="absolute -bottom-4 left-1/4 w-1/2 h-4 bg-black/10 rounded-full blur-md"></div>
        </div>
      </div>

      {/* Floating sprinkles decoration */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-2">
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="w-2 h-2 rounded-full"
            style={{
              backgroundColor: ['#F59E0B', '#EF4444', '#10B981', '#3B82F6'][i % 4],
              animation: `float ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite`,
              transform: `scale(${0.5 + Math.random()})`
            }}
          ></div>
        ))}
      </div>

      {/* Add the floating animation to your CSS or use a CSS-in-JS solution */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-delay {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}