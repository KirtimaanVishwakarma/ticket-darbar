'use client';
import Carousel from '@/components/carousel';
import Layout from '@/components/layout';
import MobileHeader from '@/components/mobile/header';
import MobileMovieFilter from '@/components/mobile/mobile-movie-filter';
import Filter from '@/components/movieFilter';
import MoviesList from '@/components/moviesList';
import Card from '@/components/moviesList/card';
import { languageList, moviesList } from '@/utils/constants';
import { useRouter } from 'next/router';

import React from 'react';

const Page = () => {
  const router = useRouter();
  return (
    <>
      <div className='sm:bg-gray-200 bg-white mb-10 sm:mb-0'>
        <Carousel />
        <div className='sm:max-w-7xl sm:px-0 m-auto flex gap-8 sm:py-16'>
          <Filter className='basis-2/5 hidden sm:block' />
          <div className='w-full'>
            <header className='text-xl hidden sm:block font-semibold px-4 sm:px-0'>
              Movies in Gorakhpur
            </header>
            <div className='flex sm:flex-wrap gap-x-2 sm:gap-x-4 gap-y-2 sm:my-4 py-4 overflow-auto sticky sm:relative z-50 bg-white sm:top-0 sm:bg-gray-200 top-16 px-4 sm:px-0'>
              {languageList.map((ele: string) => (
                <div
                  key={ele}
                  className='border sm:min-w-20 flex-1 sm:flex-none border-gray-200 px-3 py-1 rounded-l-full rounded-r-full text-xs sm:text-sm text-center bg-white'
                >
                  {ele}
                </div>
              ))}
            </div>
            <MoviesList list={moviesList} />
          </div>
        </div>
      </div>
      <MobileMovieFilter />
    </>
  );
};

Page.getLayout = function getLayout(page: any) {
  return (
    <Layout>
      <MobileHeader>
        <header className='text-base font-light'>Now Showing</header>
        <div>
          <span className='text-yellow-600'>Mumbai</span> |{' '}
          <span className='text-yellow-600'>46 Movies</span>
        </div>
      </MobileHeader>
      {page}
    </Layout>
  );
};

export default Page;
