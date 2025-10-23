import React from "react";
import ROITable from "./ROITable";
import ROICalculator from "./ROICalculator";
import ExpenseChart from "./ExpenseChart";
import SalesProfitChart from "./SalesProfitChart";

export default function ROISection({
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
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Enhanced Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-6 py-3 mb-4">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-slate-700">Financial Analysis</span>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mb-4">
            Return on Investment Dashboard
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive financial modeling and ROI projections to guide your investment decisions with confidence
          </p>
        </div>

        {/* Performance Metrics Cards - Extended */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/80 p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-xl mb-4">
              <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">
              ₹{expectedMonthlyReturn.toLocaleString()}
            </div>
            <div className="text-sm text-slate-600">Estimated Monthly Return</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/80 p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-50 rounded-xl mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">
              {paybackMonths}
            </div>
            <div className="text-sm text-slate-600">Payback Period (Months)</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/80 p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-50 rounded-xl mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">
              {expectedRoiPct}%
            </div>
            <div className="text-sm text-slate-600">Expected Annual ROI</div>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200/80 p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-50 rounded-xl mb-4">
              <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-slate-800 mb-2">
              {models.length}
            </div>
            <div className="text-sm text-slate-600">Business Models</div>
          </div>
        </div>

        {/* Enhanced Table with Extended Card Layout */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden mb-12 hover:shadow-lg transition-all duration-300">
          <div className="px-8 py-6 border-b border-slate-200/60 bg-gradient-to-r from-slate-50 to-blue-50/30">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-800">
                  Financial Model Comparison
                </h3>
                <p className="text-slate-600 mt-2">
                  Detailed breakdown of revenue, expenses, and profitability across different franchise models
                </p>
              </div>
              <div className="flex items-center gap-2 bg-white/80 border border-slate-200 rounded-full px-4 py-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm font-medium text-slate-700">Live Data</span>
              </div>
            </div>
          </div>
          <ROITable models={models} />
        </div>

        {/* Extended Interactive Dashboard */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-1">
              <ROICalculator
                models={models}
                investment={investment}
                setInvestment={setInvestment}
                expectedRoiPct={expectedRoiPct}
                setExpectedRoiPct={setExpectedRoiPct}
                selectedCalcModel={selectedCalcModel}
                setSelectedCalcModel={setSelectedCalcModel}
                expectedMonthlyReturn={expectedMonthlyReturn}
                paybackMonths={paybackMonths}
              />
            </div>
            
            <div className="xl:col-span-2 grid grid-cols-1 lg:grid-cols-2 gap-8">
              <ExpenseChart key={`expense-${selectedCalcModel}`} />
              <SalesProfitChart key={`sales-${selectedCalcModel}`} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}