import { 
  FolderKanban, FileText, Users, DollarSign, TrendingUp, 
  AlertCircle, CheckCircle, Clock, Activity
} from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function Dashboard() {
  const stats = [
    {
      title: 'Active Projects',
      value: '24',
      change: '+12%',
      trend: 'up',
      icon: FolderKanban,
      color: 'blue'
    },
    {
      title: 'Total Revenue',
      value: 'Rp 4.2B',
      change: '+18%',
      trend: 'up',
      icon: DollarSign,
      color: 'green'
    },
    {
      title: 'Pending Invoices',
      value: '18',
      change: '-8%',
      trend: 'down',
      icon: FileText,
      color: 'orange'
    },
    {
      title: 'Team Members',
      value: '156',
      change: '+5%',
      trend: 'up',
      icon: Users,
      color: 'purple'
    }
  ];

  const projectProgress = [
    { name: 'FTTH Jakarta', progress: 85, status: 'on-track' },
    { name: 'BTS Installation Bandung', progress: 62, status: 'on-track' },
    { name: 'PLN Upgrade Surabaya', progress: 45, status: 'delayed' },
    { name: 'FTTH Bali', progress: 92, status: 'on-track' },
    { name: 'BTS Medan', progress: 38, status: 'on-track' }
  ];

  const revenueData = [
    { month: 'Jan', revenue: 420, expense: 280 },
    { month: 'Feb', revenue: 380, expense: 260 },
    { month: 'Mar', revenue: 520, expense: 310 },
    { month: 'Apr', revenue: 480, expense: 290 },
    { month: 'May', revenue: 590, expense: 340 },
    { month: 'Jun', revenue: 650, expense: 380 }
  ];

  const projectTypeData = [
    { name: 'FTTH', value: 45, color: '#3b82f6' },
    { name: 'BTS Installation', value: 30, color: '#10b981' },
    { name: 'PLN Upgrade', value: 25, color: '#f59e0b' }
  ];

  const recentActivities = [
    { 
      action: 'New project created',
      project: 'FTTH Yogyakarta',
      user: 'John Doe',
      time: '2 hours ago',
      type: 'success'
    },
    {
      action: 'Invoice issued',
      project: 'BTS Installation Jakarta',
      user: 'Sarah Smith',
      time: '4 hours ago',
      type: 'info'
    },
    {
      action: 'BAST pending',
      project: 'PLN Upgrade Semarang',
      user: 'Mike Johnson',
      time: '6 hours ago',
      type: 'warning'
    },
    {
      action: 'Payment received',
      project: 'FTTH Surabaya',
      user: 'Emily Davis',
      time: '1 day ago',
      type: 'success'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          const colors = {
            blue: 'from-blue-500 to-indigo-600',
            green: 'from-green-500 to-emerald-600',
            orange: 'from-orange-500 to-amber-600',
            purple: 'from-purple-500 to-indigo-600'
          };

          return (
            <div key={index} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-br ${colors[stat.color as keyof typeof colors]} rounded-lg flex items-center justify-center`}>
                  <Icon size={24} className="text-white" />
                </div>
                <span className={`text-sm font-semibold ${
                  stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {stat.change}
                </span>
              </div>
              <h3 className="text-sm text-slate-600 mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-6">
        {/* Revenue vs Expense Chart */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900">Revenue vs Expense</h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span className="text-slate-600">Revenue</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span className="text-slate-600">Expense</span>
              </div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip />
              <Bar dataKey="revenue" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              <Bar dataKey="expense" fill="#ef4444" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Project Type Distribution */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-6">Project Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={projectTypeData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {projectTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-6 mt-4">
            {projectTypeData.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                <span className="text-sm text-slate-600">{item.name}</span>
                <span className="text-sm font-semibold text-slate-900">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Progress & Recent Activities */}
      <div className="grid grid-cols-2 gap-6">
        {/* Active Projects Progress */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900">Active Projects Progress</h3>
            <button className="text-sm text-blue-600 font-semibold hover:text-blue-700">
              View All
            </button>
          </div>
          <div className="space-y-5">
            {projectProgress.map((project, idx) => (
              <div key={idx}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-slate-900">{project.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-slate-900">{project.progress}%</span>
                    {project.status === 'on-track' ? (
                      <CheckCircle size={16} className="text-green-500" />
                    ) : (
                      <AlertCircle size={16} className="text-orange-500" />
                    )}
                  </div>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      project.status === 'on-track' ? 'bg-gradient-to-r from-blue-500 to-indigo-600' : 'bg-orange-500'
                    }`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-slate-900">Recent Activities</h3>
            <Activity size={20} className="text-slate-400" />
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, idx) => {
              const typeColors = {
                success: 'bg-green-100 text-green-700',
                info: 'bg-blue-100 text-blue-700',
                warning: 'bg-orange-100 text-orange-700'
              };

              return (
                <div key={idx} className="flex gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    activity.type === 'success' ? 'bg-green-500' :
                    activity.type === 'info' ? 'bg-blue-500' : 'bg-orange-500'
                  }`}></div>
                  <div className="flex-1">
                    <p className="text-sm text-slate-900 font-semibold">{activity.action}</p>
                    <p className="text-sm text-slate-600">{activity.project}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-slate-500">{activity.user}</span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-xs text-slate-500">{activity.time}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl p-6 text-white">
        <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
        <div className="grid grid-cols-4 gap-4">
          <button className="px-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all font-semibold">
            + New Project
          </button>
          <button className="px-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all font-semibold">
            Create Invoice
          </button>
          <button className="px-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all font-semibold">
            Add Vendor
          </button>
          <button className="px-4 py-3 bg-white/20 backdrop-blur-sm rounded-lg hover:bg-white/30 transition-all font-semibold">
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
}
