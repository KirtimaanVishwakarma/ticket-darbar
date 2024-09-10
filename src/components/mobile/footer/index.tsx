import { footerLinks } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Footer = () => {
  const { pathname, push } = useRouter();
  return (
    <footer className='sticky bottom-0 bg-white shadow-thin py-2 px-6 flex justify-between rounded-t-2xl sm:hidden'>
      {footerLinks?.map((footerLink) => (
        <div
          onClick={() => {
            footerLink?.path !== '/profile' && push(footerLink?.path);
          }}
          className='flex flex-col gap-1'
          key={footerLink?.header}
        >
          <Image
            src={
              pathname === footerLink?.path
                ? footerLink?.filledIcon
                : footerLink?.icon
            }
            alt={footerLink?.header}
            height={26}
            className='m-auto'
          />
          <header
            className={`text-xs  ${
              pathname === footerLink?.path
                ? 'font-normal text-yellow-y1'
                : 'font-light'
            }`}
          >
            {footerLink?.header}
          </header>
        </div>
      ))}
    </footer>
  );
};

export default Footer;
