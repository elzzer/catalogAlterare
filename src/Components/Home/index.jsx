import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";   

import PopupProduct from '../PopupProduct';
const Home = () => {
    const [show, setShow] = useState(false);
    const responsive = 
        {
            desktop: {
            breakpoint: {
                max: 3000,
                min: 1024
            },
            items: 1,
            partialVisibilityGutter: 10
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
            items: 2,
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
        "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    ];
    
    function onChangeCarousel(e){
        e.preventDefault();
        // asd(e.page.index);
        alert(e.page.index);
    }


    return(
        <div>
            {
                // images.map((image, id) => {
                //     return (
                //         <div key={id} className="item">
                //             <img src={image}/>
                //         </div>
                //     )
                // })
            }
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
                    setShow(true);
                }}
                >
                {images.map((image, id) => {
                    return (
                        <div key={id} className="item">
                            <center><img src={image}/></center>
                        </div>
                    )
                })}
            </Carousel>
            asdasd
            {show ? <PopupProduct show={show} setShow={setShow} /> : ""}
        </div>
    );
}
export default Home;
