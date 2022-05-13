import React from 'react'
import './index.css'

import logoImage from "../../images/logoHome.png";
import btnShopee from "../../images/btnShopee.png";
import btnCatalogue from "../../images/btnCatalogue.png";
import btnWhatsapp from "../../images/btnWhatsapp.png";

const Mainmenu = () => {
    
    function onClickShopee(){
        window.location.assign('https://shopee.co.id/cranifan');
    }
    function onClickWhatsapp(){
        window.location.assign('https://wa.me/628990002640');
    }
    function onclickasd(){
        alert("woi");
    }

    return(
        <div className="containers">

            <img src={logoImage} alt="" className="imgLogo"/>
            <button className="imgBtn1" onClick={() => onClickShopee()}>
                <img src={btnShopee} alt="" style={{width:"100%"}}/>
            </button>
            <button className="imgBtn2" onClick={() => onClickWhatsapp()}>
                <img src={btnWhatsapp} alt="" style={{width:"100%"}}/>
            </button>
            <button className="imgBtn3" onClick={() => onclickasd()}>
                <img src={btnCatalogue} alt="" style={{width:"100%"}}/>
            </button>
            
        </div>
    );
}
export default Mainmenu;
