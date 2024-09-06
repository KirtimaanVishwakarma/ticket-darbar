import React from 'react';

interface CastInterface {
  image: string;
  name: string;
  castAs: string;
}

const CastScroll = ({
  header,
  list,
}: Readonly<{
  header: string;
  list: CastInterface[];
}>) => {
  return (
    <>
      <section className='py-6 border-b border-gray-300 pl-4 sm:px-0'>
        <header className='text-black font-semibold text-base sm:text-2xl mb-6'>
          {header}
        </header>
        <section className='flex overflow-auto gap-2 sm:gap-4'>
          {list?.map((cast, ind) => (
            <div key={ind} className='text-center sm:min-w-32 min-w-24'>
              <img
                src={cast?.image}
                alt='cast'
                className='aspect-square rounded-full h-min-w-24 w-min-w-24 sm:h-32 sm:w-32 object-cover m-auto'
              />
              <header className='text-black font-light text-sm :text-base sm:py-2'>
                {cast?.name}
              </header>
              <header className='text-gray-700 font-light text-xs sm:text-sm'>
                {cast?.castAs}
              </header>
            </div>
          ))}
        </section>
      </section>
    </>
  );
};

export default CastScroll;
