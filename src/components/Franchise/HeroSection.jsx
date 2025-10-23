import React from "react";

export default function HeroSection() {
  return (
    <header className="relative flex items-center justify-center overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Geometric Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_49%,rgba(251,191,36,0.03)_49%,rgba(251,191,36,0.03)_51%,transparent_51%)] bg-[size:20px_20px]"></div>
        
        {/* Accent Shapes */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-amber-50 rounded-3xl rotate-12 opacity-40"></div>
        <div className="absolute bottom-32 left-32 w-48 h-48 bg-blue-50 rounded-full opacity-30"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-amber-100 rounded-2xl rotate-45 opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center flex flex-col justify-center py-20">
          {/* Premium Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-50 border border-amber-200 shadow-sm mb-12 mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-amber-700 text-sm font-semibold tracking-wide">
                LIMITED FRANCHISE OPPORTUNITY
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <div className="space-y-8 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900">
              <span className="text-gray-900">The Ultimate</span>
              <br />
              <span className="text-transparent bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 bg-clip-text">
                Dessert Franchise
              </span>
              <br />
              <span className="text-gray-900">Opportunity</span>
            </h1>

            {/* Divider */}
            <div className="flex justify-center">
              <div className="w-24 h-1.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
            </div>

            {/* Subheading */}
            <p className="text-2xl md:text-3xl leading-relaxed text-gray-600 font-light max-w-3xl mx-auto">
              Join <span className="text-amber-700 font-semibold">Merry Berry</span> — South India's fastest-growing dessert brand with proven success and comprehensive franchise support.
            </p>
          </div>

          {/* Key Metrics */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto my-12 py-8">
            {[
              { value: "95%", label: "Success Rate", sublabel: "Franchise Satisfaction" },
              { value: "45%", label: "Average ROI", sublabel: "Annual Returns" },
              { value: "50+", label: "Active Outlets", sublabel: "Across South India" },
              { value: "5★", label: "Support", sublabel: "Comprehensive" }
            ].map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="text-3xl font-bold text-amber-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {metric.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
                <div className="text-sm text-gray-500">{metric.sublabel}</div>
              </div>
            ))}
          </div> */}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto mt-8">
            <a
              href="#enquiry"
              className="group relative inline-flex items-center justify-center px-12 py-5 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 overflow-hidden min-w-[240px]"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-amber-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative flex items-center gap-3">
                Start Your Franchise
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </a>

            <a
              href="/files/merry-berry-franchise-prospectus.pdf"
              className="group inline-flex items-center justify-center px-12 py-5 bg-white text-gray-900 font-bold text-lg rounded-2xl border-2 border-gray-300 hover:border-amber-500 hover:bg-amber-50 transition-all duration-300 hover:scale-105 shadow-lg min-w-[240px]"
            >
              <svg className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              View Business Plan
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16 pt-12 border-t border-gray-200">
            {[
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Verified Business Model",
                description: "Proven success across multiple locations"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "360° Support System",
                description: "Training, marketing, and operational guidance"
              },
              {
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Rapid ROI",
                description: "Industry-leading returns on investment"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center group p-6 rounded-2xl hover:bg-amber-50 transition-all duration-300">
                <div className="w-14 h-14 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-amber-500 rounded-full mt-2"></div>
          </div>
        </div>
      </div> */}
    </header>
  );
}