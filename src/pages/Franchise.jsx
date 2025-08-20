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

  const sections = [
    {
      id: 1,
      title: "Grab & Go",
      model: "Kiosk Model",
      price: "₹2.99 Lakhs",
      totalInvestment: "₹7.00 Lakhs",
      img: f1,
      imgAlt: "Grab and Go Kiosk",
      features: [
        "Franchise Fee: ₹2.99 Lakhs + GST",
        "Area Required: 50 to 100 sq.ft",
        "Low operational cost",
      ],
    },
    {
      id: 2,
      title: "Urban Junction",
      model: "Café Model",
      price: "₹4.99 Lakhs",
      totalInvestment: "₹15.00 Lakhs",
      img: f3,
      imgAlt: "Urban Junction Café",
      features: [
        "Franchise Fee: ₹4.99 Lakhs",
        "Area Required: 150 to 200 sq.ft",
        "Premium seating option",
      ],
    },
    {
      id: 3,
      title: "Metro Junction",
      model: "Premium Outlet",
      price: "₹4.99 Lakhs",
      totalInvestment: "₹17.50 Lakhs",
      img: f4,
      imgAlt: "Metro Junction Outlet",
      features: [
        "Franchise Fee: ₹4.99 Lakhs",
        "Area Required: 200 to 300 sq.ft",
        "High footfall locations",
      ],
    },
  ]

  const features = [
    {
      id: 1,
      title: "Boost ROI with AI Insights",
      description: [
        "AI-driven data analysis tailored for your campaigns",
        "Predictive insights to optimize ad spend",
        "Identify top-performing channels instantly",
        "Automated trend detection for quick action",
        "Boost overall ROI with actionable strategies",
      ],
      image: roi,
    },
    {
      id: 2,
      title: "Smarter Campaign Automation",
      description: [
        "Set up campaigns with minimal effort",
        "Automate repetitive marketing tasks",
        "AI-powered scheduling and delivery",
        "Adaptive workflows for efficiency",
        "Save time while improving accuracy",
      ],
      image: roi,
    },
    {
      id: 3,
      title: "Real-Time Performance Tracking",
      description: [
        "Track campaign metrics live on dashboard",
        "Instant alerts for underperforming ads",
        "Detailed reporting with key KPIs",
        "Compare past and current performance trends",
        "Stay ahead with real-time competitor insights",
      ],
      image: roi,
    },
  ];


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

        {sections.map((section, index) => {
          const isEven = index % 2 === 0
          const zIndexClass = `z-${20 + index * 10}` // z-20, z-30, z-40...

          return (
            <section
              key={section.id}
              className={`sticky top-0 h-screen flex pt-10 md:pt-0 items-center ${isEven
                ? "bg-gradient-to-br from-fuchsia-50 to-purple-50"
                : "bg-gradient-to-br from-amber-50 to-orange-50"
                } ${zIndexClass}`}
            >
              <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center px-6 py-12 md:p-12">

                {/* Image */}
                <div className={`w-full h-full flex items-center ${isEven ? "order-1" : "order-2"}`}>
                  <img
                    src={section.img}
                    alt={section.imgAlt}
                    className="rounded-2xl shadow-xl object-cover w-full max-h-[80vh]"
                  />
                </div>

                {/* Content */}
                <div className={`space-y-4 ${isEven ? "order-2" : "order-1"}`}>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                  <div className="text-2xl md:text-4xl font-bold text-black">
                    {section.price}
                  </div>

                  {/* Features */}
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <ul className="space-y-3 text-gray-700">
                      {section.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg
                            className="h-5 w-5 text-black mr-2 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Investment */}
                  <div className="bg-gray-100 p-4 rounded-lg border border-gray-200">
                    <p className="text-lg font-semibold text-gray-800">
                      Total Investment:{" "}
                      <span className="text-black">{section.totalInvestment}</span>
                    </p>
                  </div>

                  {/* Button */}
                  <button className="bg-black hover:bg-gray-800 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg">
                    Enquire Now
                  </button>
                </div>
              </div>
            </section>
          )
        })}

        {/* ROI Section - Not sticky */}
        {/* ROI Overview Section */}
        <section className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 sticky top-0 h-screen z-50 py-16 px-6 md:px-12 overflow-hidden">
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
              </p>
            </div>

            {/* ROI Cards with animated hover effects */}
            <div className="hidden md:grid grid-cols-3 gap-8 mt-8">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-amber-100 relative overflow-hidden"
                >

                  {/* Card header with icon */}
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-amber-100 rounded-lg mr-3">
                      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
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

        {features.map((feature, index) => {
          const zIndexClass = index === 0 ? "z-60" : index === 1 ? "z-70" : "z-80";
          const bgClass = index % 2 === 0 ? "bg-fuchsia-100" : "bg-[#fff9f0]";

          return (
            <section
              key={feature.id}
              className={`${bgClass} relative ${zIndexClass} pt-40 md:pt-20 h-screen sticky top-0 px-10`}
            >
              <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {index % 2 === 0 ? (
                  <>
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold">{feature.title}</h2>
                      <ul className="list-disc list-inside text-lg space-y-2">
                        {feature.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex justify-center">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex justify-center">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="rounded-xl shadow-lg"
                      />
                    </div>
                    <div className="space-y-6">
                      <h2 className="text-3xl font-bold">{feature.title}</h2>
                      <ul className="list-disc list-inside text-lg space-y-2">
                        {feature.description.map((point, i) => (
                          <li key={i}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </section>
          );
        })}


      </div>

      <Footer />
    </div>
  );
};

export default Franchise;