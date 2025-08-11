import React from "react";

const franchises = [
  {
    name: "Delhi Branch",
    img: "https://images.unsplash.com/photo-1586769412527-ab0855979b2e?w=600&auto=format&fit=crop&q=60",
    location: "Delhi, India",
  },
  {
    name: "Mumbai Branch",
    img: "https://plus.unsplash.com/premium_photo-1678198786424-c2cc6593f59c?w=600&auto=format&fit=crop&q=60",
    location: "Mumbai, India",
  },
  {
    name: "Bangalore Branch",
    img: "https://images.unsplash.com/photo-1628585352636-f4a24c2e17d5?w=600&auto=format&fit=crop&q=60",
    location: "Bangalore, India",
  },
];

const FranchiseCard = ({ name, img, location }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition relative group">
    {/* Image */}
    <img
      src={img}
      alt={name}
      className="w-full h-[450px] object-cover"
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50 flex items-center justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
      <span className="text-white text-lg font-semibold">
        {name}
      </span>
    </div>

    {/* Bottom Info */}
    <div className="border-t-2 border-amber-400 py-3 text-center">
      <h3 className="text-black font-bold text-lg">{name}</h3>
      <p className="text-black text-sm">{location}</p>
    </div>
  </div>
);

const FranchiseSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="text-amber-500 font-semibold text-sm">
          Our Franchise
        </span>
        <h2 className="text-4xl font-bold text-gray-800 mb-3">
          Meet Our Franchise Partners
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          Partnering with us across different locations to bring our
          handcrafted flavors closer to you.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {franchises.map((item, index) => (
          <FranchiseCard
            key={index}
            name={item.name}
            img={item.img}
            location={item.location}
          />
        ))}
      </div>

      {/* Centered Button */}
      <div className="flex justify-center">
        <button className="mt-6 px-5 sm:px-6 py-2 sm:py-3 cursor-pointer bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm sm:text-base">
          View All
        </button>
      </div>

    </section>
  );
};

export default FranchiseSection;
