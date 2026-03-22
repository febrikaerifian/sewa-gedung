import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function SalesChart() {
  const data = [
    { month: 'Jan', revenue: 24500, orders: 142 },
    { month: 'Feb', revenue: 28200, orders: 158 },
    { month: 'Mar', revenue: 31800, orders: 175 },
    { month: 'Apr', revenue: 29500, orders: 165 },
    { month: 'May', revenue: 35200, orders: 192 },
    { month: 'Jun', revenue: 42800, orders: 225 },
    { month: 'Jul', revenue: 38900, orders: 208 },
    { month: 'Aug', revenue: 45600, orders: 245 },
    { month: 'Sep', revenue: 48200, orders: 260 },
    { month: 'Oct', revenue: 52100, orders: 278 },
    { month: 'Nov', revenue: 49800, orders: 268 },
    { month: 'Dec', revenue: 56400, orders: 295 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg border border-slate-200 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Sales Overview</h3>
        <p className="text-slate-500 text-sm">Monthly revenue and order trends</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip 
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
            name="Revenue ($)"
          />
          <Area 
            type="monotone" 
            dataKey="orders" 
            stroke="#10b981" 
            fill="#10b981" 
            fillOpacity={0.2}
            name="Orders"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
