import React from "react";
import { motion } from "framer-motion";

const offers = [
  {
    title: "Summer Chill Offer",
    desc: "Buy 1 mango smoothie and get the 2nd at 50% off. Perfect for sharing!",
    img: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2023/2/23/FNK_Indian-Fried-Chicken_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1677264108617.webp",
    tag: "BUY 1 GET 1 50% OFF",
  },
];

const ParallaxOffers = () => {
  return (
    <div className="w-full">
      {offers.map((offer, idx) => (
        <section
          key={idx}
          className="relative h-screen flex items-center justify-center text-center text-white"
          style={{
            backgroundImage: `url(${offer.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed", // Parallax magic
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10 max-w-2xl px-4"
          >
            <span className="bg-white text-black text-xs px-3 py-1 rounded-full font-semibold mb-4 inline-block">
              {offer.tag}
            </span>
            <h2 className="text-4xl font-bold mb-4">{offer.title}</h2>
            <p className="text-lg mb-6">{offer.desc}</p>
            <button className="bg-amber-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-amber-500 transition-colors">
              Visit to Grab
            </button>
          </motion.div>
        </section>
      ))}
    </div>
  );
};

export default ParallaxOffers;
