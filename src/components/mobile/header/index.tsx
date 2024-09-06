import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import LensIcon from '../../../../public/assets/Lens.svg';
import LeftArrowIcon from '../../../../public/assets/leftArrow.svg';

const MobileHeader = ({
  children,
  className,
  Icon,
  href = '/',
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  Icon?: any;
  href?: string;
}>) => {
  return (
    <section
      className={`flex sm:hidden py-3 px-4 justify-between sticky top-0 bg-white z-10 shadow ${className}`}
    >
      <div className='flex gap-5 text-xs items-center '>
        <Link href={href}>
          <Image src={LeftArrowIcon} alt="arrow left" height={20}/>
        </Link>
        <div>
          {children}
          {/* <header className='text-base font-light'>Now Showing</header>
          <header>Mumbai | 46 Movies</header> */}
        </div>
      </div>
      <Image src={Icon || LensIcon} alt='lens' />
    </section>
  );
};

export default MobileHeader;
