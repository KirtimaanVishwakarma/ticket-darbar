import React from 'react';
import Slider from 'react-slick';

function Carousel() {
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    // speed: 2000,
    dots: false,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          centerMode: false,
        },
      },
    ],
  };
  return (
    <div className='slider-container my-2'>
      <Slider {...settings}>
        <div className='px-0 sm:px-2 sm:min-h-fit object-cover h-28 sm:h-fit'>
          <img
            src={
              'https://assets-in.bmscdn.com/promotions/cms/creatives/1722350498229_copyofwebshowcase1240x300.jpg'
            }
            alt='slide1'
            className='sm:rounded-lg m-auto w-full h-full object-cover'
          />
        </div>
        <div className='sm:px-2 px-0 object-cover h-28 sm:h-fit'>
          <img
            src={
              'https://assets-in.bmscdn.com/promotions/cms/creatives/1722350498229_copyofwebshowcase1240x300.jpg'
            }
            alt='slide1'
            className='sm:rounded-lg m-auto w-full h-full object-cover'
          />
        </div>
        <div className='px-0 sm:px-2 object-cover h-28 sm:h-fit'>
          <img
            src={
              'https://assets-in.bmscdn.com/promotions/cms/creatives/1722350498229_copyofwebshowcase1240x300.jpg'
            }
            alt='slide1'
            className='sm:rounded-lg m-auto w-full h-full object-cover'
          />
        </div>
        <div className='px-0 sm:px-2 object-cover h-28 sm:h-fit'>
          <img
            src={
              'https://assets-in.bmscdn.com/promotions/cms/creatives/1722350498229_copyofwebshowcase1240x300.jpg'
            }
            alt='slide1'
            className='sm:rounded-lg m-auto w-full h-full object-cover'
          />
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
