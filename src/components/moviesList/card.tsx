import React from 'react';

interface CardInterface {
  ele?: any;
  className?: string;
  onClick?: () => void;
}
const Card = ({ ele,className, onClick }: CardInterface) => {
  return (
    <div className='cursor-pointer hover:scale-105 transition-transform' onClick={onClick}>
      <img src={ele?.image} alt='' className={`rounded ${className}`} />
    </div>
  );
};

export default Card;
