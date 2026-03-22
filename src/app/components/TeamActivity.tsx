export function TeamActivity() {
  const activities = [
    {
      user: 'Budi Santoso',
      action: 'completed task',
      task: 'UI Design Review',
      time: '5 mins ago',
      avatar: 'BS'
    },
    {
      user: 'Siti Rahayu',
      action: 'created project',
      task: 'New Landing Page',
      time: '1 hour ago',
      avatar: 'SR'
    },
    {
      user: 'Ahmad Wijaya',
      action: 'updated milestone',
      task: 'Sprint Planning',
      time: '2 hours ago',
      avatar: 'AW'
    },
    {
      user: 'Dewi Lestari',
      action: 'commented on',
      task: 'Database Schema',
      time: '3 hours ago',
      avatar: 'DL'
    },
    {
      user: 'Rudi Hartono',
      action: 'completed task',
      task: 'API Integration',
      time: '4 hours ago',
      avatar: 'RH'
    },
    {
      user: 'Nina Wati',
      action: 'assigned task to',
      task: 'Ahmad Wijaya',
      time: '5 hours ago',
      avatar: 'NW'
    },
  ];

  const avatarColors = [
    'bg-gradient-to-br from-red-400 to-rose-500',
    'bg-gradient-to-br from-blue-400 to-indigo-500',
    'bg-gradient-to-br from-green-400 to-emerald-500',
    'bg-gradient-to-br from-purple-400 to-violet-500',
    'bg-gradient-to-br from-orange-400 to-amber-500',
    'bg-gradient-to-br from-pink-400 to-rose-500',
  ];

  return (
    <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm h-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Team Activity</h3>
        <p className="text-slate-500 text-sm">Recent team updates</p>
      </div>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3 pb-4 border-b border-slate-100 last:border-0">
            <div className={`w-10 h-10 rounded-full ${avatarColors[index % avatarColors.length]} flex items-center justify-center flex-shrink-0`}>
              <span className="text-white text-sm font-semibold">{activity.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-slate-800">
                <span className="font-semibold">{activity.user}</span>
                <span className="text-slate-600"> {activity.action} </span>
                <span className="font-medium text-rose-600">{activity.task}</span>
              </p>
              <p className="text-xs text-slate-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
