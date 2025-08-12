import React from "react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1586769412527-ab0855979b2e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGljZWNyZWFtfGVufDB8fDB8fHww",
    name: "Ice Cream",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1678198786424-c2cc6593f59c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aWNlY3JlYW18ZW58MHx8MHx8fDA%3D",
    name: "Brownie Dessert",
  },
  {
    src: "https://images.unsplash.com/photo-1628585352636-f4a24c2e17d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGljZWNyZWFtfGVufDB8fDB8fHww",
    name: "Couple with Ice Cream",
  },
  {
    src: "https://images.unsplash.com/photo-1593558159516-d0be2a960c52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aWNlY3JlYW18ZW58MHx8MHx8fDA%3D",
    name: "Cafe Vibes",
  },
];

const ImageCard = ({ src, name }) => (
  <div className="relative rounded-xl overflow-hidden h-[300px] group cursor-pointer">
    <img
      src={src}
      alt={name}
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
    />
    {/* Overlay */}
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
      <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
        {name}
      </span>
    </div>
  </div>
);

const ServiceSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2
          className="text-4xl font-bold text-gray-800 mb-2"
          // style={{ fontFamily: "'Fredoka One', cursive" }}
        >
          Our Special Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm">
          Indulge in our handcrafted treats, made fresh daily with love and
          passion. Experience the magic in every bite.
        </p>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left column */}
        <div className="flex flex-col gap-6">
          <div className="bg-amber-50 p-8 rounded-xl flex flex-col justify-center">
            <span className="text-amber-500 font-semibold text-sm mb-2">
              Service
            </span>
            <h3
              className="font-bold text-3xl leading-snug mb-4"
              // style={{ fontFamily: "'Fredoka One', cursive" }}
            >
              Made by Hand with Love
            </h3>
            <p className="text-gray-700 text-sm mb-6 max-w-xs">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="bg-amber-500 text-white rounded-full px-6 py-2 w-max text-sm font-semibold hover:bg-amber-600 transition">
              Learn More
            </button>
          </div>
          <ImageCard src={images[2].src} name={images[2].name} />
        </div>

        {/* Right column */}
        <div className="grid grid-cols-2 gap-6 col-span-2">
          <ImageCard src={images[0].src} name={images[0].name} />
          <ImageCard src={images[1].src} name={images[1].name} />
          <div className="col-span-2">
            <ImageCard src={images[3].src} name={images[3].name} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
