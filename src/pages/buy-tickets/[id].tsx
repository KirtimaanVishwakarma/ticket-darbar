import { screenSeats, seatDescription } from '@/utils/constants';
import React from 'react';
import ScreenImage from '../../../public/assets/screen-transparent.png';
import Image from 'next/image';
import MobileHeader from '@/components/mobile/header';
import usePinchZoom from '@/hooks/usePinchZoom';

const BookSeats = () => {
  const scale = usePinchZoom('seat-arrangement');
  return (
    <section className='h-full bg-white w-full overflow-hidden px-4'>
      <div className='sm:mx-10 py-10 h-full overflow-auto '>
        <div
          className={`w-fit sm:m-auto !touch-auto transform ease-in-out duration-700`}
          style={{ transform: `scale(${scale})` }}
          id='seat-arrangement'
        >
          {screenSeats?.seatDetails?.map((details: any) => (
            <section key={details?.seatType} className='w-fit mx-auto'>
              <header className='font-light text-gray-400 text-xs border-b pb-3 border-gray-300 mb-2 mt-4'>{`Rs. ${details?.price} ${details?.seatType}`}</header>
              <div className='flex flex-col gap-2'>
                {details?.rows?.map((row: any) => (
                  <div className='flex gap-4 items-center relative' key={row}>
                    <header
                      className={`text-gray-400 text-sm font-normal ${
                        scale === 1 ? 'sticky' : ''
                      } left-0 bg-white p-1`}
                    >
                      {row}
                    </header>
                    <div
                      className='grid gap-2 mx-auto w-fit'
                      style={{
                        gridTemplateColumns: `repeat(${screenSeats?.totalRows}, 1fr)`,
                      }}
                    >
                      {Array.from(
                        { length: screenSeats?.totalRows },
                        (v, i) => i + 1
                      )
                        ?.reverse()
                        ?.map((ele) => (
                          <div
                            className={`h-6 w-6 rounded flex justify-center items-center  ${
                              details?.blockedSeats &&
                              details?.blockedSeats[row] &&
                              details?.blockedSeats[row]?.find(
                                (seat: number) => seat === ele
                              )
                                ? ''
                                : details?.bookedSeats &&
                                  details?.bookedSeats[row]?.some(
                                    (seat: number) => seat === ele
                                  )
                                ? 'bg-gray-200 cursor-not-allowed'
                                : 'border border-green-600 cursor-pointer'
                            }`}
                            key={ele}
                          >
                            <span
                              className={`text-[10px]  ${
                                details?.blockedSeats &&
                                details?.blockedSeats[row] &&
                                details?.blockedSeats[row]?.find(
                                  (seat: number) => seat === ele
                                )
                                  ? 'hidden'
                                  : details?.bookedSeats &&
                                    details?.bookedSeats[row]?.some(
                                      (seat: number) => seat === ele
                                    )
                                  ? 'text-white'
                                  : 'text-green-600'
                              }`}
                            >
                              {ele}
                            </span>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
          <Image src={ScreenImage} alt='screen' className='w-60 mx-auto mt-8' />
        </div>
      </div>
    </section>
  );
};

BookSeats.getLayout = function getLayout(page: any) {
  return (
    <>
      <MobileHeader href='/buy-tickets' hideForWeb={false}>
        <div className='flex flex-col gap-1 text-sm'>
          <header className='font-light text-black'>
            The Greatest of All Time (Telugu)
          </header>
          <header className='font-normal text-gray-500'>
            Bharat Cineplex: Kurla (W) | Monday,Sep 9, 2024, 07:00 PM
          </header>
        </div>
      </MobileHeader>
      {page}
      <div className='bg-white p-4 border-t-2 border-gray-100 sticky bottom-0 h-fit'>
        <div className='flex w-fit gap-4  m-auto'>
          {seatDescription?.map((ele) => (
            <div key={ele?.heading} className='flex gap-2 items-center'>
              <div className={`h-4 w-4 rounded ${ele?.className} `} />
              <header className='text-sm text-gray-500 font-light'>
                {ele?.heading}
              </header>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BookSeats;
