import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from "../assets/banner.jpg"
import image2 from "../assets/godzilla.avif"
import image3 from "../assets/web.avif"

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
        
      <div>
        <img className=" w-full h-full" src={image1} alt="Image 1" />
      </div>
      <div>
        <img className="w-full h-full" src={image2} alt="Image 2" />
      </div>
      <div>
        <img className='w-full h-full' src={image3} alt="Image 3" />
      </div>
      
    </Slider>
  );
};

export default HeroSection;