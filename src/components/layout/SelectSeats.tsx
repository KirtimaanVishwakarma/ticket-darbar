import Image from 'next/image';
import React from 'react';
import LeftArrow from '../../../public/assets/leftArrow.svg';
import { seatDescription } from '@/utils/constants';

const SelectSeats = ({
  children,
  movieName,
  addressAndTime,
}: {
  children: React.ReactNode;
  movieName: string;
  addressAndTime: string;
}) => {
  return (
    <section className='h-screen flex flex-col w-full'>
      <div className='bg-white p-3 h-fit'>
        <div className='flex gap-3'>
          <Image src={LeftArrow} alt='left-arrow' height={24} />
          <div className='flex flex-col gap-1'>
            <header className='font-light text-black text-sm'>
              {movieName}
            </header>
            <header className='font-normal text-gray-500 text-sm'>
              {addressAndTime}
            </header>
          </div>
        </div>
      </div>

      <section className="h-full bg-gray-100 py-6">{children}</section>

      <div className='bg-white p-2 h-fit m-auto'>
        <div className='flex w-fit gap-4'>
          {seatDescription?.map((ele) => (
            <div key={ele?.heading} className='flex gap-2 items-center'>
              <div
                className={`h-4 w-4 rounded ${ele?.className} ${
                  ele?.heading === 'Available' ? '!border-green-400' : ''
                }`}
              />
              <header className='text-sm text-gray-500 font-light'>
                {ele?.heading}
              </header>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SelectSeats;
