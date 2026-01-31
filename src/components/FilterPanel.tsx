import React from 'react';
import type { VehicleType, FilterOptions } from '../types';
import './FilterPanel.css';

interface FilterPanelProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
}

const vehicleTypes: (VehicleType | 'All')[] = ['All', 'Tuk Tuk', 'Bike', 'Van', 'SUV', 'Car'];

const FilterPanel: React.FC<FilterPanelProps> = ({ filters, onFilterChange }) => {
  const handleVehicleTypeChange = (type: VehicleType | 'All') => {
    onFilterChange({ ...filters, vehicleType: type });
  };

  const handlePriceChange = (min: number, max: number) => {
    onFilterChange({ ...filters, minPrice: min, maxPrice: max });
  };

  const handleCapacityChange = (capacity: number) => {
    onFilterChange({ ...filters, minCapacity: capacity });
  };

  const resetFilters = () => {
    onFilterChange({
      vehicleType: 'All',
      minPrice: 0,
      maxPrice: 50000,
      minCapacity: 0,
    });
  };

  return (
    <div className="filter-panel">
      <div className="filter-header">
        <h3>Filters</h3>
        <button className="reset-btn" onClick={resetFilters}>
          Reset
        </button>
      </div>

      <div className="filter-section">
        <label className="filter-label">Vehicle Type</label>
        <div className="vehicle-type-pills">
          {vehicleTypes.map((type) => (
            <button
              key={type}
              className={`pill ${filters.vehicleType === type ? 'active' : ''}`}
              onClick={() => handleVehicleTypeChange(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-section">
        <label className="filter-label">Price Range (per day)</label>
        <div className="price-inputs">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice || ''}
            onChange={(e) =>
              handlePriceChange(Number(e.target.value), filters.maxPrice)
            }
            className="price-input"
          />
          <span className="price-separator">-</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice || ''}
            onChange={(e) =>
              handlePriceChange(filters.minPrice, Number(e.target.value))
            }
            className="price-input"
          />
        </div>
      </div>

      <div className="filter-section">
        <label className="filter-label">Minimum Capacity</label>
        <select
          value={filters.minCapacity}
          onChange={(e) => handleCapacityChange(Number(e.target.value))}
          className="capacity-select"
        >
          <option value={0}>Any</option>
          <option value={2}>2+ seats</option>
          <option value={3}>3+ seats</option>
          <option value={5}>5+ seats</option>
          <option value={7}>7+ seats</option>
          <option value={10}>10+ seats</option>
        </select>
      </div>
    </div>
  );
};

export default FilterPanel;
