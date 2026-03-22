import type { Venue } from '../types';

export const venues: Venue[] = [
  {
    id: 'v1',
    name: 'Grand Ballroom Imperial',
    location: 'Jl. Sudirman No. 123',
    city: 'Jakarta Pusat',
    category: 'wedding',
    capacity: 1000,
    pricePerDay: 75000000,
    images: [
      'https://images.unsplash.com/photo-1759730840961-09faa5731a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwYmFsbHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQxODA5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1769018508631-fe4ebf3fba3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjB2ZW51ZSUyMGNoYW5kZWxpZXJ8ZW58MXx8fHwxNzc0MTgwOTg3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Ballroom mewah dengan langit-langit tinggi dan chandelier kristal impor. Dilengkapi dengan sistem audio dan lighting profesional, panggung besar, dan dekorasi elegan. Cocok untuk pernikahan grand dan acara formal skala besar.',
    facilities: [
      'AC Central',
      'Sound System Premium',
      'LED Screen 10m',
      'Stage Professional',
      'Free WiFi 1Gbps',
      'Parking 500 mobil',
      'Ruang Ganti VIP',
      'Catering Kitchen',
      'Toilet VIP',
      'Security 24/7'
    ],
    rating: 4.9,
    reviews: 156,
    area: 1200,
    featured: true,
    availability: 'available'
  },
  {
    id: 'v2',
    name: 'Summit Conference Hall',
    location: 'Kuningan City, Lt. 15',
    city: 'Jakarta Selatan',
    category: 'corporate',
    capacity: 500,
    pricePerDay: 45000000,
    images: [
      'https://images.unsplash.com/photo-1771911646904-61f0fc9033e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25mZXJlbmNlJTIwaGFsbCUyMGVtcHR5fGVufDF8fHx8MTc3NDE4MDk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1766802981801-4b4a9a1d8f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwcm9vbSUyMGxhcmdlfGVufDF8fHx8MTc3NDE4MDk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Ruang konferensi modern dengan pemandangan kota Jakarta. Dilengkapi teknologi presentasi terkini, internet super cepat, dan fasilitas business center. Ideal untuk corporate meeting, seminar, dan product launch.',
    facilities: [
      'Projector 4K',
      'Video Conference Setup',
      'High-speed Internet',
      'Whiteboard & Flipchart',
      'Coffee Break Area',
      'Valet Parking',
      'Business Lounge',
      'Simultaneous Translation',
      'Recording Facility'
    ],
    rating: 4.8,
    reviews: 89,
    area: 650,
    featured: true,
    availability: 'available'
  },
  {
    id: 'v3',
    name: 'Garden Paradise Venue',
    location: 'Pondok Indah',
    city: 'Jakarta Selatan',
    category: 'wedding',
    capacity: 300,
    pricePerDay: 35000000,
    images: [
      'https://images.unsplash.com/photo-1762216444919-043cf813e4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZ2FyZGVuJTIwd2VkZGluZyUyMHZlbnVlfGVufDF8fHx8MTc3NDE4MDk4OHww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Venue outdoor dengan taman yang asri dan indah. Dilengkapi gazebo, water fountain, dan dekorasi natural. Perfect untuk garden wedding, outdoor party, dan acara intimate. Tersedia backup indoor hall jika hujan.',
    facilities: [
      'Garden Landscape',
      'Gazebo',
      'Water Fountain',
      'String Lights',
      'Backup Indoor Hall',
      'Bridal Room',
      'Kitchen Area',
      'Parking Area',
      'Photography Spots'
    ],
    rating: 4.7,
    reviews: 124,
    area: 800,
    featured: true,
    availability: 'limited'
  },
  {
    id: 'v4',
    name: 'Metro Exhibition Center',
    location: 'Kemayoran',
    city: 'Jakarta Pusat',
    category: 'exhibition',
    capacity: 2000,
    pricePerDay: 85000000,
    images: [
      'https://images.unsplash.com/photo-1769667693219-4d8e44b6a3b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwaGFsbCUyMGVtcHR5JTIwc3BhY2V8ZW58MXx8fHwxNzc0MTgwOTg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1661651579968-d956b2498e21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZW50aW9uJTIwY2VudGVyJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc0MTgwOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Exhibition hall berkapasitas besar dengan area terbuka yang luas. Cocok untuk pameran, expo, trade show, dan event skala besar. Dilengkapi loading dock, power supply tinggi, dan sistem manajemen event profesional.',
    facilities: [
      'Loading Dock',
      'High Power Supply',
      'Modular Booth System',
      'Registration Area',
      'Food Court Space',
      'ATM Center',
      'Medical Room',
      'Storage Room',
      'Exhibition Management System'
    ],
    rating: 4.6,
    reviews: 67,
    area: 2500,
    featured: false,
    availability: 'available'
  },
  {
    id: 'v5',
    name: 'Skyline Rooftop Lounge',
    location: 'SCBD, Lt. Rooftop',
    city: 'Jakarta Selatan',
    category: 'party',
    capacity: 200,
    pricePerDay: 28000000,
    images: [
      'https://images.unsplash.com/photo-1762237874410-17ddf6c782a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb29mdG9wJTIwcGFydHklMjB2ZW51ZSUyMGNpdHl8ZW58MXx8fHwxNzc0MTgwOTg5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Rooftop venue dengan view 360 derajat ke skyline Jakarta. Atmosphere modern dan eksklusif dengan bar area, lounge seating, dan outdoor terrace. Ideal untuk birthday party, corporate gathering, dan networking event.',
    facilities: [
      'Bar Counter',
      'DJ Booth',
      'Lounge Seating',
      'LED Dance Floor',
      'City View',
      'Outdoor Terrace',
      'VIP Section',
      'Photo Booth Area',
      'Smart Lighting'
    ],
    rating: 4.8,
    reviews: 142,
    area: 400,
    featured: true,
    availability: 'available'
  },
  {
    id: 'v6',
    name: 'Academic Auditorium',
    location: 'Universitas Indonesia, Depok',
    city: 'Depok',
    category: 'seminar',
    capacity: 800,
    pricePerDay: 22000000,
    images: [
      'https://images.unsplash.com/photo-1764471444363-e6dc0f9773bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW1pbmFyJTIwYXVkaXRvcml1bSUyMHNlYXRzfGVufDF8fHx8MTc3NDE4MDk4OXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1760170437237-a3654545ab4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aGVhdGVyJTIwc3RhZ2UlMjBlbXB0eXxlbnwxfHx8fDE3NzQxODA5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Auditorium dengan fasilitas akademik lengkap. Kursi theater seating yang nyaman, sound system berkualitas, dan pencahayaan optimal. Cocok untuk seminar, workshop, training, dan konferensi ilmiah.',
    facilities: [
      'Theater Seating',
      'Podium with Mic',
      'Projector & Screen',
      'Audio Recording',
      'Air Conditioning',
      'Registration Desk',
      'Breakout Rooms',
      'Certificate Printing',
      'Ample Parking'
    ],
    rating: 4.5,
    reviews: 78,
    area: 900,
    featured: false,
    availability: 'available'
  },
  {
    id: 'v7',
    name: 'Royal Banquet Hall',
    location: 'Thamrin, Jakarta Pusat',
    city: 'Jakarta Pusat',
    category: 'wedding',
    capacity: 600,
    pricePerDay: 55000000,
    images: [
      'https://images.unsplash.com/photo-1769224751561-feca3f403d49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5xdWV0JTIwaGFsbCUyMGRlY29yYXRlZHxlbnwxfHx8fDE3NzQxODA5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Ballroom klasik dengan interior mewah dan chandelier Eropa. Kapasitas sedang dengan suasana intimate dan elegan. Dilengkapi bridal suite, ruang makan terpisah, dan area pre-function untuk cocktail.',
    facilities: [
      'Crystal Chandelier',
      'Bridal Suite',
      'Pre-function Area',
      'Full Catering Kitchen',
      'Premium Sound System',
      'Stage & Backdrop',
      'Valet Service',
      'Wedding Coordinator',
      'Floral Decoration'
    ],
    rating: 4.9,
    reviews: 201,
    area: 750,
    featured: true,
    availability: 'limited'
  },
  {
    id: 'v8',
    name: 'Tech Hub Meeting Space',
    location: 'Mega Kuningan',
    city: 'Jakarta Selatan',
    category: 'corporate',
    capacity: 150,
    pricePerDay: 18000000,
    images: [
      'https://images.unsplash.com/photo-1766802981801-4b4a9a1d8f1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtZWV0aW5nJTIwcm9vbSUyMGxhcmdlfGVufDF8fHx8MTc3NDE4MDk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Ruang meeting modern dengan desain minimalis. Dilengkapi smart board, video conference facility, dan high-tech presentation tools. Cocok untuk workshop, team building, dan brainstorming session.',
    facilities: [
      'Smart Board',
      'Video Conference',
      'Fast Internet',
      'Modular Furniture',
      'Coffee Machine',
      'Snack Bar',
      'Collaboration Tools',
      'Phone Booth',
      'Locker Room'
    ],
    rating: 4.6,
    reviews: 93,
    area: 250,
    featured: false,
    availability: 'available'
  },
  {
    id: 'v9',
    name: 'Prestige Dining Room',
    location: 'Senopati',
    city: 'Jakarta Selatan',
    category: 'party',
    capacity: 80,
    pricePerDay: 15000000,
    images: [
      'https://images.unsplash.com/photo-1769638913500-4a0b6ac4561a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcml2YXRlJTIwZGluaW5nJTIwcm9vbSUyMGVsZWdhbnR8ZW58MXx8fHwxNzc0MTgwOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Private dining room yang elegan dan intimate. Cocok untuk dinner gala, family gathering, ulang tahun eksklusif, dan engagement party. Dilengkapi dengan private chef service dan sommelier.',
    facilities: [
      'Private Chef Service',
      'Wine Cellar',
      'Luxury Table Setting',
      'Music System',
      'Sommelier Available',
      'Private Entrance',
      'Cake Display',
      'Gift Table',
      'Photo Corner'
    ],
    rating: 4.8,
    reviews: 65,
    area: 180,
    featured: false,
    availability: 'available'
  },
  {
    id: 'v10',
    name: 'Innovation Lab',
    location: 'BSD City',
    city: 'Tangerang',
    category: 'seminar',
    capacity: 120,
    pricePerDay: 12000000,
    images: [
      'https://images.unsplash.com/photo-1771911646904-61f0fc9033e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb25mZXJlbmNlJTIwaGFsbCUyMGVtcHR5fGVufDF8fHx8MTc3NDE4MDk4N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Space inovatif untuk workshop, training, dan hackathon. Dilengkapi dengan area brainstorming, breakout rooms, dan teknologi kolaborasi. Suasana casual dan creative untuk mendorong inovasi.',
    facilities: [
      'Breakout Rooms',
      'Whiteboard Walls',
      'Bean Bags',
      'Standing Desks',
      'Fast WiFi',
      'Pantry Area',
      'Power Outlets Everywhere',
      'Collaboration Software',
      'Presentation Tools'
    ],
    rating: 4.7,
    reviews: 54,
    area: 300,
    featured: false,
    availability: 'available'
  },
  {
    id: 'v11',
    name: 'Grand Convention Palace',
    location: 'Kelapa Gading',
    city: 'Jakarta Utara',
    category: 'exhibition',
    capacity: 1500,
    pricePerDay: 65000000,
    images: [
      'https://images.unsplash.com/photo-1661651579968-d956b2498e21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZW50aW9uJTIwY2VudGVyJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc0MTgwOTkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Convention center dengan multiple halls dan meeting rooms. Ideal untuk konferensi internasional, trade exhibition, dan event multi-day. Full service management team tersedia.',
    facilities: [
      'Multiple Halls',
      'Meeting Rooms',
      'Registration Center',
      'Food Court',
      'Exhibition Booths',
      'Massive Parking',
      'Event Management',
      'Security Team',
      'Medical Support'
    ],
    rating: 4.7,
    reviews: 112,
    area: 3000,
    featured: true,
    availability: 'available'
  },
  {
    id: 'v12',
    name: 'Coastal Wedding Pavilion',
    location: 'Ancol, Jakarta Utara',
    city: 'Jakarta Utara',
    category: 'wedding',
    capacity: 250,
    pricePerDay: 42000000,
    images: [
      'https://images.unsplash.com/photo-1762216444919-043cf813e4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZ2FyZGVuJTIwd2VkZGluZyUyMHZlbnVlfGVufDF8fHx8MTc3NDE4MDk4OHww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1759730840961-09faa5731a3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwYmFsbHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzQxODA5ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    description: 'Pavilion wedding dengan view laut yang menakjubkan. Kombinasi indoor-outdoor dengan sunset view yang romantic. Termasuk bridal villa untuk persiapan dan photoshoot area di tepi pantai.',
    facilities: [
      'Ocean View',
      'Sunset Ceremony Spot',
      'Bridal Villa',
      'Beach Photoshoot',
      'Indoor Backup',
      'Catering Service',
      'Wedding Planner',
      'Decoration Package',
      'Shuttle Service'
    ],
    rating: 4.9,
    reviews: 187,
    area: 600,
    featured: true,
    availability: 'limited'
  }
];

export const cities = ['Semua Kota', 'Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Utara', 'Depok', 'Tangerang'];

export const categories = [
  { value: '', label: 'Semua Kategori' },
  { value: 'wedding', label: 'Pernikahan' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'exhibition', label: 'Pameran' },
  { value: 'seminar', label: 'Seminar' },
  { value: 'party', label: 'Pesta' }
];

export const allFacilities = [
  'AC Central',
  'Sound System Premium',
  'LED Screen 10m',
  'Free WiFi 1Gbps',
  'Parking',
  'Catering Kitchen',
  'Stage Professional',
  'Video Conference',
  'Projector 4K'
];

export const testimonials = [
  {
    id: 1,
    name: 'Sarah Wijaya',
    event: 'Pernikahan',
    venue: 'Grand Ballroom Imperial',
    rating: 5,
    comment: 'Venue yang sangat mewah dan pelayanan yang luar biasa! Pernikahan kami menjadi moment yang tak terlupakan. Terima kasih untuk tim yang sangat profesional.',
    image: 'https://i.pravatar.cc/150?img=1',
    date: '15 Januari 2026'
  },
  {
    id: 2,
    name: 'David Santoso',
    event: 'Corporate Event',
    venue: 'Summit Conference Hall',
    rating: 5,
    comment: 'Fasilitas meeting yang sangat lengkap dan modern. Event launching produk kami berjalan sangat smooth. Highly recommended untuk corporate event!',
    image: 'https://i.pravatar.cc/150?img=12',
    date: '8 Februari 2026'
  },
  {
    id: 3,
    name: 'Lisa Kartika',
    event: 'Birthday Party',
    venue: 'Skyline Rooftop Lounge',
    rating: 5,
    comment: 'View yang spektakuler dan suasana yang sangat eksklusif. Tamu-tamu saya sangat impressed dengan venue ini. Worth every penny!',
    image: 'https://i.pravatar.cc/150?img=5',
    date: '22 Februari 2026'
  },
  {
    id: 4,
    name: 'Ahmad Prasetyo',
    event: 'Seminar Nasional',
    venue: 'Academic Auditorium',
    rating: 4,
    comment: 'Tempat yang nyaman untuk acara seminar. Sound system bagus dan kursi yang comfortable. Peserta seminar sangat puas dengan venue ini.',
    image: 'https://i.pravatar.cc/150?img=13',
    date: '5 Maret 2026'
  }
];
