import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/ticket_darbar_logo_big.png';
import LensIcon from '../../../public/assets/Lens.svg';
import ArrowDown from '../../../public/assets/arrow_drop_down.svg';
import Button from '../form/button';
import Link from 'next/link';

const Header = ({ showHeader }: Readonly<{ showHeader?: boolean }>) => {
  return (
    <>
      {/* web header start */}
      <div className='hidden max-w-7xl sm:flex mx-auto my-0 h-16 justify-between bg-white text-sm'>
        <div className='flex items-center gap-6 w-3/5 cursor-text'>
          <Link href={'/'}>
            <Image src={Logo} alt='logo' height={50} />
          </Link>
          <div className='flex border w-full border-yellow-600 rounded py-2  text-gray-400 font-light'>
            <Image src={LensIcon} alt='lens' height={12} className='mx-4' />
            <span className='whitespace-nowrap truncate'>
              Search for Movies, Events, Plays, Sports and Activities
            </span>
          </div>
        </div>
        <div className='flex gap-4'>
          <div className='flex items-center gap-2 cursor-pointer'>
            <span>Mumbai</span>
            <Image src={ArrowDown} alt='arrow' />
          </div>
          <Button btnName='Sign In' className={`!m-auto`} />
        </div>
      </div>
      {/* web header end */}

      {/* mobile header start  */}
      <section
        className={`flex sm:hidden p-2 px-4 justify-between sticky top-0 bg-white z-40 shadow ${
          showHeader ? 'block' : 'hidden'
        }`}
      >
        <div className='flex flex-col gap-1 text-xs'>
          <Link href={'/'}>
            <Image src={Logo} alt='logo' height={28} />
          </Link>
          <span className='text-yellow-600'>Mumbai {`>`}</span>
        </div>
        <Image src={LensIcon} alt='lens' />
      </section>
      {/* mobile header end  */}

      <div
        className={`bg-gray-800 text-white font-light text-sm px-4 ${
          showHeader ? 'block' : 'hidden'
        }`}
      >
        <div className='max-w-7xl m-auto py-3 flex justify-between'>
          <div className='flex gap-4'>
            <Link href={'/movies'}>Movies</Link>
            <span>Food & Beverages</span>
          </div>
          <div className='flex gap-4'>
            <span>Offers</span>
            <span>Gift Cards</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
