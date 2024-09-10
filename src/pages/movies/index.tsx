'use client';
import Carousel from '@/components/carousel';
import Layout from '@/components/layout';
import Footer from '@/components/mobile/footer';
import MobileHeader from '@/components/mobile/header';
import MobileMovieFilter from '@/components/mobile/mobile-movie-filter';
import Filter from '@/components/movieFilter';
import MoviesList from '@/components/moviesList';
import { languageList, moviesList } from '@/utils/constants';

import React, { useState } from 'react';

const Page = () => {
  const [languages, setLanguages] = useState(languageList);

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
            <div
              className={`flex sm:flex-wrap gap-x-2 sm:gap-x-4 gap-y-2 sm:my-4 py-4 overflow-auto sticky sm:relative z-50 bg-white sm:top-0 sm:bg-gray-200 top-16 px-4 sm:px-0`}
            >
              {languages
                .sort((a, b) => {
                  if (a.isAdded && !b.isAdded) return -1;
                  if (!a.isAdded && b.isAdded) return 1;
                  return a.type.localeCompare(b.type);
                })
                .map((ele: { type: string; isAdded: boolean }) => (
                  <div
                    key={ele?.type}
                    onClick={() => {
                      setLanguages(
                        languages?.map(
                          (item: { type: string; isAdded: boolean }) => {
                            return {
                              type: item?.type,
                              isAdded:
                                item?.type === ele?.type
                                  ? !item?.isAdded
                                  : item?.isAdded,
                            };
                          }
                        )
                      );
                    }}
                    className={`${
                      ele?.isAdded
                        ? 'text-white bg-yellow-y1'
                        : 'shadow-thin text-yellow-y1 bg-white '
                    }  sm:min-w-20 flex-1 sm:flex-none cursor-pointer  px-3 py-1 rounded-l-full rounded-r-full text-xs sm:text-sm justify-center flex items-center gap-2`}
                  >
                    <span>{ele?.type}</span>
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
          <span className='text-yellow-y1'>Mumbai</span> |{' '}
          <span className='text-yellow-y1'>46 Movies</span>
        </div>
      </MobileHeader>
      {page}
      <Footer />
    </Layout>
  );
};

export default Page;
