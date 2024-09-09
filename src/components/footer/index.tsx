import Image from 'next/image';
import React from 'react';
import Logo from '../../../public/ticket_darbar_logo_big.png';
import Facebook from '../../../public/assets/facebook.svg';

const Footer = () => {
  const socialLinks = [
    { image: Facebook },
    { image: Facebook },
    { image: Facebook },
    { image: Facebook },
  ];
  return (
    <footer className='hidden sm:block bg-black text-gray-600 py-6 px-4 pt-16'>
      <div className='relative '>
        <div className='relative flex justify-center px-8 w-fit m-auto bg-black z-10'>
          <Image src={Logo} alt='logo' height={60} />
        </div>
        <div className='h-[0.5px] w-full bg-white absolute top-1/2'></div>
      </div>
      <div className='flex gap-4 justify-center my-8'>
        {socialLinks?.map((ele: any, ind: number) => (
          <div
            key={ind}
            className='bg-gray-700 hover:bg-white cursor-pointer transition-all rounded-full p-2'
          >
            <Image src={ele?.image} alt='' className='fill-black' height={25} />
          </div>
        ))}
      </div>
      <div className='text-gray-600 text-xs text-center'>
        <span>
          Copyright 2024 © Bigtree Entertainment Pvt. Ltd. All Rights Reserved.
        </span>
        <br />
        <header className='py-4 pb-16'>
          The content and images used on this site are copyright protected and
          copyrights vests with the respective owners. The usage of the content
          and images on this website is intended to promote the works and no
          endorsement of the artist shall be implied. Unauthorized use is
          prohibited and punishable by law.
        </header>
      </div>
    </footer>
  );
};

export default Footer;
