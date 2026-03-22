import { useState } from 'react';
import { Search, Filter, Eye, Edit, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react';

export function ProjectProgressDashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState('All');

  const projects = [
    {
      id: 'FTTH-JKT-001',
      name: 'FTTH Installation Jakarta Selatan',
      type: 'FTTH',
      customer: 'PT Telkomsel',
      progress: 85,
      status: 'On Track',
      startDate: '2025-01-01',
      endDate: '2025-03-31',
      budget: 'Rp 500M',
      spent: 'Rp 425M',
      manager: 'John Doe'
    },
    {
      id: 'BTS-BDG-002',
      name: 'BTS Installation Bandung',
      type: 'BTS',
      customer: 'PT XL Axiata',
      progress: 62,
      status: 'On Track',
      startDate: '2025-01-15',
      endDate: '2025-04-15',
      budget: 'Rp 750M',
      spent: 'Rp 465M',
      manager: 'Sarah Smith'
    },
    {
      id: 'PLN-SBY-003',
      name: 'PLN Upgrade Surabaya',
      type: 'PLN',
      customer: 'PT Indosat',
      progress: 45,
      status: 'Delayed',
      startDate: '2025-02-01',
      endDate: '2025-05-01',
      budget: 'Rp 350M',
      spent: 'Rp 180M',
      manager: 'Mike Johnson'
    },
    {
      id: 'FTTH-DPS-004',
      name: 'FTTH Installation Bali',
      type: 'FTTH',
      customer: 'PT Smartfren',
      progress: 92,
      status: 'On Track',
      startDate: '2024-12-01',
      endDate: '2025-02-28',
      budget: 'Rp 420M',
      spent: 'Rp 386M',
      manager: 'Emily Davis'
    },
    {
      id: 'BTS-MDN-005',
      name: 'BTS Installation Medan',
      type: 'BTS',
      customer: 'PT Hutchison 3',
      progress: 38,
      status: 'On Track',
      startDate: '2025-02-15',
      endDate: '2025-06-15',
      budget: 'Rp 680M',
      spent: 'Rp 258M',
      manager: 'David Lee'
    }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'All' || project.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Track':
        return 'bg-green-100 text-green-700';
      case 'Delayed':
        return 'bg-red-100 text-red-700';
      case 'At Risk':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  const getProgressColor = (progress: number, status: string) => {
    if (status === 'Delayed') return 'from-red-500 to-orange-500';
    if (progress >= 75) return 'from-green-500 to-emerald-600';
    if (progress >= 50) return 'from-blue-500 to-indigo-600';
    return 'from-orange-500 to-amber-600';
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <TrendingUp className="text-blue-600" size={20} />
            </div>
            <span className="text-sm font-semibold text-slate-600">Total Projects</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">{projects.length}</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="text-green-600" size={20} />
            </div>
            <span className="text-sm font-semibold text-slate-600">On Track</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">
            {projects.filter(p => p.status === 'On Track').length}
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Clock className="text-orange-600" size={20} />
            </div>
            <span className="text-sm font-semibold text-slate-600">Delayed</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">
            {projects.filter(p => p.status === 'Delayed').length}
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="text-purple-600" size={20} />
            </div>
            <span className="text-sm font-semibold text-slate-600">Avg Progress</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">
            {Math.round(projects.reduce((sum, p) => sum + p.progress, 0) / projects.length)}%
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <div className="flex items-center gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="px-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="All">All Types</option>
            <option value="FTTH">FTTH</option>
            <option value="BTS">BTS Installation</option>
            <option value="PLN">PLN Upgrade</option>
          </select>
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.map((project) => (
          <div key={project.id} className="bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">{project.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <span className="font-semibold">{project.id}</span>
                    <span>•</span>
                    <span>{project.customer}</span>
                    <span>•</span>
                    <span>PM: {project.manager}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <Eye size={18} className="text-slate-600" />
                  </button>
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <Edit size={18} className="text-slate-600" />
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-slate-700">Project Progress</span>
                  <span className="text-sm font-bold text-slate-900">{project.progress}%</span>
                </div>
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${getProgressColor(project.progress, project.status)} transition-all duration-500`}
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-4 gap-4 pt-4 border-t border-slate-200">
                <div>
                  <p className="text-xs text-slate-500 mb-1">Start Date</p>
                  <p className="text-sm font-semibold text-slate-900">{project.startDate}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">End Date</p>
                  <p className="text-sm font-semibold text-slate-900">{project.endDate}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Budget</p>
                  <p className="text-sm font-semibold text-slate-900">{project.budget}</p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Spent</p>
                  <p className="text-sm font-semibold text-slate-900">{project.spent}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
          <AlertCircle size={48} className="text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-2">No projects found</h3>
          <p className="text-slate-600">Try adjusting your search or filter criteria</p>
        </div>
      )}
    </div>
  );
}
