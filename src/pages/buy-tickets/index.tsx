import MobileHeader from '@/components/mobile/header';
import React, { useState } from 'react';
import FilterIcon from '../../../public/assets/filter-icon.svg';
import { getNext7Days } from '@/utils/helpers';
import moment from 'moment';
import {
  AvailableFacility,
  cinemasList,
  PreferredTime,
  PriceFilter,
} from '@/utils/constants';
import InfoIcon from '../../../public/assets/info-icon.svg';
import Image from 'next/image';
import Layout from '@/components/layout';
import { useRouter } from 'next/navigation';
import BottomSheet from '@/components/mobile/bottomSheet';

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

const BuyTicket = ({
  openFilter,
  setOpenFilter,
}: {
  openFilter: boolean;
  setOpenFilter: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [cinemaInfo, setCinemaInfo] = useState<{
    name: string;
    location: string;
    movies: {
      title: string;
      duration: string;
      genre: string;
    };
    timeseries: {
      time: string;
      audio: string;
    }[];
  } | null>(null);
  const router = useRouter();

  return (
    <>
      <section
        className='px-4 py-4 bg-gray-100 sm:bg-white flex flex-col gap-3 overflow-auto sm:max-w-7xl sm:m-auto sm:!h-auto'
        style={{ height: `calc(100vh - 164px)` }}
      >
        {cinemasList?.map((ele, ind) => (
          <div
            key={ind}
            className='bg-white p-3 sm:bg-gray-50 sm:rounded sm:p-4'
          >
            <div className='flex justify-between gap-4'>
              <header className='text-sm font-light'>
                {ele?.name} {ele?.location}
              </header>
              <div
                className='flex items-center gap-1'
                onClick={() => setCinemaInfo(ele)}
              >
                <Image src={InfoIcon} alt='info' height={20} />
                <header className='uppercase text-gray-500 text-xs'>
                  info
                </header>
              </div>
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
      <BottomSheet
        showBottomSheet={!!cinemaInfo}
        setShowBottomSheet={() => setCinemaInfo(null)}
      >
        <div className='flex flex-col mt-4'>
          <header className='px-4 text-black mb-4'>
            {cinemaInfo?.name} {cinemaInfo?.location}
          </header>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.079944305746!2d77.32154728786536!3d28.567362013045777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5cf5454859d%3A0xa9a7a0a41e666ba6!2sMiraj%20Cinemas%20-%20TGIP%2C%20Noida!5e0!3m2!1sen!2sin!4v1747304058294!5m2!1sen!2sin'
            style={{ border: 0 }}
            allowFullScreen={true}
            className='w-full h-44'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
          <div className='flex flex-col divide-y divide-gray-200 text-gray-600'>
            <div className='flex items-center gap-1 p-4'>
              <img
                src='https://in.bmscdn.com/moviemode/cinemaphotoshowcase/pin.png'
                alt=''
                className='h-6'
              />
              <header className='whitespace-nowrap truncate w-full text-black text-[0.7rem] tracking-tight font-light'>
                Plot No. A2, 3rd Floor, The Great India Place Mall, Near Noida
                Sector 18 Metro Station, Sector 38-201301
              </header>
            </div>
            <div className='flex items-center gap-1 p-4'>
              <img
                src='https://in.bmscdn.com/moviemode/cinemaphotoshowcase/pin.png'
                alt=''
                className='h-6'
              />
              <header className='whitespace-nowrap truncate w-full text-xs text-black font-light'>
                Tap to add your favorite cinema
              </header>
            </div>
            <div className='pt-2 flex flex-col gap-2 text-black'>
              <header className='font-normal text-sm px-4'>
                Available Facility
              </header>
              <div className='flex overflow-auto gap-1 w-full pl-4 pb-4 text-black'>
                {AvailableFacility?.map((facility) => (
                  <div
                    className='flex flex-col gap-1 w-[70px] items-center'
                    key={facility?.header}
                  >
                    <img src={facility?.img} alt='' className='w-6' />
                    <header className='text-xs font-light justify-center text-center w-[70px] flex flex-wrap'>
                      {facility?.header}
                    </header>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BottomSheet>
      {/* //filter section */}
      <BottomSheet
        showBottomSheet={openFilter}
        setShowBottomSheet={() => setOpenFilter(false)}
      >
        <div className='flex flex-col mt-4'>
          <header className='px-4 text-black mb-4'>Filters</header>
          <div>
            <header className='uppercase text-xs bg-gray-200/50 text-gray-500 pt-3 pb-1 px-4'>
              price range
            </header>
            <div className='flex flex-wrap gap-x-1 gap-y-3 p-4'>
              {PriceFilter?.map((price) => (
                <div
                  className='border-yellow-y1 p-2 border rounded-l-full rounded-r-full text-xs font-light text-yellow-y1'
                  key={price?.min}
                >{`₹${price?.min}-₹${price?.max}`}</div>
              ))}
            </div>
          </div>
          <div>
            <header className='uppercase text-xs bg-gray-200/50 text-gray-500 pt-3 pb-1 px-4'>
              Preferred Time
            </header>
            <div className='divide-y flex flex-col divide-gray-200'>
              {PreferredTime?.map((day) => (
                <div
                  key={day?.dayCycle}
                  className='flex px-6 justify-between py-3 items-center'
                >
                  <div className='flex gap-1 items-center'>
                    <Image src={day?.img} alt={day?.dayCycle} height={22} />
                    <div className='flex flex-col'>
                      <header className='text-sm capitalize text-gray-700'>
                        {day?.dayCycle}
                      </header>
                      <header className='text-xs text-gray-400'>{`${day?.timeRange?.start}-${day?.timeRange?.end}`}</header>
                    </div>
                  </div>
                  <input type='checkbox' className='h-4 w-4'/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BottomSheet>
    </>
  );
};

BuyTicket.getLayout = function getLayout(page: any) {
  const [openFilter, setOpenFilter] = useState<boolean>(false);
  return (
    <>
      <Layout showHeader={false}>
        <MobileHeader
          href='/movies/1'
          Icon={FilterIcon}
          iconHeight={26}
          otherChildren={DatesRage}
          setIconState={() => setOpenFilter(true)}
        >
          <header className='text-base font-semibold'>
            Stree 2: Sarkate Ka Aata
          </header>
        </MobileHeader>

        {React.cloneElement(page, { openFilter, setOpenFilter })}
      </Layout>
    </>
  );
};

export default BuyTicket;
