import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import type { PaymentMethod } from '../types';
import { generateBookingId } from '../utils/dateUtils';
import './PaymentPage.css';

const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  const {
    bookingDetails,
    customerDetails,
    setPaymentMethod,
    setBookingConfirmation,
  } = useBooking();

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  if (!bookingDetails || !customerDetails) {
    navigate('/');
    return null;
  }

  const { vehicle, totalPrice, startDate, endDate } = bookingDetails;

  const handlePayment = async () => {
    if (!selectedMethod) return;

    setIsProcessing(true);
    setPaymentMethod(selectedMethod);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const bookingId = generateBookingId();
    const confirmation = {
      bookingId,
      vehicle,
      startDate,
      endDate,
      customer: customerDetails,
      totalPrice,
      paymentMethod: selectedMethod,
      bookingDate: new Date().toISOString(),
    };

    setBookingConfirmation(confirmation);
    navigate('/confirmation');
  };

  return (
    <div className="payment-page">
      <div className="payment-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="payment-content">
          <div className="payment-section">
            <h1>Payment</h1>
            <p className="subtitle">Choose your payment method</p>

            <div className="payment-methods">
              <div
                className={`payment-option ${
                  selectedMethod === 'Card' ? 'selected' : ''
                }`}
                onClick={() => setSelectedMethod('Card')}
              >
                <div className="option-header">
                  <div className="radio-btn">
                    {selectedMethod === 'Card' && <div className="radio-inner" />}
                  </div>
                  <div className="option-info">
                    <h3>💳 Credit / Debit Card</h3>
                    <p>Pay securely with your card</p>
                  </div>
                </div>
              </div>

              <div
                className={`payment-option ${
                  selectedMethod === 'Mobile Payment' ? 'selected' : ''
                }`}
                onClick={() => setSelectedMethod('Mobile Payment')}
              >
                <div className="option-header">
                  <div className="radio-btn">
                    {selectedMethod === 'Mobile Payment' && (
                      <div className="radio-inner" />
                    )}
                  </div>
                  <div className="option-info">
                    <h3>📱 Mobile Payment</h3>
                    <p>Pay using mobile wallet</p>
                  </div>
                </div>
              </div>

              <div
                className={`payment-option ${
                  selectedMethod === 'Cash on Delivery' ? 'selected' : ''
                }`}
                onClick={() => setSelectedMethod('Cash on Delivery')}
              >
                <div className="option-header">
                  <div className="radio-btn">
                    {selectedMethod === 'Cash on Delivery' && (
                      <div className="radio-inner" />
                    )}
                  </div>
                  <div className="option-info">
                    <h3>💵 Cash on Delivery</h3>
                    <p>Pay in cash when you receive the vehicle</p>
                  </div>
                </div>
              </div>
            </div>

            <button
              className="pay-btn"
              onClick={handlePayment}
              disabled={!selectedMethod || isProcessing}
            >
              {isProcessing ? 'Processing...' : `Pay Now - Rs. ${totalPrice.toLocaleString()}`}
            </button>
          </div>

          <div className="summary-section">
            <div className="summary-card">
              <h2>Payment Summary</h2>

              <div className="vehicle-info-card">
                <img src={vehicle.images[0]} alt={vehicle.name} />
                <div>
                  <h3>{vehicle.name}</h3>
                  <span className="type-badge">{vehicle.type}</span>
                </div>
              </div>

              <div className="customer-info">
                <h3>Customer Details</h3>
                <div className="info-row">
                  <span>Name:</span>
                  <span>{customerDetails.name}</span>
                </div>
                <div className="info-row">
                  <span>Phone:</span>
                  <span>{customerDetails.phone}</span>
                </div>
                <div className="info-row">
                  <span>Email:</span>
                  <span>{customerDetails.email}</span>
                </div>
              </div>

              <div className="price-breakdown">
                <h3>Price Breakdown</h3>
                <div className="breakdown-row">
                  <span>Base Price:</span>
                  <span>Rs. {vehicle.pricePerDay.toLocaleString()}/day</span>
                </div>
                <div className="breakdown-row">
                  <span>Duration:</span>
                  <span>{bookingDetails.totalDays} days</span>
                </div>
                <div className="breakdown-row total">
                  <span>Total Amount:</span>
                  <span>Rs. {totalPrice.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
