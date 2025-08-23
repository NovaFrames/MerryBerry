import React, { useEffect, useState } from "react";
import {
  ChefHat,
  IceCream,
  Heart
} from "lucide-react";
import Footer from "../components/Footer";
import CareerFormModal from "../components/CareerFormModal";
import { getCareers } from "../utils/service";

const Career = () => {
  const [showForm, setShowForm] = useState(false);
  const [jobTitle, setJobTitle] = useState("");
  const [careers, setCareers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCareers();
      setCareers(data);
    };
    fetchData();
  }, []);

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
      {careers.map((job, index) => (
        <section
          key={index}
          className={`py-24 ${index % 2 === 0 ? "bg-fuchsia-100" : "bg-[#fff9f0]"}`}
        >
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
                <p className="text-lg text-gray-700 mb-4">{job.description}</p>

                <p className="text-md text-gray-600 mb-2">
                  <strong>Location:</strong> {job.location}
                </p>

                <ul className="text-gray-700 space-y-2 mb-6">
                  {job.salary.map((s, i) => (
                    <li key={i}>
                      {s.type}: <strong>₹{s.amount} /month</strong>
                    </li>
                  ))}
                </ul>

                
                  <button
                    onClick={() => openForm(job.title)}
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
