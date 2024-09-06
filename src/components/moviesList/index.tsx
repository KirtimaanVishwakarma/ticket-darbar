'use client'

import React from 'react';
import Card from "./card";
import { useRouter } from "next/navigation";
import Image from "next/image";
import ArrowRightIcon from "../../../public/assets/leftArrow.svg"

interface List {
  header: string;
  cta?: string;
  className?: string;
  ctaLabel?: string;
  list: Array<{
    image: string;
    title?: string;
    rating?: string;
  }>;
}
const MoviesList = ({ header, cta, ctaLabel, list, className }: List) => {
  const router= useRouter()
  return (
    <div className={`sm:max-w-7xl px-4 sm:px-0 m-auto mb-8 ${className}`}>
      <div className='flex justify-between mb-3'>
        <header className='text-base sm:text-2xl font-medium sm:font-semibold text-gray-700'>
          {header}
        </header>
        <div className='sm:text-sm text-xs font-light text-yellow-600 flex items-center cursor-pointer' onClick={()=>router.push("/movies")}>{`${
          ctaLabel || 'See All'
        }`}<Image src={ArrowRightIcon} alt="arrow right" height={14} className="rotate-180"/></div>
      </div>
      <div className='grid grid-cols-3 sm:grid-cols-5 gap-2 sm:gap-6'>
        {list?.map((ele, ind):any => (
          <Card ele={ele} key={ind}  onClick={()=>router.push("/movies/1")}/>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
