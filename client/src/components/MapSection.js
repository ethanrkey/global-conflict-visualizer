import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import Map from './Map';  // The actual map logic is imported from Map.js
import mockData from './mockData'; // Add some mock data here

const MapSection = () => {
  const filters = { year: [2000, 2024], conflictType: 'all' }; // Default filters

  return (
    <Container className="map-section">
      <Typography variant="h4" gutterBottom>
        Explore Conflict Zones
      </Typography>
      <Box className="map-frame">
        <Box className="map-container">
          <Map data={mockData} filters={filters} /> {/* Pass mock data and filters */}
        </Box>
      </Box>
    </Container>
  );
};

export default MapSection;
