import React from "react";
import slider1 from '../assets/slider1.jpg'
import slider2 from '../assets/slider2.jpg'
import slider3 from '../assets/slider3.jpg'
import slider4 from '../assets/slider4.jpg'
import slider5 from '../assets/slider5.jpg'
import slider6 from '../assets/slider6.jpg'

const Slider = () => {
    return(
        <>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval='2500'>
                        <img src={slider1} className="d-block w-100" alt="slider1" />
                    </div>
                    <div className="carousel-item" data-bs-interval='2500'>
                        <img src={slider2} className="d-block w-100" alt="slider2" />
                    </div>
                    <div className="carousel-item" data-bs-interval='2500'>
                        <img src={slider3} className="d-block w-100" alt="slider3" />
                    </div>
                    <div className="carousel-item" data-bs-interval='2500'>
                        <img src={slider4} className="d-block w-100" alt="slider4" />
                    </div>
                    <div className="carousel-item" data-bs-interval='2500'>
                        <img src={slider5} className="d-block w-100" alt="slider5" />
                    </div>
                    <div className="carousel-item" data-bs-interval='2500'>
                        <img src={slider6} className="d-block w-100" alt="slider6" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}
export default Slider;