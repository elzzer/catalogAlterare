import React from 'react'
import { Modal } from 'react-bootstrap';

const PopupProduct = ({ show,setShow }) => {
    function handleClose() { 
        setShow(false);
    }

    return(
        
        <center>
            <Modal style={{ fontSize: '15pt', opacity:1 }}
                show={ show } 
                onHide={ handleClose }>
                    <div style={{ backgroundColor:"white", position: "fixed", bottom: "0", left: "50%", transform: "translate(-50%)", width:"100vw" }}>
                        <Modal.Header style={{justifyContent:"center"}}>
                            <Modal.Title>Modal heading</Modal.Title>
                        </Modal.Header>
                        <div>
                            asdasd<br/>
                            asdasd<br/>
                            asdasd<br/>
                        </div>
                        <div className="row" style={{backgroundColor:"yellow", height:"10vh"}}>
                            <div className="col-3" style={{position:"relative"}}><img src={process.env.PUBLIC_URL + "/icon/more.png"} style={{height:"70%", margin: 0, position: "absolute",top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}/></div>
                            <div className="col-6" style={{position:"relative"}}><img src={process.env.PUBLIC_URL + "/icon/more.png"} style={{height:"100%", margin: 0, marginTop:"-5%", position: "absolute",top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}/></div>
                            <div className="col-3" style={{position:"relative"}}><img src={process.env.PUBLIC_URL + "/icon/more.png"} style={{height:"70%", margin: 0, position: "absolute",top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}/></div>
                        </div>
                    </div>
            </Modal>
        </center>
    );
}
export default PopupProduct;
