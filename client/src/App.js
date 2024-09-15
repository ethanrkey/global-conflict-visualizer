import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './App.css'; // Import the CSS file

// MapExample component definition with adjusted map size
const MapExample = () => {
    const position = [51.505, -0.09]; // Example position: latitude and longitude

    return (
        <div className="map-wrapper">
            <MapContainer center={position} zoom={13} className="map-container">
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={position}>
                    <Popup>
                        A simple popup example.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

// App component that includes the MapExample
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Global Conflict Visualizer</h1>
      </header>
      <MapExample /> {/* Include the map */}
    </div>
  );
}

export default App;
