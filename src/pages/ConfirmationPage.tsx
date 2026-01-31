import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { formatDate } from '../utils/dateUtils';
import './ConfirmationPage.css';

const ConfirmationPage: React.FC = () => {
  const navigate = useNavigate();
  const { bookingConfirmation, clearBooking } = useBooking();

  if (!bookingConfirmation) {
    navigate('/');
    return null;
  }

  const {
    bookingId,
    vehicle,
    startDate,
    endDate,
    customer,
    totalPrice,
    paymentMethod,
  } = bookingConfirmation;

  const handleGoHome = () => {
    clearBooking();
    navigate('/');
  };

  return (
    <div className="confirmation-page">
      <div className="confirmation-container">
        <div className="success-animation">
          <div className="checkmark-circle">
            <div className="checkmark">✓</div>
          </div>
        </div>

        <h1 className="success-title">Booking Confirmed!</h1>
        <p className="success-message">
          Your vehicle has been successfully booked. We've sent a confirmation email to{' '}
          <strong>{customer.email}</strong>
        </p>

        <div className="confirmation-card">
          <div className="booking-id-section">
            <span className="label">Booking ID</span>
            <span className="booking-id">{bookingId}</span>
          </div>

          <div className="confirmation-details">
            <div className="vehicle-section">
              <img src={vehicle.images[0]} alt={vehicle.name} />
              <div className="vehicle-info">
                <h2>{vehicle.name}</h2>
                <span className="type-badge">{vehicle.type}</span>
              </div>
            </div>

            <div className="details-grid">
              <div className="detail-group">
                <h3>Booking Dates</h3>
                <div className="detail-item">
                  <span className="icon">📅</span>
                  <div>
                    <div className="detail-label">From</div>
                    <div className="detail-value">{formatDate(startDate)}</div>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="icon">📅</span>
                  <div>
                    <div className="detail-label">To</div>
                    <div className="detail-value">{formatDate(endDate)}</div>
                  </div>
                </div>
              </div>

              <div className="detail-group">
                <h3>Contact Information</h3>
                <div className="detail-item">
                  <span className="icon">👤</span>
                  <div>
                    <div className="detail-label">Name</div>
                    <div className="detail-value">{customer.name}</div>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="icon">📞</span>
                  <div>
                    <div className="detail-label">Phone</div>
                    <div className="detail-value">{customer.phone}</div>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="icon">✉️</span>
                  <div>
                    <div className="detail-label">Email</div>
                    <div className="detail-value">{customer.email}</div>
                  </div>
                </div>
              </div>

              <div className="detail-group">
                <h3>Driver Contact</h3>
                <div className="detail-item">
                  <span className="icon">🚗</span>
                  <div>
                    <div className="detail-label">Contact Number</div>
                    <div className="detail-value">{vehicle.driverContact}</div>
                  </div>
                </div>
              </div>

              <div className="detail-group">
                <h3>Payment Details</h3>
                <div className="detail-item">
                  <span className="icon">💳</span>
                  <div>
                    <div className="detail-label">Payment Method</div>
                    <div className="detail-value">{paymentMethod}</div>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="icon">💰</span>
                  <div>
                    <div className="detail-label">Total Amount</div>
                    <div className="detail-value total-price">
                      Rs. {totalPrice.toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="important-note">
            <h4>📋 Important Information</h4>
            <ul>
              <li>Please save your Booking ID for future reference</li>
              <li>Contact the driver 24 hours before your booking date</li>
              <li>Carry a valid ID proof for verification</li>
              <li>
                {paymentMethod === 'Cash on Delivery'
                  ? 'Have the exact amount ready in cash'
                  : 'Your payment has been processed successfully'}
              </li>
            </ul>
          </div>

          <button className="home-btn" onClick={handleGoHome}>
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
