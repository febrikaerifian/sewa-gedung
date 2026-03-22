import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { CompanyProfile } from './components/company-profile/CompanyProfile';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { ProjectEntry } from './components/projects/ProjectEntry';
import { ProjectProgressDashboard } from './components/projects/ProjectProgressDashboard';
import { CustomerPOView } from './components/customer-po/CustomerPOView';
import { CustomerInvoice } from './components/customer-po/CustomerInvoice';
import { CustomerBAST } from './components/customer-po/CustomerBAST';
import { POCreation } from './components/customer-po/POCreation';
import { HRDashboard } from './components/hr/HRDashboard';
import { FinanceDashboard } from './components/finance/FinanceDashboard';
import { PresentationView } from './components/PresentationView';
import { MonitorPlay } from 'lucide-react';
import RentalGedungApp from './rental-gedung/RentalGedungApp';

export default function App() {
  const [view, setView] = useState<'landing' | 'login' | 'app' | 'rental-gedung'>('rental-gedung');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeSection, setActiveSection] = useState('dashboard');
  const [showPresentation, setShowPresentation] = useState(false);

  const handleLogin = (email: string, password: string) => {
    if (email && password) {
      setIsLoggedIn(true);
      setView('app');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveSection('dashboard');
    setView('landing');
  };

  const getSectionTitle = (section: string) => {
    const titles: Record<string, string> = {
      'dashboard': 'Dashboard Overview',
      'project-entry': 'Entry Data Project',
      'project-progress': 'Project Progress Dashboard',
      'project-plan': 'Project Plan',
      'customer-po-view': 'View Purchase Order',
      'customer-po-create': 'PO Creation',
      'customer-invoice': 'Invoice Management',
      'customer-bast': 'BAST Progress',
      'subcont-po-view': 'View PO Subcontractor',
      'subcont-po-create': 'Create PO Subcontractor',
      'subcont-payment': 'Payment & Invoice Subcont',
      'subcont-registration': 'Vendor Registration',
      'hr-employee': 'Employee Data Management',
      'hr-attendance': 'Attendance Dashboard',
      'hr-contract': 'Contract & Salary',
      'hr-kpi': 'KPI & Performance',
      'hr-recruitment': 'Recruitment',
      'hr-training': 'Training & Development',
      'finance-dashboard': 'Finance Dashboard',
      'finance-income': 'Income / Revenue',
      'finance-expense': 'Expenses',
      'finance-cashflow': 'Cash Flow',
      'finance-asset': 'Asset Management',
      'finance-report': 'Financial Reports',
      'company-overview': 'Company Overview',
      'company-cost': 'Cost Analysis',
      'company-revenue': 'Revenue & Profit',
    };
    return titles[section] || section.charAt(0).toUpperCase() + section.slice(1);
  };

  if (view === 'rental-gedung') {
    return <RentalGedungApp />;
  }

  if (view === 'landing') {
    return <CompanyProfile onLoginClick={() => setView('login')} />;
  }

  if (view === 'login' || !isLoggedIn) {
    return <LoginPage onLogin={handleLogin} onBack={() => setView('landing')} />;
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      
      // Project Management
      case 'project-entry':
        return <ProjectEntry />;
      case 'project-progress':
        return <ProjectProgressDashboard />;
      case 'project-plan':
        return <PlaceholderPage title="Project Plan" description="Project planning and scheduling module coming soon..." />;
      
      // Customer PO & Invoice
      case 'customer-po-view':
        return <CustomerPOView />;
      case 'customer-po-create':
        return <POCreation />;
      case 'customer-invoice':
        return <CustomerInvoice />;
      case 'customer-bast':
        return <CustomerBAST />;
      
      // Subcontractor Management
      case 'subcont-po-view':
        return <PlaceholderPage title="View PO Subcontractor" description="View all subcontractor purchase orders..." />;
      case 'subcont-po-create':
        return <PlaceholderPage title="Create PO Subcont" description="Create PO with approval flow: RPM → Procurement → GM → Subcont..." />;
      case 'subcont-payment':
        return <PlaceholderPage title="Payment & Invoice" description="Manage subcontractor payments and invoices..." />;
      case 'subcont-registration':
        return <PlaceholderPage title="Vendor Registration" description="Register new vendors with complete documentation..." />;
      
      // HR
      case 'hr-employee':
        return <HRDashboard />;
      case 'hr-attendance':
        return <PlaceholderPage title="Attendance Dashboard" description="Track employee attendance and leave requests..." />;
      case 'hr-contract':
        return <PlaceholderPage title="Contract & Salary" description="Manage employee contracts and salary structures..." />;
      case 'hr-kpi':
        return <PlaceholderPage title="KPI & Performance" description="Track and evaluate employee KPIs..." />;
      case 'hr-recruitment':
        return <PlaceholderPage title="Recruitment" description="Manage recruitment process and candidates..." />;
      case 'hr-training':
        return <PlaceholderPage title="Training" description="Employee training programs and development..." />;
      
      // Finance
      case 'finance-dashboard':
        return <FinanceDashboard />;
      case 'finance-income':
        return <PlaceholderPage title="Income / Revenue" description="Track and manage company income streams..." />;
      case 'finance-expense':
        return <PlaceholderPage title="Expenses" description="Manage and track company expenses..." />;
      case 'finance-cashflow':
        return <PlaceholderPage title="Cash Flow" description="Monitor cash inflow and outflow..." />;
      case 'finance-asset':
        return <PlaceholderPage title="Asset Management" description="Track company assets and depreciation..." />;
      case 'finance-report':
        return <PlaceholderPage title="Financial Reports" description="Generate financial reports and statements..." />;
      
      // Company Dashboard
      case 'company-overview':
        return <PlaceholderPage title="Company Overview" description="Analyze revenue, cost, and profit per week/month/year..." />;
      case 'company-cost':
        return <PlaceholderPage title="Cost Analysis" description="Detailed cost analysis and variable expenses..." />;
      case 'company-revenue':
        return <PlaceholderPage title="Revenue & Profit" description="Track revenue, profit, and losses per period..." />;
      
      default:
        return <PlaceholderPage title={getSectionTitle(activeSection)} description="This module is under development..." />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50">
      {showPresentation && <PresentationView onClose={() => setShowPresentation(false)} />}
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
        onLogout={handleLogout}
      />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header 
          title={getSectionTitle(activeSection)} 
          onPresentationMode={() => setShowPresentation(true)}
        />
        
        <main className="flex-1 overflow-y-auto p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

// Placeholder component for modules under development
function PlaceholderPage({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-6">
        <span className="text-3xl">🚧</span>
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 max-w-2xl mx-auto">{description}</p>
      <div className="mt-8">
        <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-lg text-sm font-semibold">
          Coming Soon
        </span>
      </div>
    </div>
  );
}