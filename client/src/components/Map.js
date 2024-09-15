
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Map = ({ data, filters }) => {
  // Filter data based on the year and type
  const filteredData = data.filter((conflict) => {
    const inYearRange = conflict.year >= filters.year[0] && conflict.year <= filters.year[1];
    const matchesType = filters.conflictType === 'all' || conflict.type === filters.conflictType;
    return inYearRange && matchesType;
  });

  return (
    <div className="map-container">
      <MapContainer center={[20, 0]} zoom={2} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {filteredData.map((conflict) => (
          <Marker key={conflict.id} position={[conflict.lat, conflict.lon]}>
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
