import { DollarSign, TrendingUp, TrendingDown, Wallet } from 'lucide-react';
import { KPICard } from './KPICard';
import { RevenueChart } from './RevenueChart';
import { ExpenseBreakdown } from './ExpenseBreakdown';
import { InvoiceStatus } from './InvoiceStatus';
import { CashFlowChart } from './CashFlowChart';

export function FinanceDashboard() {
  const kpiData = [
    {
      title: 'Total Revenue',
      value: 'Rp 8.5M',
      change: '18.2%',
      isPositive: true,
      icon: DollarSign,
      iconBgColor: 'bg-gradient-to-br from-green-400 to-emerald-500',
    },
    {
      title: 'Total Expenses',
      value: 'Rp 5.2M',
      change: '6.8%',
      isPositive: false,
      icon: TrendingDown,
      iconBgColor: 'bg-gradient-to-br from-red-400 to-rose-500',
    },
    {
      title: 'Net Profit',
      value: 'Rp 3.3M',
      change: '24.5%',
      isPositive: true,
      icon: TrendingUp,
      iconBgColor: 'bg-gradient-to-br from-blue-400 to-indigo-500',
    },
    {
      title: 'Cash Balance',
      value: 'Rp 12.8M',
      change: '12.1%',
      isPositive: true,
      icon: Wallet,
      iconBgColor: 'bg-gradient-to-br from-purple-400 to-violet-500',
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
          <RevenueChart />
        </div>
        <div>
          <ExpenseBreakdown />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CashFlowChart />
        <InvoiceStatus />
      </div>
    </div>
  );
}
