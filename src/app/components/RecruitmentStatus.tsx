export function RecruitmentStatus() {
  const positions = [
    {
      title: 'Senior Frontend Developer',
      applications: 45,
      interviewed: 12,
      offers: 2,
      status: 'Active'
    },
    {
      title: 'Product Manager',
      applications: 68,
      interviewed: 8,
      offers: 1,
      status: 'Active'
    },
    {
      title: 'Data Analyst',
      applications: 34,
      interviewed: 15,
      offers: 3,
      status: 'Closed'
    },
    {
      title: 'HR Specialist',
      applications: 52,
      interviewed: 10,
      offers: 0,
      status: 'Active'
    },
    {
      title: 'Marketing Executive',
      applications: 28,
      interviewed: 6,
      offers: 1,
      status: 'Active'
    },
  ];

  const getStatusColor = (status: string) => {
    return status === 'Active' 
      ? 'bg-green-100 text-green-700' 
      : 'bg-slate-100 text-slate-700';
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm h-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Recruitment Pipeline</h3>
        <p className="text-slate-500 text-sm">Open positions status</p>
      </div>
      
      <div className="space-y-4">
        {positions.map((position, index) => (
          <div key={index} className="p-4 border border-slate-100 rounded-lg hover:border-rose-200 transition-colors">
            <div className="flex items-start justify-between mb-3">
              <h4 className="font-semibold text-slate-800 text-sm">{position.title}</h4>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(position.status)}`}>
                {position.status}
              </span>
            </div>
            
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p className="text-2xl font-bold text-slate-800">{position.applications}</p>
                <p className="text-xs text-slate-500">Applied</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-blue-600">{position.interviewed}</p>
                <p className="text-xs text-slate-500">Interviewed</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-green-600">{position.offers}</p>
                <p className="text-xs text-slate-500">Offers</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
