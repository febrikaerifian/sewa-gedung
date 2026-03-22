import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function CashFlowChart() {
  const data = [
    { month: 'Jul', inflow: 8500000, outflow: 5200000 },
    { month: 'Aug', inflow: 9100000, outflow: 5800000 },
    { month: 'Sep', inflow: 8800000, outflow: 5400000 },
    { month: 'Oct', inflow: 9500000, outflow: 5600000 },
    { month: 'Nov', inflow: 8900000, outflow: 5300000 },
    { month: 'Dec', inflow: 8500000, outflow: 5200000 },
  ];

  const formatCurrency = (value: number) => {
    return `Rp ${(value / 1000000).toFixed(1)}M`;
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Cash Flow Analysis</h3>
        <p className="text-slate-500 text-sm">Money in vs money out (Last 6 months)</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
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
          <Bar dataKey="inflow" fill="#10b981" name="Cash Inflow" radius={[8, 8, 0, 0]} />
          <Bar dataKey="outflow" fill="#ef4444" name="Cash Outflow" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
