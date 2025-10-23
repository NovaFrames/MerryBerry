import React from "react";
import SupportCard from "./SupportCard";

export default function InsightsSupport({ monthlyLeads, topCity, trendPercentage = 12.5 }) {
  const stats = [
    {
      title: "Monthly Lead Volume",
      value: monthlyLeads,
      description: "Qualified inquiries through digital channels",
      trend: trendPercentage,
      color: "indigo",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: "Top Performing Market",
      value: topCity,
      description: "Highest conversion rate and customer engagement",
      color: "emerald",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  const supportServices = [
    {
      title: "Operations Management",
      description: "End-to-end operational guidance including vendor partnerships and supply chain optimization",
      icon: "⚙️"
    },
    {
      title: "Staff Development",
      description: "Comprehensive training programs for culinary teams and management personnel",
      icon: "👥"
    },
    {
      title: "Marketing Strategy",
      description: "Integrated marketing campaigns with brand-approved creative assets and analytics",
      icon: "📊"
    },
    {
      title: "Facility Setup",
      description: "Complete outlet development with standardized layouts and equipment procurement",
      icon: "🏢"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Performance Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-xl bg-${stat.color}-50`}>
                  <div className={`text-${stat.color}-600`}>
                    {stat.icon}
                  </div>
                </div>
                {stat.trend && (
                  <div className="flex items-center space-x-1 bg-emerald-50 px-3 py-1 rounded-full">
                    <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-sm font-medium text-emerald-600">+{stat.trend}%</span>
                  </div>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-900 mb-3">{stat.value}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Support Services */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-8 py-6 border-b border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900">Comprehensive Franchise Support</h2>
            <p className="text-gray-600 mt-2">End-to-end assistance for franchise success and operational excellence</p>
          </div>
          
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportServices.map((service, index) => (
                <SupportCard 
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}