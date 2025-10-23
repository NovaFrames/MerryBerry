import React from "react";

export default function StatCard({ icon, label, value, description, gradient, delay }) {
  return (
    <div 
      className="group relative bg-white rounded-2xl p-8 flex flex-col items-start gap-4 shadow-sm hover:shadow-xl border border-gray-100 hover:border-gray-200 transition-all duration-500 transform hover:-translate-y-2"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
      
      {/* Icon Container */}
      <div className={`relative p-3 rounded-2xl bg-gradient-to-br ${gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
        <div className="text-white">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2 flex-1">
        <div className="text-3xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
          {value}
        </div>
        <div className="text-lg font-semibold text-gray-900">
          {label}
        </div>
        {description && (
          <div className="text-sm text-gray-500 leading-relaxed">
            {description}
          </div>
        )}
      </div>

      {/* Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-transparent via-gray-300 to-transparent group-hover:w-full transition-all duration-500"></div>
    </div>
  );
}