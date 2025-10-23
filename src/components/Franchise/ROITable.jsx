import React from "react";

export default function ROITable({ models }) {
  const getProfitColor = (profitPct) => {
    if (profitPct >= 25) return "text-emerald-700 bg-emerald-50 border border-emerald-200";
    if (profitPct >= 20) return "text-green-600 bg-green-50 border border-green-200";
    if (profitPct >= 15) return "text-blue-600 bg-blue-50 border border-blue-200";
    if (profitPct >= 10) return "text-amber-600 bg-amber-50 border border-amber-200";
    return "text-rose-600 bg-rose-50 border border-rose-200";
  };

  const getPerformanceBadge = (profitPct) => {
    if (profitPct >= 25) return { text: "Excellent", color: "bg-emerald-500" };
    if (profitPct >= 20) return { text: "Very Good", color: "bg-green-500" };
    if (profitPct >= 15) return { text: "Good", color: "bg-blue-500" };
    if (profitPct >= 10) return { text: "Fair", color: "bg-amber-500" };
    return { text: "Needs Review", color: "bg-rose-500" };
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full">
        <thead className="bg-slate-50/80">
          <tr>
            <th className="px-8 py-5 text-left text-sm font-semibold text-slate-700 uppercase tracking-wider">
              Business Model
            </th>
            <th className="px-6 py-5 text-right text-sm font-semibold text-slate-700 uppercase tracking-wider">
              Monthly Sales
            </th>
            <th className="px-6 py-5 text-right text-sm font-semibold text-slate-700 uppercase tracking-wider">
              Operating Costs
            </th>
            <th className="px-6 py-5 text-right text-sm font-semibold text-slate-700 uppercase tracking-wider">
              Net Profit
            </th>
            <th className="px-6 py-5 text-right text-sm font-semibold text-slate-700 uppercase tracking-wider">
              Profit Margin
            </th>
            <th className="px-6 py-5 text-right text-sm font-semibold text-slate-700 uppercase tracking-wider">
              Performance
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200/60">
          {models.map((model, index) => {
            const profitPct = (model.netProfit / model.avgMonthlySales) * 100;
            const performance = getPerformanceBadge(profitPct);
            
            return (
              <tr 
                key={model.key} 
                className="hover:bg-slate-50/50 transition-all duration-200 group"
              >
                <td className="px-8 py-5 whitespace-nowrap">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-sm">
                        {model.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">
                        {model.name}
                      </div>
                      <div className="text-sm text-slate-500">Franchise Model</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-right">
                  <div className="font-semibold text-slate-800">₹{model.avgMonthlySales.toLocaleString()}</div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-right">
                  <div className="text-slate-700">₹{model.expenses.toLocaleString()}</div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-right">
                  <div className="font-bold text-slate-800 text-lg">₹{model.netProfit.toLocaleString()}</div>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-right">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getProfitColor(profitPct)}`}>
                    {profitPct.toFixed(1)}%
                  </span>
                </td>
                <td className="px-6 py-5 whitespace-nowrap text-right">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${performance.color}`}>
                    {performance.text}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}