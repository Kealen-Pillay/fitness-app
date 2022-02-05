import React, { useEffect } from "react";
import "./App.css";
import { Dashboard } from "./Dashboard";

function App() {
  useEffect(() => {
    document.title = "Fitness Planner";
  }, []);

  return (
    <div style={{ backgroundColor: "#1E1E1E" }}>
      <Dashboard />
    </div>
  );
}

export default App;
