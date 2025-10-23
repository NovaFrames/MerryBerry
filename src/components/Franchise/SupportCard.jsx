// SupportCard.jsx
import React from "react";

export default function SupportCard({ title, description, icon }) {
  return (
    <div className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-600 transition-colors duration-300">
            <span className="text-lg group-hover:text-white transition-colors duration-300">{icon}</span>
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 mb-2 leading-tight">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}