export function HREmployee() {
  const employees = [
    {
      id: 'EMP-001',
      name: 'Budi Santoso',
      birthDate: '1990-05-15',
      position: 'Senior Developer',
      department: 'Engineering',
      joinDate: '2022-03-15',
      contractType: 'Permanent',
      contractEnd: '-',
      salaryRange: 'Rp 15,000,000 - 20,000,000',
      status: 'Active'
    },
    {
      id: 'EMP-002',
      name: 'Siti Rahayu',
      birthDate: '1988-08-22',
      position: 'Marketing Manager',
      department: 'Marketing',
      joinDate: '2021-08-22',
      contractType: 'Permanent',
      contractEnd: '-',
      salaryRange: 'Rp 12,000,000 - 15,000,000',
      status: 'Active'
    },
    {
      id: 'EMP-003',
      name: 'Ahmad Wijaya',
      birthDate: '1992-01-10',
      position: 'Project Manager',
      department: 'Operations',
      joinDate: '2023-01-10',
      contractType: 'Contract',
      contractEnd: '2025-12-31',
      salaryRange: 'Rp 10,000,000 - 12,000,000',
      status: 'Active'
    },
  ];

  const getStatusColor = (status: string) => {
    return status === 'Active' 
      ? 'bg-green-100 text-green-700' 
      : 'bg-slate-100 text-slate-700';
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-semibold text-slate-800">Employee Data Management</h3>
            <p className="text-slate-500 text-sm mt-1">Manage employee information and records</p>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-red-400 to-rose-500 text-white rounded-lg hover:from-red-500 hover:to-rose-600 transition-all shadow-lg text-sm">
            Add New Employee
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-200">
                <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Employee ID</th>
                <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Name</th>
                <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Birth Date</th>
                <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Position</th>
                <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Department</th>
                <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Join Date</th>
                <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Contract</th>
                <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Status</th>
                <th className="text-left py-3 px-4 text-slate-600 font-medium text-sm">Action</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id} className="border-b border-slate-100 hover:bg-red-50 transition-colors">
                  <td className="py-3 px-4 text-slate-800 font-medium text-sm">{emp.id}</td>
                  <td className="py-3 px-4 text-slate-800 font-medium text-sm">{emp.name}</td>
                  <td className="py-3 px-4 text-slate-600 text-sm">{emp.birthDate}</td>
                  <td className="py-3 px-4 text-slate-800 text-sm">{emp.position}</td>
                  <td className="py-3 px-4 text-slate-600 text-sm">{emp.department}</td>
                  <td className="py-3 px-4 text-slate-600 text-sm">{emp.joinDate}</td>
                  <td className="py-3 px-4 text-slate-600 text-sm">
                    <div>
                      <p className="font-medium">{emp.contractType}</p>
                      {emp.contractEnd !== '-' && (
                        <p className="text-xs text-slate-500">Until: {emp.contractEnd}</p>
                      )}
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(emp.status)}`}>
                      {emp.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-rose-600 hover:text-rose-700 text-sm font-medium">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
          <p className="text-slate-600 text-sm mb-1">Total Employees</p>
          <p className="text-3xl font-semibold text-slate-900 mb-2">248</p>
          <p className="text-sm text-green-600">↑ 8 new this month</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
          <p className="text-slate-600 text-sm mb-1">Contract Expiring Soon</p>
          <p className="text-3xl font-semibold text-slate-900 mb-2">12</p>
          <p className="text-sm text-orange-600">Within 3 months</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
          <p className="text-slate-600 text-sm mb-1">Permanent Staff</p>
          <p className="text-3xl font-semibold text-slate-900 mb-2">186</p>
          <p className="text-sm text-blue-600">75% of total</p>
        </div>
      </div>
    </div>
  );
}
