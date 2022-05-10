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
      <img src={logoImage} alt="" style={{position:"relative", width:"300px", top:"25%", display:"block", marginLeft:"auto", marginRight:"auto"}}/>
      <button style={{border:"none", background:`url(${btnShopee})`, backgroundSize:"cover", width:"56%", height:"3.5%", position:"relative", top:"30%", display:"block", marginLeft:"auto", marginRight:"auto"}}></button>
      <button style={{border:"none", background:`url(${btnWhatsapp})`, backgroundSize:"cover", width:"56%", height:"3.5%", position:"relative", top:"32%", display:"block", marginLeft:"auto", marginRight:"auto"}}></button>
      <button style={{border:"none", background:`url(${btnCatalogue})`, backgroundSize:"cover", width:"56%", height:"3.5%", position:"relative", top:"34%", display:"block", marginLeft:"auto", marginRight:"auto"}}></button>
    </div>
  );
}

export default App;
