import React, { useState } from 'react'
import {
  Users,
  Heart,
  Star,
  Clock,
  DollarSign,
  GraduationCap,
  Coffee,
  MapPin,
  Mail,
  Phone,
  ChefHat,
  IceCream,
  Award,
  TrendingUp
} from 'lucide-react'
import Footer from '../components/Footer'
import c1 from '../assets/career/c1.png'
import c2 from '../assets/career/c2.png'
import c3 from '../assets/career/c3.png'
import bg from '../assets/career/bg.png'

const Career = () => {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black/50 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-4 gap-4 h-full">
            <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=400&q=80" alt="" className="w-full h-full object-cover" />
            <img src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=400&q=80" alt="" className="w-full h-full object-cover" />
            <img src="https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80" alt="" className="w-full h-full object-cover" />
            <img src="https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=400&q=80" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-40 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
            Join Our <span className="text-yellow-300">Delicious Team</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Start a sweet career journey with us — where every day is filled with flavor and fun.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 animate-bounce">
              <ChefHat className="w-8 h-8" />
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 animate-bounce">
              <IceCream className="w-8 h-8" />
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 animate-bounce">
              <Heart className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      <section
        className="py-24 bg-cover bg-fuchsia-100 bg-center bg-no-repeat"
        
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left Text Content */}
            <div className='md:ml-20'>
              <h2 className="text-4xl font-bold text-yellow-600 mb-4">
                We're Hiring Milkshake Makers!
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Love blending flavors and delighting customers? Join our milkshake team and serve joy in every glass!
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>🍧 <strong>Part-time:</strong> ₹10,000 / month</li>
                <li>🍨 <strong>Full-time:</strong> ₹20,000 / month</li>
              </ul>
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
                Apply Now
              </button>
            </div>

            {/* Right Image */}
            <div className="">
              <img
                src={c1} // 🔁 Replace with your actual image path
                alt="Milkshake Job"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className="py-24 bg-[#fff9f0]"

      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left Image */}
            <div className="">
              <img
                src={c2} // 🔁 Replace with your actual image path
                alt="Milkshake Job"
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Right Text Content */}
            <div className="md:mr-20">
              <h2 className="text-4xl font-bold text-yellow-600 mb-4">
                We're Hiring Chicken Fry Makers!
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Passionate about crispy perfection and savory flavors? Join our kitchen crew and master the art of making the perfect fried chicken!
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>🍗 <strong>Part-time:</strong> ₹10,000 / month</li>
                <li>🔥 <strong>Full-time:</strong> ₹20,000 / month</li>
              </ul>
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
                Apply Now
              </button>
            </div>

          </div>
        </div>
      </section>

      <section
        className="py-24 bg-cover bg-fuchsia-100 bg-center bg-no-repeat"
        // style={{
        //   backgroundImage: `url(${bg})`, // 🔁 Replace with your actual image path
        // }}
      >
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left Text Content */}
            <div className='md:ml-20'>
              <h2 className="text-4xl font-bold text-yellow -600 mb-4">
                We're Hiring Ice Cream Sundae Makers!
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Have a passion for sweet creations? Join our team and craft delightful ice cream sundaes that bring smiles to every customer!
              </p>
              <ul className="text-gray-700 space-y-2 mb-6">
                <li>🍦 <strong>Part-time:</strong> ₹10,000 / month</li>
                <li>🍨 <strong>Full-time:</strong> ₹20,000 / month</li>
              </ul>
              <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-300">
                Apply Now
              </button>
            </div>

            {/* Right Image */}
            <div className="">
              <img
                src={c3} // 🔁 Replace with your actual image path
                alt="Milkshake Job"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Career
