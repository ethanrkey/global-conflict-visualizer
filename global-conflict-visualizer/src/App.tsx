import './App.css'
import './index.css'
import ConflictMap from "./components/map";
import Filter from "./components/filter";
import { useState } from "react";

// STEPS FOR COMPLETING THIS
// 1. PREPROCESS DATA INTO A STRUCTURED FORMAT FOR VISUALIZATION
// 2. CORRECTLY CONFIGURE LEAFLET
// 3. INTEGRATE COW & UCDP DATA
// DESIRED FEATURES: FILTER CONFLICT BY TYPE/COUNTRY, TIMELINE SLIDER, BRIEF INFO ON
//                   CLICKABLE REGIONS OF MAP, LINK TO LEARN MORE ABOUT SPECIFIC
//                   CONFLICTS


function App() {
  const [yearRange, setYearRange] = useState<[number, number]>([1900, 2025]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string>("");

  return (
      <div className="flex flex-col items-center min-h-screen gap-y-6 border p-6 w-full">
        <h1 className="">Global Conflict Visualizer</h1>
        <p>This is a tool to visualize international conflicts of the 20th and 21st centuries</p>
        <div className="w-full flex flex-col p-8 border border-green-500">
          <div className="flex justify-center">
            <Filter 
              yearRange={yearRange} setYearRange={setYearRange} 
              selectedCountries={selectedCountries} setSelectedCountries={setSelectedCountries}
              selectedType={selectedType} setSelectedType={setSelectedType} 
            />
          </div>
          <ConflictMap 
            yearRange={yearRange} 
            selectedCountries={selectedCountries} 
            selectedType={selectedType} 
          />
        </div>
      </div>
  )
}

export default App
