import './App.css'
import './index.css'
import ConflictMap from "./components/map";

// STEPS FOR COMPLETING THIS
// 1. PREPROCESS DATA INTO A STRUCTURED FORMAT FOR VISUALIZATION
// 2. CORRECTLY CONFIGURE LEAFLET
// 3. INTEGRATE COW & UCDP DATA
// DESIRED FEATURES: FILTER CONFLICT BY TYPE/COUNTRY, TIMELINE SLIDER, BRIEF INFO ON
//                   CLICKABLE REGIONS OF MAP, LINK TO LEARN MORE ABOUT SPECIFIC
//                   CONFLICTS

function App() {
  return (
      <div className="flex flex-col items-center min-h-screen gap-y-6 border p-6 w-full">
        <h1 className="border border-red-500">Global Conflict Visualizer</h1>
        <p>This is a tool to visualize areas of conflict in the 20th and 21st centuries</p>
        <ConflictMap />
        </div>
  )
}

export default App
