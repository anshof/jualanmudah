import React from "react";
// import logo from './logo.svg';
import "./App.css";

import MainRoutes from "./routes/MainRoutes";
import Dashboard from "./pages/Dashboard";
import DatabasePage from "./pages/Database";

function App() {
  return (
    <div className="App">
      <Dashboard />
      {/* <DatabasePage /> */}
      {/* <MainRoutes /> */}
    </div>
  );
}

export default App;
