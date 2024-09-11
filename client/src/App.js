import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// MapExample component definition
const MapExample = () => {
    const position = [51.505, -0.09]; // Example position: latitude and longitude

    return (
        <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%' }}>
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
    );
};

// App component that includes the MapExample
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Global Conflict Visualizer</h1>
      </header>
      <MapExample />  // Including the MapExample component in the App's render output
    </div>
  );
}

export default App;
