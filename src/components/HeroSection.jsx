import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
        <img className=" w-full" src="/src/assets/IMG1.jpeg" alt="Image 1" />
      </div>
      <div>
        <img className="w-full" src="/src/assets/IMG2.png" alt="Image 2" />
      </div>
      <div>
        <img className='w-full' src="/src/assets/IMG3.jpeg" alt="Image 3" />
      </div>
      
    </Slider>
  );
};

export default HeroSection;