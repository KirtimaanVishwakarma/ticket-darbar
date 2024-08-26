'use client';
import Button from '@/components/form/button';
import Layout from '@/components/layout';
import React, { useEffect, useState } from 'react';

const Page = () => {
  const castList = [
    {
      image:
        'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg',
      name: 'Shraddha Kapoor',
      castAs: 'Actor',
    },
    {
      image:
        'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg',
      name: 'Shraddha Kapoor',
      castAs: 'Actor',
    },
    {
      image:
        'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg',
      name: 'Shraddha Kapoor',
      castAs: 'Actor',
    },
    {
      image:
        'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg',
      name: 'Shraddha Kapoor',
      castAs: 'Actor',
    },
    {
      image:
        'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg',
      name: 'Shraddha Kapoor',
      castAs: 'Actor',
    },
    {
      image:
        'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg',
      name: 'Shraddha Kapoor',
      castAs: 'Actor',
    },
    {
      image:
        'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg',
      name: 'Shraddha Kapoor',
      castAs: 'Actor',
    },
    {
      image:
        'https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/shraddha-kapoor-23323-1676723901.jpg',
      name: 'Shraddha Kapoor',
      castAs: 'Actor',
    },
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const targetDiv = document.getElementById('target-div');
    const handleScroll = () => {
      const targetPosition = targetDiv?.getBoundingClientRect().bottom;
      const scrollPosition = window.scrollY;

      if (targetPosition && scrollPosition >= targetPosition) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section
        className={`sticky top-0 bg-white shadow-xl ${
          isVisible ? 'block' : 'hidden'
        }`}
      >
        <div className='flex justify-between items-center py-3 max-w-7xl m-auto'>
          <header className='text-2xl font-semibold text-black'>
            Stree 2: Sarkate Ka Aatank
          </header>
          <Button btnName='Book Ticket' btnClass='!px-20 !py-3' />
        </div>
      </section>
      <div className='bg-gray-g1'>
        <div
          className='max-w-7xl m-auto min-h-480 flex items-center'
          style={{
            backgroundImage: `linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%, rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%),url('https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/stree-2-et00364249-1721725490.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className='flex items-center gap-8 py-8'>
            <div>
              <img
                src='https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg'
                alt=''
                className='rounded-t-lg'
              />
              <header className='bg-black text-white text-xs py-2 text-center rounded-b-lg'>
                In Cinema
              </header>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-4'>
                <header className='text-white font-bold text-4xl'>
                  Stree 2: Sarkate Ka Aatank
                </header>
                <div className='flex bg-gray-g2 text-white items-center px-8 py-4 rounded-lg gap-6'>
                  <img
                    src='https://i.pinimg.com/736x/99/cb/80/99cb803f7de902fbc34d7504ef593346.jpg'
                    alt='star'
                    className='h-8'
                  />
                  <header>9/10 (204.7k Votes)</header>
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
              <header className='text-white text-sm'>
                2h 29m • Comedy , Horror • UA • 15 Aug, 2024
              </header>
              <Button btnName='Book Ticket' btnClass='!px-12 !py-3' />
            </div>
          </div>
        </div>
      </div>
      <section className='max-w-7xl m-auto'>
        <section className='max-w-4xl'>
          <div className=' flex flex-col gap-4 py-6 border-b border-gray-300'>
            <header className='text-black font-semibold text-2xl'>
              About the movie
            </header>
            <p className='font-light leading-6'>
              After the events of Stree, the town of Chanderi is being haunted
              again. This time, women are mysteriously abducted by a terrifying
              headless entity. Once again, it`s up to Bicky and his friends to
              save their town and loved ones.
            </p>
          </div>
          {/* cast section  */}
          <section id='target-div' className='py-6 border-b border-gray-300'>
            <header className='text-black font-semibold text-2xl mb-6'>
              Cast
            </header>
            <section className='flex overflow-auto gap-4'>
              {castList?.map((cast, ind) => (
                <div key={ind} className='text-center min-w-32'>
                  <img
                    src={cast?.image}
                    alt='cast'
                    className='aspect-square rounded-full h-32 w-32 object-cover m-auto'
                  />
                  <header className='text-black font-light text-base py-2'>
                    {cast?.name}
                  </header>
                  <header className='text-gray-700 font-light text-sm'>
                    {cast?.castAs}
                  </header>
                </div>
              ))}
            </section>
          </section>
          {/* crew section  */}
          <section className='py-6 mb-6 border-b border-gray-300'>
            <header className='text-black font-semibold text-2xl mb-6'>
              Crew
            </header>
            <section className='flex overflow-auto gap-4'>
              {castList?.map((cast, ind) => (
                <div key={ind} className='text-center min-w-32'>
                  <img
                    src={cast?.image}
                    alt='cast'
                    className='aspect-square rounded-full h-32 w-32 object-cover m-auto'
                  />
                  <header className='text-black font-light text-base py-2'>
                    {cast?.name}
                  </header>
                  <header className='text-gray-700 font-light text-sm'>
                    {cast?.castAs}
                  </header>
                </div>
              ))}
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

Page.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default Page;
