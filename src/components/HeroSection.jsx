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
        <img className=" w-full h-full" src="/src/assets/banner.jpg" alt="Image 1" />
      </div>
      <div>
        <img className="w-full h-full" src="/src/assets/godzilla.avif" alt="Image 2" />
      </div>
      <div>
        <img className='w-full h-full' src="/src/assets/web.avif" alt="Image 3" />
      </div>
      
    </Slider>
  );
};

export default HeroSection;