import { useState } from 'react';
import { 
  Building2, 
  Star, 
  CheckCircle, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  Award,
  Heart,
  ChevronDown,
  ArrowRight,
  Search,
  Sparkles
} from 'lucide-react';
import { VenueCard } from './components/VenueCard';
import { VenueDetail } from './components/VenueDetail';
import { BookingForm } from './components/BookingForm';
import { FilterSidebar } from './components/FilterSidebar';
import { venues, testimonials } from './data/venues';
import type { Venue, FilterOptions } from './types';
import { toast, Toaster } from 'sonner';

export default function RentalGedungApp() {
  const [selectedVenue, setSelectedVenue] = useState<Venue | null>(null);
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    city: '',
    category: '',
    minCapacity: 0,
    maxPrice: 100000000,
    facilities: [],
    searchQuery: ''
  });
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  // Filter venues based on filters
  const filteredVenues = venues.filter(venue => {
    if (filters.city && venue.city !== filters.city) return false;
    if (filters.category && venue.category !== filters.category) return false;
    if (filters.minCapacity && venue.capacity < filters.minCapacity) return false;
    if (filters.maxPrice && venue.pricePerDay > filters.maxPrice) return false;
    if (filters.facilities.length > 0) {
      const hasAllFacilities = filters.facilities.every(f => venue.facilities.includes(f));
      if (!hasAllFacilities) return false;
    }
    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      return (
        venue.name.toLowerCase().includes(query) ||
        venue.location.toLowerCase().includes(query) ||
        venue.city.toLowerCase().includes(query)
      );
    }
    return true;
  });

  const handleVenueClick = (venue: Venue) => {
    setSelectedVenue(venue);
  };

  const handleBookingClick = () => {
    setSelectedVenue(null);
    setShowBookingForm(true);
  };

  const handleBookingSubmit = (data: any) => {
    console.log('Booking data:', data);
    setShowBookingForm(false);
    toast.success('Booking berhasil dikirim! Tim kami akan menghubungi Anda segera.', {
      duration: 5000,
      icon: '✅'
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const faqs = [
    {
      question: 'Bagaimana cara booking gedung?',
      answer: 'Anda dapat booking gedung dengan mengklik tombol "Lihat Detail" pada gedung pilihan, kemudian klik "Booking Sekarang". Isi form booking dengan lengkap dan tim kami akan menghubungi Anda dalam 24 jam untuk konfirmasi.'
    },
    {
      question: 'Berapa lama sebelumnya saya harus booking?',
      answer: 'Kami merekomendasikan untuk booking minimal 2-4 minggu sebelum tanggal acara. Untuk peak season (Desember, Juni-Juli), sebaiknya booking 2-3 bulan sebelumnya untuk memastikan ketersediaan.'
    },
    {
      question: 'Apakah bisa reschedule atau cancel booking?',
      answer: 'Ya, reschedule dapat dilakukan dengan pemberitahuan minimal H-14. Cancel booking dapat dilakukan dengan refund 50% jika cancel H-14, tidak ada refund jika cancel kurang dari H-14.'
    },
    {
      question: 'Apakah sudah termasuk catering?',
      answer: 'Harga sewa gedung belum termasuk catering. Namun kami menyediakan opsi layanan catering tambahan yang dapat Anda pilih saat booking atau Anda dapat menggunakan catering sendiri.'
    },
    {
      question: 'Apakah tersedia site visit sebelum booking?',
      answer: 'Ya, kami menyediakan site visit gratis. Anda dapat mengatur jadwal site visit dengan menghubungi customer service kami.'
    },
    {
      question: 'Bagaimana sistem pembayaran?',
      answer: 'Pembayaran dilakukan dengan DP 30% untuk konfirmasi booking, dan pelunasan 70% dibayarkan H-7 sebelum acara. Kami menerima transfer bank, kartu kredit, dan payment gateway lainnya.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Toaster position="top-right" richColors />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 lg:py-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-8">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-sm font-semibold">Platform Rental Gedung Terpercaya #1 di Indonesia</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Temukan Gedung Impian untuk
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 text-transparent bg-clip-text">
                Acara Sempurna Anda
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Lebih dari 100+ venue premium di Jakarta dan sekitarnya. Booking mudah, harga transparan, pelayanan terbaik.
            </p>

            {/* Quick Search */}
            <div className="bg-white rounded-2xl p-2 shadow-2xl max-w-2xl mx-auto mb-12">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Cari nama gedung atau lokasi..."
                    value={filters.searchQuery}
                    onChange={(e) => setFilters({ ...filters, searchQuery: e.target.value })}
                    className="w-full pl-12 pr-4 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-900"
                  />
                </div>
                <button
                  onClick={() => scrollToSection('venues')}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Search className="w-5 h-5" />
                  Cari Gedung
                </button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-blue-200 text-sm">Gedung Premium</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">5,000+</div>
                <div className="text-blue-200 text-sm">Event Sukses</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">4.9/5</div>
                <div className="text-blue-200 text-sm">Rating Pelanggan</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-blue-200 text-sm">Customer Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="rgb(248 250 252)"/>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Mengapa Pilih Kami?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Kami berkomitmen memberikan pengalaman terbaik untuk acara Anda
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Verifikasi Terpercaya</h3>
              <p className="text-slate-600">Semua gedung telah diverifikasi dan memiliki standar kualitas terbaik</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Harga Terbaik</h3>
              <p className="text-slate-600">Transparansi harga tanpa biaya tersembunyi, dapatkan nilai terbaik</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Booking Mudah</h3>
              <p className="text-slate-600">Proses booking online yang cepat dan mudah, konfirmasi instant</p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Support 24/7</h3>
              <p className="text-slate-600">Tim customer service siap membantu Anda kapan saja</p>
            </div>
          </div>
        </div>
      </section>

      {/* Venues Listing Section */}
      <section id="venues" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Pilihan Gedung Premium</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Temukan venue yang sempurna untuk acara Anda dari koleksi kami
            </p>
          </div>

          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            {/* Filter Sidebar */}
            <div className="lg:col-span-3">
              <FilterSidebar
                filters={filters}
                onFilterChange={setFilters}
                resultsCount={filteredVenues.length}
              />
            </div>

            {/* Venues Grid */}
            <div className="lg:col-span-9 mt-8 lg:mt-0">
              {/* Results Count */}
              <div className="mb-6">
                <p className="text-slate-600">
                  Menampilkan <span className="font-bold text-slate-900">{filteredVenues.length}</span> gedung
                  {filters.searchQuery && ` untuk "${filters.searchQuery}"`}
                </p>
              </div>

              {/* Venues Grid */}
              {filteredVenues.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredVenues.map((venue) => (
                    <VenueCard
                      key={venue.id}
                      venue={venue}
                      onClick={() => handleVenueClick(venue)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Building2 className="w-10 h-10 text-slate-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Tidak Ada Gedung Ditemukan</h3>
                  <p className="text-slate-600 mb-6">Coba ubah filter atau kata kunci pencarian Anda</p>
                  <button
                    onClick={() => setFilters({
                      city: '',
                      category: '',
                      minCapacity: 0,
                      maxPrice: 100000000,
                      facilities: [],
                      searchQuery: ''
                    })}
                    className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Reset Filter
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Apa Kata Mereka?</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Ribuan pelanggan puas telah mempercayai kami untuk acara penting mereka
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-blue-200">{testimonial.event}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-blue-50 text-sm mb-3 line-clamp-4">
                  "{testimonial.comment}"
                </p>

                <div className="flex items-center justify-between text-xs text-blue-200">
                  <span>{testimonial.venue}</span>
                  <span>{testimonial.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Pertanyaan yang Sering Diajukan</h2>
            <p className="text-lg text-slate-600">
              Temukan jawaban untuk pertanyaan umum tentang layanan kami
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${
                      expandedFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-5">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Siap Mengadakan Acara Impian Anda?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Mulai cari gedung sekarang dan dapatkan penawaran terbaik untuk acara Anda
          </p>
          <button
            onClick={() => scrollToSection('venues')}
            className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-2xl inline-flex items-center gap-3 group"
          >
            Lihat Semua Gedung
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6" />
                </div>
                <span className="text-xl font-bold">RentalGedung.id</span>
              </div>
              <p className="text-slate-400 mb-6">
                Platform rental gedung terpercaya untuk acara sempurna Anda di seluruh Indonesia.
              </p>
              <div className="flex items-center gap-4">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">4.9/5 dari 1,200+ reviews</span>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Kategori</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Gedung Pernikahan</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Corporate Event</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pameran & Exhibition</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Seminar & Workshop</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Private Party</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Perusahaan</h4>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Tentang Kami</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cara Kerja</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog & Tips</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Karir</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">Hubungi Kami</h4>
              <ul className="space-y-4 text-slate-400">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Jl. Sudirman No. 123, Jakarta Pusat 10220</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>+62 21 1234 5678</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>info@rentalgedung.id</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-400 text-sm">
                © 2026 RentalGedung.id. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-sm text-slate-400">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Modals */}
      {selectedVenue && (
        <VenueDetail
          venue={selectedVenue}
          onClose={() => setSelectedVenue(null)}
          onBooking={handleBookingClick}
        />
      )}

      {showBookingForm && selectedVenue && (
        <BookingForm
          venue={selectedVenue}
          onClose={() => {
            setShowBookingForm(false);
            setSelectedVenue(null);
          }}
          onSubmit={handleBookingSubmit}
        />
      )}
    </div>
  );
}
