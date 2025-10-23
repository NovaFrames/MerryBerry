import React from "react";
import Testimonial from "./Testimonial";

export default function TestimonialsSection() {
  const testimonials = [
    { 
      name: "Ramesh Kumar", 
      city: "Salem", 
      role: "Franchise Owner",
      quote: "Achieved break-even in under 11 months with exceptional support from the Merry Berry corporate team throughout the establishment phase.", 
      achievement: "Break-even in 11 months",
      rating: 5
    },
    { 
      name: "Anita Patel", 
      city: "Coimbatore", 
      role: "Multi-unit Franchisee",
      quote: "The brand recognition and strategic marketing initiatives drove consistent customer traffic from our grand opening, exceeding initial revenue projections.", 
      achievement: "Exceeded revenue targets",
      rating: 5
    },
    { 
      name: "Kumar Rajendran", 
      city: "Erode", 
      role: "Franchise Partner",
      quote: "Comprehensive operational training enabled rapid scaling and significant profitability improvements within the first six months of operations.", 
      achievement: "Profit growth in 6 months",
      rating: 4
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
            <span className="text-sm font-medium text-indigo-700">Success Stories</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Franchise Partner Experiences
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hear from our franchise owners about their journey to success and operational excellence
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              city={testimonial.city}
              role={testimonial.role}
              quote={testimonial.quote}
              achievement={testimonial.achievement}
              rating={testimonial.rating}
            />
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-indigo-600 mb-2">11</div>
            <div className="text-sm font-medium text-gray-900">Average Months to Break-even</div>
            <div className="text-xs text-gray-500 mt-2">Industry average: 18 months</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-indigo-600 mb-2">94%</div>
            <div className="text-sm font-medium text-gray-900">Franchisee Satisfaction Rate</div>
            <div className="text-xs text-gray-500 mt-2">Based on annual surveys</div>
          </div>
          <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-indigo-600 mb-2">25+</div>
            <div className="text-sm font-medium text-gray-900">Cities Across Tamil Nadu</div>
            <div className="text-xs text-gray-500 mt-2">And expanding rapidly</div>
          </div>
        </div>
      </div>
    </section>
  );
}