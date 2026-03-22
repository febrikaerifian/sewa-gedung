export function LeaveRequests() {
  const requests = [
    {
      employee: 'Budi Santoso',
      department: 'Engineering',
      type: 'Annual Leave',
      dates: 'Dec 20 - Dec 22',
      days: 3,
      status: 'Pending'
    },
    {
      employee: 'Siti Rahayu',
      department: 'Marketing',
      type: 'Sick Leave',
      dates: 'Dec 18',
      days: 1,
      status: 'Approved'
    },
    {
      employee: 'Ahmad Wijaya',
      department: 'Sales',
      type: 'Annual Leave',
      dates: 'Dec 25 - Dec 27',
      days: 3,
      status: 'Pending'
    },
    {
      employee: 'Dewi Lestari',
      department: 'Design',
      type: 'Personal Leave',
      dates: 'Dec 19',
      days: 1,
      status: 'Approved'
    },
    {
      employee: 'Rudi Hartono',
      department: 'Operations',
      type: 'Sick Leave',
      dates: 'Dec 16 - Dec 17',
      days: 2,
      status: 'Rejected'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-orange-100 text-orange-700';
      case 'Rejected':
        return 'bg-rose-100 text-rose-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Leave Requests</h3>
        <p className="text-slate-500 text-sm">Recent leave applications</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Employee</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Type</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Dates</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Days</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr key={index} className="border-b border-slate-100 hover:bg-red-50 transition-colors">
                <td className="py-3 px-4">
                  <p className="text-slate-800 font-medium text-sm">{request.employee}</p>
                  <p className="text-slate-500 text-xs">{request.department}</p>
                </td>
                <td className="py-3 px-4 text-slate-800 text-sm">{request.type}</td>
                <td className="py-3 px-4 text-slate-600 text-sm">{request.dates}</td>
                <td className="py-3 px-4 text-slate-800 text-sm">{request.days}</td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(request.status)}`}>
                    {request.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
