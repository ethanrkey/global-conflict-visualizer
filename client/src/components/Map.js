import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Define custom icons for different conflict types using external PNGs
const militaryIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

const economicIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

const geopoliticalIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  shadowSize: [41, 41],
  shadowAnchor: [12, 41],
});

const Map = ({ data, filters }) => {
  // Filter data based on the year and type
  const filteredData = data.filter((conflict) => {
    const inYearRange = conflict.year >= filters.year[0] && conflict.year <= filters.year[1];
    const matchesType = filters.conflictType === 'all' || conflict.type === filters.conflictType;
    return inYearRange && matchesType;
  });

  // Function to get icon based on conflict type
  const getIconByType = (type) => {
    switch (type) {
      case 'military':
        return militaryIcon;
      case 'economic':
        return economicIcon;
      case 'geopolitical':
        return geopoliticalIcon;
      default:
        return militaryIcon; // Default to military if type is not specified
    }
  };

  return (
    <div className="map-container">
      <MapContainer center={[20, 0]} zoom={2} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredData.map((conflict) => (
          <Marker
            key={conflict.id}
            position={[conflict.lat, conflict.lon]}
            icon={getIconByType(conflict.type)}
          >
            <Popup>
              <strong>{conflict.name}</strong>
              <br />
              Year: {conflict.year}
              <br />
              Type: {conflict.type}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;