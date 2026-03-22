export interface Venue {
  id: string;
  name: string;
  location: string;
  city: string;
  category: 'wedding' | 'corporate' | 'exhibition' | 'seminar' | 'party';
  capacity: number;
  pricePerDay: number;
  images: string[];
  description: string;
  facilities: string[];
  rating: number;
  reviews: number;
  area: number; // in sqm
  featured: boolean;
  availability: 'available' | 'limited' | 'booked';
}

export interface BookingData {
  venueId: string;
  venueName: string;
  customerName: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: string;
  guestCount: number;
  duration: number; // in days
  additionalServices: string[];
  specialRequests: string;
  totalPrice: number;
}

export interface FilterOptions {
  city: string;
  category: string;
  minCapacity: number;
  maxPrice: number;
  facilities: string[];
  searchQuery: string;
}
