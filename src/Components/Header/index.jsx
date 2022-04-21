import React from 'react'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return(
        <div>
            <div className="row">
                <div className="col-3" style={{marginTop:"10%"}}>
                    <FontAwesomeIcon icon={faBars} size='2x' style={{marginLeft:"auto", marginRight:"auto", display:"block"}}/>
                </div>
                <div className="col-6" style={{textAlign:"center"}}>
                    <img src={logo} className="App-logo" style={{width:"50%", marginLeft:"auto", marginRight:"auto", display:"block"}}/>
                    <br/> <h3>F&F</h3>
                </div>
                <div className="col-3">
                </div>
            </div>
        </div>
    );
}
export default Header;
