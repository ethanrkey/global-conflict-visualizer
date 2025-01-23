import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const dummyConflicts = [
  {
    name: "Dummy Conflict 1",
    year: "1950",
    location: [51.505, -0.09], // London
    casualties: 1000,
  },
  {
    name: "Dummy Conflict 2",
    year: "1973",
    location: [40.7128, -74.006], // New York
    casualties: 5000,
  },
  {
    name: "Dummy Conflict 3",
    year: "2001",
    location: [34.0522, -118.2437], // Los Angeles
    casualties: 20000,
  },
];

const ConflictMap = () => {
  return (
    <MapContainer style={{ height: "600px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      
      {dummyConflicts.map((conflict, index) => (
        <Marker key={index} position={conflict.location}>
          <Popup>
            <strong>{conflict.name}</strong><br />
            Year: {conflict.year}<br />
            Casualties: {conflict.casualties}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ConflictMap;
