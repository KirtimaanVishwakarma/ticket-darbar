import React from 'react';

const Carousel = () => {
  return (
    <div className='flex my-2 gap-2 overflow-auto'>
      <img
        src={
          'https://assets-in.bmscdn.com/promotions/cms/creatives/1722350498229_copyofwebshowcase1240x300.jpg'
        }
        alt='slide1'
        className="rounded-lg"
      />
      <img
        src={
          'https://assets-in.bmscdn.com/promotions/cms/creatives/1722350498229_copyofwebshowcase1240x300.jpg'
        }
        alt='slide1'
        className="rounded-lg"
      />
      <img
        src={
          'https://assets-in.bmscdn.com/promotions/cms/creatives/1722350498229_copyofwebshowcase1240x300.jpg'
        }
        alt='slide1'
        className="rounded-lg"
      />
    </div>
  );
};

export default Carousel;
