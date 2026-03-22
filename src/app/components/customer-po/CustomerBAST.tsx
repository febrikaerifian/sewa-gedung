import { useState } from 'react';
import { Search, AlertCircle, CheckCircle, Clock, FileText, Eye } from 'lucide-react';

export function CustomerBAST() {
  const [searchQuery, setSearchQuery] = useState('');

  const bastRecords = [
    {
      id: 'BAST-001',
      project: 'FTTH Installation Jakarta',
      customer: 'PT Telkomsel',
      poNumber: 'PO-2025-001',
      progress: 100,
      status: 'Completed',
      bastDate: '2025-02-10',
      signedBy: 'Ahmad Rizki',
      hasAlert: false
    },
    {
      id: 'BAST-002',
      project: 'BTS Installation Bandung',
      customer: 'PT XL Axiata',
      poNumber: 'PO-2025-002',
      progress: 95,
      status: 'Pending BAST',
      completionDate: '2025-02-15',
      signedBy: null,
      hasAlert: true,
      alertMessage: 'Project completed but BAST not yet signed'
    },
    {
      id: 'BAST-003',
      project: 'PLN Upgrade Surabaya',
      customer: 'PT Indosat',
      poNumber: 'PO-2025-003',
      progress: 78,
      status: 'In Progress',
      bastDate: null,
      signedBy: null,
      hasAlert: false
    },
    {
      id: 'BAST-004',
      project: 'FTTH Bali',
      customer: 'PT Smartfren',
      poNumber: 'PO-2025-004',
      progress: 100,
      status: 'Not Yet BAST',
      completionDate: '2025-02-12',
      signedBy: null,
      hasAlert: true,
      alertMessage: 'NOT YET BAST - Project completed 4 days ago'
    },
    {
      id: 'BAST-005',
      project: 'BTS Medan',
      customer: 'PT Hutchison 3',
      poNumber: 'PO-2025-005',
      progress: 100,
      status: 'Not Yet BAST',
      completionDate: '2025-02-08',
      signedBy: null,
      hasAlert: true,
      alertMessage: 'NOT YET BAST - Urgent! Project completed 8 days ago'
    }
  ];

  const filteredRecords = bastRecords.filter(bast =>
    bast.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bast.customer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'Not Yet BAST':
        return 'bg-red-100 text-red-700';
      case 'Pending BAST':
        return 'bg-orange-100 text-orange-700';
      case 'In Progress':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  const stats = {
    total: bastRecords.length,
    completed: bastRecords.filter(b => b.status === 'Completed').length,
    notYetBAST: bastRecords.filter(b => b.status === 'Not Yet BAST').length,
    pending: bastRecords.filter(b => b.status === 'Pending BAST').length
  };

  return (
    <div className="space-y-6">
      {/* Warning Banner */}
      {stats.notYetBAST > 0 && (
        <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0">
              <AlertCircle size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-red-900 mb-2">⚠️ ATTENTION: Projects Not Yet BAST</h3>
              <p className="text-red-700 mb-3">
                You have <strong>{stats.notYetBAST} project(s)</strong> that are completed but haven't received BAST yet. 
                Please coordinate with customers immediately to get BAST signed!
              </p>
              <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 transition-colors">
                View All Pending BAST
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 border border-slate-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="text-blue-600" size={20} />
            </div>
            <span className="text-sm font-semibold text-slate-600">Total Projects</span>
          </div>
          <p className="text-3xl font-bold text-slate-900">{stats.total}</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-green-200 bg-green-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="text-green-600" size={20} />
            </div>
            <span className="text-sm font-semibold text-green-700">BAST Completed</span>
          </div>
          <p className="text-3xl font-bold text-green-700">{stats.completed}</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-orange-200 bg-orange-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
              <Clock className="text-orange-600" size={20} />
            </div>
            <span className="text-sm font-semibold text-orange-700">Pending BAST</span>
          </div>
          <p className="text-3xl font-bold text-orange-700">{stats.pending}</p>
        </div>

        <div className="bg-white rounded-xl p-6 border border-red-200 bg-red-50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="text-red-600" size={20} />
            </div>
            <span className="text-sm font-semibold text-red-700">Not Yet BAST</span>
          </div>
          <p className="text-3xl font-bold text-red-700">{stats.notYetBAST}</p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl p-6 border border-slate-200">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* BAST List */}
      <div className="space-y-4">
        {filteredRecords.map((bast) => (
          <div key={bast.id} className="bg-white rounded-xl border border-slate-200 hover:shadow-lg transition-shadow">
            {/* Alert Banner for Not Yet BAST */}
            {bast.hasAlert && (
              <div className={`p-4 border-b flex items-center gap-3 ${
                bast.status === 'Not Yet BAST' 
                  ? 'bg-red-50 border-red-200' 
                  : 'bg-orange-50 border-orange-200'
              }`}>
                <AlertCircle size={20} className={bast.status === 'Not Yet BAST' ? 'text-red-600' : 'text-orange-600'} />
                <span className={`text-sm font-bold ${
                  bast.status === 'Not Yet BAST' ? 'text-red-700' : 'text-orange-700'
                }`}>
                  {bast.alertMessage}
                </span>
              </div>
            )}

            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-bold text-slate-900">{bast.project}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(bast.status)}`}>
                      {bast.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{bast.customer}</p>
                  <p className="text-xs text-slate-500 mt-1">PO: {bast.poNumber}</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <button className="p-2 hover:bg-slate-100 rounded-lg transition-colors">
                    <Eye size={18} className="text-slate-600" />
                  </button>
                  {bast.status !== 'Completed' && bast.progress === 100 && (
                    <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all font-semibold text-sm">
                      Create BAST
                    </button>
                  )}
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-slate-700">Project Progress</span>
                  <span className="text-sm font-bold text-slate-900">{bast.progress}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`h-full ${
                      bast.progress === 100 
                        ? bast.status === 'Completed' 
                          ? 'bg-gradient-to-r from-green-500 to-emerald-600' 
                          : 'bg-gradient-to-r from-red-500 to-orange-500'
                        : 'bg-gradient-to-r from-blue-500 to-indigo-600'
                    }`}
                    style={{ width: `${bast.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-slate-200">
                <div>
                  <p className="text-xs text-slate-500 mb-1">
                    {bast.status === 'Completed' ? 'BAST Date' : 'Completion Date'}
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    {bast.bastDate || bast.completionDate || '-'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">Signed By</p>
                  <p className="text-sm font-semibold text-slate-900">
                    {bast.signedBy || 'Not yet signed'}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1">BAST Status</p>
                  <div className="flex items-center gap-2">
                    {bast.status === 'Completed' ? (
                      <CheckCircle size={16} className="text-green-600" />
                    ) : bast.status === 'Not Yet BAST' ? (
                      <AlertCircle size={16} className="text-red-600" />
                    ) : (
                      <Clock size={16} className="text-orange-600" />
                    )}
                    <span className={`text-sm font-semibold ${
                      bast.status === 'Completed' ? 'text-green-700' :
                      bast.status === 'Not Yet BAST' ? 'text-red-700' : 'text-orange-700'
                    }`}>
                      {bast.status === 'Completed' ? 'BAST Received' : 
                       bast.status === 'Not Yet BAST' ? 'Awaiting BAST' : 'In Progress'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
