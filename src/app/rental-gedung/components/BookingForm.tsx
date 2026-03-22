import { X, Calendar, Users, Clock, CreditCard, CheckCircle } from 'lucide-react';
import type { Venue } from '../types';
import { useState } from 'react';

interface BookingFormProps {
  venue: Venue;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export function BookingForm({ venue, onClose, onSubmit }: BookingFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    customerName: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    guestCount: '',
    duration: '1',
    additionalServices: [] as string[],
    specialRequests: ''
  });

  const additionalServicesList = [
    { id: 'catering', name: 'Catering Service', price: 150000 },
    { id: 'decoration', name: 'Dekorasi Premium', price: 5000000 },
    { id: 'photography', name: 'Photographer Professional', price: 3000000 },
    { id: 'sound', name: 'Sound System Tambahan', price: 2000000 },
    { id: 'mc', name: 'MC & Entertainer', price: 2500000 },
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleServiceToggle = (serviceId: string) => {
    const services = formData.additionalServices.includes(serviceId)
      ? formData.additionalServices.filter(s => s !== serviceId)
      : [...formData.additionalServices, serviceId];
    setFormData({ ...formData, additionalServices: services });
  };

  const calculateTotal = () => {
    const basePrice = venue.pricePerDay * parseInt(formData.duration || '1');
    const servicesPrice = formData.additionalServices.reduce((total, serviceId) => {
      const service = additionalServicesList.find(s => s.id === serviceId);
      return total + (service?.price || 0);
    }, 0);
    return basePrice + servicesPrice;
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      onSubmit({
        ...formData,
        venueId: venue.id,
        venueName: venue.name,
        totalPrice: calculateTotal()
      });
    }
  };

  const isStep1Valid = formData.customerName && formData.email && formData.phone;
  const isStep2Valid = formData.eventDate && formData.eventType && formData.guestCount;

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-3xl w-full my-8 overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Booking Gedung</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/20 rounded-xl transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex items-center gap-2 text-blue-100">
            <span className="font-semibold">{venue.name}</span>
            <span>•</span>
            <span>{venue.city}</span>
          </div>

          {/* Progress Steps */}
          <div className="flex items-center gap-4 mt-6">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-bold transition-all ${
                  s <= step ? 'bg-white text-blue-600' : 'bg-blue-500 text-white'
                }`}>
                  {s}
                </div>
                {s < 3 && (
                  <div className={`flex-1 h-1 mx-2 rounded transition-all ${
                    s < step ? 'bg-white' : 'bg-blue-500'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mt-2 text-sm">
            <span className={step >= 1 ? 'font-semibold' : 'text-blue-200'}>Data Diri</span>
            <span className={step >= 2 ? 'font-semibold' : 'text-blue-200'}>Detail Acara</span>
            <span className={step >= 3 ? 'font-semibold' : 'text-blue-200'}>Konfirmasi</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="p-8">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Informasi Pemesan</h3>
              
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  required
                  value={formData.customerName}
                  onChange={(e) => handleInputChange('customerName', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    No. Telepon *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Event Details */}
          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Detail Acara</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Tanggal Acara *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.eventDate}
                    onChange={(e) => handleInputChange('eventDate', e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Durasi (Hari) *
                  </label>
                  <select
                    required
                    value={formData.duration}
                    onChange={(e) => handleInputChange('duration', e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                  >
                    {[1, 2, 3, 4, 5].map(d => (
                      <option key={d} value={d}>{d} Hari</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Jenis Acara *
                </label>
                <select
                  required
                  value={formData.eventType}
                  onChange={(e) => handleInputChange('eventType', e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
                >
                  <option value="">Pilih jenis acara</option>
                  <option value="wedding">Pernikahan</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="seminar">Seminar/Workshop</option>
                  <option value="exhibition">Pameran</option>
                  <option value="birthday">Ulang Tahun</option>
                  <option value="other">Lainnya</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  <Users className="w-4 h-4 inline mr-1" />
                  Jumlah Tamu *
                </label>
                <input
                  type="number"
                  required
                  value={formData.guestCount}
                  onChange={(e) => handleInputChange('guestCount', e.target.value)}
                  max={venue.capacity}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder={`Maksimal ${venue.capacity} orang`}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-3">
                  Layanan Tambahan (Opsional)
                </label>
                <div className="space-y-3">
                  {additionalServicesList.map((service) => (
                    <label 
                      key={service.id}
                      className="flex items-center justify-between p-4 border border-slate-200 rounded-xl cursor-pointer hover:border-blue-300 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={formData.additionalServices.includes(service.id)}
                          onChange={() => handleServiceToggle(service.id)}
                          className="w-5 h-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
                        />
                        <span className="text-slate-700">{service.name}</span>
                      </div>
                      <span className="font-semibold text-blue-600">{formatPrice(service.price)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Permintaan Khusus (Opsional)
                </label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tambahkan catatan atau permintaan khusus untuk acara Anda..."
                />
              </div>
            </div>
          )}

          {/* Step 3: Confirmation */}
          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Konfirmasi Booking</h3>
                <p className="text-slate-600 mt-2">Periksa kembali detail booking Anda</p>
              </div>

              {/* Summary */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                  <span className="text-slate-600">Gedung</span>
                  <span className="font-semibold text-slate-900">{venue.name}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                  <span className="text-slate-600">Pemesan</span>
                  <span className="font-semibold text-slate-900">{formData.customerName}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                  <span className="text-slate-600">Tanggal</span>
                  <span className="font-semibold text-slate-900">
                    {new Date(formData.eventDate).toLocaleDateString('id-ID', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                  <span className="text-slate-600">Durasi</span>
                  <span className="font-semibold text-slate-900">{formData.duration} Hari</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-blue-200">
                  <span className="text-slate-600">Jumlah Tamu</span>
                  <span className="font-semibold text-slate-900">{formData.guestCount} Orang</span>
                </div>
                
                {/* Price Breakdown */}
                <div className="pt-4 space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600">Sewa Gedung ({formData.duration} hari)</span>
                    <span className="font-semibold text-slate-900">
                      {formatPrice(venue.pricePerDay * parseInt(formData.duration))}
                    </span>
                  </div>
                  {formData.additionalServices.length > 0 && (
                    <>
                      {formData.additionalServices.map(serviceId => {
                        const service = additionalServicesList.find(s => s.id === serviceId);
                        return service ? (
                          <div key={serviceId} className="flex justify-between items-center">
                            <span className="text-slate-600">{service.name}</span>
                            <span className="font-semibold text-slate-900">{formatPrice(service.price)}</span>
                          </div>
                        ) : null;
                      })}
                    </>
                  )}
                  <div className="flex justify-between items-center pt-4 border-t-2 border-blue-300">
                    <span className="text-lg font-bold text-slate-900">Total Pembayaran</span>
                    <span className="text-2xl font-bold text-blue-600">{formatPrice(calculateTotal())}</span>
                  </div>
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <p className="text-sm text-blue-800">
                      <CreditCard className="w-4 h-4 inline mr-1" />
                      DP 30%: <span className="font-bold">{formatPrice(calculateTotal() * 0.3)}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-xl">
                <p className="text-sm text-yellow-800">
                  <strong>Catatan:</strong> Dengan mengklik "Konfirmasi Booking", Anda menyetujui syarat dan ketentuan yang berlaku. Tim kami akan menghubungi Anda dalam 24 jam untuk konfirmasi dan detail pembayaran.
                </p>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 mt-8">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="flex-1 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold transition-colors"
              >
                Kembali
              </button>
            )}
            <button
              type="submit"
              disabled={(step === 1 && !isStep1Valid) || (step === 2 && !isStep2Valid)}
              className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {step === 3 ? 'Konfirmasi Booking' : 'Lanjutkan'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
