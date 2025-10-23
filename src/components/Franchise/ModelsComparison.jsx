import React from "react";
import { ChevronDown, ChevronUp, Star, TrendingUp, Users, MapPin, Clock } from "lucide-react";
import ModelCard from "./ModelCard";

export default function ModelsComparison({ models }) {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-4">
            <TrendingUp className="w-4 h-4 text-amber-600 mr-2" />
            <span className="text-amber-700 text-sm font-semibold">INVESTMENT MODELS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Choose Your <span className="text-amber-600">Business Model</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select from our proven franchise models designed for different investment levels and market opportunities
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <ModelCard
              key={model.key}
              model={model}
              featured={index === 8} // Middle card as featured
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span>Most Popular</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-500" />
              <span>Quick Setup</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-500" />
              <span>Full Training</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}