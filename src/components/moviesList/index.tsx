'use client'

import React from 'react';
import Card from "./card";
import { useRouter } from "next/navigation";

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
    <div className={`md:max-w-7xl px-4 md:px-0 m-auto mb-8 ${className}`}>
      <div className='flex justify-between mb-3'>
        <header className='text-2xl font-semibold text-gray-700'>
          {header}
        </header>
        <header className='text-sm font-light text-yellow-600 flex items-center cursor-pointer' onClick={()=>router.push("/movies")}>{`${
          ctaLabel || 'See All'
        } >`}</header>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-5 gap-6'>
        {list?.map((ele, ind):any => (
          <Card ele={ele} key={ind}  onClick={()=>router.push("/movies/1")}/>
        ))}
      </div>
    </div>
  );
};

export default MoviesList;
