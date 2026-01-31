import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockVehicles } from '../data/vehicles';
import { useBooking } from '../context/BookingContext';
import { getDaysBetween, isRangeAvailable, getTodayDate } from '../utils/dateUtils';
import './VehicleDetailsPage.css';

const VehicleDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { setBookingDetails } = useBooking();

  const vehicle = mockVehicles.find((v) => v.id === id);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [error, setError] = useState('');

  // Check if dates are valid (start before end, not in past)
  const areDatesValid = useMemo(() => {
    if (!startDate || !endDate) return null;
    if (new Date(startDate) < new Date(getTodayDate())) return false;
    if (new Date(endDate) < new Date(startDate)) return false;
    return true;
  }, [startDate, endDate]);

  // Check availability for the selected date range
  const isAvailable = useMemo(() => {
    if (!startDate || !endDate || !areDatesValid) return null;
    return isRangeAvailable(startDate, endDate, vehicle?.bookedDates || []);
  }, [startDate, endDate, areDatesValid, vehicle]);

  if (!vehicle) {
    return (
      <div className="not-found">
        <h2>Vehicle not found</h2>
        <button onClick={() => navigate('/')}>Go to Home</button>
      </div>
    );
  }

  const handleBookNow = () => {
    if (!startDate || !endDate) {
      setError('Please select both start and end dates');
      return;
    }

    if (new Date(startDate) < new Date(getTodayDate())) {
      setError('Start date cannot be in the past');
      return;
    }

    if (new Date(endDate) < new Date(startDate)) {
      setError('End date must be after start date');
      return;
    }

    if (!isAvailable) {
      setError('Vehicle is not available for selected dates');
      return;
    }

    const totalDays = getDaysBetween(startDate, endDate);
    const totalPrice = totalDays * vehicle.pricePerDay;

    setBookingDetails({
      vehicle,
      startDate,
      endDate,
      totalDays,
      totalPrice,
    });

    navigate('/booking');
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % vehicle.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + vehicle.images.length) % vehicle.images.length
    );
  };

  return (
    <div className="vehicle-details-page">
      <div className="details-container">
        <button className="back-btn" onClick={() => navigate('/')}>
          ← Back to vehicles
        </button>

        <div className="details-content">
          <div className="image-section">
            <div className="image-gallery">
              <img
                src={vehicle.images[currentImageIndex]}
                alt={vehicle.name}
                className="main-image"
              />
              {vehicle.images.length > 1 && (
                <>
                  <button className="nav-btn prev-btn" onClick={prevImage}>
                    ‹
                  </button>
                  <button className="nav-btn next-btn" onClick={nextImage}>
                    ›
                  </button>
                  <div className="image-indicators">
                    {vehicle.images.map((_, index) => (
                      <span
                        key={index}
                        className={`indicator ${
                          index === currentImageIndex ? 'active' : ''
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="info-section">
            <div className="vehicle-header">
              <div>
                <h1>{vehicle.name}</h1>
                <span className="type-badge">{vehicle.type}</span>
              </div>
              <div className="price-display">
                <span className="price">Rs. {vehicle.pricePerDay.toLocaleString()}</span>
                <span className="per-day">per day</span>
              </div>
            </div>

            <div className="vehicle-details">
              <div className="detail-item">
                <span className="icon">👥</span>
                <span>{vehicle.capacity} Seats</span>
              </div>
              <div className="detail-item">
                <span className="icon">📞</span>
                <span>{vehicle.driverContact}</span>
              </div>
            </div>

            <div className="description">
              <h3>About this vehicle</h3>
              <p>{vehicle.description}</p>
            </div>

            <div className="features">
              <h3>Features</h3>
              <ul className="features-list">
                {vehicle.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            <div className="booking-section">
              <h3>Book this vehicle</h3>
              <div className="date-inputs">
                <div className="date-field">
                  <label>From</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => {
                      setStartDate(e.target.value);
                      setError('');
                    }}
                    min={getTodayDate()}
                  />
                </div>
                <div className="date-field">
                  <label>To</label>
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => {
                      setEndDate(e.target.value);
                      setError('');
                    }}
                    min={startDate || getTodayDate()}
                  />
                </div>
              </div>

              {/* Availability Status - Shows immediately when both dates are selected */}
              {startDate && endDate && areDatesValid !== null && (
                <div className={`availability-status ${isAvailable ? 'available' : 'unavailable'}`}>
                  {isAvailable ? (
                    <>
                      <span className="status-icon">✓</span>
                      <div className="status-content">
                        <strong>Available</strong>
                        <p>This vehicle is available for your selected dates</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <span className="status-icon">✕</span>
                      <div className="status-content">
                        <strong>Not Available</strong>
                        <p>This vehicle is already booked for some dates in your selected range</p>
                      </div>
                    </>
                  )}
                </div>
              )}

              {/* Date Validation Errors */}
              {startDate && endDate && areDatesValid === false && (
                <div className="error-message">
                  {new Date(startDate) < new Date(getTodayDate())
                    ? '⚠️ Start date cannot be in the past'
                    : '⚠️ End date must be after start date'}
                </div>
              )}

              {/* Booking Summary - Only show if dates are valid and available */}
              {startDate && endDate && areDatesValid && isAvailable && (
                <div className="booking-summary">
                  <div className="summary-row">
                    <span>Duration:</span>
                    <span>{getDaysBetween(startDate, endDate)} days</span>
                  </div>
                  <div className="summary-row">
                    <span>Price per day:</span>
                    <span>Rs. {vehicle.pricePerDay.toLocaleString()}</span>
                  </div>
                  <div className="summary-row total">
                    <span>Total Price:</span>
                    <span>
                      Rs.{' '}
                      {(
                        getDaysBetween(startDate, endDate) * vehicle.pricePerDay
                      ).toLocaleString()}
                    </span>
                  </div>
                </div>
              )}

              {error && <div className="error-message">{error}</div>}

              <button
                className="book-now-btn"
                onClick={handleBookNow}
                disabled={!startDate || !endDate || !areDatesValid || !isAvailable}
              >
                {!startDate || !endDate 
                  ? 'Select Dates to Continue'
                  : !areDatesValid
                  ? 'Invalid Date Selection'
                  : !isAvailable
                  ? 'Not Available'
                  : 'Book Now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleDetailsPage;
