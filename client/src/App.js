import React from 'react';
import { AppBar, Tabs, Tab, Box, Typography, Container } from '@mui/material';
import { useRef } from 'react';
import About from './components/About';
import MapSection from './components/MapSection';
import Sources from './components/Sources';

const App = () => {
  const aboutRef = useRef(null);
  const mapRef = useRef(null);
  const sourcesRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Header and Tabs */}
      <AppBar position="static" color="primary">
        <Container>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant="h6">Global Conflict Visualization Tool</Typography>
            <Tabs>
              <Tab label="About" onClick={() => handleScroll(aboutRef)} />
              <Tab label="View Tool" onClick={() => handleScroll(mapRef)} />
              <Tab label="Sources" onClick={() => handleScroll(sourcesRef)} />
            </Tabs>
          </Box>
        </Container>
      </AppBar>

      {/* Scrollable Sections */}
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={mapRef}>
        <MapSection />
      </div>
      <div ref={sourcesRef}>
        <Sources />
      </div>
    </div>
  );
};

export default App;
