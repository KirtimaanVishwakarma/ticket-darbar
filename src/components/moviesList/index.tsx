'use client';

import React from 'react';
import Card from './card';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import ArrowRightIcon from '../../../public/assets/leftArrow.svg';

interface List {
  header?: string;
  cta?: string;
  className?: string;
  ctaLabel?: string;
  list: Array<{
    image: string;
    title?: string;
    rating?: string;
    name: string;
    languages: string;
    certificate: string;
    id: number;
  }>;
}
const MoviesList = ({ header, cta = '', ctaLabel, list, className }: List) => {
  const router = useRouter();
  return (
    <div className={`sm:max-w-7xl px-4 sm:px-0 m-auto mb-8 ${className}`}>
      <div
        className={`flex justify-between mb-3 ${
          header && ctaLabel ? 'block' : 'hidden'
        }`}
      >
        <header
          className={`text-base sm:text-2xl font-medium sm:font-semibold text-gray-700 ${
            header ? 'block' : 'hidden'
          }`}
        >
          {header}
        </header>
        <div
          className={`sm:text-sm text-xs font-light text-yellow-y1 flex items-center cursor-pointer ${
            ctaLabel ? 'block' : 'hidden'
          }`}
          onClick={() => router.push(cta)}
        >
          {`${ctaLabel || 'See All'}`}
          <Image
            src={ArrowRightIcon}
            alt='arrow right'
            height={14}
            className='rotate-180'
          />
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-6'>
        {list?.map((ele): any => (
          <div key={ele?.id} onClick={() => router.push('/movies/' + ele?.id)}>
            <Card ele={ele} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
