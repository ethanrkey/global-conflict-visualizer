import React from 'react';

const Sidebar = ({ filters, onFiltersChange }) => {
  const handleYearChange = (e) => {
    const value = [parseInt(e.target.value, 10), filters.year[1]];
    onFiltersChange({ ...filters, year: value });
  };

  const handleTypeChange = (e) => {
    onFiltersChange({ ...filters, conflictType: e.target.value });
  };

  return (
    <div className="sidebar">
      <h3>Filters</h3>
      <label>Conflict Type:</label>
      <select value={filters.conflictType} onChange={handleTypeChange}>
        <option value="all">All</option>
        <option value="military">Military</option>
        <option value="economic">Economic</option>
        <option value="geopolitical">Geopolitical</option>
      </select>

      <label>Year Range:</label>
      <input
        type="range"
        min="2000"
        max="2024"
        value={filters.year[0]}
        onChange={handleYearChange}
      />
      <span>{filters.year[0]} - {filters.year[1]}</span>
    </div>
  );
};

export default Sidebar;
