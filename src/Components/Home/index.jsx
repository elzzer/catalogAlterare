import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";   
import logo from '../../images/logoAlterare.png';
import { Modal } from 'react-bootstrap';

import PopupProduct from '../PopupProduct';
const Home = () => {
    const [asd, setAsd] = useState();
    const [show, setShow] = useState(false);
    const [imageShow, setImageShow] = useState("");
    const [listImage, setListImage] = useState([]);
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
        "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    ];
    
    function onChangeCarousel(e){
        e.preventDefault();
        // asd(e.page.index);
        alert(e.page.index);
    }

    function importAll(r) {
        let images = {};
        let tempListImage = [];
        r.keys().map((item, index) => { 
            images[item.replace('./', '')] = r(item);
            tempListImage.push(item.replace('./', ''));
        });
        setListImage(tempListImage);
        return images;
    }
    
    useEffect(() => {
        setAsd(importAll(require.context('../../images/Sprei/Taiwan L235', false, /\.(png|jpe?g|svg)$/)));
    }, []);

    function renderListImage(image, index){
        if((index+1) % 3 == 1)
            return (
                <>
                    <div style={{width:"5vw", float:"left"}}>&nbsp;</div>
                    <img src={asd[image]} style={{float:"left", width:"28vw", height:"10vh", borderRadius:"10%", margin:"1%"}} onClick={() => onClickImageZoom(image)}/>
                </>
            );
        else if((index+1) % 3 == 2)
            return <img src={asd[image]} style={{float:"left", width:"28vw", height:"10vh", borderRadius:"10%", margin:"1%"}} onClick={() => onClickImageZoom(image)}/>;
        else {
            return (
                <>
                    <img src={asd[image]} style={{float:"left", width:"28vw", height:"10vh", borderRadius:"10%", margin:"1%"}} onClick={() => onClickImageZoom(image)}/>
                    <div style={{width:"5vw", float:"left"}}>&nbsp;</div>
                    <br style={{clear:"both"}} />
                </>
                
            );
        }
    }

    function onClickImageZoom(image){
        alert(image);
        setShow(true);
        setImageShow(image);
    }

    function renderImageShow(){
        return(
            <>
                <Modal style={{ fontSize: '15pt', opacity:1, backgroundColor:"transparent" }}
                    show={ show } 
                    onHide={ handleClose }>
                        <div style={{position: "fixed",top:"50vh", transform: "translate(0, -50%)", width:"95vw"}}>
                            <center>
                                <img src={asd[imageShow]} style={{width:"95vw", justifyContent:"center"}}/>
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
        <div style={{height:"100%", backgroundColor:"rgb(242,242,242)"}}>
            <center><img src={logo} style={{width:"40vw", margin:"7% 0 7% 0"}}/></center>

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
                    alert("curr : " + currentSlide + "\nbefore : " + beforeSlide);
                }}
                >
                {images.map((image, id) => {
                    return (
                        <div key={id} className='item'>
                            <img src={image} style={{marginLeft:"2vw"}}/>
                        </div>
                    )
                })}
            </Carousel>
            <div style={{height:"4vh"}}>&nbsp;</div>
            {
                listImage.map((image, id) => {
                    return (
                        <div key={id} style={{width:"100%"}}>
                            {renderListImage(image, id)}
                        </div>
                    )
                })
            }
            <br style={{clear:"both"}} />
            {/* {show ? <PopupProduct show={show} setShow={setShow} /> : ""} */}
            {show ? renderImageShow() : ""}
        </div>
    );
}
export default Home;
