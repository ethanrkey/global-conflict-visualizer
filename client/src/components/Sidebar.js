import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, Slider, Typography, Box } from '@mui/material';

const Sidebar = ({ filters, onFiltersChange }) => {
  const handleYearChange = (event, newValue) => {
    onFiltersChange({ ...filters, year: newValue });
  };

  const handleTypeChange = (event) => {
    onFiltersChange({ ...filters, conflictType: event.target.value });
  };

  return (
    <Box className="sidebar" sx={{ width: 250, padding: 2 }}>
      <Typography variant="h6" gutterBottom>
        Filters
      </Typography>

      {/* Conflict Type Dropdown */}
      <FormControl fullWidth margin="normal">
        <InputLabel id="conflict-type-label">Conflict Type</InputLabel>
        <Select
          labelId="conflict-type-label"
          value={filters.conflictType}
          onChange={handleTypeChange}
          label="Conflict Type"
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="military">Military</MenuItem>
          <MenuItem value="economic">Economic</MenuItem>
          <MenuItem value="geopolitical">Geopolitical</MenuItem>
        </Select>
      </FormControl>

      {/* Year Range Slider */}
      <Typography gutterBottom>Year Range</Typography>
      <Slider
        value={filters.year}
        onChange={handleYearChange}
        valueLabelDisplay="auto"
        min={2000}
        max={2024}
        marks={[
          { value: 2000, label: '2000' },
          { value: 2024, label: '2024' },
        ]}
      />
    </Box>
  );
};

export default Sidebar;