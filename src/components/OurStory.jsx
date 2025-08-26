import React from "react";
import { CheckCircle, IceCream, Store, Star, UserRound } from "lucide-react";
import h22 from "../assets/home/22.png";
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Section Heading */}
      <div className="relative top-20 z-10 text-center ">
        <span className="text-amber-500 font-semibold text-sm uppercase tracking-wide">
          What We
        </span>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-3">
          Know About Our{" "}
          <span className="text-orange-500 relative inline-block">
            Learning
            {/* Wavy underline */}
            <svg
              className="absolute left-0 -bottom-3 w-full h-3"
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
        <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
          Discover the insights and experiences we’ve gained from diverse places
          and unique situations.
        </p>
      </div>

      {/* About Section */}
      <section className="relative  py-16 px-6 md:px-12 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-12 bg-transparent">
        {/* Transparent Top Wave */}
        <svg
          className="absolute md:-top-[25vw] -top-[40vw] left-0 w-full h-auto z-0 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffff"
            d="M0,224L48,218.7C96,213,192,203,288,181.3C384,160,480,128,576,133.3C672,139,768,181,864,186.7C960,192,1056,160,1152,165.3C1248,171,1344,213,1392,234.7L1440,256V320H0Z"
          />
        </svg>

        {/* Left Image */}
        <div className="flex-1 flex justify-center relative z-10">
          <img src={h22} alt="Ice Cream" className="max-w-sm lg:max-w-md" />
        </div>

        {/* Right Content */}
        <div className="flex-1 relative z-10">
          <p className="text-[#D98C20] font-semibold mb-2">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#4A2C2A] mb-4">
            Enjoy It Before Melting
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8 mb-6">
            {[
              "Organic Product",
              "High Integrity",
              "Quality Product",
              "Trustworthy",
              "Professional Staff",
              "Best Service",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="text-[#D98C20]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <button
            onClick={() => {
              navigate("/about");
            }}
            className="bg-[#D98C20] text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-[#bf7618] transition"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Stats Section (Merged Inside) */}
      <section className="w-full mb-10 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 justify-items-center">
            {[
              { icon: IceCream, value: 42, label: "Variant Flavor" },
              { icon: Store, value: 15, label: "Branch Shop" },
              { icon: Star, value: 280, label: "Satisfied Client" },
              { icon: UserRound, value: 30, label: "Professional Staff" },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <stat.icon className="w-10 h-10 text-amber-500 mb-4" />
                <div className="relative leading-none mb-2">
                  <span className="text-3xl md:text-3xl text-neutral-800 tracking-tight">
                    {stat.value}
                  </span>
                  <span className="align-super text-amber-500 text-xl font-bold ml-1">
                    +
                  </span>
                </div>
                <p className="text-neutral-600 text-lg md:text-xl">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
