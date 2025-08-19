import React, { useState } from 'react';
import { Star, MapPin, DollarSign, Users, ChevronLeft, ChevronRight, X, TrendingUp, Clock, Shield, Award, Phone, Mail, CheckCircle, ArrowRight, Zap, Target, Crown, Gift, ChefHat, IceCream, Heart, Locate, LocationEdit } from 'lucide-react';
import Footer from '../components/Footer';
import about3 from '../assets/about/about3.png'
import f1 from '../assets/franchise/f1.png'
import f2 from '../assets/franchise/f2.png'
import f3 from '../assets/franchise/f3.png'
import f4 from '../assets/franchise/f4.png'
import roi from '../assets/franchise/roi.png'
import fra1 from '../assets/franchise/franchise1.png'
import fra2 from '../assets/franchise/franchise2.png'
import fra3 from '../assets/franchise/franchise3.png'
import fra4 from '../assets/franchise/franchise4.png'
import map from '../assets/map/map.png'

const Franchise = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    investment: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      location: '',
      investment: '',
      message: ''
    });
  };

  const branches = [
    {
      name: "Merry Berry - Fairlands",
      top: "32%",
      left: "40%",
      image: fra1,
      details: "Located in Fairlands, Salem. Famous for ice creams & desserts.",
    },
    {
      name: "Merry Berry - Hasthampatti",
      top: "34%",
      left: "43%",
      image: fra2,
      details: "Popular outlet near Hasthampatti junction, Salem.",
    },
    {
      name: "Merry Berry - Yercaud",
      top: "32%",
      left: "46%",
      image: fra3,
      details: "Located at Yercaud hill area, must-visit place for families.",
    },
    {
      name: "Merry Berry - Ammapet",
      top: "34%",
      left: "49%",
      image: fra4,
      details: "Located at Ammapet Main Road, a must-visit place for families.",
    },
  ];

  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % branches.length;
    setCurrentIndex(newIndex);
    setSelectedBranch(branches[newIndex]);
  };

  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + branches.length) % branches.length;
    setCurrentIndex(newIndex);
    setSelectedBranch(branches[newIndex]);
  };
  const [currentIndexes, setCurrentIndexes] = useState(0);

  const cards = [
    {
      title: "Grab & Go",
      sales: "₹3,00,000",
      expenses: "₹67,500",
      netProfit: "₹67,500",
      netProfitPercent: "22.5%",
      grossProfit: "₹1,35,000",
    },
    {
      title: "Urban Junction",
      sales: "₹5,50,000",
      expenses: "₹1,27,500",
      netProfit: "₹1,20,000",
      netProfitPercent: "21.82%",
      grossProfit: "₹2,47,500",
    },
    {
      title: "Metro Junction",
      sales: "₹7,50,000",
      expenses: "₹1,62,500",
      netProfit: "₹1,75,000",
      netProfitPercent: "23.33%",
      grossProfit: "₹3,37,500",
    },
  ];

  const nextCard = () => {
    setCurrentIndexes((prev) => (prev + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndexes((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Not sticky */}
      <section className="relative overflow-hidden bg-black/50 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-4 gap-4 h-full">
            <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="" className="w-full h-full object-cover" />
            <img src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="" className="w-full h-full object-cover" />
            <img src="https://images.unsplash.com/photo-1562967914-608f82629710?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="" className="w-full h-full object-cover" />
            <img src="https://images.unsplash.com/photo-1576506295286-5cda18df43e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-40 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
            Join <span className="text-yellow-300">Merry Berry</span> Family
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Bring the celebration of flavor to your city — where crispy meets creamy in every scoop and bite.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 animate-bounce">
              <ChefHat className="w-8 h-8" />
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 animate-bounce" style={{ animationDelay: '0.2s' }}>
              <IceCream className="w-8 h-8" />
            </div>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 animate-bounce" style={{ animationDelay: '0.4s' }}>
              <Heart className="w-8 h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Sections */}
      <div className="relative">
        {/* Branches Section - Sticky */}
        <section className="sticky top-20 pb-20 pt-40 md:pt-30 h-screen flex items-center bg-[#fff9f0] z-10">
          <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start p-8 z-10">

            {/* Left side */}
            <div className="text-white space-y-6">
              <h2 className="text-xl pt-10 md:text-4xl font-bold">
                <span className="text-black">Our Merry Berry Branches in Tamilnadu</span>
              </h2>

              <div className="mt-6 bg-white rounded-lg shadow-md p-4">
                <img
                  src={selectedBranch.image}
                  alt={selectedBranch.name}
                  className="w-full h-50 md:h-96 object-cover rounded-lg"
                />

                {/* Prev / Next Buttons */}
                <div className="flex justify-between mt-4">
                  <button
                    onClick={handlePrev}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300"
                  >
                    <ChevronLeft className="h-5 w-5" /> Prev
                  </button>
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300"
                  >
                    Next <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right side - Map */}
            <div className="relative w-full mb-50">
              <img src={map} alt="Tamil Nadu Map" className="w-full h-auto" />

              {/* Show only the selected branch pin */}
              {selectedBranch && (
                <>
                  <button
                    className="absolute text-red-500"
                    style={{ top: selectedBranch.top, left: selectedBranch.left }}
                    onClick={() => {
                      // no need to update, already selected
                    }}
                  >
                    <MapPin className="h-4 w-4 md:h-6 md:w-6 text-red-600 cursor-pointer" />
                  </button>

                  {/* Overlay Modal near selected pin */}
                  <div
                    className="absolute bg-white shadow-lg rounded-lg p-3 text-sm w-30 md:w-48 z-20"
                    style={{
                      top: `calc(${selectedBranch.top} - 100px)`, // position above pin
                      left: `calc(${selectedBranch.left} + 70px)`, // little right
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-red-600 text-sm">{selectedBranch.name}</h4>
                    </div>
                    <p className="text-gray-700 mt-1">{selectedBranch.details}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Grab & Go Section - Sticky */}
        <section className="sticky top-0 h-screen flex items-center bg-gradient-to-br from-fuchsia-50 to-purple-50 z-20">
          <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-12 md:p-12 z-10">
            <div className="w-full h-full flex items-center">
              <img
                src={f1}
                alt="Grab and Go Kiosk"
                className="rounded-2xl shadow-xl object-cover w-full max-h-[80vh]"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-2">
                Kiosk Model
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Grab & Go
              </h2>
              <div className="text-2xl md:text-4xl font-bold text-purple-600">
                ₹2.99 Lakhs
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Franchise Fee: ₹2.99 Lakhs + GST</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Area Required: 50 to 100 sq.ft</span>
                  </li>
                  {/* Add other list items similarly */}
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100">
                <p className="text-lg font-semibold text-gray-800">
                  Total Investment: <span className="text-purple-600">₹7.00 Lakhs</span>
                </p>
              </div>
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                Enquire Now
              </button>
            </div>
          </div>
        </section>

        {/* Urban Junction Section - Sticky */}
        <section className="sticky top-0 h-screen flex items-center bg-gradient-to-br from-amber-50 to-orange-50 z-30">
          <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-12 md:p-12 z-10">
            <div className="space-y-4 order-2 md:order-1">
              <div className="inline-block bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-medium mb-2">
                Café Model
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Urban Junction
              </h2>
              <div className="text-2xl md:text-4xl font-bold text-amber-600">
                ₹4.99 Lakhs
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Franchise Fee: ₹4.99 Lakhs</span>
                  </li>
                  {/* Add other list items similarly */}
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
                <p className="text-lg font-semibold text-gray-800">
                  Total Investment: <span className="text-amber-600">₹15.00 Lakhs</span>
                </p>
              </div>
              <button className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                Enquire Now
              </button>
            </div>
            <div className="w-full h-full flex items-center order-1 md:order-2">
              <img
                src={f3}
                alt="Urban Junction Café"
                className="rounded-2xl shadow-xl object-cover w-full max-h-[80vh]"
              />
            </div>
          </div>
        </section>

        {/* Metro Junction Section - Sticky */}
        <section className="sticky top-0 h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 z-40">
          <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-12 md:p-12 z-10">
            <div className="w-full h-full flex items-center">
              <img
                src={f4}
                alt="Metro Junction Outlet"
                className="rounded-2xl shadow-xl object-cover w-full max-h-[80vh]"
              />
            </div>
            <div className="space-y-4">
              <div className="inline-block bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium mb-2">
                Premium Outlet
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Metro Junction
              </h2>
              <div className="text-2xl md:text-4xl font-bold text-indigo-600">
                ₹4.99 Lakhs
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Franchise Fee: ₹4.99 Lakhs</span>
                  </li>
                  {/* Add other list items similarly */}
                </ul>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100">
                <p className="text-lg font-semibold text-gray-800">
                  Total Investment: <span className="text-indigo-600">₹17.50 Lakhs</span>
                </p>
              </div>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                Enquire Now
              </button>
            </div>
          </div>
        </section>

        {/* ROI Section - Not sticky */}
        {/* ROI Overview Section */}
        <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 sticky top-0 h-screen z-50 py-16 px-6 md:px-12 overflow-hidden">
  {/* Animated background elements */}
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
    <div className="absolute top-20 right-20 w-40 h-40 bg-amber-200 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
    <div className="absolute bottom-20 left-20 w-60 h-60 bg-orange-200 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
  </div>

  <div className="max-w-7xl mx-auto h-full flex flex-col justify-center relative z-10">
    {/* Heading with animated underline */}
    <div className="text-center mb-12 group">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
        <span className="block font-serif italic text-amber-600">Our</span>
        <span className=" mt-2 text-amber-700 relative inline-block">
          Return on Investment
       
        </span>
      </h2>
      <p className="text-lg text-gray-600 max-w-3xl mx-auto relative">
        At Merry Berry, we're committed to delivering strong, sustainable returns for our franchise partners through transparent business models.
        <span className="absolute bottom-0 left-1/2 h-px w-20 bg-gradient-to-r from-transparent via-amber-400 to-transparent transform -translate-x-1/2"></span>
      </p>
    </div>

    {/* ROI Cards with animated hover effects */}
    <div className="hidden md:grid grid-cols-3 gap-8 mt-8">
      {cards.map((card, index) => (
        <div 
          key={index}
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-amber-100 relative overflow-hidden"
        >
          {/* Decorative element */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-amber-100 rounded-bl-2xl transform rotate-180"></div>
          
          {/* Card header with icon */}
          <div className="flex items-center mb-4">
            <div className="p-2 bg-amber-100 rounded-lg mr-3">
              <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
          </div>
          
          {/* Data visualization */}
          <div className="h-2 bg-gray-100 rounded-full mb-6 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
              style={{ width: `${parseInt(card.netProfitPercent)}%` }}
            ></div>
          </div>
          
          {/* Data items with animated hover */}
          <div className="space-y-3">
            {[
              { label: "Monthly Sales", value: card.sales, color: "text-gray-800" },
              { label: "Expenses", value: card.expenses, color: "text-gray-800" },
              { label: "Net Profit", value: card.netProfit, color: "text-green-600" },
              { label: "Profit %", value: card.netProfitPercent, color: "text-green-600" },
              { label: "Gross Profit", value: card.grossProfit, color: "text-amber-600" },
            ].map((item, i) => (
              <div 
                key={i}
                className="flex justify-between items-center pb-2 border-b border-gray-100 group"
              >
                <span className="text-gray-600 font-medium transition-colors duration-300 group-hover:text-gray-800">
                  {item.label}
                </span>
                <span className={`font-semibold ${item.color} transition-transform duration-300 group-hover:scale-105`}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
          
          {/* Floating action button */}

        </div>
      ))}
    </div>

    {/* Enhanced Mobile Carousel */}
    <div className="md:hidden mt-8 relative">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 mb-6 border border-amber-100 relative overflow-hidden">
        {/* Progress indicator */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gray-100">
          <div 
            className="h-full bg-gradient-to-r from-amber-400 to-orange-500"
            style={{ width: `${(currentIndexes + 1) / cards.length * 100}%` }}
          ></div>
        </div>
        
        <div className="flex items-center mb-4">
          <div className="p-2 bg-amber-100 rounded-lg mr-3">
            <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </div>
          <h3 className="text-lg font-bold text-gray-800">{cards[currentIndexes].title}</h3>
        </div>
        
        {/* Mini chart for mobile */}
        <div className="flex items-end h-16 gap-1 mb-4">
          {[30, 60, 45, 80, 65].map((height, i) => (
            <div 
              key={i}
              className={`flex-1 rounded-t-sm ${i === 2 ? 'bg-amber-500' : 'bg-amber-200'}`}
              style={{ height: `${height}%` }}
            ></div>
          ))}
        </div>
        
        <div className="space-y-3 text-sm">
          {[
            { label: "Monthly Sales", value: cards[currentIndexes].sales },
            { label: "Expenses", value: cards[currentIndexes].expenses },
            { label: "Net Profit", value: cards[currentIndexes].netProfit, color: "text-green-600" },
            { label: "Profit %", value: cards[currentIndexes].netProfitPercent, color: "text-green-600" },
            { label: "Gross Profit", value: cards[currentIndexes].grossProfit, color: "text-amber-600" },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center pb-2 border-b border-gray-100">
              <span className="text-gray-600 font-medium">{item.label}</span>
              <span className={`font-semibold ${item.color || "text-gray-800"}`}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced navigation with progress */}
      <div className="flex items-center justify-between px-4">
        <button 
          onClick={prevCard}
          className="p-3 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 transition shadow-sm flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex-1 px-4">
          <div className="relative h-1 bg-gray-200 rounded-full">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"
              style={{ width: `${(currentIndexes + 1) / cards.length * 100}%` }}
            ></div>
          </div>
        </div>
        
        <button 
          onClick={nextCard}
          className="p-3 rounded-full bg-amber-100 text-amber-700 hover:bg-amber-200 transition shadow-sm flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</section>

        {/* ROI Details Sections */}
        <section className="sticky top-0 h-screen flex items-center bg-gradient-to-br from-purple-50 to-indigo-50 z-60">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 py-12 md:p-12">
            <div className="relative h-full flex items-center">
              <img src={roi} alt="Grab and Go ROI" className="rounded-2xl shadow-xl w-full max-h-[70vh] object-cover" />
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-lg shadow-md border border-gray-100">
                <div className="text-sm font-medium text-purple-600">Projected ROI</div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Kiosk Model
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Grab & Go</h2>
              <div className="text-2xl md:text-3xl font-bold text-purple-600">₹2.99 Lakhs</div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-3">
                      <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Total Investment: <span className="text-purple-600">₹7 Lakhs</span></p>
                      <p className="text-sm text-gray-500">Including setup and franchise fee</p>
                    </div>
                  </li>
                  {/* Other items similarly */}
                </ul>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg border border-purple-100 flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-600 font-medium">Break-even Period</p>
                  <p className="text-xl font-bold text-gray-800">~10.3 months</p>
                </div>
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition">
                  Download Full Report
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky top-0 h-screen flex items-center bg-gradient-to-br from-amber-50 to-orange-50 z-70">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 py-12 md:p-12">
            <div className="space-y-6 order-2 md:order-1">
              <div className="inline-block bg-amber-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Café Model
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Urban Junction</h2>
              <div className="text-2xl md:text-3xl font-bold text-amber-600">₹4.99 Lakhs</div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-amber-100 p-2 rounded-full mr-3">
                      <svg className="h-5 w-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Total Investment: <span className="text-amber-600">₹20 Lakhs</span></p>
                      <p className="text-sm text-gray-500">Including setup and franchise fee</p>
                    </div>
                  </li>
                  {/* Other items similarly */}
                </ul>
              </div>

              <div className="bg-amber-50 p-4 rounded-lg border border-amber-100 flex items-center justify-between">
                <div>
                  <p className="text-sm text-amber-600 font-medium">Break-even Period</p>
                  <p className="text-xl font-bold text-gray-800">~16.6 months</p>
                </div>
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition">
                  Download Full Report
                </button>
              </div>
            </div>
            <div className="relative h-full flex items-center order-1 md:order-2">
              <img src={roi} alt="Urban Junction ROI" className="rounded-2xl shadow-xl w-full max-h-[70vh] object-cover" />
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-lg shadow-md border border-gray-100">
                <div className="text-sm font-medium text-amber-600">Projected ROI</div>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky top-0 h-screen flex items-center bg-gradient-to-br from-blue-50 to-indigo-50 z-80">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6 py-12 md:p-12">
            <div className="relative h-full flex items-center">
              <img src={roi} alt="Metro Junction ROI" className="rounded-2xl shadow-xl w-full max-h-[70vh] object-cover" />
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-lg shadow-md border border-gray-100">
                <div className="text-sm font-medium text-indigo-600">Projected ROI</div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="inline-block bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                Premium Outlet
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Metro Junction</h2>
              <div className="text-2xl md:text-3xl font-bold text-indigo-600">₹4.99 Lakhs</div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-indigo-100 p-2 rounded-full mr-3">
                      <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Total Investment: <span className="text-indigo-600">₹25 Lakhs</span></p>
                      <p className="text-sm text-gray-500">Including setup and franchise fee</p>
                    </div>
                  </li>
                  {/* Other items similarly */}
                </ul>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-100 flex items-center justify-between">
                <div>
                  <p className="text-sm text-indigo-600 font-medium">Break-even Period</p>
                  <p className="text-xl font-bold text-gray-800">~14.3 months</p>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition">
                  Download Full Report
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Franchise;