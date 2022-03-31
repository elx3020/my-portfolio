import React from "react";
import Tabs from "./components/Tabs";
import "./App.css";

function App() {
  return (
    <div className="Tabs">
      <h1 style={{ color: "white", marginLeft: 50 }}>PortFolio Page</h1>
      <Tabs>
        <div label="Bio"></div>
        <div label="Design"></div>
      </Tabs>
    </div>
  );
}

export default App;
