import Image from 'next/image';
import React from 'react';
import PlayIcon from '../../../../public/assets/playIcon.svg';
import StarIcon from '../../../../public/assets/strat-icon.svg';
import Button from '@/components/form/button';

const DetailsBanner = () => {
  return (
    <section className='sm:hidden p-4 overflow-hidden flex flex-col gap-2'>
      <div>
        <div className='relative w-full h-full'>
          <img
            className='w-full rounded-t-lg'
            src={
              'https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/stree-2-et00364249-1721725490.jpg'
            }
            alt='movie poster'
          />
          <div className='absolute text-xs text-white w-full h-full flex justify-center items-center top-0'>
            <div className='bg-black bg-opacity-70 flex gap-2 py-1 px-4 rounded'>
              <Image src={PlayIcon} alt='play' height={14} />
              <header className='whitespace-nowrap'>Trailer 2</header>
            </div>
          </div>
        </div>

        <header className='bg-black text-white text-xs text-center py-3 rounded-b-lg'>
          In Cinema
        </header>
      </div>
      <section className='bg-gray-100 py-3 flex justify-between rounded-lg px-4'>
        <div className='flex items-center gap-2'>
          <Image src={StarIcon} alt='start' height={16} width={16} />
          <span className='font-semibold text-xs text-black'>
            8.4/10 (7.8k Votes)
          </span>
        </div>
        <Button
          btnName='Rate Now'
          btnClass='text-xs py-2 !bg-white !border !border-yellow-600 !text-yellow-600'
        />
      </section>

      <section className='flex flex-wrap gap-2'>
        {['2D', 'HINDI']?.map((ele) => (
          <header
            className='text-black text-xs p-1 bg-gray-200 rounded font-semibold'
            key={ele}
          >
            {ele}
          </header>
        ))}
      </section>
      <header className='text-gray-700 text-xs'>
        3h 3m • Action, Drama, Thriller • UA • 5 Sep, 2024
      </header>
      <header className='text-gray-700 text-sm'>
        After the events of Stree, the town of Chanderi is being haunted again.
        This time, women are mysteriously abducted by a terrifying headless
        entity. Once again, it`s up to Bicky and his friends to save their town
        and loved ones.
      </header>
    </section>
  );
};

export default DetailsBanner;
