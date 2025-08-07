import React, { useState } from 'react';
import { Star, MapPin, DollarSign, Users, TrendingUp, Clock, Shield, Award, Phone, Mail, CheckCircle, ArrowRight, Zap, Target, Crown, Gift, ChefHat, IceCream, Heart } from 'lucide-react';
import Footer from '../components/Footer';
import about3 from '../assets/about/about3.png'
import f1 from '../assets/franchise/f1.png'
import f2 from '../assets/franchise/f2.png'
import f3 from '../assets/franchise/f3.png'
import f4 from '../assets/franchise/f4.png'
import roi from '../assets/franchise/roi.png'


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

  const stats = [
    { icon: Star, value: "95%", label: "Customer Satisfaction" },
    { icon: MapPin, value: "10+", label: "Franchise" },
    { icon: DollarSign, value: "₹12L", label: "Average Annual Revenue" },
    { icon: Users, value: "98%", label: "Franchisee Success Rate" }
  ];

  const investmentBreakdown = [
    { item: "Franchise Fee", amount: "₹5,00,000" },
    { item: "Equipment & Setup", amount: "₹8,00,000 - ₹12,00,000" },
    { item: "Store Interior", amount: "₹3,00,000 - ₹5,00,000" },
    { item: "Initial Inventory", amount: "₹1,50,000 - ₹2,50,000" },
    { item: "Marketing Launch", amount: "₹1,00,000 - ₹2,00,000" },
    { item: "Working Capital", amount: "₹2,00,000 - ₹3,00,000" }
  ];

  const benefits = [
    { icon: Crown, title: "Proven Business Model", desc: "Established brand with successful track record across India" },
    { icon: TrendingUp, title: "Growing Market", desc: "Frozen yogurt market growing at 15% annually in India" },
    { icon: Shield, title: "Comprehensive Training", desc: "2-week intensive training program for you and your team" },
    { icon: Zap, title: "Quick ROI", desc: "Average payback period of 18-24 months" }
  ];

  const support = [
    "Site selection and lease negotiation assistance",
    "Store design and construction management",
    "Equipment procurement and installation",
    "Staff recruitment and training programs",
    "Marketing and advertising support",
    "Ongoing operational guidance",
    "Quality control and brand standards",
    "Technology and POS system support"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-black/50 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        {/* Background Food Images */}
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

      {/* Stats Section */}
      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${f2})`,
        }}
      >
        {/* Dark overlay with slow opacity transition */}
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-1000 ease-in-out"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center p-8 z-10">
          {/* Left: Image */}
          <div className="w-full">
            <img
              src={f1}
              alt="Grab and Go Kiosk"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Text Content */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-bold">
              <span className="text-yellow-400">Grab</span> And <span className="text-yellow-400">Go</span>
            </h2>

            <div className="text-3xl font-bold bg-yellow-400 text-black inline-block px-6 py-2 rounded-lg">
              2.99 LACS
            </div>

            <ul className="space-y-2 text-lg">
              <li>• Franchise Fee: ₹2.99 Lakhs + GST</li>
              <li>• Area Required: 50 to 100 sq.ft</li>
              <li>• Setup Type: Kiosk Setup</li>
              <li>• Ideal For: Food Courts, IT Parks, Cinemas, Airports, Colleges</li>
              <li>• Menu Covered: Ice creams, Sundaes, Shakes</li>
              <li>• Team Required: 1 Staff + 1 Manager</li>
              <li>• Setup Cost: Upto ₹4.00 Lakhs</li>
            </ul>

            <div className="text-xl font-semibold mt-6">
              Total Investment Upto <span className="text-yellow-400">₹7.00 Lakhs</span>
            </div>
          </div>
        </div>
      </section>


      <section
        className="relative py-24 bg-gray-200"
      >
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center p-8  z-10">
          {/* Left: Image */}
          <div className="text-black space-y-6">
            <h2 className="text-4xl font-bold">
              <span className="text--400">Grab</span> And <span className="text-yellow-400">Go</span>
            </h2>

            <div className="text-3xl font-bold bg-yellow-400 text-black inline-block px-6 py-2 rounded-lg">
              4.99 LACS
            </div>

            <ul className="space-y-2 text-sm font-medium">
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

          {/* Right: Text Content */}
        </div>
      </section>

      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${f2})`,
        }}
      >
        {/* Dark overlay with slow opacity transition */}
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-1000 ease-in-out"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center p-8 z-10">
          {/* Left: Image */}
          <div className="w-full">
            <img
              src={f4}
              alt="Grab and Go Kiosk"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Text Content */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-bold">
              <span className="text-yellow-400">Grab</span> And <span className="text-yellow-400">Go</span>
            </h2>

            <div className="text-3xl font-bold bg-yellow-400 text-black inline-block px-6 py-2 rounded-lg">
              4.99 LACS
            </div>

            <ul className="space-y-2 text-base font-medium pt-4">
              <li>3. Metro Junction</li>
              <li>• Franchise Fee: ₹4.99 Lakhs</li>
              <li>• Area Required: 500 to 800 sq.ft</li>
              <li>• Setup Type: Full-Scale Premium Icecream Café Outlet</li>
              <li>• Menu Covered: Ice creams, Sundaes, Shakes, Falooda, Fried Chicken, Burgers & more</li>
              <li>• Team Required: 5 Staff + 1 Manager</li>
              <li>• Setup Cost: Upto ₹12.50 Lakhs</li>
            </ul>

            <div className="text-xl font-semibold mt-6">
              Total Investment Upto <span className="text-yellow-400">₹17.50 Lakhs</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 text-black py-24 px-6 md:px-12 relative">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side: ROI Image */}
          <div className="w-full flex justify-center">
            <img
              src={roi} // Replace with your actual path
              alt="ROI"
              className="max-w-md w-full"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="space-y-6">
            <h2 className="text-5xl font-bold leading-tight">
              <span className="block text-black text-4xl font-script italic">Our</span>
              <span className="block text-yellow-600 mt-2">
                MERRY BERRY – RETURN ON INVESTMENT (ROI)
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              At Merry Berry, we believe in not just building great experiences for our customers—
              but also delivering strong, sustainable returns for our franchise partners. Here’s
              a snapshot of potential returns based on our proven business model:
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="mt-16 overflow-x-auto">
          <table className="w-full table-auto text-center border-collapse text-sm bg-white text-black  shadow-lg">
            <thead className="bg-gray-100 font-semibold">
              <tr>
                <th className="border px-4 py-3">Model</th>
                <th className="border px-4 py-3">Monthly Sales (INR)</th>
                <th className="border px-4 py-3">Expenses (INR)</th>
                <th className="border px-4 py-3">Monthly Net Profit (INR)</th>
                <th className="border px-4 py-3">Net Profit %</th>
                <th className="border px-4 py-3">Gross Profit (INR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">Grab & Go</td>
                <td className="border px-4 py-2">300000</td>
                <td className="border px-4 py-2">67500</td>
                <td className="border px-4 py-2">67500.0</td>
                <td className="border px-4 py-2">22.5</td>
                <td className="border px-4 py-2">135000.0</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Urban Junction</td>
                <td className="border px-4 py-2">550000</td>
                <td className="border px-4 py-2">127500</td>
                <td className="border px-4 py-2">120000.0</td>
                <td className="border px-4 py-2">21.82</td>
                <td className="border px-4 py-2">247500.0</td>
              </tr>
              <tr>
                <td className="border px-4 py-2">Metro Junction</td>
                <td className="border px-4 py-2">750000</td>
                <td className="border px-4 py-2">162500</td>
                <td className="border px-4 py-2">175000.0</td>
                <td className="border px-4 py-2">23.33</td>
                <td className="border px-4 py-2">337500.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${f2})`,
        }}
      >
        {/* Dark overlay with slow opacity transition */}
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-1000 ease-in-out"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center p-8 z-10">
          {/* Left: Image */}
          <div className="w-full">
            <img
              src={roi}
              alt="Grab and Go Kiosk"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Text Content */}
          <div className="text-white space-y-6 md:ml-30">
            <h2 className="text-4xl font-bold">
              <span className="text-yellow-400">Grab</span> And <span className="text-yellow-400">Go</span>
            </h2>

            <div className="text-3xl font-bold bg-yellow-400 text-black inline-block px-6 py-2 rounded-lg">
              2.99 LACS
            </div>

            <ul className="space-y-4 text-lg">
              <li>• Total Investment: Upto ₹7 Lakhs</li>
              <li>• Average Monthly Sales: ₹3 Lakhs</li>
              <li>• Net Profit Margin: 22.5%</li>
              <li>• Monthly Net Profit: ₹67,500</li>
              <li>• Break-even Period: Approx. 10.3 months</li>
            </ul>
          </div>
        </div>
      </section>


      <section
        className="relative py-24 bg-gray-200"
      >
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center p-8  z-10">
          {/* Left: Image */}
          <div className="text-black space-y-6">
            <h2 className="text-4xl font-bold">
              Urban <span className="text-yellow-400">Junction</span>
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
              alt="Grab and Go Kiosk"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Text Content */}
        </div>
      </section>

      <section
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${f2})`,
        }}
      >
        {/* Dark overlay with slow opacity transition */}
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-1000 ease-in-out"></div>

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center p-8 z-10">
          {/* Left: Image */}
          <div className="w-full">
            <img
              src={roi}
              alt="Grab and Go Kiosk"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Text Content */}
          <div className="text-white space-y-6 md:ml-30">
            <h2 className="text-4xl font-bold">
              Metro <span className="text-yellow-400">Junction</span>
            </h2>

            <div className="text-3xl font-bold bg-yellow-400 text-black inline-block px-6 py-2 rounded-lg">
              2.99 LACS
            </div>

            <ul className="space-y-4 text-lg">
              <li>• Total Investment: Upto ₹25 Lakhs</li>
              <li>• Average Monthly Sales: ₹7.5 Lakhs</li>
              <li>• Net Profit Margin: 23.33%</li>
              <li>• Monthly Net Profit: ₹1.75 Lakh</li>
              <li>• Break-even Period: Approx. 14.3 months</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />

    </div>
  );
};

export default Franchise;