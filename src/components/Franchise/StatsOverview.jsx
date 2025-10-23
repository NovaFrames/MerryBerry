import React from "react";
import { Building2, Calendar, TrendingUp, Award, Users, MapPin } from "lucide-react";
import StatCard from "./StatCard";

export default function StatsOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-gray-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 mb-4">
            <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
            <span className="text-amber-700 text-sm font-medium">PROVEN TRACK RECORD</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-amber-500">Merry Berry</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join a franchise network with demonstrated success and comprehensive support systems
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard 
            icon={<Building2 className="w-6 h-6" />} 
            label="Total Outlets" 
            value="50+" 
            description="Across South India"
            gradient="from-blue-500 to-cyan-500"
            delay="0"
          />
          <StatCard 
            icon={<Calendar className="w-6 h-6" />} 
            label="Years of Excellence" 
            value="5+" 
            description="Industry Experience"
            gradient="from-emerald-500 to-green-500"
            delay="100"
          />
          <StatCard 
            icon={<TrendingUp className="w-6 h-6" />} 
            label="Average ROI" 
            value="45%" 
            description="Annual Returns"
            gradient="from-amber-500 to-orange-500"
            delay="200"
          />
          <StatCard 
            icon={<Award className="w-6 h-6" />} 
            label="Success Rate" 
            value="95%" 
            description="Franchise Satisfaction"
            gradient="from-purple-500 to-pink-500"
            delay="300"
          />
        </div>

        {/* Additional Metrics */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
          <div className="text-gray-600">
            <div className="text-2xl font-bold text-gray-900">15+</div>
            <div className="text-sm">Cities</div>
          </div>
          <div className="text-gray-600">
            <div className="text-2xl font-bold text-gray-900">200+</div>
            <div className="text-sm">Team Members</div>
          </div>
          <div className="text-gray-600">
            <div className="text-2xl font-bold text-gray-900">1.2M+</div>
            <div className="text-sm">Happy Customers</div>
          </div>
          <div className="text-gray-600">
            <div className="text-2xl font-bold text-gray-900">24/7</div>
            <div className="text-sm">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}