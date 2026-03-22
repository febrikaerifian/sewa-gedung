import { useState } from 'react';
import { 
  LayoutDashboard, FolderKanban, FileText, Users, Building2, 
  DollarSign, LogOut, ChevronDown, ChevronRight, Radio
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onLogout: () => void;
}

export function Sidebar({ activeSection, onSectionChange, onLogout }: SidebarProps) {
  const [openMenus, setOpenMenus] = useState<string[]>(['project', 'customer', 'subcont', 'hr', 'finance', 'company']);

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev =>
      prev.includes(menu) ? prev.filter(m => m !== menu) : [...prev, menu]
    );
  };

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: LayoutDashboard,
      section: 'dashboard'
    },
    {
      id: 'project',
      label: 'Project Management',
      icon: FolderKanban,
      subItems: [
        { label: 'Entry Data Project', section: 'project-entry' },
        { label: 'Dashboard Progress', section: 'project-progress' },
        { label: 'Project Plan', section: 'project-plan' }
      ]
    },
    {
      id: 'customer',
      label: 'Customer PO & Invoice',
      icon: FileText,
      subItems: [
        { label: 'View Purchase Order', section: 'customer-po-view' },
        { label: 'PO Creation', section: 'customer-po-create' },
        { label: 'Invoice Management', section: 'customer-invoice' },
        { label: 'BAST Progress', section: 'customer-bast' }
      ]
    },
    {
      id: 'subcont',
      label: 'Subcontractor Mgmt',
      icon: Users,
      subItems: [
        { label: 'View PO Subcont', section: 'subcont-po-view' },
        { label: 'Create PO Subcont', section: 'subcont-po-create' },
        { label: 'Payment & Invoice', section: 'subcont-payment' },
        { label: 'Vendor Registration', section: 'subcont-registration' }
      ]
    },
    {
      id: 'hr',
      label: 'Human Resources',
      icon: Users,
      subItems: [
        { label: 'Employee Data', section: 'hr-employee' },
        { label: 'Attendance', section: 'hr-attendance' },
        { label: 'Contract & Salary', section: 'hr-contract' },
        { label: 'KPI & Performance', section: 'hr-kpi' },
        { label: 'Recruitment', section: 'hr-recruitment' },
        { label: 'Training', section: 'hr-training' }
      ]
    },
    {
      id: 'finance',
      label: 'Finance',
      icon: DollarSign,
      subItems: [
        { label: 'Finance Dashboard', section: 'finance-dashboard' },
        { label: 'Income / Revenue', section: 'finance-income' },
        { label: 'Expenses', section: 'finance-expense' },
        { label: 'Cash Flow', section: 'finance-cashflow' },
        { label: 'Asset Management', section: 'finance-asset' },
        { label: 'Financial Reports', section: 'finance-report' }
      ]
    },
    {
      id: 'company',
      label: 'Company Dashboard',
      icon: Building2,
      subItems: [
        { label: 'Company Overview', section: 'company-overview' },
        { label: 'Cost Analysis', section: 'company-cost' },
        { label: 'Revenue & Profit', section: 'company-revenue' }
      ]
    }
  ];

  return (
    <aside className="w-72 bg-white border-r border-slate-200 flex flex-col h-screen">
      {/* Logo */}
      <div className="p-6 border-b border-slate-200">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <Radio size={24} className="text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-slate-900">TelecomERP</h1>
            <p className="text-xs text-slate-500">Project Management</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isOpen = openMenus.includes(item.id);
            const isActive = item.section ? activeSection === item.section : false;

            if (item.subItems) {
              return (
                <div key={item.id}>
                  <button
                    onClick={() => toggleMenu(item.id)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-slate-700 hover:bg-blue-50 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={20} className="text-slate-500 group-hover:text-blue-600" />
                      <span className="font-medium text-sm">{item.label}</span>
                    </div>
                    {isOpen ? (
                      <ChevronDown size={16} className="text-slate-400" />
                    ) : (
                      <ChevronRight size={16} className="text-slate-400" />
                    )}
                  </button>
                  
                  {isOpen && (
                    <div className="mt-1 ml-4 space-y-1">
                      {item.subItems.map((subItem) => (
                        <button
                          key={subItem.section}
                          onClick={() => onSectionChange(subItem.section)}
                          className={`w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                            activeSection === subItem.section
                              ? 'bg-blue-50 text-blue-600 font-semibold'
                              : 'text-slate-600 hover:bg-slate-50'
                          }`}
                        >
                          {subItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => item.section && onSectionChange(item.section)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-600 font-semibold'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                <Icon size={20} className={isActive ? 'text-blue-600' : 'text-slate-500'} />
                <span className="font-medium text-sm">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-slate-200">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-3 py-2.5 text-slate-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
        >
          <LogOut size={20} />
          <span className="font-medium text-sm">Logout</span>
        </button>
      </div>
    </aside>
  );
}
