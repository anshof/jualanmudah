import React from "react";
// import logo from './logo.svg';
import "./App.css";

import MainRoutes from "./routes/MainRoutes";
import DatabasePage from "./pages/Database";

function App() {
  return (
    <div className="App">
      <DatabasePage />
      {/* <MainRoutes /> */}
    </div>
  );
}

export default App;
