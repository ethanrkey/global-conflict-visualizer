import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import './App.css';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import mockData from './mockData';

const App = () => {
  const [filters, setFilters] = useState({
    year: [2000, 2024],
    conflictType: 'all',
  });

  // Function to handle filter updates
  const handleFiltersChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <Box className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Global Conflict Visualizer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className="App-body" display="flex">
        <Sidebar filters={filters} onFiltersChange={handleFiltersChange} />
        <Map data={mockData} filters={filters} />
      </Box>
    </Box>
  );
};

export default App;
