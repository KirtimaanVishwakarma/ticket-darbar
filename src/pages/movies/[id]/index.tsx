'use client';
import Button from '@/components/form/button';
import Layout from '@/components/layout';
import MobileHeader from '@/components/mobile/header';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import ShareIcon from '../../../../public/assets/share.svg';
import DetailsBanner from '@/components/mobile/detailsBanner';
import CastScroll from '@/components/castScroll';
import { useRouter } from 'next/navigation';
import BottomSheet from '@/components/mobile/bottomSheet';
import { castList, shareLinks } from '@/utils/constants';
import Image from 'next/image';
import { copyLinkHandler } from '@/utils/helpers';
import WebDetailsBanner from '@/components/webDetailsBanner';

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

  useLayoutEffect(() => {
    setShowBottomSheet(false);
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
      <DetailsBanner
        imageUrl={
          'https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/stree-2-et00364249-1721725490.jpg'
        }
        description={
          ' After the events of Stree, the town of Chanderi is being haunted again. This time, women are mysteriously abducted by a terrifying headless entity. Once again, it`s up to Bicky and his friends to save their town and loved ones.'
        }
        genres={'3h 3m • Action, Drama, Thriller • UA • 5 Sep, 2024'}
        numberOfTrailers={2}
        ratingAndVotes={'8.4/10 (7.8k Votes)'}
      />
      {/* mobile details banner end  */}

      {/* web details banner start  */}
      <WebDetailsBanner
        backgroundImageUrl='https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/stree-2-et00364249-1721725490.jpg'
        imageUrl='https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/stree-2-et00364249-1721725490.jpg'
        numberOfTrailers={2}
        ratingAndVotes='9/10 (204.7k Votes)'
        genres='2h 29m • Comedy , Horror • UA • 15 Aug, 2024'
        name='Stree 2: Sarkate Ka Aatank'
        id={121232}
      />

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
          <CastScroll header='Cast' list={castList} />
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
