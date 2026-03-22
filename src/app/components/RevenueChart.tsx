import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function RevenueChart() {
  const data = [
    { month: 'Jan', revenue: 6500000, profit: 2100000 },
    { month: 'Feb', revenue: 7200000, profit: 2500000 },
    { month: 'Mar', revenue: 6800000, profit: 2200000 },
    { month: 'Apr', revenue: 7800000, profit: 2800000 },
    { month: 'May', revenue: 8200000, profit: 3100000 },
    { month: 'Jun', revenue: 7500000, profit: 2600000 },
    { month: 'Jul', revenue: 8500000, profit: 3200000 },
    { month: 'Aug', revenue: 9100000, profit: 3600000 },
    { month: 'Sep', revenue: 8800000, profit: 3400000 },
    { month: 'Oct', revenue: 9500000, profit: 3800000 },
    { month: 'Nov', revenue: 8900000, profit: 3500000 },
    { month: 'Dec', revenue: 8500000, profit: 3300000 },
  ];

  const formatCurrency = (value: number) => {
    return `Rp ${(value / 1000000).toFixed(1)}M`;
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Revenue & Profit Trends</h3>
        <p className="text-slate-500 text-sm">Monthly financial performance</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
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
          <Area 
            type="monotone" 
            dataKey="revenue" 
            stroke="#3b82f6" 
            fill="#3b82f6" 
            fillOpacity={0.2}
            name="Revenue"
          />
          <Area 
            type="monotone" 
            dataKey="profit" 
            stroke="#10b981" 
            fill="#10b981" 
            fillOpacity={0.2}
            name="Profit"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
