import React, { useState, useMemo } from 'react';
import { mockVehicles } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import type { FilterOptions } from '../types';
import './HomePage.css';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    vehicleType: 'All',
    minPrice: 0,
    maxPrice: 50000,
    minCapacity: 0,
  });

  const filteredVehicles = useMemo(() => {
    return mockVehicles.filter((vehicle) => {
      // Search filter
      const matchesSearch =
        vehicle.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        vehicle.type.toLowerCase().includes(searchQuery.toLowerCase());

      // Type filter
      const matchesType =
        filters.vehicleType === 'All' || vehicle.type === filters.vehicleType;

      // Price filter
      const matchesPrice =
        vehicle.pricePerDay >= filters.minPrice &&
        vehicle.pricePerDay <= filters.maxPrice;

      // Capacity filter
      const matchesCapacity = vehicle.capacity >= filters.minCapacity;

      return matchesSearch && matchesType && matchesPrice && matchesCapacity;
    });
  }, [searchQuery, filters]);

  return (
    <div className="home-page">
      <header className="home-header">
        <div className="header-content">
          <h1 className="logo">🚗 Tuk-Booking</h1>
          <p className="tagline">Your Journey, Our Wheels</p>
        </div>
      </header>

      <div className="hero-section">
        <h2 className="hero-title">Find Your Perfect Ride</h2>
        <p className="hero-subtitle">
          Choose from Tuk Tuks, Bikes, Vans, SUVs, and Cars
        </p>
        <SearchBar
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder="Search by vehicle name or type..."
        />
      </div>

      <div className="main-content">
        <aside className="sidebar">
          <FilterPanel filters={filters} onFilterChange={setFilters} />
        </aside>

        <div className="vehicles-section">
          <div className="section-header">
            <h3>
              {filteredVehicles.length} Vehicle{filteredVehicles.length !== 1 ? 's' : ''} Available
            </h3>
          </div>

          {filteredVehicles.length === 0 ? (
            <div className="no-results">
              <p>😔 No vehicles found matching your criteria</p>
              <button
                className="reset-filters-btn"
                onClick={() => {
                  setSearchQuery('');
                  setFilters({
                    vehicleType: 'All',
                    minPrice: 0,
                    maxPrice: 50000,
                    minCapacity: 0,
                  });
                }}
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="vehicles-grid">
              {filteredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
