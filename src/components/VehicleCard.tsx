import React from 'react';
import type { Vehicle } from '../types';
import { useNavigate } from 'react-router-dom';
import './VehicleCard.css';

interface VehicleCardProps {
  vehicle: Vehicle;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/vehicle/${vehicle.id}`);
  };

  return (
    <div className="vehicle-card">
      <div className="vehicle-card-image">
        <img src={vehicle.images[0]} alt={vehicle.name} />
        <span className="vehicle-type-badge">{vehicle.type}</span>
      </div>
      <div className="vehicle-card-content">
        <h3 className="vehicle-name">{vehicle.name}</h3>
        <div className="vehicle-info">
          <span className="capacity">👥 {vehicle.capacity} seats</span>
          <span className="price">Rs. {vehicle.pricePerDay.toLocaleString()}/day</span>
        </div>
        <button className="btn-view-details" onClick={handleViewDetails}>
          View Details
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
