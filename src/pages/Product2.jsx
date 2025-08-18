import React, { useState } from 'react';
import { Star, MapPin, DollarSign, Users, TrendingUp, Clock, Shield, Award, Phone, Mail, CheckCircle, ArrowRight, Zap, Target, Crown, Gift, ChefHat, IceCream, Heart, Locate, LocationEdit } from 'lucide-react';
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
    image: fra1, // sample franchise img
    details: "Located in Fairlands, Salem. Famous for ice creams & desserts.",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Merry Berry - Fairlands"
      />
    ),
  },
  {
    name: "Merry Berry - Hasthampatti",
    top: "35%",
    left: "43%",
    image: fra2,
    details: "Popular outlet near Hasthampatti junction, Salem.",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Merry Berry - Hasthampatti"
      />
    ),
  },
  {
    name: "Merry Berry - Yercaud",
    top: "32%",
    left: "46%",
    image: fra3,
    details: "Located at Ammapet Main Road, a must-visit place for families.",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Merry Berry - Ammapet"
      />
    ),
  },
  {
    name: "Merry Berry - Ammapet",
    top: "34%",
    left: "48%",
    image: fra4,
    details: "Located at Ammapet Main Road, a must-visit place for families.",
    mapEmbed: (
      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="250"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Merry Berry - Ammapet"
      />
    ),
  },
];
const [selectedBranch, setSelectedBranch] = useState(branches[0]);

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

          <section className="relative py-24 bg-[#fff9f0]">
      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start p-8 z-10">
        {/* Left: Branch list + selected branch image */}
        <div className="text-white space-y-6">
          <h2 className="text-4xl font-bold">
            <span className="text-black">Our Merry Berry Branches in Tamilnadu</span>
          </h2>

          <div className="text-3xl font-bold bg-yellow-400 text-black inline-block px-6 py-2 rounded-lg">
            Salem District
          </div>
          <div className="mt-6 bg-white rounded-lg shadow-md p-4">
            <img
              src={selectedBranch.image}
              alt={selectedBranch.name}
              className="w-full h-96 object-cover rounded-lg"
            />
            <h3 className="text-xl font-bold text-red-600 mt-4">
              {selectedBranch.name}
            </h3>
            <p className="text-gray-700 mt-2">{selectedBranch.details}</p>
          </div>

          {/* <ul className="space-y-2 text-black text-lg">
            {branches.map((branch, index) => (
              <li
                key={index}
                className={`cursor-pointer hover:text-red-500 ${
                  selectedBranch.name === branch.name ? "font-bold text-red-600" : ""
                }`}
                onClick={() => setSelectedBranch(branch)}
              >
                {index + 1}• {branch.name}
              </li>
            ))}
          </ul>
          <div className="text-xl text-black font-semibold mt-6">
            Visit your nearest <span className="text-yellow-400">Merry Berry</span> today!
          </div> */}
        </div>

        {/* Right: Tamil Nadu Map with pins */}
        <div className="relative w-full">
          <img src={map} alt="Tamil Nadu Map" className="w-full h-auto" />
          {branches.map((branch, index) => (
            <button
              key={index}
              className="absolute text-red-500 text-xl"
              style={{ top: branch.top, left: branch.left }}
              onClick={() => setSelectedBranch(branch)}
            >
              <MapPin className="h-4 md:h-5 cursor-pointer" />
            </button>
          ))}
        </div>
      </div>
    </section>
      {/* Stats Section */}
      <section
        className="relative py-24 bg-cover bg-center bg-fuchsia-100 bg-no-repeat"
      // style={{
      //   backgroundImage: `url(${f2})`,
      // }}
      >
        {/* Dark overlay with slow opacity transition */}
        {/* <div className="absolute inset-0 bg-black/40 transition-opacity duration-1000 ease-in-out"></div> */}

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
              <span className="text-black">Grab And Go</span>
            </h2>

            <div className="text-3xl font-bold bg-yellow-400 text-black inline-block px-6 py-2 rounded-lg">
              2.99 LACS
            </div>

            <ul className="space-y-2 text-black text-lg">
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


      <section
        className="relative py-24 bg-[#fff9f0]"
      >
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center p-8  z-10">
          {/* Left: Image */}
          <div className="text-black space-y-6">
            <h2 className="text-4xl font-bold">
              <span className="text-black">Grab And Go</span>
            </h2>

            <div className="text-3xl font-bold bg-yellow-400 text-black inline-block px-6 py-2 rounded-lg">
              4.99 LACS
            </div>

            <ul className="space-y-2 text-lg">
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
        className="relative py-24 bg-cover bg-center bg-fuchsia-100 bg-no-repeat"
      // style={{
      //   backgroundImage: `url(${f2})`,
      // }}
      >
        {/* Dark overlay with slow opacity transition */}
        {/* <div className="absolute inset-0 bg-black/40 transition-opacity duration-1000 ease-in-out"></div> */}

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
              <span className="text-black">Grab And Go</span>
            </h2>

            <div className="text-3xl font-bold bg-yellow-400 text-black inline-block px-6 py-2 rounded-lg">
              4.99 LACS
            </div>

            <ul className="space-y-2 text-black text-base font-medium pt-4">
              <li>3. Metro Junction</li>
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

      <section className="bg-[#fff9f0] text-black py-24 px-6 md:px-12 relative">
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
              <span className="block text-2xl md:text-5xl text-yellow-600 mt-2">
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
        className="relative py-24 bg-cover bg-center bg-fuchsia-100 bg-no-repeat"
      // style={{
      //   backgroundImage: `url(${f2})`,
      // }}
      >
        {/* Dark overlay with slow opacity transition */}
        {/* <div className="absolute inset-0 bg-black/40 transition-opacity duration-1000 ease-in-out"></div> */}

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


      <section
        className="relative py-24 bg-[#fff9f0]"
      >
        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center p-8  z-10">
          {/* Left: Image */}
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
              alt="Grab and Go Kiosk"
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Text Content */}
        </div>
      </section>

      <section
        className="relative py-24 bg-cover bg-center bg-fuchsia-100 bg-no-repeat"
      // style={{
      //   backgroundImage: `url(${f2})`,
      // }}
      >
        {/* Dark overlay with slow opacity transition */}
        {/* <div className="absolute inset-0 bg-black/40 transition-opacity duration-1000 ease-in-out"></div> */}

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

      <Footer />

    </div>
  );
};

export default Franchise;