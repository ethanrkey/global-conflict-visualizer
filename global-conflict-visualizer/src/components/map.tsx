import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngTuple } from "leaflet";
import '../index.css'

/*

fields for GeoJSON
- conflict name
- conflict date range
- conflict type
- nations involved
- location (nation capitol)
- # of casualties

features
- filter: timeline slider, conflict type, countries involved
- have # of conflicts involved in for given filter on each point/pin
- highlight all countries involved when looking at a certain conflict
- link to learn more about each conflict

STEPS:
- 

*/

interface Conflict {
  conflict_id: string; // Unique identifier
  conflict_name: string; // Name of the conflict
  start_year: number;
  end_year?: number | null;
  locations: [string, LatLngTuple][]; // Array of [Country, Coordinates] pairs
  casualties: number;
  conflict_type: string; // Interstate War, Civil War, etc.
  source: "UCDP" | "COW";
}

interface MapProps {
    yearRange: [number, number];
    selectedCountries: string[];
    selectedType: string;
}

const conflicts: Conflict[] = [
{
    conflict_id: "russia-ukraine-war",
    conflict_name: "Russia-Ukraine War",
    start_year: 2022,
    end_year: null,
    locations: [
    ["Russia", [55.7558, 37.6173]], // Moscow
    ["Ukraine", [50.4501, 30.5234]] // Kyiv
    ],
    casualties: 120000,
    conflict_type: "Interstate War",
    source: "UCDP"
},
{
    conflict_id: "gulf-war",
    conflict_name: "Gulf War",
    start_year: 1990,
    end_year: 1991,
    locations: [
    ["United States", [38.9072, -77.0369]], // Washington, D.C.
    ["Iraq", [33.3152, 44.3661]], // Baghdad
    ["Kuwait", [29.3759, 47.9774]] // Kuwait City
    ],
    casualties: 25000,
    conflict_type: "Interstate War",
    source: "COW"
},
{
    conflict_id: "syrian-civil-war",
    conflict_name: "Syrian Civil War",
    start_year: 2011,
    end_year: null,
    locations: [
    ["Syria", [33.5138, 36.2765]], // Damascus
    ["Turkey", [39.9208, 32.8541]] // Ankara (refugee crisis)
    ],
    casualties: 500000,
    conflict_type: "Civil War",
    source: "UCDP"
},
{
    conflict_id: "korean-war",
    conflict_name: "Korean War",
    start_year: 1950,
    end_year: 1953,
    locations: [
    ["North Korea", [39.0392, 125.7625]], // Pyongyang
    ["South Korea", [37.5665, 126.9780]], // Seoul
    ["United States", [38.9072, -77.0369]], // Washington, D.C.
    ["China", [39.9042, 116.4074]] // Beijing
    ],
    casualties: 2500000,
    conflict_type: "Interstate War",
    source: "COW"
},
{
    conflict_id: "vietnam-war",
    conflict_name: "Vietnam War",
    start_year: 1955,
    end_year: 1975,
    locations: [
    ["Vietnam", [21.0285, 105.8544]], // Hanoi
    ["United States", [38.9072, -77.0369]], // Washington, D.C.
    ["China", [39.9042, 116.4074]], // Beijing
    ["Soviet Union", [55.7558, 37.6173]] // Moscow (USSR)
    ],
    casualties: 3000000,
    conflict_type: "Interstate War",
    source: "COW"
},
{
    conflict_id: "bosnian-war",
    conflict_name: "Bosnian War",
    start_year: 1992,
    end_year: 1995,
    locations: [
    ["Bosnia and Herzegovina", [43.8563, 18.4131]], // Sarajevo
    ["Serbia", [44.7866, 20.4489]], // Belgrade
    ["Croatia", [45.8150, 15.9819]] // Zagreb
    ],
    casualties: 100000,
    conflict_type: "Civil War",
    source: "UCDP"
},
{
    conflict_id: "iran-iraq-war",
    conflict_name: "Iran-Iraq War",
    start_year: 1980,
    end_year: 1988,
    locations: [
    ["Iran", [35.6892, 51.3890]], // Tehran
    ["Iraq", [33.3152, 44.3661]] // Baghdad
    ],
    casualties: 500000,
    conflict_type: "Interstate War",
    source: "COW"
},
{
    conflict_id: "six-day-war",
    conflict_name: "Six-Day War",
    start_year: 1967,
    end_year: 1967,
    locations: [
    ["Israel", [31.7683, 35.2137]], // Jerusalem
    ["Egypt", [30.0444, 31.2357]], // Cairo
    ["Jordan", [31.9539, 35.9106]], // Amman
    ["Syria", [33.5138, 36.2765]], // Damascus
    ["Iraq", [33.3152, 44.3661]] // Baghdad
    ],
    casualties: 20000,
    conflict_type: "Interstate War",
    source: "COW"
},
{
    conflict_id: "afghanistan-war",
    conflict_name: "War in Afghanistan",
    start_year: 2001,
    end_year: 2021,
    locations: [
    ["Afghanistan", [34.5553, 69.2075]], // Kabul
    ["United States", [38.9072, -77.0369]], // Washington, D.C.
    ["Pakistan", [33.6844, 73.0479]] // Islamabad
    ],
    casualties: 240000,
    conflict_type: "Interstate War",
    source: "UCDP"
},
{
    conflict_id: "yugoslav-wars",
    conflict_name: "Yugoslav Wars",
    start_year: 1991,
    end_year: 2001,
    locations: [
    ["Croatia", [45.8150, 15.9819]], // Zagreb
    ["Bosnia and Herzegovina", [43.8563, 18.4131]], // Sarajevo
    ["Serbia", [44.7866, 20.4489]], // Belgrade
    ["Kosovo", [42.6629, 21.1655]] // Pristina
    ],
    casualties: 140000,
    conflict_type: "Civil War",
    source: "UCDP"
}
];
  

const ConflictMap: React.FC<MapProps> = ({ yearRange, selectedCountries, selectedType }) => {
    const filteredConflicts = conflicts.filter(
      (conflict) =>
        // Filter by year range
        conflict.start_year <= yearRange[1] &&
        ((conflict.end_year ?? Infinity) >= yearRange[0]) &&
        // Filter by selected countries (if any selected)
        (selectedCountries.length === 0 || conflict.locations.some(([country]) => selectedCountries.includes(country))) &&
        // Filter by conflict type (if selected)
        (selectedType === "" || conflict.conflict_type === selectedType)
    );

    return (
      <MapContainer center={[20, 0]} zoom={2} style={{ height: "600px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {filteredConflicts.map((conflict) =>
          conflict.locations.map(([country, coords]) => (
            <Marker key={`${conflict.conflict_id}-${country}`} position={coords}>
              <Popup>
                <strong>{conflict.conflict_name}</strong><br />
                Year: {conflict.start_year} - {conflict.end_year || "Ongoing"}<br />
                Country: {country}<br />
                Casualties: {conflict.casualties}
              </Popup>
            </Marker>
          ))
        )}
      </MapContainer>
    );
  }

export default ConflictMap;
