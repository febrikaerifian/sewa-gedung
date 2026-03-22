import { useState } from 'react';

export function VendorRegistration() {
  const [formData, setFormData] = useState({
    companyName: '',
    companyType: '',
    npwp: '',
    address: '',
    city: '',
    phone: '',
    email: '',
    contactPerson: '',
    services: [] as string[],
    teamSize: '',
    experience: '',
    portfolio: '',
    bankName: '',
    bankAccount: '',
    accountHolder: ''
  });

  const serviceOptions = [
    'FTTH Installation',
    'BTS Installation',
    'PLN Upgrade',
    'Maintenance',
    'Civil Work',
    'Material Supply'
  ];

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Vendor data:', formData);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl border border-red-100 shadow-sm">
        <h3 className="text-xl font-semibold text-slate-800 mb-6">Vendor / Subcontractor Registration Form</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Information */}
          <div>
            <h4 className="text-lg font-semibold text-slate-700 mb-4 pb-2 border-b border-slate-200">
              Data Perusahaan
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nama Perusahaan
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  placeholder="PT/CV Nama Perusahaan"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Jenis Perusahaan
                </label>
                <select
                  value={formData.companyType}
                  onChange={(e) => setFormData({...formData, companyType: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  required
                >
                  <option value="">Pilih jenis</option>
                  <option value="PT">PT (Perseroan Terbatas)</option>
                  <option value="CV">CV (Commanditaire Vennootschap)</option>
                  <option value="UD">UD (Usaha Dagang)</option>
                  <option value="Individual">Perorangan</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  NPWP
                </label>
                <input
                  type="text"
                  value={formData.npwp}
                  onChange={(e) => setFormData({...formData, npwp: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  placeholder="00.000.000.0-000.000"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Kota / Homebase
                </label>
                <input
                  type="text"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  placeholder="Kota"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Alamat Lengkap
                </label>
                <textarea
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  rows={3}
                  placeholder="Alamat lengkap perusahaan"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Telepon
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  placeholder="021-xxxxxxx"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  placeholder="email@company.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Contact Person
                </label>
                <input
                  type="text"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  placeholder="Nama & Jabatan"
                  required
                />
              </div>
            </div>
          </div>

          {/* Services & Capabilities */}
          <div>
            <h4 className="text-lg font-semibold text-slate-700 mb-4 pb-2 border-b border-slate-200">
              Service & Kapabilitas
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Layanan yang Tersedia
                </label>
                <div className="space-y-2">
                  {serviceOptions.map((service) => (
                    <label key={service} className="flex items-center">
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => toggleService(service)}
                        className="w-4 h-4 text-rose-500 border-slate-300 rounded focus:ring-rose-400"
                      />
                      <span className="ml-2 text-sm text-slate-700">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Jumlah Team
                </label>
                <input
                  type="text"
                  value={formData.teamSize}
                  onChange={(e) => setFormData({...formData, teamSize: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  placeholder="Contoh: 5 team @ 4 orang"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Pengalaman / Experience
                </label>
                <textarea
                  value={formData.experience}
                  onChange={(e) => setFormData({...formData, experience: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  rows={3}
                  placeholder="Jelaskan pengalaman perusahaan di bidang terkait"
                  required
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Portfolio / Project References
                </label>
                <textarea
                  value={formData.portfolio}
                  onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  rows={4}
                  placeholder="List project-project yang pernah dikerjakan"
                  required
                />
              </div>
            </div>
          </div>

          {/* Bank Information */}
          <div>
            <h4 className="text-lg font-semibold text-slate-700 mb-4 pb-2 border-b border-slate-200">
              Informasi Bank
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nama Bank
                </label>
                <input
                  type="text"
                  value={formData.bankName}
                  onChange={(e) => setFormData({...formData, bankName: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  placeholder="Bank BCA"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nomor Rekening
                </label>
                <input
                  type="text"
                  value={formData.bankAccount}
                  onChange={(e) => setFormData({...formData, bankAccount: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  placeholder="1234567890"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Atas Nama
                </label>
                <input
                  type="text"
                  value={formData.accountHolder}
                  onChange={(e) => setFormData({...formData, accountHolder: e.target.value})}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-400"
                  placeholder="Nama pemilik rekening"
                  required
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              className="px-6 py-2 border border-slate-300 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-red-400 to-rose-500 text-white rounded-lg hover:from-red-500 hover:to-rose-600 transition-all shadow-lg"
            >
              Register Vendor
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
