import SelectSeats from '@/components/layout/SelectSeats';
import { screenSeats } from '@/utils/constants';
import React from 'react';
import ScreenImage from '../../../public/assets/screen-transparent.png';
import Image from 'next/image';

const BookSeats = () => {
  return (
    <section className='h-full bg-white'>
      <div className='mx-10 py-10 h-full'>
        {screenSeats?.seatDetails?.map((details: any) => (
          <section key={details?.seatType} className='w-fit mx-auto'>
            <header className='font-light text-gray-400 text-xs border-b pb-3 border-gray-300 mb-2 mt-4'>{`Rs. ${details?.price} ${details?.seatType}`}</header>
            <div className='flex flex-col gap-2'>
              {details?.rows?.map((row: any) => (
                <div className='flex gap-4 items-center' key={row}>
                  <header className='text-gray-400 text-sm font-normal'>
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
                              ? 'bg-gray-200'
                              : 'border border-green-600'
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
    </section>
  );
};

BookSeats.getLayout = function getLayout(page: any) {
  return (
    <>
      <SelectSeats
        addressAndTime='Bharat Cineplex: Kurla (W) | Monday,Sep 9, 2024, 07:00 PM'
        movieName='The Greatest of All Time (Telugu)'
      >
        {page}
      </SelectSeats>
    </>
  );
};

export default BookSeats;
