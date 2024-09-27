import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './SliderComponent.css';

// Import images
import image1 from './assets/1.jpg';
import image2 from './assets/3.png';
import image3 from './assets/4.jpg';

// Custom Arrow Components
const SampleNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow custom-next-arrow" onClick={onClick}>
            &#x276F; {/* Right arrow character */}
        </div>
    );
};

const SamplePrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow custom-prev-arrow" onClick={onClick}>
            &#x276E; {/* Left arrow character */}
        </div>
    );
};

const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        fade: true,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div>
                    <img src={image1} alt="Slide 1" />
                </div>
                <div>
                    <img src={image2} alt="Slide 2" />
                </div>
                <div>
                    <img src={image3} alt="Slide 3" />
                </div>
            </Slider>
        </div>
    );
};

export default SliderComponent;
