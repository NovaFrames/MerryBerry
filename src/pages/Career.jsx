import React, { useState } from "react";
import {
  ChefHat,
  IceCream,
  Heart
} from "lucide-react";
import Footer from "../components/Footer";
import c1 from "../assets/career/c1.png";
import c2 from "../assets/career/c2.png";
import c3 from "../assets/career/c3.png";
import CareerFormModal from "../components/CareerFormModal";

const jobs = [
  {
    title: "We're Hiring Milkshake Makers!",
    desc: "Love blending flavors and delighting customers? Join our milkshake team and serve joy in every glass!",
    salary: [
      { type: "🍧 Part-time", amount: "₹10,000 / month" },
      { type: "🍨 Full-time", amount: "₹20,000 / month" },
    ],
    buttonTitle: "Milkshake Maker",
    image: c1,
    bg: "bg-fuchsia-100",
  },
  {
    title: "We're Hiring Chicken Fry Makers!",
    desc: "Passionate about crispy perfection and savory flavors? Join our kitchen crew and master the art of making the perfect fried chicken!",
    salary: [
      { type: "🍗 Part-time", amount: "₹10,000 / month" },
      { type: "🔥 Full-time", amount: "₹20,000 / month" },
    ],
    buttonTitle: "Chicken Fry Maker",
    image: c2,
    bg: "bg-[#fff9f0]",
  },
  {
    title: "We're Hiring Ice Cream Sundae Makers!",
    desc: "Have a passion for sweet creations? Join our team and craft delightful ice cream sundaes that bring smiles to every customer!",
    salary: [
      { type: "🍦 Part-time", amount: "₹10,000 / month" },
      { type: "🍨 Full-time", amount: "₹20,000 / month" },
    ],
    buttonTitle: "Ice Cream Sundae Maker",
    image: c3,
    bg: "bg-fuchsia-100",
  },
];

const Career = () => {
  const [showForm, setShowForm] = useState(false);
  const [jobTitle, setJobTitle] = useState("");

  const openForm = (title) => {
    setJobTitle(title);
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black/50 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-4 gap-4 h-full">
            <img
              src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=400&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&w=400&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=400&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1576506295286-5cda18df43e7?auto=format&fit=crop&w=400&q=80"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-40 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-pulse">
            Join Our <span className="text-yellow-300">Delicious Team</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Start a sweet career journey with us — where every day is filled
            with flavor and fun.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            {[ChefHat, IceCream, Heart].map((Icon, i) => (
              <div
                key={i}
                className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-3 animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <Icon className="w-8 h-8" />
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Dynamic Job Sections */}
      {jobs.map((job, index) => (
        <section key={index} className={`py-24 ${job.bg}`}>
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-10 items-center">

              {/* Image (alternate with order classes) */}
              <div className={`${index % 2 === 0 ? "order-2 md:order-2" : "order-1 md:order-1"}`}>
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Text Content */}
              <div className={`${index % 2 === 0 ? "order-1 md:order-1 md:ml-20" : "order-2 md:order-2 md:mr-20"}`}>
                <h2 className="text-4xl font-bold text-yellow-600 mb-4">
                  {job.title}
                </h2>
                <p className="text-lg text-gray-700 mb-6">{job.desc}</p>
                <ul className="text-gray-700 space-y-2 mb-6">
                  {job.salary.map((s, i) => (
                    <li key={i}>
                      {s.type}: <strong>{s.amount}</strong>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openForm(job.buttonTitle)}
                  className="bg-yellow-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </section>
      ))}


      {/* Popup Modal */}
      <CareerFormModal
        show={showForm}
        onClose={() => setShowForm(false)}
        jobTitle={jobTitle}
      />

      <Footer />
    </div>
  );
};

export default Career;
