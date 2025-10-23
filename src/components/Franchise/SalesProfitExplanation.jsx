import React from "react";

export default function SalesProfitExplanation() {
  const dataPoints = [
    { sales: 600000, grossProfit: 270000, expenses: 162500, netProfit: 107500 },
    { sales: 700000, grossProfit: 315000, expenses: 162500, netProfit: 152500 },
    { sales: 800000, grossProfit: 360000, expenses: 162500, netProfit: 197500 },
    { sales: 900000, grossProfit: 405000, expenses: 162500, netProfit: 242500 },
    { sales: 1000000, grossProfit: 450000, expenses: 162500, netProfit: 287500 },
    { sales: 1100000, grossProfit: 495000, expenses: 162500, netProfit: 332500 },
    { sales: 1200000, grossProfit: 540000, expenses: 162500, netProfit: 377500 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-slate-700">Financial Analysis</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent mb-4">
            Sales vs Net Profit Analysis
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Understanding operational leverage and profitability scaling in the Merry Berry business model
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Card */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/80 shadow-sm p-8 hover:shadow-lg transition-all duration-300">
              {/* Key Metrics Overview */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl border border-blue-200/60">
                  <div className="text-2xl font-bold text-slate-800 mb-2">45%</div>
                  <div className="text-sm text-slate-600 font-medium">Gross Profit Margin</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl border border-emerald-200/60">
                  <div className="text-2xl font-bold text-slate-800 mb-2">₹1,62,500</div>
                  <div className="text-sm text-slate-600 font-medium">Fixed Monthly Expenses</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-100 rounded-2xl border border-purple-200/60">
                  <div className="text-2xl font-bold text-slate-800 mb-2">28%</div>
                  <div className="text-sm text-slate-600 font-medium">Peak Net Profit Margin</div>
                </div>
              </div>

              {/* Explanation Content */}
              <div className="space-y-6">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Analysis Overview
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-lg">
                    This analysis demonstrates how net profit scales with sales volume, highlighting the 
                    powerful effect of operational leverage when fixed expenses remain constant.
                  </p>
                </div>

                {/* Calculation Methodology */}
                <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-2xl p-6 border border-slate-200/60">
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Calculation Methodology
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white/80 rounded-xl border">
                      <span className="text-slate-700 font-medium">Gross Profit</span>
                      <code className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg font-mono text-sm">
                        45% × Sales
                      </code>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/80 rounded-xl border">
                      <span className="text-slate-700 font-medium">Fixed Expenses</span>
                      <code className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-lg font-mono text-sm">
                        ₹1,62,500
                      </code>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white/80 rounded-xl border">
                      <span className="text-slate-700 font-medium">Net Profit Formula</span>
                      <code className="bg-purple-100 text-purple-800 px-3 py-1 rounded-lg font-mono text-sm">
                        Gross Profit − Expenses
                      </code>
                    </div>
                  </div>
                </div>

                {/* Key Examples */}
                <div>
                  <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Performance Examples
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-5 border border-emerald-200/60">
                      <div className="text-lg font-bold text-slate-800 mb-2">₹10 Lakhs Sales</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Gross Profit:</span>
                          <span className="font-semibold text-slate-800">₹4,50,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Net Profit:</span>
                          <span className="font-bold text-emerald-600">₹2,87,500</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Margin:</span>
                          <span className="font-semibold text-blue-600">28.8%</span>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-5 border border-blue-200/60">
                      <div className="text-lg font-bold text-slate-800 mb-2">₹12 Lakhs Sales</div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Gross Profit:</span>
                          <span className="font-semibold text-slate-800">₹5,40,000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Net Profit:</span>
                          <span className="font-bold text-emerald-600">₹3,77,500</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Margin:</span>
                          <span className="font-semibold text-blue-600">31.5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Insights */}
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200/60">
                  <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
                    <svg className="w-5 h-5 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Key Business Insights
                  </h4>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Operational Leverage:</strong> Fixed costs create exponential profit growth as sales increase</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Scalability:</strong> Business model efficiently absorbs fixed costs at higher volumes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span><strong>Profit Acceleration:</strong> Each additional rupee of sales contributes 45 paise directly to profit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Data Points */}
          <div className="space-y-6">
            {/* Profit Growth Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/80 shadow-sm p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                Profit Growth Trajectory
              </h3>
              <div className="space-y-3">
                {dataPoints.map((point, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50/50 rounded-xl border border-slate-200/60">
                    <div className="text-sm font-medium text-slate-700">
                      ₹{(point.sales / 100000).toFixed(1)}L
                    </div>
                    <div className="text-sm font-bold text-emerald-600">
                      ₹{(point.netProfit / 1000).toFixed(0)}K
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Margin Analysis Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/80 shadow-sm p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                Margin Analysis
              </h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl border">
                  <div className="text-2xl font-bold text-slate-800">18% → 31%</div>
                  <div className="text-sm text-slate-600">Net Profit Margin Growth</div>
                </div>
                <p className="text-sm text-slate-600 text-center">
                  Margin improves by 13 percentage points as sales scale from ₹6L to ₹12L
                </p>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-3xl p-6 text-white text-center">
              <h3 className="font-bold text-lg mb-3">Ready to Invest?</h3>
              <p className="text-purple-100 text-sm mb-4">
                Start your Merry Berry franchise journey with comprehensive support
              </p>
              <button className="w-full bg-white text-purple-600 font-semibold py-3 px-4 rounded-2xl hover:bg-slate-100 transition-colors duration-200">
                Download Investment Guide
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}