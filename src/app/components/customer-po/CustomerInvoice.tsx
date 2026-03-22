import { useState } from 'react';
import { Search, Bell, AlertCircle, Send, Download, Eye, Check, X } from 'lucide-react';

export function CustomerInvoice() {
  const [searchQuery, setSearchQuery] = useState('');

  const invoices = [
    {
      id: 'INV-2025-001',
      invoiceNumber: 'INV/TEL/2025/001',
      customer: 'PT Telkomsel',
      project: 'FTTH Installation Jakarta',
      poNumber: 'PO-2025-001',
      amount: 'Rp 150,000,000',
      issueDate: '2025-01-15',
      dueDate: '2025-02-14',
      status: 'Paid',
      reminder: false
    },
    {
      id: 'INV-2025-002',
      invoiceNumber: 'INV/XL/2025/002',
      customer: 'PT XL Axiata',
      project: 'BTS Installation Bandung',
      poNumber: 'PO-2025-002',
      amount: 'Rp 225,000,000',
      issueDate: '2025-01-28',
      dueDate: '2025-03-14',
      status: 'Pending',
      reminder: true,
      daysOverdue: 0
    },
    {
      id: 'INV-2025-003',
      invoiceNumber: 'INV/ISAT/2025/003',
      customer: 'PT Indosat',
      project: 'PLN Upgrade Surabaya',
      poNumber: 'PO-2025-003',
      amount: 'Rp 120,000,000',
      issueDate: '2025-02-05',
      dueDate: '2025-02-20',
      status: 'Overdue',
      reminder: true,
      daysOverdue: 5
    },
    {
      id: 'INV-2025-004',
      invoiceNumber: 'INV/SMFR/2025/004',
      customer: 'PT Smartfren',
      project: 'FTTH Bali',
      poNumber: 'PO-2025-004',
      amount: 'Rp 180,000,000',
      issueDate: '2025-02-10',
      dueDate: '2025-03-12',
      status: 'Sent',
      reminder: false
    }
  ];

  const filteredInvoices = invoices.filter(inv =>
    inv.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    inv.invoiceNumber.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid':
        return 'bg-green-100 text-green-700';
      case 'Sent':
        return 'bg-blue-100 text-blue-700';
      case 'Pending':
        return 'bg-orange-100 text-orange-700';
      case 'Overdue':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  const stats = {
    total: invoices.length,
    paid: invoices.filter(i => i.status === 'Paid').length,
    pending: invoices.filter(i => i.status === 'Pending' || i.status === 'Sent').length,
    overdue: invoices.filter(i => i.status === 'Overdue').length,
    totalAmount: invoices.reduce((sum, inv) => {
      return sum + parseInt(inv.amount.replace(/[^0-9]/g, ''));
    }, 0)
  };

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-5 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <p className="text-sm text-slate-600 mb-2">Total Invoices</p>
          <p className="text-3xl font-bold text-slate-900">{stats.total}</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <p className="text-sm text-slate-600 mb-2">Total Amount</p>
          <p className="text-2xl font-bold text-slate-900">
            Rp {(stats.totalAmount / 1000000).toFixed(0)}M
          </p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-green-200 bg-green-50">
          <p className="text-sm text-green-700 mb-2">Paid</p>
          <p className="text-3xl font-bold text-green-700">{stats.paid}</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-orange-200 bg-orange-50">
          <p className="text-sm text-orange-700 mb-2">Pending</p>
          <p className="text-3xl font-bold text-orange-700">{stats.pending}</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-red-200 bg-red-50">
          <p className="text-sm text-red-700 mb-2">Overdue</p>
          <p className="text-3xl font-bold text-red-700">{stats.overdue}</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search invoices..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Invoice List */}
      <div className="space-y-4">
        {filteredInvoices.map((invoice) => (
          <div key={invoice.id} className="bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="p-6">
              {/* Header with Reminder Alert */}
              {invoice.reminder && (
                <div className={`mb-4 p-3 rounded-lg flex items-center gap-3 ${
                  invoice.status === 'Overdue' ? 'bg-red-50 border border-red-200' : 'bg-orange-50 border border-orange-200'
                }`}>
                  <AlertCircle size={20} className={invoice.status === 'Overdue' ? 'text-red-600' : 'text-orange-600'} />
                  <span className={`text-sm font-semibold ${
                    invoice.status === 'Overdue' ? 'text-red-700' : 'text-orange-700'
                  }`}>
                    {invoice.status === 'Overdue' 
                      ? `Overdue by ${invoice.daysOverdue} days - Send reminder now!` 
                      : 'Reminder: Payment due soon'}
                  </span>
                  <button className={`ml-auto px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 ${
                    invoice.status === 'Overdue' 
                      ? 'bg-red-600 text-white hover:bg-red-700' 
                      : 'bg-orange-600 text-white hover:bg-orange-700'
                  }`}>
                    <Bell size={14} />
                    Send Reminder
                  </button>
                </div>
              )}

              {/* Invoice Details */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">{invoice.invoiceNumber}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600 mb-1">{invoice.customer}</p>
                  <p className="text-sm text-slate-500">{invoice.project}</p>
                </div>
                
                <div className="text-right">
                  <p className="text-2xl font-bold text-slate-900">{invoice.amount}</p>
                  <p className="text-xs text-slate-500 mt-1">PO: {invoice.poNumber}</p>
                </div>
              </div>

              {/* Dates & Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <div className="flex items-center gap-8">
                  <div>
                    <p className="text-xs text-slate-500">Issue Date</p>
                    <p className="text-sm font-semibold text-slate-900">{invoice.issueDate}</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">Due Date</p>
                    <p className={`text-sm font-semibold ${
                      invoice.status === 'Overdue' ? 'text-red-600' : 'text-slate-900'
                    }`}>
                      {invoice.dueDate}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2 text-sm font-semibold">
                    <Eye size={16} />
                    View
                  </button>
                  <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors flex items-center gap-2 text-sm font-semibold">
                    <Download size={16} />
                    Download
                  </button>
                  {invoice.status !== 'Paid' && (
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all flex items-center gap-2 text-sm font-semibold">
                      <Send size={16} />
                      Send
                    </button>
                  )}
                  {invoice.status === 'Sent' && (
                    <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2 text-sm font-semibold">
                      <Check size={16} />
                      Mark as Paid
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
