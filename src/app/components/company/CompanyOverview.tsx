import { DollarSign, TrendingUp, TrendingDown, Activity } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function CompanyOverview() {
  const costData = [
    { month: 'Jan', revenue: 6500000000, cost: 4200000000, profit: 2300000000 },
    { month: 'Feb', revenue: 7200000000, cost: 4800000000, profit: 2400000000 },
    { month: 'Mar', revenue: 6800000000, cost: 4500000000, profit: 2300000000 },
    { month: 'Apr', revenue: 7800000000, cost: 5100000000, profit: 2700000000 },
    { month: 'May', revenue: 8200000000, cost: 5400000000, profit: 2800000000 },
    { month: 'Jun', revenue: 7500000000, cost: 4900000000, profit: 2600000000 },
    { month: 'Jul', revenue: 8500000000, cost: 5600000000, profit: 2900000000 },
    { month: 'Aug', revenue: 9100000000, cost: 6000000000, profit: 3100000000 },
    { month: 'Sep', revenue: 8800000000, cost: 5800000000, profit: 3000000000 },
    { month: 'Oct', revenue: 9500000000, cost: 6200000000, profit: 3300000000 },
    { month: 'Nov', revenue: 8900000000, cost: 5900000000, profit: 3000000000 },
    { month: 'Dec', revenue: 8500000000, cost: 5600000000, profit: 2900000000 },
  ];

  const formatCurrency = (value: number) => {
    return `Rp ${(value / 1000000000).toFixed(1)}B`;
  };

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="p-3 bg-green-500 rounded-lg">
              <DollarSign size={24} className="text-white" />
            </div>
          </div>
          <p className="text-slate-600 text-sm mb-1">Total Revenue (Year)</p>
          <p className="text-3xl font-semibold text-slate-900 mb-2">Rp 97.3B</p>
          <p className="text-sm text-green-600">↑ 18.2% YoY</p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border border-red-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="p-3 bg-rose-500 rounded-lg">
              <TrendingDown size={24} className="text-white" />
            </div>
          </div>
          <p className="text-slate-600 text-sm mb-1">Total Cost (Year)</p>
          <p className="text-3xl font-semibold text-slate-900 mb-2">Rp 64.0B</p>
          <p className="text-sm text-rose-600">↑ 12.5% YoY</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="p-3 bg-blue-500 rounded-lg">
              <TrendingUp size={24} className="text-white" />
            </div>
          </div>
          <p className="text-slate-600 text-sm mb-1">Net Profit (Year)</p>
          <p className="text-3xl font-semibold text-slate-900 mb-2">Rp 33.3B</p>
          <p className="text-sm text-green-600">↑ 24.5% YoY</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="p-3 bg-purple-500 rounded-lg">
              <Activity size={24} className="text-white" />
            </div>
          </div>
          <p className="text-slate-600 text-sm mb-1">Profit Margin</p>
          <p className="text-3xl font-semibold text-slate-900 mb-2">34.2%</p>
          <p className="text-sm text-green-600">↑ 3.2% from last year</p>
        </div>
      </div>

      {/* Revenue vs Cost Chart */}
      <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
        <h3 className="text-lg font-semibold text-slate-800 mb-6">Revenue, Cost & Profit Trend (2025)</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={costData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="month" stroke="#64748b" />
            <YAxis stroke="#64748b" tickFormatter={formatCurrency} />
            <Tooltip 
              formatter={(value: number) => formatCurrency(value)}
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e2e8f0',
                borderRadius: '8px'
              }}
            />
            <Legend />
            <Bar dataKey="revenue" fill="#10b981" name="Revenue" radius={[8, 8, 0, 0]} />
            <Bar dataKey="cost" fill="#ef4444" name="Cost" radius={[8, 8, 0, 0]} />
            <Bar dataKey="profit" fill="#3b82f6" name="Profit" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Weekly/Monthly/Yearly Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
          <h4 className="text-sm font-semibold text-slate-700 mb-4">This Week</h4>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-slate-500">Revenue</p>
              <p className="text-xl font-semibold text-green-600">Rp 2.1B</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Cost</p>
              <p className="text-xl font-semibold text-rose-600">Rp 1.4B</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Profit</p>
              <p className="text-xl font-semibold text-blue-600">Rp 700M</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
          <h4 className="text-sm font-semibold text-slate-700 mb-4">This Month (Dec)</h4>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-slate-500">Revenue</p>
              <p className="text-xl font-semibold text-green-600">Rp 8.5B</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Cost</p>
              <p className="text-xl font-semibold text-rose-600">Rp 5.6B</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Profit</p>
              <p className="text-xl font-semibold text-blue-600">Rp 2.9B</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
          <h4 className="text-sm font-semibold text-slate-700 mb-4">This Year (2025)</h4>
          <div className="space-y-3">
            <div>
              <p className="text-xs text-slate-500">Revenue</p>
              <p className="text-xl font-semibold text-green-600">Rp 97.3B</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Cost</p>
              <p className="text-xl font-semibold text-rose-600">Rp 64.0B</p>
            </div>
            <div>
              <p className="text-xs text-slate-500">Profit</p>
              <p className="text-xl font-semibold text-blue-600">Rp 33.3B</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
