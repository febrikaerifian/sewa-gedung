import { MapPin, Users, Star, TrendingUp } from 'lucide-react';
import type { Venue } from '../types';

interface VenueCardProps {
  venue: Venue;
  onClick: () => void;
}

export function VenueCard({ venue, onClick }: VenueCardProps) {
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

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'bg-green-100 text-green-700';
      case 'limited': return 'bg-yellow-100 text-yellow-700';
      case 'booked': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'available': return 'Tersedia';
      case 'limited': return 'Terbatas';
      case 'booked': return 'Dipesan';
      default: return availability;
    }
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl cursor-pointer group"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
  src={venue.images?.[0] || "https://via.placeholder.com/400"}
  alt={venue.name}
  className="w-full h-full object-cover"
/>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {venue.featured && (
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              Featured
            </span>
          )}
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
            {getCategoryLabel(venue.category)}
          </span>
        </div>

        {/* Availability */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getAvailabilityColor(venue.availability)}`}>
            {getAvailabilityText(venue.availability)}
          </span>
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title & Rating */}
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-bold text-lg text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
              {venue.name}
            </h3>
            <div className="flex items-center text-sm text-slate-600 gap-1">
              <MapPin className="w-4 h-4" />
              <span>{venue.city}</span>
            </div>
          </div>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold text-sm text-slate-900">{venue.rating}</span>
            <span className="text-xs text-slate-500">({venue.reviews})</span>
          </div>
        </div>

        {/* Capacity */}
        <div className="flex items-center gap-2 mb-4 text-slate-600">
          <Users className="w-4 h-4" />
          <span className="text-sm">Kapasitas: <span className="font-semibold text-slate-900">{venue.capacity} orang</span></span>
        </div>

        {/* Facilities Preview */}
        <div className="flex flex-wrap gap-2 mb-4">
          {venue.facilities.slice(0, 3).map((facility, index) => (
            <span 
              key={index}
              className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs"
            >
              {facility}
            </span>
          ))}
          {venue.facilities.length > 3 && (
            <span className="text-xs text-slate-500 flex items-center">
              +{venue.facilities.length - 3} lainnya
            </span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            <p className="text-xs text-slate-500 mb-1">Harga Sewa / Hari</p>
            <p className="font-bold text-xl text-blue-600">{formatPrice(venue.pricePerDay)}</p>
          </div>
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg shadow-blue-200">
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
}
