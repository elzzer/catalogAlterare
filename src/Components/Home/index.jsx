import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";   
import logo from '../../images/logoAlterare.png';
import { Modal } from 'react-bootstrap';

const Home = () => {
    const [jpg250anak, setJpg250anak] = useState();
    const [sutraJT, setSutraJT] = useState();
    const [dolby, setDolby] = useState();
    const [jpghalfsilk, setJpghalfsilk] = useState();
    const [jpgpigprem, setJpgPigPrem] = useState();
    const [jpgpig, setJpgPig] = useState();
    const [microtencel, setMicroTencel] = useState();
    const [polos, setPolos] = useState();
    const [taiwan235, setTaiwan235] = useState();
    const [tencelsutraSO, setTencelSutraSO] = useState();
    const [tencelbamboo, setTencelBamboo] = useState();
    const [tencelmicro, setTencelMicro] = useState();

    const [show, setShow] = useState(false);
    const [imageShow, setImageShow] = useState("");
    const [listImage, setListImage] = useState([]);
    const [tempImportImage, setTempImportImage] = useState([]);
    const responsive = 
        {
            desktop: {
                breakpoint: {
                    max: 3000,
                    min: 1024
                },
                items: 1,
                partialVisibilityGutter: 20
            },
            mobile: {
                breakpoint: {
                    max: 464,
                    min: 0
                },
                items: 1,
                partialVisibilityGutter: 30
            },
            tablet: {
                breakpoint: {
                    max: 1024,
                    min: 464
                },
                items: 1,
                partialVisibilityGutter: 30
            }
        };
    const images = [
        "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    ];

    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { 
            images[item.replace('./', '')] = r(item);
            return null;
        });
        return images;
    }
    
    useEffect(() => {
        setJpg250anak(importAll(require.context('../../images/Sprei/A Jpg L250 anak2', false, /\.(png|jpe?g|svg)$/)));
        setSutraJT(importAll(require.context('../../images/Sprei/A Sutra JT', false, /\.(png|jpe?g|svg)$/)));
        setDolby(importAll(require.context('../../images/Sprei/Dolby', false, /\.(png|jpe?g|svg)$/)));
        setJpghalfsilk(importAll(require.context('../../images/Sprei/Jpg half silk', false, /\.(png|jpe?g|svg)$/)));
        setJpgPigPrem(importAll(require.context('../../images/Sprei/ktn Jpg pig prem', false, /\.(png|jpe?g|svg)$/)));
        setJpgPig(importAll(require.context('../../images/Sprei/ktn Jpg pigment', false, /\.(png|jpe?g|svg)$/)));
        setMicroTencel(importAll(require.context('../../images/Sprei/Micro Tencel', false, /\.(png|jpe?g|svg)$/)));
        setPolos(importAll(require.context('../../images/Sprei/Polos', false, /\.(png|jpe?g|svg)$/)));
        setTaiwan235(importAll(require.context('../../images/Sprei/Taiwan L235', false, /\.(png|jpe?g|svg)$/)));
        setTencelSutraSO(importAll(require.context('../../images/Sprei/Tencel + Sutra SO', false, /\.(png|jpe?g|svg)$/)));
        setTencelBamboo(importAll(require.context('../../images/Sprei/Tencel Bamboo', false, /\.(png|jpe?g|svg)$/)));
        setTencelMicro(importAll(require.context('../../images/Sprei/Tencel micro', false, /\.(png|jpe?g|svg)$/)));

    }, []);

    useEffect(() => {
        //FOR FIRST TIME RENDER
        if(taiwan235){
            let tempListImage = [];
            //for (const [key, value] of Object.entries(taiwan235)) {
            for (const [key] of Object.entries(taiwan235)) {
                tempListImage.push(key);
            }
            setListImage(tempListImage);
        }
        setTempImportImage(taiwan235);
    }, [jpg250anak, sutraJT, dolby, jpghalfsilk, jpgpigprem, jpgpig, microtencel, polos, taiwan235, tencelsutraSO, tencelbamboo, tencelmicro]);

    function renderListImage(image, index){
        if((index+1) % 3 === 1)
            return (
                <>
                    <div style={{width:"5vw", float:"left"}}>&nbsp;</div>
                    <img src={tempImportImage[image]} style={{float:"left", width:"28vw", height:"10vh", borderRadius:"10%", margin:"1%"}} onClick={() => onClickImageZoom(image)} alt=""/>
                </>
            );
        else if((index+1) % 3 === 2)
            return <img src={tempImportImage[image]} style={{float:"left", width:"28vw", height:"10vh", borderRadius:"10%", margin:"1%"}} onClick={() => onClickImageZoom(image)} alt=""/>;
        else {
            return (
                <>
                    <img src={tempImportImage[image]} style={{float:"left", width:"28vw", height:"10vh", borderRadius:"10%", margin:"1%"}} onClick={() => onClickImageZoom(image)} alt=""/>
                    <div style={{width:"5vw", float:"left"}}>&nbsp;</div>
                    <br style={{clear:"both"}} />
                </>
            );
        }
    }

    function onClickImageZoom(image){
        setShow(true);
        setImageShow(image);
    }

    function renderImageShow(){
        return(
            <>
                <Modal style={{ fontSize: '15pt', opacity:1, border:"none" }}
                    show={ show } 
                    onHide={ handleClose }>
                        <div style={{position: "fixed",top:"50vh", transform: "translate(0, -50%)", width:"95vw"}}>
                            <center>
                                <img src={tempImportImage[imageShow]} style={{width:"95vw", justifyContent:"center"}} alt=""/>
                            </center>
                        </div>
                </Modal>
            </>
        );
    }

    function handleClose() { 
        setShow(false);
    }

    return(
        <div style={{height:"100%", backgroundColor:"rgb(242,242,242)", position:"relative"}}>
            <div style={{position:"absolute", top:"0", left:"0", zIndex:"1", backgroundColor:"rgb(242,242,242)", height:"100vh", width:"100vw"}}>&nbsp;</div>
            <div style={{position:"relative", zIndex:"2", backgroundColor:"rgb(242,242,242)"}}>
                <center><img src={logo} style={{width:"40vw", margin:"7% 0 7% 0"}} alt=""/></center>
                <Carousel
                    arrows={false}
                    autoPlay={false}
                    autoPlaySpeed={9999999}
                    centerMode={true}
                    className="customer-testimonoals"
                    containerClass=""
                    infinite={true}
                    draggable={false}
                    focusOnSelect={true}
                    showDots={true}
                    swipeable={true}
                    responsive={responsive}
                    afterChange={(beforeSlide, { currentSlide, onMove }) => {
                        // alert("curr : " + currentSlide + "\nbefore : " + beforeSlide);
                        let tempImage = [];
                        if(currentSlide === 2) tempImage = taiwan235;
                        else if(currentSlide === 3) tempImage = tencelsutraSO;
                        else if(currentSlide === 4) tempImage = tencelbamboo;
                        else if(currentSlide === 5) tempImage = tencelmicro;
                        else if(currentSlide === 6) tempImage = jpg250anak;
                        else if(currentSlide === 7) tempImage = sutraJT;
                        else if(currentSlide === 8) tempImage = dolby;
                        else if(currentSlide === 9) tempImage = jpghalfsilk;
                        else if(currentSlide === 10) tempImage = jpgpigprem;
                        else if(currentSlide === 11) tempImage = jpgpig;
                        else if(currentSlide === 12) tempImage = microtencel;
                        else if(currentSlide === 13 || currentSlide === 1) tempImage = polos;

                        setTempImportImage(tempImage);
                        //FILL LIST IMAGE
                        let tempListImage = [];
                        //for (const [key, value] of Object.entries(tempImage)) {
                        for (const [key] of Object.entries(tempImage)) {
                            tempListImage.push(key);
                        }
                        setListImage(tempListImage);
                    }}
                    >
                    {images.map((image, id) => {
                        return (
                            <div key={id} className='item'>
                                <img src={image} style={{marginLeft:"2vw"}} alt=""/>
                            </div>
                        )
                    })}
                </Carousel>
                <div style={{height:"4vh"}}>&nbsp;</div>
                {
                    listImage ? listImage.map((image, id) => {
                        return (
                            <div key={id} style={{width:"100%"}}>
                                {renderListImage(image, id)}
                            </div>
                        )
                    }) : ""
                }
                <br style={{clear:"both"}} />
                {/* {show ? <PopupProduct show={show} setShow={setShow} /> : ""} */}
                {show ? renderImageShow() : ""}
            </div>
        </div>
    );
}
export default Home;
