import React from 'react';
import { 
  ArrowUpRight, 
  ArrowDownRight, 
  DollarSign, 
  TrendingUp, 
  Wallet, 
  CreditCard,
  Download,
  Filter,
  MoreVertical,
  Calendar
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend
} from 'recharts';

export function FinanceDashboard() {
  const stats = [
    { 
      title: 'Total Revenue', 
      value: 'Rp 2.4B', 
      change: '+12.5%', 
      trend: 'up',
      icon: DollarSign, 
      color: 'emerald' 
    },
    { 
      title: 'Total Expenses', 
      value: 'Rp 1.1B', 
      change: '-2.4%', 
      trend: 'down',
      icon: CreditCard, 
      color: 'rose' 
    },
    { 
      title: 'Net Profit', 
      value: 'Rp 1.3B', 
      change: '+8.2%', 
      trend: 'up',
      icon: TrendingUp, 
      color: 'blue' 
    },
    { 
      title: 'Cash on Hand', 
      value: 'Rp 850M', 
      change: '+5.1%', 
      trend: 'up',
      icon: Wallet, 
      color: 'purple' 
    },
  ];

  const data = [
    { name: 'Jan', revenue: 400, expense: 240, profit: 160 },
    { name: 'Feb', revenue: 300, expense: 139, profit: 161 },
    { name: 'Mar', revenue: 200, expense: 980, profit: -780 }, // Example of loss
    { name: 'Apr', revenue: 278, expense: 390, profit: -112 },
    { name: 'May', revenue: 189, expense: 480, profit: -291 },
    { name: 'Jun', revenue: 239, expense: 380, profit: -141 },
    { name: 'Jul', revenue: 349, expense: 430, profit: -81 },
  ];

  // More realistic mock data
  const financialData = [
    { name: 'Jan', revenue: 450, expense: 320 },
    { name: 'Feb', revenue: 520, expense: 340 },
    { name: 'Mar', revenue: 480, expense: 310 },
    { name: 'Apr', revenue: 600, expense: 420 },
    { name: 'May', revenue: 580, expense: 400 },
    { name: 'Jun', revenue: 750, expense: 480 },
  ];

  const expenseBreakdown = [
    { category: 'Subcontractors', amount: 450, color: '#3b82f6' },
    { category: 'Materials', amount: 320, color: '#10b981' },
    { category: 'Salaries', amount: 280, color: '#f59e0b' },
    { category: 'Operational', amount: 150, color: '#6366f1' },
    { category: 'Marketing', amount: 80, color: '#ec4899' },
  ];

  const transactions = [
    { id: 1, desc: 'Payment from Client A', date: '2024-03-15', amount: '+Rp 150.000.000', type: 'income', status: 'Completed' },
    { id: 2, desc: 'Subcontractor Payment', date: '2024-03-14', amount: '-Rp 45.000.000', type: 'expense', status: 'Pending' },
    { id: 3, desc: 'Office Rent', date: '2024-03-10', amount: '-Rp 25.000.000', type: 'expense', status: 'Completed' },
    { id: 4, desc: 'Payment from Client B', date: '2024-03-08', amount: '+Rp 80.000.000', type: 'income', status: 'Completed' },
    { id: 5, desc: 'Server Costs', date: '2024-03-05', amount: '-Rp 5.000.000', type: 'expense', status: 'Completed' },
  ];

  return (
    <div className="space-y-6 pb-12">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Finance Dashboard</h1>
          <p className="text-slate-500">Financial overview, cash flow, and expense tracking</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors bg-white">
            <Calendar className="w-4 h-4" />
            This Month
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-sm shadow-blue-200">
            <Download className="w-4 h-4" />
            Download Report
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow group">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-${stat.color}-50 text-${stat.color}-600 group-hover:bg-${stat.color}-100 transition-colors`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center gap-1 text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              } bg-slate-50 px-2 py-1 rounded-full`}>
                {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">{stat.value}</h3>
            <p className="text-slate-500 text-sm mt-1">{stat.title}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue vs Expense Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900">Revenue vs Expenses</h3>
            <div className="flex gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                <span className="text-xs text-slate-500">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500"></span>
                <span className="text-xs text-slate-500">Expenses</span>
              </div>
            </div>
          </div>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={financialData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#f43f5e" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <CartesianGrid vertical={false} stroke="#e2e8f0" strokeDasharray="3 3" />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="revenue" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorRevenue)" 
                />
                <Area 
                  type="monotone" 
                  dataKey="expense" 
                  stroke="#f43f5e" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorExpense)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Expense Breakdown */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Expense Breakdown</h3>
          <div className="space-y-6">
            {expenseBreakdown.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-slate-700">{item.category}</span>
                  <span className="font-semibold text-slate-900">{Math.round((item.amount / 1280) * 100)}%</span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-500"
                    style={{ 
                      width: `${(item.amount / 1280) * 100}%`,
                      backgroundColor: item.color
                    }}
                  ></div>
                </div>
                <div className="text-xs text-slate-500 text-right">
                  Rp {item.amount}M
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-2 text-sm text-blue-600 font-medium hover:bg-blue-50 rounded-lg transition-colors border border-blue-100">
            View Detailed Report
          </button>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
          <h3 className="text-lg font-bold text-slate-900">Recent Transactions</h3>
          <button className="text-sm text-blue-600 font-medium hover:text-blue-700">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-50 text-slate-900 font-semibold border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Transaction Details</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Amount</th>
                <th className="px-6 py-4 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-full ${transaction.type === 'income' ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                        {transaction.type === 'income' ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      </div>
                      <span className="font-medium text-slate-900">{transaction.desc}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">{transaction.date}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                      transaction.status === 'Completed' 
                        ? 'bg-green-50 text-green-700 border-green-200' 
                        : 'bg-amber-50 text-amber-700 border-amber-200'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className={`px-6 py-4 text-right font-medium ${
                    transaction.type === 'income' ? 'text-emerald-600' : 'text-slate-900'
                  }`}>
                    {transaction.amount}
                  </td>
                  <td className="px-6 py-4 text-center">
                    <button className="text-slate-400 hover:text-blue-600 transition-colors">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}