import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

export function ExpenseBreakdown() {
  const data = [
    { name: 'Salaries', value: 2800000, percentage: 54 },
    { name: 'Operations', value: 1200000, percentage: 23 },
    { name: 'Marketing', value: 650000, percentage: 13 },
    { name: 'Technology', value: 350000, percentage: 7 },
    { name: 'Others', value: 200000, percentage: 3 },
  ];

  const COLORS = ['#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16'];

  const formatCurrency = (value: number) => {
    return `Rp ${(value / 1000000).toFixed(1)}M`;
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm h-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Expense Breakdown</h3>
        <p className="text-slate-500 text-sm">Monthly spending distribution</p>
      </div>
      
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => formatCurrency(value)} />
        </PieChart>
      </ResponsiveContainer>

      <div className="mt-4 space-y-2">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: COLORS[index] }}
              />
              <span className="text-slate-700">{item.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-slate-500">{item.percentage}%</span>
              <span className="font-semibold text-slate-800">{formatCurrency(item.value)}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
