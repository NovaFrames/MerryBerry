import React, { useMemo } from "react";
import { Pie } from "react-chartjs-2";
import "../../utils/chartSetup";

export default function ExpenseChart() {
  const pieData = useMemo(() => ({
    labels: ["Rent & Utilities", "Raw Materials", "Staff Salaries", "Marketing", "Maintenance", "Miscellaneous"],
    datasets: [
      {
        data: [20, 35, 25, 10, 5, 5],
        backgroundColor: [
          "#6366f1", "#f59e0b", "#10b981", "#ef4444", "#8b5cf6", "#06b6d4"
        ],
        borderWidth: 3,
        borderColor: "#ffffff",
        hoverBorderWidth: 4,
        hoverOffset: 8,
      },
    ],
  }), []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { 
        position: 'right',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            family: 'Inter, sans-serif',
            size: 12
          },
          color: '#64748b'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        titleColor: '#1e293b',
        bodyColor: '#475569',
        borderColor: '#e2e8f0',
        borderWidth: 1,
        cornerRadius: 12,
        callbacks: {
          label: function(context) {
            return `${context.label}: ${context.parsed}%`;
          }
        }
      }
    },
    cutout: '55%',
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/80 shadow-sm p-8 hover:shadow-lg transition-all duration-300 h-full">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-800">Expense Breakdown</h3>
          <p className="text-slate-600 mt-1">Monthly operational cost distribution</p>
        </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        <div className="text-sm text-slate-500 bg-slate-100/80 px-4 py-2 rounded-2xl border border-slate-200/60">
          Current Month
        </div>
      </div>
      
      <div className="relative h-72">
        <Pie data={pieData} options={options} />
      </div>
      
      <div className="mt-8 p-6 bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl border border-slate-200/60">
        <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Key Insights
        </h4>
        <ul className="text-sm text-slate-600 space-y-2">
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
            <span>Raw materials account for largest expense (35%)</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>Fixed costs (rent + staff): 45% of total</span>
          </li>
          <li className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
            <span>Marketing budget optimized for growth</span>
          </li>
        </ul>
      </div>
    </div>
  );
}