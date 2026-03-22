export function EmployeeList() {
  const employees = [
    {
      name: 'Budi Santoso',
      position: 'Senior Developer',
      department: 'Engineering',
      status: 'Active',
      joinDate: '2022-03-15'
    },
    {
      name: 'Siti Rahayu',
      position: 'Marketing Manager',
      department: 'Marketing',
      status: 'Active',
      joinDate: '2021-08-22'
    },
    {
      name: 'Ahmad Wijaya',
      position: 'Sales Executive',
      department: 'Sales',
      status: 'Active',
      joinDate: '2023-01-10'
    },
    {
      name: 'Dewi Lestari',
      position: 'UI/UX Designer',
      department: 'Design',
      status: 'Active',
      joinDate: '2022-11-05'
    },
    {
      name: 'Rudi Hartono',
      position: 'Operations Lead',
      department: 'Operations',
      status: 'On Leave',
      joinDate: '2020-06-18'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-700';
      case 'On Leave':
        return 'bg-orange-100 text-orange-700';
      case 'Inactive':
        return 'bg-slate-100 text-slate-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Employee Directory</h3>
        <p className="text-slate-500 text-sm">Active employees overview</p>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Name</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Position</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Department</th>
              <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index} className="border-b border-slate-100 hover:bg-red-50 transition-colors">
                <td className="py-3 px-4 text-slate-800 font-medium text-sm">{employee.name}</td>
                <td className="py-3 px-4 text-slate-600 text-sm">{employee.position}</td>
                <td className="py-3 px-4 text-slate-600 text-sm">{employee.department}</td>
                <td className="py-3 px-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(employee.status)}`}>
                    {employee.status}
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
