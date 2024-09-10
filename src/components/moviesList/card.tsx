import React from 'react';

interface CardInterface {
  ele?: any;
  className?: string;
  onClick?: () => void;
}
const Card = ({ ele, className, onClick }: CardInterface) => {
  return (
    <div
      className='cursor-pointer rounded-b hover:scale-105 transition-transform shadow-md bg-white hover:shadow-lg'
      onClick={onClick}
    >
      <img src={ele?.image} alt='' className={`rounded-t ${className}`} />
      <div className='p-1'>
        <header className='mt-2 font-medium sm:font-semibold text-sm sm:text-lg'>
          Stree 2: Sarkate Ka Atank
        </header>
        <header className='font-light text-xs sm:text-sm'>UA</header>
        <header className='font-light text-xs sm:text-sm'>
          Hindi, Tamil, Telugu
        </header>
      </div>
    </div>
  );
};

export default Card;
