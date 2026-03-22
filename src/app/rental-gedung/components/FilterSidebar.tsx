import { Search, SlidersHorizontal, X } from 'lucide-react';
import type { FilterOptions } from '../types';
import { cities, categories, allFacilities } from '../data/venues';
import { useState } from 'react';

interface FilterSidebarProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  resultsCount: number;
}

export function FilterSidebar({ filters, onFilterChange, resultsCount }: FilterSidebarProps) {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleFilterChange = (key: keyof FilterOptions, value: any) => {
    onFilterChange({ ...filters, [key]: value });
  };

  const handleFacilityToggle = (facility: string) => {
    const newFacilities = filters.facilities.includes(facility)
      ? filters.facilities.filter(f => f !== facility)
      : [...filters.facilities, facility];
    handleFilterChange('facilities', newFacilities);
  };

  const resetFilters = () => {
    onFilterChange({
      city: '',
      category: '',
      minCapacity: 0,
      maxPrice: 100000000,
      facilities: [],
      searchQuery: ''
    });
  };

  const activeFiltersCount = [
    filters.city,
    filters.category,
    filters.minCapacity > 0,
    filters.maxPrice < 100000000,
    filters.facilities.length > 0
  ].filter(Boolean).length;

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Search */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Cari Gedung
        </label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Nama atau lokasi..."
            value={filters.searchQuery}
            onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>
      </div>

      {/* City */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Kota
        </label>
        <select
          value={filters.city}
          onChange={(e) => handleFilterChange('city', e.target.value)}
          className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
        >
          {cities.map((city) => (
            <option key={city} value={city === 'Semua Kota' ? '' : city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Kategori Acara
        </label>
        <select
          value={filters.category}
          onChange={(e) => handleFilterChange('category', e.target.value)}
          className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white"
        >
          {categories.map((cat) => (
            <option key={cat.value} value={cat.value}>
              {cat.label}
            </option>
          ))}
        </select>
      </div>

      {/* Capacity */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Kapasitas Minimum
        </label>
        <input
          type="number"
          value={filters.minCapacity || ''}
          onChange={(e) => handleFilterChange('minCapacity', parseInt(e.target.value) || 0)}
          placeholder="0"
          className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
        />
        <p className="text-xs text-slate-500 mt-1">Jumlah tamu yang diharapkan</p>
      </div>

      {/* Price Range */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Maksimal Harga (per hari)
        </label>
        <input
          type="range"
          min="0"
          max="100000000"
          step="5000000"
          value={filters.maxPrice}
          onChange={(e) => handleFilterChange('maxPrice', parseInt(e.target.value))}
          className="w-full accent-blue-600"
        />
        <div className="flex items-center justify-between mt-2">
          <span className="text-sm font-semibold text-blue-600">
            {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(filters.maxPrice)}
          </span>
        </div>
      </div>

      {/* Facilities */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-3">
          Fasilitas
        </label>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {allFacilities.map((facility) => (
            <label key={facility} className="flex items-center gap-3 cursor-pointer hover:bg-slate-50 p-2 rounded-lg transition-colors">
              <input
                type="checkbox"
                checked={filters.facilities.includes(facility)}
                onChange={() => handleFacilityToggle(facility)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-sm text-slate-700">{facility}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      {activeFiltersCount > 0 && (
        <button
          onClick={resetFilters}
          className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-semibold transition-colors"
        >
          Reset Filter
        </button>
      )}
    </div>
  );

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-2xl hover:bg-blue-700 transition-colors relative"
        >
          <SlidersHorizontal className="w-6 h-6" />
          {activeFiltersCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
              {activeFiltersCount}
            </span>
          )}
        </button>
      </div>

      {/* Mobile Filter Modal */}
      {isMobileFilterOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-t-3xl sm:rounded-3xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="flex items-center justify-between p-6 border-b border-slate-200">
              <div>
                <h3 className="font-bold text-lg text-slate-900">Filter Gedung</h3>
                <p className="text-sm text-slate-500">{resultsCount} gedung ditemukan</p>
              </div>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-xl transition-colors"
              >
                <X className="w-6 h-6 text-slate-600" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <FilterContent />
            </div>
            <div className="p-6 border-t border-slate-200">
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Tampilkan {resultsCount} Gedung
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block bg-white p-6 rounded-2xl border border-slate-200 sticky top-6 max-h-[calc(100vh-3rem)] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-bold text-lg text-slate-900">Filter</h3>
          {activeFiltersCount > 0 && (
            <span className="bg-blue-100 text-blue-700 text-xs font-semibold px-2.5 py-1 rounded-full">
              {activeFiltersCount} aktif
            </span>
          )}
        </div>
        <FilterContent />
      </div>
    </>
  );
}
