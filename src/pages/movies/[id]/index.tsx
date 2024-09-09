'use client';
import Button from '@/components/form/button';
import Layout from '@/components/layout';
import MobileHeader from '@/components/mobile/header';
import React, { useEffect, useState } from 'react';
import ShareIcon from '../../../../public/assets/share.svg';
import DetailsBanner from '@/components/mobile/detailsBanner';
import CastScroll from '@/components/castScroll';
import { useRouter } from 'next/navigation';
import BottomSheet from '@/components/mobile/bottomSheet';
import { castList, shareLinks } from '@/utils/constants';
import Image from 'next/image';
import { copyLinkHandler } from '@/utils/helpers';

const Page = ({
  showBottomSheet,
  setShowBottomSheet,
}: {
  showBottomSheet: boolean;
  setShowBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const router = useRouter();
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

  const linkHandler = (link: string) => {
    switch (link) {
      case 'copy':
        copyLinkHandler(window?.location?.href);
        break;
      default:
        window.open(link, '_blank');
        break;
    }
  };

  return (
    <>
      <section
        className={`sticky top-0 bg-white shadow-xl ${
          isVisible ? 'hidden sm:block' : 'hidden'
        }`}
      >
        <div className='flex justify-between items-center py-3 max-w-7xl m-auto'>
          <header className='text-2xl font-semibold text-black'>
            Stree 2: Sarkate Ka Aatank
          </header>
          <Button btnName='Book Ticket' btnClass='!px-20 !py-3' />
        </div>
      </section>

      {/* mobile details banner start  */}
      <DetailsBanner />
      {/* mobile details banner end  */}

      {/* web details banner start  */}
      <div className='bg-gray-g1 hidden sm:block'>
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
              <Button
                btnName='Book Ticket'
                btnClass='!px-12 !py-3'
                onClick={() => router.push('/buy-tickets')}
              />
            </div>
          </div>
        </div>
      </div>
      {/* web details banner end  */}
      <section className='max-w-7xl m-auto'>
        <section className='max-w-4xl'>
          <div className='  flex-col gap-4 py-6 border-b border-gray-300 hidden sm:flex'>
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
          <CastScroll header='Cast' list={castList} />
          {/* crew section  */}
          <CastScroll header='Crew' list={castList} />
        </section>
      </section>
      <div className='sticky bottom-0 sm:hidden'>
        <Button
          btnName='Book Tickets'
          className='w-full sticky bottom-0 py-2 bg-white px-4 shadow-inner'
          btnClass='!w-full !py-2'
          onClick={() => router.push('/buy-tickets')}
        />
      </div>
      <BottomSheet
        showBottomSheet={showBottomSheet}
        setShowBottomSheet={setShowBottomSheet}
      >
        {shareLinks?.map((link) => (
          <div
            key={link?.header}
            className='flex p-4 justify-between items-center'
            onClick={() => {
              linkHandler(link?.url);
            }}
          >
            <header className='text-gray-500 text-sm'>{link?.header}</header>
            <Image src={link?.icon} alt={link?.header} height={22} />
          </div>
        ))}
      </BottomSheet>
    </>
  );
};

Page.getLayout = function getLayout(page: any) {
  const [showBottomSheet, setShowBottomSheet] = useState<boolean>(false);
  return (
    <Layout>
      <MobileHeader
        href='/movies'
        Icon={ShareIcon}
        setIconState={() => setShowBottomSheet(true)}
      >
        <header className='text-base font-semibold'>
          Stree 2: Sarkate Ka Aatank
        </header>
      </MobileHeader>
      {/* {page} */}
      {React.cloneElement(page, { showBottomSheet, setShowBottomSheet })}
    </Layout>
  );
};

export default Page;
