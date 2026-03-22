import { LucideIcon } from 'lucide-react';

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: LucideIcon;
  iconBgColor: string;
}

export function KPICard({ title, value, change, isPositive, icon: Icon, iconBgColor }: KPICardProps) {
  return (
    <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-600 text-sm mb-1">{title}</p>
          <p className="text-3xl font-semibold text-slate-900 mb-2">{value}</p>
          <p className={`text-sm ${isPositive ? 'text-green-600' : 'text-rose-600'}`}>
            {isPositive ? '↑' : '↓'} {change} from last month
          </p>
        </div>
        <div className={`p-3 rounded-xl ${iconBgColor}`}>
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </div>
  );
}
