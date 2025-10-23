// Testimonial.jsx
import React from "react";

export default function Testimonial({ name, city, role, quote, achievement, rating }) {
  const renderStars = (rating) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-4 h-4 ${index < rating ? 'text-amber-400 fill-current' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Header with gradient */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 px-6 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-gray-900 text-lg">{name}</h3>
            <p className="text-sm text-gray-600">{role}</p>
          </div>
          <div className="text-right">
            <div className="text-xs font-medium text-indigo-600 bg-indigo-50 px-2 py-1 rounded-full">
              {city}
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="p-6">
        <div className="mb-4">
          {renderStars(rating)}
        </div>
        
        <blockquote className="text-gray-700 leading-relaxed mb-6 relative">
          <div className="absolute -top-2 -left-2 text-4xl text-indigo-100 opacity-50">"</div>
          <p className="relative z-10">{quote}</p>
        </blockquote>

        {/* Achievement Badge */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span className="text-sm font-medium text-gray-900">{achievement}</span>
          </div>
          <div className="text-indigo-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}