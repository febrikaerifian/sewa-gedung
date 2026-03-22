import { useState } from 'react';
import { Search, FileText, Eye, Download, Calendar, DollarSign, Building2 } from 'lucide-react';

export function CustomerPOView() {
  const [searchQuery, setSearchQuery] = useState('');

  const purchaseOrders = [
    {
      id: 'PO-2025-001',
      customer: 'PT Telkomsel',
      project: 'FTTH Installation Jakarta Selatan',
      poNumber: 'TEL/PO/2025/001',
      poDate: '2025-01-05',
      value: 'Rp 500,000,000',
      status: 'Approved',
      terms: '30 days',
      contact: 'Ahmad Rizki'
    },
    {
      id: 'PO-2025-002',
      customer: 'PT XL Axiata',
      project: 'BTS Installation Bandung',
      poNumber: 'XL/PO/2025/042',
      poDate: '2025-01-18',
      value: 'Rp 750,000,000',
      status: 'Approved',
      terms: '45 days',
      contact: 'Siti Nurhaliza'
    },
    {
      id: 'PO-2025-003',
      customer: 'PT Indosat Ooredoo',
      project: 'PLN Upgrade Surabaya',
      poNumber: 'ISAT/PO/2025/128',
      poDate: '2025-02-03',
      value: 'Rp 350,000,000',
      status: 'Pending',
      terms: '30 days',
      contact: 'Budi Santoso'
    },
    {
      id: 'PO-2025-004',
      customer: 'PT Smartfren',
      project: 'FTTH Installation Bali',
      poNumber: 'SMFR/PO/2024/385',
      poDate: '2024-12-15',
      value: 'Rp 420,000,000',
      status: 'Approved',
      terms: '30 days',
      contact: 'Dewi Lestari'
    }
  ];

  const filteredPOs = purchaseOrders.filter(po =>
    po.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    po.poNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
    po.project.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-green-100 text-green-700';
      case 'Pending':
        return 'bg-orange-100 text-orange-700';
      case 'Rejected':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  const totalValue = purchaseOrders.reduce((sum, po) => {
    const value = parseInt(po.value.replace(/[^0-9]/g, ''));
    return sum + value;
  }, 0);

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="text-blue-600" size={20} />
            </div>
            <span className="text-sm font-semibold text-slate-600">Total POs</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">{purchaseOrders.length}</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="text-green-600" size={20} />
            </div>
            <span className="text-sm font-semibold text-slate-600">Total Value</span>
          </div>
          <p className="text-2xl font-bold text-slate-900">
            Rp {(totalValue / 1000000000).toFixed(1)}B
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <FileText className="text-green-600" size={20} />
            </div>
            <span className="text-sm font-semibold text-slate-600">Approved</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">
            {purchaseOrders.filter(po => po.status === 'Approved').length}
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <FileText className="text-orange-600" size={20} />
            </div>
            <span className="text-sm font-semibold text-slate-600">Pending</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">
            {purchaseOrders.filter(po => po.status === 'Pending').length}
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search by customer, PO number, or project..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* PO List */}
      <div className="space-y-4">
        {filteredPOs.map((po) => (
          <div key={po.id} className="bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="text-blue-600" size={24} />
                    <div>
                      <h3 className="text-lg font-bold text-slate-900">{po.poNumber}</h3>
                      <p className="text-sm text-slate-600">{po.customer}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(po.status)}`}>
                    {po.status}
                  </span>
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <Eye size={18} className="text-slate-600" />
                  </button>
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <Download size={18} className="text-slate-600" />
                  </button>
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-slate-50 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-slate-700 mb-1">Project</p>
                <p className="text-sm text-slate-900">{po.project}</p>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-4 gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={16} className="text-slate-400" />
                    <p className="text-xs text-slate-500">PO Date</p>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{po.poDate}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <DollarSign size={16} className="text-slate-400" />
                    <p className="text-xs text-slate-500">PO Value</p>
                  </div>
                  <p className="text-sm font-semibold text-green-600">{po.value}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar size={16} className="text-slate-400" />
                    <p className="text-xs text-slate-500">Payment Terms</p>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{po.terms}</p>
                </div>
                
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 size={16} className="text-slate-400" />
                    <p className="text-xs text-slate-500">Contact Person</p>
                  </div>
                  <p className="text-sm font-semibold text-slate-900">{po.contact}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredPOs.length === 0 && (
        <div className="bg-white rounded-xl border border-slate-200 p-12 text-center">
          <FileText size={48} className="text-slate-400 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-slate-900 mb-2">No purchase orders found</h3>
          <p className="text-slate-600">Try adjusting your search criteria</p>
        </div>
      )}
    </div>
  );
}
