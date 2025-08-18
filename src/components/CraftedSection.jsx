import React from "react";

export default function IceCreamSection() {
  const items = [
    {
      img: "https://plus.unsplash.com/premium_photo-1675279010969-e85bfbd402dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aWNlY3JlYW18ZW58MHx8MHx8fDA%3D",
      bg: "bg-pink-100",
    },
    {
      img: "https://images.unsplash.com/photo-1627222295124-f8b3fc09e47f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGljZWNyZWFtfGVufDB8fDB8fHww",
      bg: "bg-yellow-200",
    },
    {
      img: "https://images.unsplash.com/photo-1597249536924-b226b1a1259d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGljZWNyZWFtfGVufDB8fDB8fHww",
      bg: "bg-pink-100",
    },
    {
      img: "https://images.unsplash.com/photo-1614014077943-840960ce6694?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGljZWNyZWFtfGVufDB8fDB8fHww",
      bg: "bg-yellow-200",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center min-h-screen flex flex-col justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1581016327131-6cf17ab1f2c1?w=600&auto=format&fit=crop&q=60')",
      }}
    >
      <div className="absolute inset-0 bg-white/60"></div>
      {/* Top Wave */}
      <svg
        className="absolute top-0 left-0 w-full z-0 rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,224L48,218.7C96,213,192,203,288,181.3C384,160,480,128,576,133.3C672,139,768,181,864,186.7C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256V320H0Z"
        ></path>
      </svg>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="max-w-6xl mx-auto text-center ">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-snug">
            Feel Inside Cold with Our <br />
            Delicious{" "}
            <span className="text-orange-500 relative inline-block">
              Ice Cream
              {/* Wavy underline */}
              <svg
                className="absolute left-0 bottom-0 w-full h-3"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,5 Q5,0 10,5 T20,5 T30,5 T40,5 T50,5 T60,5 T70,5 T80,5 T90,5 T100,5"
                  stroke="#fdba74"
                  strokeWidth="2"
                  fill="transparent"
                />
              </svg>
            </span>
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>

          {/* Image Cards */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 justify-items-center">
            {items.map((item, i) => (
              <div
                key={i}
                className={`w-44 sm:w-48 md:w-56 h-64 sm:h-72 md:h-80 rounded-xl overflow-hidden shadow-lg ${item.bg} 
        ${i % 2 === 0
                    ? "-translate-y-4 sm:-translate-y-6 hover:-translate-y-8"
                    : "translate-y-4 sm:translate-y-6 hover:-translate-y-8"
                  } 
        transition-transform duration-700 ease-out`}
              >
                <img
                  src={item.img}
                  alt="Ice Cream"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Bottom Wave */}
      <svg
        className="absolute -bottom-1 left-0 w-full z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,224L48,218.7C96,213,192,203,288,181.3C384,160,480,128,576,133.3C672,139,768,181,864,186.7C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256V320H0Z"
        ></path>
      </svg>
    </section>
  );
}
