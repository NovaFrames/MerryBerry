import React, { useMemo } from "react";
import { Line } from "react-chartjs-2";
import "../../utils/chartSetup";

export default function SalesProfitChart() {
  const lineData = useMemo(() => {
    const sales = [600000, 700000, 800000, 900000, 1000000, 1100000, 1200000];
    const fixedExpenses = 162500;
    const netProfit = sales.map((s) => Math.round(s * 0.45 - fixedExpenses));
    const profitMargins = sales.map((s, i) => ((netProfit[i] / s) * 100).toFixed(1));

    return {
      labels: sales.map((s) => `₹${(s / 100000).toFixed(1)}L`),
      datasets: [
        {
          label: "Monthly Sales",
          data: sales,
          borderColor: "#6366f1",
          backgroundColor: "rgba(99,102,241,0.08)",
          tension: 0.4,
          fill: true,
          yAxisID: 'y',
          pointBackgroundColor: "#6366f1",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
        },
        {
          label: "Net Profit",
          data: netProfit,
          borderColor: "#10b981",
          backgroundColor: "transparent",
          tension: 0.4,
          borderDash: [5, 5],
          yAxisID: 'y',
          pointBackgroundColor: "#10b981",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
        },
        {
          label: "Profit Margin %",
          data: profitMargins,
          borderColor: "#f59e0b",
          backgroundColor: "transparent",
          tension: 0.4,
          yAxisID: 'y1',
          pointBackgroundColor: "#f59e0b",
          pointBorderColor: "#ffffff",
          pointBorderWidth: 2,
          pointRadius: 6,
          pointHoverRadius: 8,
        }
      ],
    };
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top',
        labels: {
          usePointStyle: true,
          padding: 20,
          font: {
            family: 'Inter, sans-serif'
          }
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
          label: function (context) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.dataset.label.includes('%')) {
              label += context.parsed.y + '%';
            } else {
              label += '₹' + context.parsed.y.toLocaleString();
            }
            return label;
          }
        }
      }
    },
    scales: {
      y: {
        type: 'linear',
        display: true,
        position: 'left',
        title: {
          display: true,
          text: 'Amount (₹)',
          color: '#64748b',
          font: {
            family: 'Inter, sans-serif'
          }
        },
        grid: {
          color: 'rgba(100, 116, 139, 0.1)',
        },
        ticks: {
          color: '#64748b',
          callback: function (value) {
            return '₹' + (value / 100000).toFixed(0) + 'L';
          }
        },
      },
      y1: {
        type: 'linear',
        display: true,
        position: 'right',
        title: {
          display: true,
          text: 'Profit Margin %',
          color: '#64748b',
          font: {
            family: 'Inter, sans-serif'
          }
        },
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          color: '#64748b',
          callback: function (value) {
            return value + '%';
          }
        },
      },
      x: {
        grid: {
          color: 'rgba(100, 116, 139, 0.1)',
        },
        ticks: {
          color: '#64748b',
        }
      },
    },
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-slate-200/80 shadow-sm p-8 hover:shadow-lg transition-all duration-300 h-full">
      <div className="text-center mb-3">
        <h3 className="text-2xl font-bold text-slate-800">Sales vs Profitability</h3>
        <p className="text-slate-600 mt-1">Revenue growth impact on margins</p>
      </div>

      <div className="flex justify-center items-center gap-4 mt-4">
        <div className="text-xs bg-blue-100 text-blue-800 px-3 py-2 rounded-xl border border-blue-200">
          Sales
        </div>
        <div className="text-xs bg-emerald-100 text-emerald-800 px-3 py-2 rounded-xl border border-emerald-200">
          Profit
        </div>
        <div className="text-xs bg-amber-100 text-amber-800 px-3 py-2 rounded-xl border border-amber-200">
          Margin
        </div>
      </div>


      <div className="relative h-72">
        <Line data={lineData} options={options} />
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200/60">
        <h4 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
          <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          Growth Analysis
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          Profit margins improve from 18% to 28% as sales scale, demonstrating operational leverage
          and efficient fixed cost absorption across the growth trajectory.
        </p>
      </div>
    </div>
  );
}