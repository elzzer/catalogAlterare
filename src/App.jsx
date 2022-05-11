import React from "react";
//import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "./Components/Header";
// import Home from "./Components/Home";
// import PopupProduct from "./Components/PopupProduct";
// import Footer from "./Components/Footer";
import backgroundImage from "./images/backgroundHome.png";
import logoImage from "./images/logoHome.png";
import btnShopee from "./images/btnShopee.png";
import btnCatalogue from "./images/btnCatalogue.png";
import btnWhatsapp from "./images/btnWhatsapp.png";


const App = () => {
  return (
    <div style={{backgroundImage:`url(${backgroundImage})`, backgroundSize:"cover", width:"100%", height:"900px"}}>
      <img src={logoImage} alt="" style={{position:"relative", width:"280px", top:"30%", display:"block", marginLeft:"auto", marginRight:"auto"}}/>
      <button style={{border:"none", background:`url(${btnShopee})`, backgroundSize:"cover", width:"51%", height:"3.5%", position:"relative", top:"33.5%", display:"block", marginLeft:"auto", marginRight:"auto"}}></button>
      <button style={{border:"none", background:`url(${btnWhatsapp})`, backgroundSize:"cover", width:"51%", height:"3.5%", position:"relative", top:"35%", display:"block", marginLeft:"auto", marginRight:"auto"}}></button>
      <button style={{border:"none", background:`url(${btnCatalogue})`, backgroundSize:"cover", width:"51%", height:"3.5%", position:"relative", top:"36.5%", display:"block", marginLeft:"auto", marginRight:"auto"}}></button>
    </div>
  );
}

export default App;
