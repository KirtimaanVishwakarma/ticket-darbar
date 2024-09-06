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
  iconFilter = '',
  iconHeight,
  iconWidth,
  otherChildren: OtherChild,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
  Icon?: any;
  href?: string;
  iconFilter?: string;
  iconHeight?: number;
  iconWidth?: number;
  otherChildren?: any;
}>) => {
  return (
    <section className={`sm:hidden sticky top-0 bg-white z-10 shadow `}>
      <div className={`flex py-3 px-4 justify-between ${className}`}>
        <div className='flex gap-5 text-xs items-center '>
          <Link href={href}>
            <Image src={LeftArrowIcon} alt='arrow left' height={20} />
          </Link>
          <div>
            {children}
            {/* <header className='text-base font-light'>Now Showing</header>
          <header>Mumbai | 46 Movies</header> */}
          </div>
        </div>
        <Image
          src={Icon || LensIcon}
          alt='lens'
          className={iconFilter}
          height={iconHeight}
        />
      </div>
      {OtherChild && <OtherChild />}
    </section>
  );
};

export default MobileHeader;
