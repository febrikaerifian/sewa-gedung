export function RecentTasks() {
  const tasks = [
    { 
      id: 'TSK-1245', 
      title: 'Design Homepage Mockup', 
      project: 'Website Redesign',
      assignee: 'Budi Santoso', 
      priority: 'High', 
      status: 'In Progress', 
      dueDate: '2025-12-18' 
    },
    { 
      id: 'TSK-1244', 
      title: 'API Integration Testing', 
      project: 'Mobile App Development',
      assignee: 'Ahmad Wijaya', 
      priority: 'Medium', 
      status: 'In Progress', 
      dueDate: '2025-12-19' 
    },
    { 
      id: 'TSK-1243', 
      title: 'Database Schema Design', 
      project: 'ERP System Implementation',
      assignee: 'Siti Rahayu', 
      priority: 'High', 
      status: 'Completed', 
      dueDate: '2025-12-15' 
    },
    { 
      id: 'TSK-1242', 
      title: 'Logo Design Concept', 
      project: 'Brand Identity Design',
      assignee: 'Dewi Lestari', 
      priority: 'Low', 
      status: 'Review', 
      dueDate: '2025-12-17' 
    },
    { 
      id: 'TSK-1241', 
      title: 'Server Configuration', 
      project: 'Cloud Migration Project',
      assignee: 'Rudi Hartono', 
      priority: 'High', 
      status: 'Pending', 
      dueDate: '2025-12-20' 
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-rose-100 text-rose-700';
      case 'Medium':
        return 'bg-orange-100 text-orange-700';
      case 'Low':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700';
      case 'Review':
        return 'bg-purple-100 text-purple-700';
      case 'Pending':
        return 'bg-slate-100 text-slate-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Recent Tasks</h3>
        <p className="text-slate-500 text-sm">Latest task assignments and updates</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Task ID</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Title</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Project</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Assignee</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Priority</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Status</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Due Date</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id} className="border-b border-slate-100 hover:bg-red-50 transition-colors">
                <td className="py-3 px-4 text-slate-800 font-medium text-sm">{task.id}</td>
                <td className="py-3 px-4 text-slate-800 text-sm font-medium">{task.title}</td>
                <td className="py-3 px-4 text-slate-600 text-sm">{task.project}</td>
                <td className="py-3 px-4 text-slate-800 text-sm">{task.assignee}</td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(task.priority)}`}>
                    {task.priority}
                  </span>
                </td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(task.status)}`}>
                    {task.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-slate-600 text-sm">{task.dueDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
