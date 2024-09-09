import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import LocationPinIcon from '../../../../public/assets/location-pin.svg';
import FilterIcon from '../../../../public/assets/filter-icon.svg';

const MobileMovieFilter = () => {
  // const [isScrolling, setIsScrolling] = useState(false);
  // useEffect(() => {
  //   let scrollTimeout: NodeJS.Timeout;

  //   const handleScroll = () => {
  //     setIsScrolling(true);

  //     if (scrollTimeout) {
  //       clearTimeout(scrollTimeout);
  //     }

  //     scrollTimeout = setTimeout(() => {
  //       setIsScrolling(false);
  //     }, 150);
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //     clearTimeout(scrollTimeout);
  //   };
  // }, []);
  return (
    <div
      className={`sm:hidden sticky bottom-8 text-white flex justify-around`}
    >
      <div className='flex gap-2 text-sm bg-yellow-600 p-3 items-center rounded-full'>
        <Image src={LocationPinIcon} height={22} alt='location' />
        <header>Browse By Cinemas</header>
      </div>
      <div className='flex text-sm bg-yellow-600 p-3 items-center rounded-full'>
        <Image src={FilterIcon} height={22} alt='filter' />
      </div>
    </div>
  );
};

export default MobileMovieFilter;
