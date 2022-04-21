import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import PopupProduct from "./Components/PopupProduct";
import Footer from "./Components/Footer";


const App = () => {
  return (
    <React.Fragment> 
      <Header/>
        <BrowserRouter>
          <Routes>
            <Route path = "/home" element = { Home() } />
          </Routes>
        </BrowserRouter>
      
      <Footer/>
    </React.Fragment>
  );
}

export default App;
