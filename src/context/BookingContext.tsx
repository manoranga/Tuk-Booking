import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { BookingDetails, CustomerDetails, PaymentMethod, BookingConfirmation } from '../types';

interface BookingContextType {
  bookingDetails: BookingDetails | null;
  setBookingDetails: (details: BookingDetails | null) => void;
  customerDetails: CustomerDetails | null;
  setCustomerDetails: (details: CustomerDetails | null) => void;
  paymentMethod: PaymentMethod | null;
  setPaymentMethod: (method: PaymentMethod | null) => void;
  bookingConfirmation: BookingConfirmation | null;
  setBookingConfirmation: (confirmation: BookingConfirmation | null) => void;
  clearBooking: () => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [bookingDetails, setBookingDetails] = useState<BookingDetails | null>(null);
  const [customerDetails, setCustomerDetails] = useState<CustomerDetails | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>(null);
  const [bookingConfirmation, setBookingConfirmation] = useState<BookingConfirmation | null>(null);

  const clearBooking = () => {
    setBookingDetails(null);
    setCustomerDetails(null);
    setPaymentMethod(null);
    setBookingConfirmation(null);
  };

  return (
    <BookingContext.Provider
      value={{
        bookingDetails,
        setBookingDetails,
        customerDetails,
        setCustomerDetails,
        paymentMethod,
        setPaymentMethod,
        bookingConfirmation,
        setBookingConfirmation,
        clearBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
