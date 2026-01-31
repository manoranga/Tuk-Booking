import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { formatDate } from '../utils/dateUtils';
import './BookingPage.css';

const BookingPage: React.FC = () => {
  const navigate = useNavigate();
  const { bookingDetails, setCustomerDetails } = useBooking();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    email: '',
  });

  if (!bookingDetails) {
    navigate('/');
    return null;
  }

  const { vehicle, startDate, endDate, totalDays, totalPrice } = bookingDetails;

  const validateForm = (): boolean => {
    const newErrors = {
      name: '',
      phone: '',
      email: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error !== '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setCustomerDetails(formData);
      navigate('/payment');
    }
  };

  const handleInputChange = (field: keyof typeof formData, value: string) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: '' });
  };

  return (
    <div className="booking-page">
      <div className="booking-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <div className="booking-content">
          <div className="booking-form-section">
            <h1>Complete Your Booking</h1>
            <p className="subtitle">Please provide your contact details</p>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-text">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+94 77 123 4567"
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <span className="error-text">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <button type="submit" className="proceed-btn">
                Proceed to Payment
              </button>
            </form>
          </div>

          <div className="booking-summary-section">
            <div className="summary-card">
              <h2>Booking Summary</h2>

              <div className="vehicle-summary">
                <img src={vehicle.images[0]} alt={vehicle.name} />
                <div className="vehicle-info">
                  <h3>{vehicle.name}</h3>
                  <span className="vehicle-type">{vehicle.type}</span>
                </div>
              </div>

              <div className="booking-details">
                <div className="detail-row">
                  <span className="label">From:</span>
                  <span className="value">{formatDate(startDate)}</span>
                </div>
                <div className="detail-row">
                  <span className="label">To:</span>
                  <span className="value">{formatDate(endDate)}</span>
                </div>
                <div className="detail-row">
                  <span className="label">Duration:</span>
                  <span className="value">{totalDays} days</span>
                </div>
                <div className="detail-row">
                  <span className="label">Price per day:</span>
                  <span className="value">Rs. {vehicle.pricePerDay.toLocaleString()}</span>
                </div>
              </div>

              <div className="total-section">
                <div className="total-row">
                  <span>Total Amount:</span>
                  <span className="total-amount">Rs. {totalPrice.toLocaleString()}</span>
                </div>
              </div>

              <div className="driver-contact">
                <h4>Driver Contact</h4>
                <p>📞 {vehicle.driverContact}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
