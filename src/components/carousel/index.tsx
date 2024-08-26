import React from 'react';
import Slider from 'react-slick';

function Carousel() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 2000,
    dots: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false
  };
  return (
    <div className='slider-container'>
      <Slider {...settings}>
        <div className="px-2">
          <img
            src={
              'https://assets-in.bmscdn.com/promotions/cms/creatives/1722350498229_copyofwebshowcase1240x300.jpg'
            }
            alt='slide1'
            className='rounded-lg m-auto w-full'
          />
        </div>
        <div className="px-2">
          <img
            src={
              'https://assets-in.bmscdn.com/promotions/cms/creatives/1722350498229_copyofwebshowcase1240x300.jpg'
            }
            alt='slide1'
          className='rounded-lg m-auto w-full'
          />
        </div>
        <div className="px-2">
          <img
            src={
              'https://assets-in.bmscdn.com/promotions/cms/creatives/1722350498229_copyofwebshowcase1240x300.jpg'
            }
            alt='slide1'
          className='rounded-lg m-auto w-full'
          />
        </div>
        <div className="px-2">
          <img
            src={
              'https://assets-in.bmscdn.com/promotions/cms/creatives/1722350498229_copyofwebshowcase1240x300.jpg'
            }
            alt='slide1'
          className='rounded-lg m-auto w-full'
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
