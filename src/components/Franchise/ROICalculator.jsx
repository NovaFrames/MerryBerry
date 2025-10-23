import React from "react";

export default function ROICalculator({
  models,
  investment,
  setInvestment,
  expectedRoiPct,
  setExpectedRoiPct,
  selectedCalcModel,
  setSelectedCalcModel,
  expectedMonthlyReturn,
  paybackMonths
}) {
  const selectedModel = models.find(model => model.key === selectedCalcModel);
  const annualReturn = expectedMonthlyReturn * 12;
  const annualROI = investment > 0 ? (annualReturn / investment) * 100 : 0;

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/80 shadow-sm p-8 sticky top-8 hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h3 className="text-2xl font-bold text-slate-800">ROI Calculator</h3>
          <p className="text-slate-600 mt-1">Customize your investment scenario</p>
        </div>
        <div className="flex gap-1">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>

      {/* Input Section */}
      <div className="space-y-6">
        {/* Model Selection */}
        {/* <div>
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Business Model
          </label>
          <select
            value={selectedCalcModel}
            onChange={(e) => setSelectedCalcModel(e.target.value)}
            className="w-full px-4 py-4 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
          >
            {models.map((model) => (
              <option key={model.key} value={model.key}>{model.name}</option>
            ))}
          </select>
        </div> */}

        {/* Investment Input */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-3">
            Total Investment (₹)
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-500 text-lg">₹</span>
            <input
              type="number"
              value={investment}
              onChange={(e) => setInvestment(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border border-slate-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white/50 backdrop-blur-sm"
              placeholder="Enter investment amount"
            />
          </div>
        </div>

        {/* ROI Slider */}
        <div>
          <div className="flex justify-between items-center mb-3">
            <label className="block text-sm font-semibold text-slate-700">
              Expected ROI (%)
            </label>
            <span className="text-lg font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-xl">
              {expectedRoiPct}%
            </span>
          </div>
          <input
            type="range"
            min="5"
            max="50"
            step="1"
            value={expectedRoiPct}
            onChange={(e) => setExpectedRoiPct(e.target.value)}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer slider-thumb"
          />
          <div className="flex justify-between text-xs text-slate-500 mt-2">
            <span>5%</span>
            <span>50%</span>
          </div>
        </div>
      </div>

      {/* Results Card */}
      <div className="mt-8 p-6  rounded-2xl border border-blue-200/60">
        <h4 className="font-bold text-slate-800 mb-4 text-lg">Projection Results</h4>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-blue-200/40">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span className="text-sm font-medium text-slate-700">Monthly Return</span>
            </div>
            <span className="font-bold text-emerald-600 text-lg">
              ₹{expectedMonthlyReturn.toLocaleString()}
            </span>
          </div>
          
          <div className="flex justify-between items-center pb-3 border-b border-blue-200/40">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium text-slate-700">Annual Return</span>
            </div>
            <span className="font-bold text-blue-600 text-lg">
              ₹{annualReturn.toLocaleString()}
            </span>
          </div>
          
          {/* <div className="flex justify-between items-center pb-3 border-b border-blue-200/40">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-sm font-medium text-slate-700">Annual ROI</span>
            </div>
            <span className="font-bold text-purple-600 text-lg">
              {annualROI.toFixed(1)}%
            </span>
          </div> */}
          
          <div className="flex justify-between items-center pt-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="text-sm font-semibold text-slate-800">Payback Period</span>
            </div>
            <span className="font-bold text-orange-600 text-xl">
              {paybackMonths} months
            </span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <a
        href="/files/merry-berry-franchise-prospectus.pdf"
        className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group"
      >
        <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Download Detailed Prospectus
      </a>
    </div>
  );
}