import React from "react";
// import logo from './logo.svg';
import "./App.css";

import MainRoutes from "./routes/MainRoutes";
import Database from "./pages/Database";

function App() {
  return (
    <div className="App">
      <Database />
      {/* <DatabasePage /> */}
      {/* <MainRoutes /> */}
    </div>
  );
}

export default App;
