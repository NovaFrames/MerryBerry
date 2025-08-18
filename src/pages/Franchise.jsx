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
      top: "35%",
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
      left: "48%",
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

              {branches.map((branch, index) => {
                const isSelected = selectedBranch.name === branch.name;
                return (
                  <div key={index}>
                    {/* Map Pin */}
                    <button
                      className="absolute text-red-500"
                      style={{ top: branch.top, left: branch.left }}
                      onClick={() => {
                        setSelectedBranch(branch);
                        setCurrentIndex(index);
                      }}
                    >
                      <MapPin
                        className={`cursor-pointer transition-all duration-300 ${isSelected ? "h-8 w-8 text-red-600" : "h-4 w-4 text-red-500"
                          }`}
                      />
                    </button>

                    {/* Overlay Modal near selected pin */}
                    {isSelected && (
                      <div
                        className="absolute bg-white shadow-lg rounded-lg p-3 text-sm w-30 md:w-48 z-20"
                        style={{
                          top: `calc(${branch.top} - 100px)`, // position above pin
                          left: `calc(${branch.left} + 70px)`, // little right
                        }}
                      >
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-red-600 text-sm">{branch.name}</h4>
                        </div>
                        <p className="text-gray-700 mt-1">{branch.details}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Grab & Go Section - Sticky */}
        <section className="sticky top-10 pt-5 md:pt-0 h-screen flex items-center bg-fuchsia-100 z-20">
          <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center p-8 z-10">
            <div className="w-full">
              <img
                src={f1}
                alt="Grab and Go Kiosk"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="text-white ">
              <h2 className="text-2xl md:text-3xl font-bold">
                <span className="text-black">Grab And Go</span>
              </h2>
              <div className="text-xl md:text-3xl font-bold text-black inline-block rounded-lg">
                2.99 LACS
              </div>
              <ul className="space-y-2 text-black text-sm">
                <li>• Franchise Fee: ₹2.99 Lakhs + GST</li>
                <li>• Area Required: 50 to 100 sq.ft</li>
                <li>• Setup Type: Kiosk Setup</li>
                <li>• Ideal For: Food Courts, IT Parks, Cinemas, Airports, Colleges</li>
                <li>• Menu Covered: Ice creams, Sundaes, Shakes</li>
                <li>• Team Required: 1 Staff + 1 Manager</li>
                <li>• Setup Cost: Upto ₹4.00 Lakhs</li>
              </ul>
              <div className="text-xl text-black font-semibold mt-6">
                Total Investment Upto <span className="text-yellow-400">₹7.00 Lakhs</span>
              </div>
            </div>
          </div>
        </section>

        {/* Urban Junction Section - Sticky */}
        <section className="sticky top-10 pt-5 md:pt-0  h-screen flex items-center bg-[#fff9f0] z-30">
          <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center p-8 z-10">
            <div className="text-black ">
              <h2 className="text-3xl md:text-4xl font-bold">
                Urban Junction
              </h2>
              <div className="text-xl md:text-3xl font-bold text-black inline-block rounded-lg">
                4.99 LACS
              </div>
              <ul className="space-y-2 text-sm">
                <li>Franchise Fee: ₹4.99 Lakhs</li>
                <li>Area Required: 300-400 Sqft</li>
                <li>Setup Type: Kiosk / Takeaway / Café Lounge</li>
                <li>Menu: Coffee | Milkshakes | Waffles | Sandwich | Pizza | Mojito | Ice Cream</li>
                <li>Staff Required: 3–4</li>
                <li>Setup Time: 20–25 Days</li>
              </ul>
              <div className="text-xl font-semibold mt-6">
                Total Investment Upto <span className="text-yellow-400">₹15.00 Lakhs</span>
              </div>
            </div>
            <div className="w-full">
              <img
                src={f3}
                alt="Grab and Go Kiosk"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Metro Junction Section - Sticky */}
        <section className="sticky top-10 h-screen flex items-center pt-5 md:pt-0  bg-fuchsia-100 z-40">
          <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center p-8 z-10">
            <div className="w-full">
              <img
                src={f4}
                alt="Grab and Go Kiosk"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-black">Metro Junction</span>
              </h2>
              <div className="text-xl md:text-3xl font-bold  text-black inline-block rounded-lg">
                4.99 LACS
              </div>
              <ul className="space-y-2 text-black text-sm font-medium pt-4">
                <li>• Franchise Fee: ₹4.99 Lakhs</li>
                <li>• Area Required: 500 to 800 sq.ft</li>
                <li>• Setup Type: Full-Scale Premium Icecream Café Outlet</li>
                <li>• Menu Covered: Ice creams, Sundaes, Shakes, Falooda, Fried Chicken, Burgers & more</li>
                <li>• Team Required: 5 Staff + 1 Manager</li>
                <li>• Setup Cost: Upto ₹12.50 Lakhs</li>
              </ul>
              <div className="text-xl text-black font-semibold mt-6">
                Total Investment Upto <span className="text-yellow-400">₹17.50 Lakhs</span>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Section - Not sticky */}
        <section className="bg-[#fff9f0] sticky top-10 h-screen z-50 text-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Heading */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold leading-tight">
            <span className="block text-black text-4xl font-script">Our</span>
            <span className="block text-2xl md:text-5xl text-yellow-600 mt-2">
              MERRY BERRY – RETURN ON INVESTMENT (ROI)
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            At Merry Berry, we believe in not just building great experiences for
            our customers—but also delivering strong, sustainable returns for our
            franchise partners.
          </p>
        </div>
      </div>

      {/* ROI Cards */}
      {/* Desktop: Show Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-6 mt-16">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-yellow-600">{card.title}</h3>
            <div className="mt-4 space-y-2 text-gray-700 text-sm">
              <p><span className="font-semibold">Monthly Sales:</span> {card.sales}</p>
              <p><span className="font-semibold">Expenses:</span> {card.expenses}</p>
              <p><span className="font-semibold">Net Profit:</span> {card.netProfit}</p>
              <p><span className="font-semibold">Net Profit %:</span> {card.netProfitPercent}</p>
              <p><span className="font-semibold">Gross Profit:</span> {card.grossProfit}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: Show one card at a time */}
      <div className="md:hidden mt-16 text-center">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <h3 className="text-xl font-semibold text-yellow-600">
            {cards[currentIndexes].title}
          </h3>
          <div className="mt-4 space-y-2 text-gray-700 text-sm">
            <p><span className="font-semibold">Monthly Sales:</span> {cards[currentIndexes].sales}</p>
            <p><span className="font-semibold">Expenses:</span> {cards[currentIndexes].expenses}</p>
            <p><span className="font-semibold">Net Profit:</span> {cards[currentIndexes].netProfit}</p>
            <p><span className="font-semibold">Net Profit %:</span> {cards[currentIndexes].netProfitPercent}</p>
            <p><span className="font-semibold">Gross Profit:</span> {cards[currentIndexes].grossProfit}</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6">
          <button
            onClick={prevCard}
            className="px-4 py-2 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition"
          >
            Previous
          </button>
          <button
            onClick={nextCard}
            className="px-4 py-2 bg-yellow-600 text-white rounded-lg shadow-md hover:bg-yellow-700 transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>


        {/* ROI Details Sections - Sticky */}
        <section className="sticky top-10 h-screen flex items-center bg-fuchsia-100 z-60">
          <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center p-8 z-10">
            <div className="w-full">
              <img
                src={roi}
                alt="ROI"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="text-white space-y-6 md:ml-30">
              <h2 className="text-4xl font-bold">
                <span className="text-black">Grab And Go</span>
              </h2>
              <div className="text-3xl font-bold bg-yellow-400 text-black inline-block px-6 py-2 rounded-lg">
                2.99 LACS
              </div>
              <ul className="space-y-4 text-black text-lg">
                <li>• Total Investment: Upto ₹7 Lakhs</li>
                <li>• Average Monthly Sales: ₹3 Lakhs</li>
                <li>• Net Profit Margin: 22.5%</li>
                <li>• Monthly Net Profit: ₹67,500</li>
                <li>• Break-even Period: Approx. 10.3 months</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="sticky top-10 h-screen flex items-center bg-[#fff9f0] z-70">
          <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center p-8 z-10">
            <div className="text-black space-y-6">
              <h2 className="text-4xl font-bold">
                Urban Junction
              </h2>
              <div className="text-3xl font-bold bg-yellow-400 text-black inline-block px-6 py-2 rounded-lg">
                2.99 LACS
              </div>
              <ul className="space-y-4 text-lg">
                <li>• Total Investment: Upto ₹20 Lakhs</li>
                <li>• Average Monthly Sales: ₹5.5 Lakhs</li>
                <li>• Net Profit Margin: 21.82%</li>
                <li>• Monthly Net Profit: ₹1.20Lakhs</li>
                <li>• Break-even Period: Approx. 16.6 months</li>
              </ul>
            </div>
            <div className="w-full">
              <img
                src={roi}
                alt="ROI"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="sticky top-10 h-screen flex items-center bg-fuchsia-100 z-70">
          <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center p-8 z-10">
            <div className="w-full">
              <img
                src={roi}
                alt="ROI"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="text-white space-y-6 md:ml-30">
              <h2 className="text-4xl text-black font-bold">
                Metro Junction
              </h2>
              <div className="text-3xl font-bold bg-yellow-400 text-black inline-block px-6 py-2 rounded-lg">
                2.99 LACS
              </div>
              <ul className="space-y-4 text-black text-lg">
                <li>• Total Investment: Upto ₹25 Lakhs</li>
                <li>• Average Monthly Sales: ₹7.5 Lakhs</li>
                <li>• Net Profit Margin: 23.33%</li>
                <li>• Monthly Net Profit: ₹1.75 Lakh</li>
                <li>• Break-even Period: Approx. 14.3 months</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Franchise;