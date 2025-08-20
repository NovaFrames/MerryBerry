import { Calendar, User, Clock, ChevronRight, Star } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { getOffers } from "../utils/service";



export default function SpecialOffers() {
  const [isHovering, setIsHovering] = useState(null);
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getOffers();
        setOffers(data);
      } catch (error) {
        console.error("Error loading offers:", error);
      }
    };
    fetchData();
  }, []);

  const calculateDaysLeft = (expiry) => {
    if (expiry === "Ongoing") return "Ongoing";
    
    const expiryDate = new Date(expiry);
    const today = new Date();
    const diffTime = expiryDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays > 0 ? `${diffDays} days left` : "Expired";
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 20 }
          }}
        >
          <p className="text-orange-500 font-semibold tracking-wider">SPECIAL OFFERS</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-2">
            Don't Miss Out!
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg">
            Treat yourself with our limited-time deals and seasonal specials. Grab
            your favorite ice cream offers before they melt away!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setIsHovering(index)}
              onMouseLeave={() => setIsHovering(null)}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
                {offer.popular && (
                  <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10 flex items-center">
                    <Star className="w-3 h-3 mr-1 fill-current" /> Popular
                  </div>
                )}
                <div className="relative overflow-hidden">
                  <img
                    src={offer.img}
                    alt={offer.title}
                    className={`w-full h-64 object-cover transition-transform duration-500 ${
                      isHovering === index ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="bg-white text-orange-500 px-3 py-1 font-medium text-xs rounded-full">
                      {offer.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{offer.title}</h3>
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <User className="w-4 h-4 mr-1" /> Ice Cream Hub
                      <Calendar className="w-4 h-4 ml-4 mr-1" /> {offer.date}
                    </div>
                    {offer.expiry && (
                      <div className="flex items-center text-sm mb-4">
                        <Clock className="w-4 h-4 mr-1 text-orange-500" />
                        <span className={`font-medium ${
                          offer.expiry === "Ongoing" 
                            ? "text-green-600" 
                            : calculateDaysLeft(offer.expiry).includes("Expired")
                              ? "text-red-500"
                              : "text-orange-500"
                        }`}>
                          {calculateDaysLeft(offer.expiry)}
                        </span>
                      </div>
                    )}
                    <p className="text-gray-600 mb-4">{offer.description}</p>
                  </div>
                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                    {offer.rating && (
                      <div className="flex items-center text-sm">
                        <div className="flex mr-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(offer.rating)
                                  ? "fill-orange-500 text-orange-500"
                                  : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-gray-600">{offer.rating.toFixed(1)}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}