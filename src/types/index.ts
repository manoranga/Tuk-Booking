export type VehicleType = 'Tuk Tuk' | 'Bike' | 'Van' | 'SUV' | 'Car';

export type PaymentMethod = 'Card' | 'Mobile Payment' | 'Cash on Delivery';

export interface Vehicle {
  id: string;
  name: string;
  type: VehicleType;
  pricePerDay: number;
  capacity: number;
  images: string[];
  driverContact: string;
  description: string;
  features: string[];
  bookedDates: string[]; // Array of date strings in YYYY-MM-DD format
}

export interface BookingDetails {
  vehicle: Vehicle;
  startDate: string;
  endDate: string;
  totalDays: number;
  totalPrice: number;
}

export interface CustomerDetails {
  name: string;
  phone: string;
  email: string;
}

export interface BookingConfirmation {
  bookingId: string;
  vehicle: Vehicle;
  startDate: string;
  endDate: string;
  customer: CustomerDetails;
  totalPrice: number;
  paymentMethod: PaymentMethod;
  bookingDate: string;
}

export interface FilterOptions {
  vehicleType: VehicleType | 'All';
  minPrice: number;
  maxPrice: number;
  minCapacity: number;
}
