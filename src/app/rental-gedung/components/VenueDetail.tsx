import { X, MapPin, Users, Maximize, Star, Check, ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import type { Venue } from '../types';
import { useState } from 'react';

interface VenueDetailProps {
  venue: Venue;
  onClose: () => void;
  onBooking: () => void;
}

export function VenueDetail({ venue, onClose, onBooking }: VenueDetailProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      wedding: 'Pernikahan',
      corporate: 'Corporate',
      exhibition: 'Pameran',
      seminar: 'Seminar',
      party: 'Pesta'
    };
    return labels[category] || category;
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % venue.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + venue.images.length) % venue.images.length);
  };

  return (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-5xl w-full my-8 overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="relative">
          {/* Image Carousel */}
          <div className="relative h-96 bg-slate-900">
            <img
  src={venue.images[currentImageIndex]}
  alt={venue.name}
  className="w-full h-full object-cover rounded-xl"
/>
            
            {/* Image Navigation */}
            {venue.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                >
                  <ChevronLeft className="w-6 h-6 text-slate-900" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
                >
                  <ChevronRight className="w-6 h-6 text-slate-900" />
                </button>

                {/* Image Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {venue.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex 
                          ? 'bg-white w-8' 
                          : 'bg-white/50 hover:bg-white/75'
                      }`}
                    />
                  ))}
                </div>
              </>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <X className="w-6 h-6 text-slate-900" />
            </button>

            {/* Badge */}
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                {getCategoryLabel(venue.category)}
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Title & Rating */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">{venue.name}</h2>
              <div className="flex items-center gap-4 text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  <span>{venue.location}, {venue.city}</span>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-xl">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-bold text-lg text-slate-900">{venue.rating}</span>
              <span className="text-slate-600">({venue.reviews} reviews)</span>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-xl text-center">
              <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-900">{venue.capacity}</p>
              <p className="text-sm text-slate-600">Kapasitas</p>
            </div>
            <div className="bg-green-50 p-4 rounded-xl text-center">
              <Maximize className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-900">{venue.area} m²</p>
              <p className="text-sm text-slate-600">Luas Area</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-xl text-center">
              <Calendar className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-slate-900">{formatPrice(venue.pricePerDay)}</p>
              <p className="text-sm text-slate-600">Per Hari</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-3">Deskripsi</h3>
            <p className="text-slate-600 leading-relaxed">{venue.description}</p>
          </div>

          {/* Facilities */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Fasilitas</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {venue.facilities.map((facility, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-slate-50 p-3 rounded-xl"
                >
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Check className="w-4 h-4 text-blue-600" />
                  </div>
                  <span className="text-sm text-slate-700">{facility}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-3">Informasi Tambahan</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Tersedia paket dekorasi tambahan</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Konsultasi gratis dengan event organizer</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Flexible booking dan reschedule policy</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Site visit gratis sebelum booking</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
              <h4 className="font-bold text-slate-900 mb-3">Ketentuan Sewa</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Minimum booking 1 hari</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>DP 30% untuk konfirmasi booking</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Pembayaran pelunasan H-7 acara</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Refund 50% jika cancel H-14</span>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold transition-colors"
            >
              Tutup
            </button>
            <button
              onClick={onBooking}
              className="flex-1 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-semibold transition-all shadow-lg shadow-blue-200"
            >
              Booking Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
