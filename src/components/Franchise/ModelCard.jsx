import React from "react";
import { ChevronDown, ChevronUp, Star, Check, Zap, Users, MapPin, Calendar } from "lucide-react";

export default function ModelCard({ model, onEnquire, featured }) {
  const profitMargin = ((model.netProfit / model.avgMonthlySales) * 100).toFixed(1);

  return (
    <div className={`relative group ${featured ? 'lg:scale-105' : ''} pb-2`}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white text-sm font-semibold rounded-full shadow-lg">
            <Star className="w-4 h-4 fill-white" />
            Most Popular
          </div>
        </div>
      )}

      <div className={`relative h-full bg-white rounded-2xl border-2 ${featured ? 'border-amber-300 shadow-xl' : 'border-gray-200 shadow-lg hover:shadow-xl'
        } transition-all duration-300 overflow-hidden`}>

        {/* Header */}
        <div className="p-8 pb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{model.name}</h3>
              <p className="text-gray-500 mt-1 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {model.setupType}
              </p>
            </div>
            {featured && (
              <Zap className="w-6 h-6 text-amber-500" />
            )}
          </div>

          {/* Investment */}
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
            <p className="text-sm text-amber-700 font-medium mb-1">Total Investment</p>
            <p className="text-3xl font-bold text-amber-600">{model.totalInvestment}</p>
            <p className="text-xs text-amber-600 mt-1">Including franchise fee & setup</p>
          </div>
        </div>

        {/* Key Features */}
        <div className="px-8 pb-6">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{model.team}</p>
                <p className="text-gray-500 text-xs">Team</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                <MapPin className="w-4 h-4 text-amber-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{model.area}</p>
                <p className="text-gray-500 text-xs">Area</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="px-8 pb-6">
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex justify-between items-center text-sm">
              <div className="text-center">
                <p className="font-bold text-gray-900">₹{model.avgMonthlySales.toLocaleString()}</p>
                <p className="text-gray-500 text-xs">Avg. Sales</p>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <p className="font-bold text-green-600">{profitMargin}%</p>
                <p className="text-gray-500 text-xs">Margin</p>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="text-center">
                <p className="font-bold text-gray-900">₹{model.netProfit.toLocaleString()}</p>
                <p className="text-gray-500 text-xs">Net Profit</p>
              </div>
            </div>
          </div>


          {/* CTA Button */}
          <button
            className={`w-full mt-6 py-4 px-6 rounded-xl font-semibold transition-all duration-300 
            bg-[#d18b28] text-white shadow hover:shadow-lg transform hover:scale-105`}
          >
            Enquire About {model.name}
          </button>
        </div>

      </div>

    </div>
  );
}