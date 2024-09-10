import MobileHeader from '@/components/mobile/header';
import React from 'react';
import FilterIcon from '../../../public/assets/filter-icon.svg';
import { getNext7Days } from '@/utils/helpers';
import moment from 'moment';
import { cinemasList } from '@/utils/constants';
import InfoIcon from '../../../public/assets/info-icon.svg';
import Image from 'next/image';
import Layout from '@/components/layout';
import { useRouter } from 'next/navigation';

const DatesRage = () => {
  return (
    <>
      <div className='flex border-y border-gray-200'>
        {getNext7Days().map((dates) => (
          <div
            key={dates?.date}
            className={`flex-1 py-2 text-center font-thin  text-xs ${
              moment().format('ddd').toUpperCase() === dates?.day
                ? 'bg-yellow-y1 text-white'
                : ''
            }`}
          >
            <header className=''>{dates?.day}</header>
            <header className='font-medium text-base'>{dates?.date}</header>
            <header className=''>{dates?.month}</header>
          </div>
        ))}
      </div>
      <div className='px-4 flex justify-between text-xs font-light py-3'>
        <header>
          HIND
          <span className='font-medium'> 2D</span>
        </header>
        <span className='font-medium text-yellow-y1'>Change {'>'}</span>
      </div>
    </>
  );
};

const BuyTicket = () => {
  const router = useRouter();
  return (
    <section
      className='px-4 py-4 bg-gray-100 sm:bg-white flex flex-col gap-3 overflow-auto sm:max-w-7xl sm:m-auto sm:!h-auto'
      style={{ height: `calc(100vh - 164px)` }}
    >
      {cinemasList?.map((ele, ind) => (
        <div key={ind} className='bg-white p-3 sm:bg-gray-50 sm:rounded sm:p-4'>
          <div className='flex justify-between gap-4'>
            <header className='text-sm font-light'>
              {ele?.name} {ele?.location}
            </header>
            <Image src={InfoIcon} alt='info' height={20} />
          </div>
          <div
            className='text-xs font-thin grid grid-cols-3 gap-3 mt-2 sm:grid-cols-5 cursor-pointer'
            onClick={() => router.push('/buy-tickets/1')}
          >
            {ele?.timeseries?.map((timeserie, i) => (
              <div
                className='text-green-600 border border-green-200 bg-white col-span-1 p-2 text-center'
                key={i}
              >
                <header>{timeserie?.time}</header>
                <header>{timeserie?.audio}</header>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

BuyTicket.getLayout = function getLayout(page: any) {
  return (
    <>
      <Layout showHeader={true}>
        <MobileHeader
          href='/movies/1'
          Icon={FilterIcon}
          iconHeight={26}
          otherChildren={DatesRage}
        >
          <header className='text-base font-semibold'>
            Stree 2: Sarkate Ka Aatank
          </header>
        </MobileHeader>

        {page}
      </Layout>
    </>
  );
};

export default BuyTicket;
