import './App.css'
import './index.css'
import ConflictMap from "./components/map";

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
