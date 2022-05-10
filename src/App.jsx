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
    <div style={{backgroundImage:`url(${backgroundImage})`, backgroundSize:"cover", width:"100%", height:"1000px"}}>
    <h1 style={{color:"white"}}>FELITA GUTANA GENDUTT DAN HITAM :)</h1>
      <img src={logoImage} alt="" style={{position:"relative", width:"300px", top:"20%", display:"block", marginLeft:"auto", marginRight:"auto"}}/>
      <button style={{background:`url(${btnShopee})`, backgroundSize:"cover", width:"60%", height:"4%", position:"relative", top:"25%", display:"block", marginLeft:"auto", marginRight:"auto"}}></button>
      <button style={{background:`url(${btnWhatsapp})`, backgroundSize:"cover", width:"60%", height:"4%", position:"relative", top:"27%", display:"block", marginLeft:"auto", marginRight:"auto"}}></button>
      <button style={{background:`url(${btnCatalogue})`, backgroundSize:"cover", width:"60%", height:"4%", position:"relative", top:"29%", display:"block", marginLeft:"auto", marginRight:"auto"}}></button>
    </div>
  );
}

export default App;
