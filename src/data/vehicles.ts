import type { Vehicle } from '../types';

export const mockVehicles: Vehicle[] = [
  {
    id: 'v1',
    name: 'Classic Tuk Tuk',
    type: 'Tuk Tuk',
    pricePerDay: 3500,
    capacity: 3,
    images: [
      'https://images.unsplash.com/photo-1590642916589-592764770daf?w=800&q=80',
      'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80'
    ],
    driverContact: '+94 77 123 4567',
    description: 'Authentic Sri Lankan tuk tuk experience. Perfect for short trips around the city and exploring narrow streets.',
    features: ['Air conditioning', 'GPS navigation', 'Bluetooth speaker', 'Phone charger'],
    bookedDates: ['2026-02-10', '2026-02-11', '2026-02-15']
  },
  {
    id: 'v2',
    name: 'Premium Tuk Tuk',
    type: 'Tuk Tuk',
    pricePerDay: 4500,
    capacity: 3,
    images: [
      'https://images.unsplash.com/photo-1585928055429-6484fb1397e0?w=800&q=80',
      'https://images.unsplash.com/photo-1590642916589-592764770daf?w=800&q=80'
    ],
    driverContact: '+94 77 234 5678',
    description: 'Upgraded tuk tuk with extra comfort and modern amenities. Great for tourists.',
    features: ['Leather seats', 'AC', 'WiFi', 'Water bottles', 'Phone charger'],
    bookedDates: ['2026-02-08', '2026-02-09']
  },
  {
    id: 'v3',
    name: 'Honda CB 125',
    type: 'Bike',
    pricePerDay: 2500,
    capacity: 2,
    images: [
      'https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800&q=80',
      'https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=800&q=80'
    ],
    driverContact: '+94 77 345 6789',
    description: 'Reliable and fuel-efficient bike perfect for couples or solo travelers exploring the island.',
    features: ['Helmet included', 'GPS mount', 'Storage box', 'Full insurance'],
    bookedDates: ['2026-02-12', '2026-02-13', '2026-02-14']
  },
  {
    id: 'v4',
    name: 'Yamaha R15',
    type: 'Bike',
    pricePerDay: 3500,
    capacity: 2,
    images: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=800&q=80',
      'https://images.unsplash.com/photo-1591048548974-b73c4c9d79e7?w=800&q=80'
    ],
    driverContact: '+94 77 456 7890',
    description: 'Sporty bike for adventure enthusiasts. Great power and handling for mountain roads.',
    features: ['2 helmets', 'Riding gloves', 'GPS', 'Rain covers', 'Full tank'],
    bookedDates: []
  },
  {
    id: 'v5',
    name: 'Toyota KDH Van',
    type: 'Van',
    pricePerDay: 8500,
    capacity: 12,
    images: [
      'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&q=80',
      'https://images.unsplash.com/photo-1562519819-019d3d5d2f4e?w=800&q=80'
    ],
    driverContact: '+94 77 567 8901',
    description: 'Spacious van perfect for group travels and family trips. Comfortable seating for up to 12 passengers.',
    features: ['AC', 'Music system', 'Reclining seats', 'Luggage space', 'USB charging ports'],
    bookedDates: ['2026-02-07', '2026-02-08', '2026-02-09']
  },
  {
    id: 'v6',
    name: 'Luxury Travel Van',
    type: 'Van',
    pricePerDay: 12000,
    capacity: 10,
    images: [
      'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80',
      'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800&q=80'
    ],
    driverContact: '+94 77 678 9012',
    description: 'Premium van with leather seats and extra legroom. Perfect for long-distance comfortable travel.',
    features: ['Leather seats', 'WiFi', 'TV screens', 'Mini fridge', 'Premium sound system'],
    bookedDates: []
  },
  {
    id: 'v7',
    name: 'Toyota Fortuner',
    type: 'SUV',
    pricePerDay: 15000,
    capacity: 7,
    images: [
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80',
      'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&q=80'
    ],
    driverContact: '+94 77 789 0123',
    description: 'Powerful SUV perfect for rough terrain and safari adventures. Great for families.',
    features: ['4WD', 'Leather interior', 'Sunroof', 'GPS', 'Bluetooth', 'Reverse camera'],
    bookedDates: ['2026-02-05', '2026-02-06']
  },
  {
    id: 'v8',
    name: 'Mitsubishi Montero',
    type: 'SUV',
    pricePerDay: 18000,
    capacity: 7,
    images: [
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=800&q=80',
      'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&q=80'
    ],
    driverContact: '+94 77 890 1234',
    description: 'Premium SUV with superior comfort and off-road capabilities. Ideal for luxury travel.',
    features: ['Premium leather', 'Climate control', '4WD', 'Premium audio', 'Sunroof', 'Hill assist'],
    bookedDates: []
  },
  {
    id: 'v9',
    name: 'Honda Civic',
    type: 'Car',
    pricePerDay: 6500,
    capacity: 5,
    images: [
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80',
      'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80'
    ],
    driverContact: '+94 77 901 2345',
    description: 'Comfortable sedan perfect for city driving and highway trips. Great fuel economy.',
    features: ['AC', 'Power windows', 'Bluetooth', 'USB ports', 'Cruise control'],
    bookedDates: ['2026-02-03', '2026-02-04']
  },
  {
    id: 'v10',
    name: 'Toyota Aqua Hybrid',
    type: 'Car',
    pricePerDay: 5500,
    capacity: 5,
    images: [
      'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800&q=80',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800&q=80'
    ],
    driverContact: '+94 77 012 3456',
    description: 'Eco-friendly hybrid car with excellent fuel efficiency. Perfect for budget-conscious travelers.',
    features: ['Hybrid engine', 'AC', 'GPS', 'Backup camera', 'Fuel efficient'],
    bookedDates: []
  },
  {
    id: 'v11',
    name: 'Toyota Prius',
    type: 'Car',
    pricePerDay: 7000,
    capacity: 5,
    images: [
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&q=80',
      'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800&q=80'
    ],
    driverContact: '+94 77 123 4560',
    description: 'Premium hybrid sedan with advanced features. Smooth and quiet ride for business travelers.',
    features: ['Hybrid', 'Leather seats', 'Advanced safety', 'Touch screen', 'Lane assist'],
    bookedDates: []
  },
  {
    id: 'v12',
    name: 'BMW 3 Series',
    type: 'Car',
    pricePerDay: 25000,
    capacity: 5,
    images: [
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&q=80'
    ],
    driverContact: '+94 77 234 5601',
    description: 'Luxury sedan for special occasions and executive travel. Premium comfort and performance.',
    features: ['Luxury interior', 'Premium sound', 'Heated seats', 'Panoramic roof', 'Advanced tech'],
    bookedDates: ['2026-02-20', '2026-02-21', '2026-02-22']
  }
];
