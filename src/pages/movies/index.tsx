'use client';
import Carousel from '@/components/carousel';
import Layout from '@/components/layout';
import Filter from '@/components/movieFilter';
import Card from '@/components/moviesList/card';
import { useRouter } from 'next/router';

import React from 'react';

const Page = () => {
  const router = useRouter();
  return (
      <div className='bg-gray-200'>
        <Carousel />
        <div className='md:max-w-7xl px-4 md:px-0 m-auto flex gap-8 md:py-16 py-4 '>
          <Filter className='basis-2/5 hidden md:block' />
          <div className="w-full">
            <header className='text-xl font-semibold'>
              Movies in Gorakhpur
            </header>
            <div className='flex md:flex-wrap gap-x-4 gap-y-2 my-4 overflow-auto'>
              {['Hindi', 'English', 'Gujarati', 'Marathi', 'Telugu','Tamil'].map(
                (ele: string) => (
                  <div
                    key={ele}
                    className='border min-w-20 flex-1 md:flex-none border-gray-200 px-3 py-1 rounded-l-full rounded-r-full text-sm text-center bg-white'
                  >
                    {ele}
                  </div>
                )
              )}
            </div>

            <div className='grid md:grid-cols-4 grid-cols-2 md:gap-8 gap-4'>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]?.map(
                (ele: any) => (
                  <div key={ele} onClick={() => router.push('/movies/1')}>
                    <Card
                      ele={{
                        image:
                          'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC8xMCAgMjcuNksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00386426-sfewqbqlqj-portrait.jpg',
                      }}
                    />
                    <header className='mt-2 font-semibold text-lg'>
                      Stree 2: Sarkate Ka Atank
                    </header>
                    <header className='font-light text-sm'>UA</header>
                    <header className='font-light text-sm'>
                      Hindi, Tamil, Telugu
                    </header>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
  );
};

Page.getLayout = function getLayout(page:any) {
    return <Layout>{page}</Layout>;
  };

export default Page;

