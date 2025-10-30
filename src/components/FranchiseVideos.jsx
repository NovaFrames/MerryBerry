import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play, Star, Quote } from 'lucide-react';
import MBLogo from '../../public/MBLOGO.png';
const FranchiseVideos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState(null);

  const testimonials = [
    {
      id: 1,
      name: "Merry Berry AVR Roundana Outlet",
      role: "Franchise Partner",
      company: "Merry Berry",
      image: MBLogo,
      videoUrl: "https://www.youtube.com/embed/WjeJ6EVWSCs?si=vBmX0gaqSTqtLmuL",
      rating: 5,
      text: "Our journey with Merry Berry has been incredibly rewarding. The team’s continuous support and strong brand identity helped our AVR Roundana outlet thrive from day one. Customers love the consistent quality and ambiance that truly represent the Merry Berry experience.",
      highlight: "Merry Berry AVR Roundana Outlet",
    },
    {
      id: 2,
      name: "Merry Berry Yercaud Outlet",
      role: "Franchise Partner",
      company: "Merry Berry",
      image: MBLogo,
      videoUrl: "https://www.youtube.com/embed/L2nc49ZazRc?si=BOyx66kI3bbkaI2W", // replace with your Yercaud outlet video
      rating: 5,
      text: "Being a franchise partner at Yercaud has been an amazing experience. The franchise model is easy to follow, and the brand’s reputation draws in a steady flow of customers. Merry Berry’s unique taste and welcoming setup are a hit among tourists and locals alike.",
      highlight: "Merry Berry Yercaud Outlet",
    },
    {
      id: 3,
      name: "Merry Berry Mall Outlet",
      role: "Franchise Partner",
      company: "Merry Berry",
      image: MBLogo,
      videoUrl: "https://www.youtube.com/embed/70zf8Qz6fEE?si=ORgJEh174FXhzeMX", // replace with your Mall outlet video
      rating: 5,
      text: "Opening our outlet inside the mall has been a great decision. The Merry Berry team ensured our setup, branding, and launch were seamless. The customers appreciate the premium quality desserts and beverages that stand out from other food brands.",
      highlight: "Merry Berry Mall Outlet",
    },
    {
      id: 4,
      name: "Merry Berry 4 Roads Outlet",
      role: "Franchise Partner",
      company: "Merry Berry",
      image: MBLogo,
      videoUrl: "https://www.youtube.com/embed/YK1s_npmM38?si=xuErEFSkTkj7EK_Q", // replace with your 4 Roads outlet video
      rating: 5,
      text: "The 4 Roads outlet has received overwhelming love from customers. The branding, training, and marketing support from the Merry Berry team made our operations smooth and profitable. We’re proud to be part of this growing franchise family.",
      highlight: "Merry Berry 4 Roads Outlet",
    },
  ];


  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setPlayingVideo(null);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setPlayingVideo(null);
  };

  const playVideo = (videoUrl) => {
    setPlayingVideo(videoUrl);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-white py-8 sm:py-12 lg:py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-2 sm:mb-4">
            Franchise Videos
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-yellow-500 max-w-2xl mx-auto px-4">
            Hear from our amazing Merry Berry franchise partners and their success stories.
          </p>
        </div>

        {/* Testimonial Display */}
        <div className="bg-white rounded-3xl  overflow-hidden mb-12">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-0 items-center">
            {/* Video/Image Section */}
            <div className="relative bg-white p-4 sm:p-8 lg:p-12 flex items-center justify-center w-full">
              <div className="relative">
                {playingVideo === currentTestimonial.videoUrl ? (
                  // ✅ YouTube Iframe for Landscape Video
                  <div className="w-[320px] h-[180px] sm:w-[480px] sm:h-[270px] lg:w-[640px] lg:h-[360px] rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-400">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`${currentTestimonial.videoUrl}?autoplay=1&rel=0&modestbranding=1`}
                      title={currentTestimonial.name}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ) : (
                  <div
                    className="relative group cursor-pointer"
                    onClick={() => playVideo(currentTestimonial.videoUrl)}
                  >
                    <div className="w-[320px] h-[180px] sm:w-[480px] sm:h-[270px] lg:w-[640px] lg:h-[360px] rounded-2xl overflow-hidden border-4 border-blue-400 shadow-2xl bg-gray-900">
                      <img
                        src={currentTestimonial.image}
                        alt={currentTestimonial.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                    </div>
                    <div className="absolute inset-0 group-hover:bg-opacity-20 rounded-2xl transition-all duration-300 flex items-center justify-center">
                      <div className="bg-red-600 bg-opacity-90 p-4 sm:p-6 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Content Section */}
            <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center bg-white w-full">
              <div className="mb-4 sm:mb-6">
                <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-500 mb-3 sm:mb-4" />
                <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">
                  {currentTestimonial.highlight}
                </h2>
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-yellow-400" />
                  ))}
                </div>
              </div>

              <blockquote className="text-base sm:text-lg text-black leading-relaxed mb-6 sm:mb-8">
                "{currentTestimonial.text}"
              </blockquote>

              <div className="border-t border-gray-700 pt-4 sm:pt-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="text-center sm:text-left">
                    <h3 className="font-semibold text-yellow-500 text-base sm:text-lg">
                      {currentTestimonial.name}
                    </h3>
                    <p className="text-black text-sm sm:text-base">
                      {currentTestimonial.role} at {currentTestimonial.company}
                    </p>
                  </div>

                  <div className="flex items-center justify-center sm:justify-end gap-3 sm:gap-4">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full bg-yellow-600 hover:bg-yellow-700 transition-colors"
                    >
                      <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center items-center gap-2 sm:gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setPlayingVideo(null);
              }}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${index === currentIndex
                  ? 'bg-yellow-500 scale-125'
                  : 'bg-gray-600 hover:bg-gray-500'
                }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FranchiseVideos;
