'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import ArrowImg from '../../../public/assets/arrow_drop_down.svg';
import { webFilters } from '@/utils/constants';

interface FilterOptions {
  className?: string;
}
const Filter = ({ className }: FilterOptions) => {
  const [showFilters, setShowFilters] = useState([
    { index: 0, show: true },
    { index: 1, show: false },
    { index: 2, show: false },
  ]);

  const changeFilterHandler = (ind: any) => {
    setShowFilters(
      showFilters?.map((ele) => {
        if (ele?.index === ind) {
          return { ...ele, show: !ele.show };
        } else {
          return ele;
        }
      })
    );
  };

  return (
    <section className={className}>
      <header className='text-xl font-semibold mb-4'>Filters</header>
      <div className='flex flex-col gap-4 text-sm font-light'>
        {webFilters?.map((ele, ind) => (
          <div key={ele?.header} className='bg-white px-4 py-2 rounded'>
            <div className='flex justify-between'>
              <div
                className='flex gap-2 cursor-pointer'
                onClick={() => changeFilterHandler(ind)}
              >
                <Image src={ArrowImg} alt='arrow' />
                <header>{ele?.header}</header>
              </div>
              <header>Clear</header>
            </div>
            <div
              className={`flex-wrap gap-3 mt-3 ${
                showFilters.find((filter) => filter.index == ind)?.show
                  ? 'flex'
                  : 'hidden'
              }`}
            >
              {ele?.list?.map((ele) => (
                <header
                  key={ele?.type}
                  className='px-2 py-1 border border-gray-300 text-black text-xs'
                >
                  {ele?.type}
                </header>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Filter;
