import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Map from './components/Map';
import './App.css';
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
    <div className="App">
      <header className="App-header">
        <h1>Global Conflict Visualizer</h1>
      </header>
      <div className="App-body">
        <Sidebar filters={filters} onFiltersChange={handleFiltersChange} />
        <Map data={mockData} filters={filters} />
      </div>
    </div>
  );
};

export default App;
