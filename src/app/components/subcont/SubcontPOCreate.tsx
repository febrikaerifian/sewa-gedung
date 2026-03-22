import { useState } from 'react';

export function SubcontPOCreate() {
  const [formData, setFormData] = useState({
    poType: 'per-site',
    projectName: '',
    siteName: '',
    subcontName: '',
    subcontContact: '',
    subcontAddress: '',
    workScope: '',
    poValue: '',
    startDate: '',
    completionDate: '',
    paymentTerms: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subcont PO:', formData);
  };

  return (
    <div className="space-y-6">
      {/* Reminder Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-6 rounded-xl border border-orange-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-orange-800 font-semibold">PO Belum Dibuat</p>
            <span className="text-2xl font-bold text-orange-600">12</span>
          </div>
          <p className="text-sm text-orange-600">Sites without PO subcont</p>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200 shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <p className="text-blue-800 font-semibold">Waiting Approval</p>
            <span className="text-2xl font-bold text-blue-600">5</span>
          </div>
          <p className="text-sm text-blue-600">PO pending approval</p>
        </div>
      </div>

      {/* PO Creation Form */}
      <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-800 mb-6">Create Purchase Order - Subcontractor</h3>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                PO Type
              </label>
              <select
                value={formData.poType}
                onChange={(e) => setFormData({...formData, poType: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
              >
                <option value="per-site">Per Site / BTS</option>
                <option value="per-project">Per Project</option>
                <option value="monthly">Monthly Contract</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Project Name
              </label>
              <input
                type="text"
                value={formData.projectName}
                onChange={(e) => setFormData({...formData, projectName: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                placeholder="Select or enter project"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Site Name / BTS
              </label>
              <input
                type="text"
                value={formData.siteName}
                onChange={(e) => setFormData({...formData, siteName: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                placeholder="Site ID or BTS name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Subcontractor Name
              </label>
              <input
                type="text"
                value={formData.subcontName}
                onChange={(e) => setFormData({...formData, subcontName: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                placeholder="Nama perusahaan subcont"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Contact Person
              </label>
              <input
                type="text"
                value={formData.subcontContact}
                onChange={(e) => setFormData({...formData, subcontContact: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                placeholder="Name & phone number"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Homebase / Alamat
              </label>
              <input
                type="text"
                value={formData.subcontAddress}
                onChange={(e) => setFormData({...formData, subcontAddress: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                placeholder="Alamat subcont"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Work Scope / Content PO
              </label>
              <textarea
                value={formData.workScope}
                onChange={(e) => setFormData({...formData, workScope: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                rows={4}
                placeholder="Detail pekerjaan dan scope"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                PO Value (Rp)
              </label>
              <input
                type="text"
                value={formData.poValue}
                onChange={(e) => setFormData({...formData, poValue: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                placeholder="Total nilai PO"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Payment Terms (TOP)
              </label>
              <select
                value={formData.paymentTerms}
                onChange={(e) => setFormData({...formData, paymentTerms: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                required
              >
                <option value="">Select TOP</option>
                <option value="30">NET 30</option>
                <option value="45">NET 45</option>
                <option value="60">NET 60</option>
                <option value="cod">COD</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Start Date
              </label>
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Target Completion
              </label>
              <input
                type="date"
                value={formData.completionDate}
                onChange={(e) => setFormData({...formData, completionDate: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                required
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Notes / Catatan
              </label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({...formData, notes: e.target.value})}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                rows={3}
                placeholder="Additional notes"
              />
            </div>
          </div>

          <div className="border-t border-slate-200 pt-4 mt-6">
            <h4 className="text-sm font-semibold text-slate-700 mb-3">Approval Flow</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-slate-50 rounded-lg">
                <p className="text-xs text-slate-500 mb-1">Step 1</p>
                <p className="text-sm font-medium text-slate-800">RPM Approval</p>
              </div>
              <div className="text-center p-3 bg-slate-50 rounded-lg">
                <p className="text-xs text-slate-500 mb-1">Step 2</p>
                <p className="text-sm font-medium text-slate-800">Procurement Mgr</p>
              </div>
              <div className="text-center p-3 bg-slate-50 rounded-lg">
                <p className="text-xs text-slate-500 mb-1">Step 3</p>
                <p className="text-sm font-medium text-slate-800">GM Approval</p>
              </div>
              <div className="text-center p-3 bg-slate-50 rounded-lg">
                <p className="text-xs text-slate-500 mb-1">Step 4</p>
                <p className="text-sm font-medium text-slate-800">Subcont Sign</p>
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              className="px-6 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Save Draft
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-red-400 to-rose-500 text-white rounded-lg hover:from-red-500 hover:to-rose-600 transition-all shadow-lg"
            >
              Submit for Approval
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
