import React from 'react';
import StarIcon from '../../../public/assets/strat-icon.svg';
import Image from 'next/image';
import Button from '../form/button';
import { useRouter } from 'next/router';

interface DetailsInterface {
  imageUrl: string;
  backgroundImageUrl: string;
  numberOfTrailers?: number;
  ratingAndVotes: string;
  genres: string;
  name: string;
  id: number | string;
}

const WebDetailsBanner = ({
  imageUrl,
  backgroundImageUrl,
  numberOfTrailers,
  ratingAndVotes,
  genres,
  name,
  id,
}: DetailsInterface) => {
  const router = useRouter();
  return (
    <div className='bg-gray-g1 hidden sm:block'>
      <div
        className='max-w-7xl m-auto min-h-480 flex items-center'
        style={{
          backgroundImage: `linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%, rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%),url(${backgroundImageUrl})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className='flex items-center gap-8 py-8'>
          <div>
            <img src={imageUrl} alt='' className='rounded-t-lg' />
            <header className='bg-black text-white text-xs py-2 text-center rounded-b-lg'>
              In Cinema
            </header>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col gap-4'>
              <header className='text-white font-bold text-4xl'>{name}</header>
              <div className='flex bg-gray-g2 text-white items-center px-8 py-4 rounded-lg gap-6'>
                <Image src={StarIcon} alt='star' className='h-5 w-5' />
                <header>{ratingAndVotes}</header>
              </div>
            </div>
            <div className='flex gap-4 text-sm'>
              <header className='text-black bg-white px-3 py-1 font-light rounded'>
                2D
              </header>
              <header className='text-black bg-white px-3 py-1 font-light rounded'>
                Hindi
              </header>
            </div>
            <header className='text-white text-sm'>{genres}</header>
            <Button
              btnName='Book Ticket'
              btnClass='!px-12 !py-3'
              onClick={() => router.push('/buy-tickets?id=' + id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDetailsBanner;
