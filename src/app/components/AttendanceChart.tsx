import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function AttendanceChart() {
  const data = [
    { day: 'Mon', present: 242, late: 6, absent: 0 },
    { day: 'Tue', present: 238, late: 8, absent: 2 },
    { day: 'Wed', present: 245, late: 3, absent: 0 },
    { day: 'Thu', present: 240, late: 5, absent: 3 },
    { day: 'Fri', present: 236, late: 7, absent: 5 },
    { day: 'Sat', present: 235, late: 4, absent: 9 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Weekly Attendance Overview</h3>
        <p className="text-slate-500 text-sm">Employee attendance tracking</p>
      </div>
      
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="day" stroke="#64748b" />
          <YAxis stroke="#64748b" />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e2e8f0',
              borderRadius: '8px'
            }}
          />
          <Legend />
          <Bar dataKey="present" fill="#10b981" name="Present" radius={[8, 8, 0, 0]} />
          <Bar dataKey="late" fill="#f59e0b" name="Late" radius={[8, 8, 0, 0]} />
          <Bar dataKey="absent" fill="#ef4444" name="Absent" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
