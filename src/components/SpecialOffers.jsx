import { Calendar, User, Clock, ChevronRight, Star } from "lucide-react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const offers = [
  {
    category: "Limited Time Offer",
    title: "Buy 1 Get 1 Free - Pistachio Ice Cream",
    img: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&auto=format&fit=crop&q=60",
    date: "August 15, 2025",
    expiry: "August 31, 2025",
    description:
      "Enjoy our creamy pistachio ice cream – buy one scoop and get another absolutely free!",
    link: "#",
    rating: 4.8,
    popular: true,
  },
  {
    category: "Seasonal Special",
    title: "Coffee Ice Cream - 20% Off",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&auto=format&fit=crop&q=60",
    date: "August 20, 2025",
    expiry: "September 15, 2025",
    description:
      "Rich and aromatic coffee ice cream – now at a special discounted price for this season.",
    link: "#",
    rating: 4.5,
  },
  {
    category: "New Arrival",
    title: "Mango Delight Sundae - Intro Price",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=600&auto=format&fit=crop&q=60",
    date: "August 25, 2025",
    expiry: "Ongoing",
    description:
      "Try our new tropical mango delight sundae – a refreshing treat at an introductory price.",
    link: "#",
    rating: 4.9,
    popular: true,
  },
];

export default function SpecialOffers() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredOffers, setFilteredOffers] = useState(offers);
  const [isHovering, setIsHovering] = useState(null);

  useEffect(() => {
    if (activeFilter === "all") {
      setFilteredOffers(offers);
    } else if (activeFilter === "popular") {
      setFilteredOffers(offers.filter(offer => offer.popular));
    } else {
      setFilteredOffers(offers.filter(offer => offer.category.includes(activeFilter)));
    }
  }, [activeFilter]);

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

        <div className="flex justify-center mb-12 gap-2 flex-wrap">
          {["all", "Limited Time Offer", "Seasonal Special", "New Arrival", "popular"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? "bg-orange-500 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {filter === "all" ? "All Offers" : filter === "popular" ? "Most Popular" : filter}
            </button>
          ))}
        </div>

        {filteredOffers.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No offers match your filter.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOffers.map((offer, index) => (
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
                      {/* <a
                        href={offer.link}
                        className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600 group"
                      >
                        View Details
                        <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </a> */}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}