import React, { useState, useRef } from 'react';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import './App.css';
import { AppBar, Toolbar, Typography, Box, Tabs, Tab, Container } from '@mui/material';
import mockData from './mockData';

const App = () => {
  const [filters, setFilters] = useState({
    year: [2000, 2024],
    conflictType: 'all',
  });

  // Refs for scrolling between sections
  const aboutRef = useRef(null);
  const mapRef = useRef(null);
  const sourcesRef = useRef(null);

  // Function to handle filter updates
  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  // Scroll to section
  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box className="App">
      {/* AppBar with Navigation Tabs */}
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Global Conflict Visualizer
            </Typography>
            <Tabs>
              <Tab label="About" onClick={() => handleScroll(aboutRef)} />
              <Tab label="View Tool" onClick={() => handleScroll(mapRef)} />
              <Tab label="Sources" onClick={() => handleScroll(sourcesRef)} />
            </Tabs>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Scrollable Sections */}
      <div ref={aboutRef}>
        <section className="about-section">
          <Typography variant="h4" gutterBottom>
            About the Global Conflict Visualization Tool
          </Typography>
          <Typography variant="body1">
            This tool provides an interactive map of global conflicts from different regions of the world.
            You can filter conflicts by type, year, and region, making it easier to understand the historical
            and geopolitical landscape. Scroll down to explore conflict zones and access data sources used for this tool.
          </Typography>
        </section>
      </div>

      <div ref={mapRef}>
        <section className="map-section">
          <Typography variant="h4" gutterBottom>
            Explore Conflict Zones
          </Typography>
          <Box className="App-body" display="flex">
            <Sidebar filters={filters} onFiltersChange={handleFiltersChange} />
            <Map data={mockData} filters={filters} />
          </Box>
        </section>
      </div>

      <div ref={sourcesRef}>
        <section className="sources-section">
          <Typography variant="h4" gutterBottom>
            Data Sources
          </Typography>
          <ul>
            <li>Source 1: Data from XYZ Organization</li>
            <li>Source 2: Conflict data from ABC Foundation</li>
          </ul>
        </section>
      </div>
    </Box>
  );
};

export default App;
