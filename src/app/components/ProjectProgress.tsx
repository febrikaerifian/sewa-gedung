export function ProjectProgress() {
  const projects = [
    { 
      name: 'Website Redesign', 
      client: 'PT Maju Jaya',
      progress: 85, 
      tasks: { completed: 17, total: 20 },
      deadline: '2025-12-25',
      status: 'On Track'
    },
    { 
      name: 'Mobile App Development', 
      client: 'CV Digital Media',
      progress: 62, 
      tasks: { completed: 31, total: 50 },
      deadline: '2026-01-15',
      status: 'On Track'
    },
    { 
      name: 'ERP System Implementation', 
      client: 'PT Teknologi Maju',
      progress: 45, 
      tasks: { completed: 18, total: 40 },
      deadline: '2026-02-20',
      status: 'At Risk'
    },
    { 
      name: 'Brand Identity Design', 
      client: 'PT Sentosa Karya',
      progress: 90, 
      tasks: { completed: 9, total: 10 },
      deadline: '2025-12-20',
      status: 'On Track'
    },
    { 
      name: 'Cloud Migration Project', 
      client: 'PT Indonesia Digital',
      progress: 30, 
      tasks: { completed: 12, total: 40 },
      deadline: '2026-03-10',
      status: 'Delayed'
    },
  ];

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return 'bg-gradient-to-r from-green-400 to-emerald-500';
    if (progress >= 50) return 'bg-gradient-to-r from-blue-400 to-cyan-500';
    return 'bg-gradient-to-r from-orange-400 to-amber-500';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'On Track':
        return 'bg-green-100 text-green-700';
      case 'At Risk':
        return 'bg-orange-100 text-orange-700';
      case 'Delayed':
        return 'bg-rose-100 text-rose-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Project Progress</h3>
        <p className="text-slate-500 text-sm">Track your ongoing projects</p>
      </div>
      
      <div className="space-y-5">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border border-slate-100 rounded-lg hover:border-rose-200 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h4 className="font-semibold text-slate-800">{project.name}</h4>
                <p className="text-sm text-slate-500 mt-1">{project.client}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                {project.status}
              </span>
            </div>
            
            <div className="mb-2">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-slate-600">
                  {project.tasks.completed}/{project.tasks.total} tasks completed
                </span>
                <span className="font-semibold text-slate-800">{project.progress}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${getProgressColor(project.progress)} transition-all duration-300 rounded-full`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
            
            <div className="flex items-center justify-between text-xs text-slate-500 mt-2">
              <span>Deadline: {project.deadline}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
