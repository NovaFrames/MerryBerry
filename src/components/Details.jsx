import React from "react";
import { useNavigate } from "react-router-dom";
import one from '../assets/menu/1.jpg'
import two from '../assets/menu/2.jpg'
import three from '../assets/menu/3.jpg'
import four from '../assets/menu/4.jpg'

const menuItems = [
  {
    name: "Single Cone Scoop",
    price: "1.20",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    img: "https://templatekit.jegtheme.com/icelab/wp-content/uploads/sites/175/2021/09/homemade-vanilla-ice-cream-scoop-in-waffle-cones-1-1024x682.jpg",
  },
  {
    name: "Double Cone Scoop",
    price: "3.40",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    img: "https://templatekit.jegtheme.com/icelab/wp-content/uploads/sites/175/2021/09/strawberry-layered-yoghurt-dessert-1024x682.jpg",
  },
  {
    name: "Triple Scoop Cup",
    price: "6.60",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    img: "https://templatekit.jegtheme.com/icelab/wp-content/uploads/sites/175/2021/09/scoops-of-ice-cream-in-waffle-cones-e1632983570683.jpg",
  },
  {
    name: "Strawberry Yogurt",
    price: "5.10",
    desc: "Lorem ipsum dolor sit amet, consectetur.",
    img: "https://templatekit.jegtheme.com/icelab/wp-content/uploads/sites/175/2021/09/scoops-of-ice-cream-in-waffle-cones-e1632983570683.jpg",
  },
];

export default function RecommendationMenu() {
  const navigate = useNavigate();
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-[#d18b28] font-semibold text-sm sm:text-base">
            Our Menu
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
            Recommendation Menu
          </h2>
          <p className="mt-4 text-gray-500 text-sm sm:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br className="hidden sm:block" />
            Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Menu List */}
          <div>
            {menuItems.map((item, idx) => (
              <div key={idx} className="mb-6">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <h3 className="font-semibold text-base sm:text-lg text-gray-800">
                    {item.name}
                  </h3>
                  {/* <span className="text-[#d18b28] font-semibold text-sm sm:text-base">
                    ${item.price}
                  </span> */}
                </div>
                <div className="border-b border-dotted border-gray-300 my-1"></div>
                <p className="text-xs sm:text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Images */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
            {menuItems.map((item, idx) => (
              <div key={idx} className="w-full">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-32 sm:h-40 md:h-48 lg:h-56 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <button
          onClick={()=>{navigate('/products')}}
          className="bg-[#d18b28] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-full font-medium hover:bg-[#b67620] transition text-sm sm:text-base">
            More Menu
          </button>
        </div>
      </div>
    </section>
  );
}
