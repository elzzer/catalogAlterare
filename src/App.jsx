import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Mainmenu from "./Components/Mainmenu";
import Home from "./Components/Home";

function App() {
  return (
    <Router basename="/catalogAlterare">
      <Routes>
        <Route exact path = "/" element = { Mainmenu() } />
        <Route exact path = "/home" element = { Home() } />
      </Routes>
    </Router>
  );
}

export default App;
