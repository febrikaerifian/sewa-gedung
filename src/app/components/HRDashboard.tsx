import { Users, UserCheck, UserX, TrendingUp } from 'lucide-react';
import { KPICard } from './KPICard';
import { AttendanceChart } from './AttendanceChart';
import { EmployeeList } from './EmployeeList';
import { LeaveRequests } from './LeaveRequests';
import { RecruitmentStatus } from './RecruitmentStatus';

export function HRDashboard() {
  const kpiData = [
    {
      title: 'Total Employees',
      value: '248',
      change: '6.5%',
      isPositive: true,
      icon: Users,
      iconBgColor: 'bg-gradient-to-br from-red-400 to-rose-500',
    },
    {
      title: 'Present Today',
      value: '236',
      change: '2.1%',
      isPositive: true,
      icon: UserCheck,
      iconBgColor: 'bg-gradient-to-br from-green-400 to-emerald-500',
    },
    {
      title: 'On Leave',
      value: '12',
      change: '1.5%',
      isPositive: false,
      icon: UserX,
      iconBgColor: 'bg-gradient-to-br from-orange-400 to-amber-500',
    },
    {
      title: 'New Hires (Month)',
      value: '8',
      change: '14.3%',
      isPositive: true,
      icon: TrendingUp,
      iconBgColor: 'bg-gradient-to-br from-blue-400 to-indigo-500',
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <KPICard key={index} {...kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <AttendanceChart />
        </div>
        <div>
          <RecruitmentStatus />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <LeaveRequests />
        <EmployeeList />
      </div>
    </div>
  );
}
