'use client';

import Image from 'next/image';
import React from 'react';
import { Fade, Zoom, Bounce } from 'react-awesome-reveal';

export default function CompanyList() {
  return (
    <div className='bg-[#f7f7f7] py-[3rem] md:py-[5rem]'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[2rem] max-w-[1300px] px-[10px] mx-auto'>
        {/* Fade animation for the first image */}
        <Fade triggerOnce>
          <Image src='/images/company1.png' width={278} height={53} alt='' />
        </Fade>

        {/* Zoom animation for the second image */}
        <Zoom triggerOnce>
          <Image src='/images/company2.png' width={278} height={53} alt='' />
        </Zoom>

        {/* Bounce animation for the third image */}
        <Bounce triggerOnce>
          <Image src='/images/company3.png' width={278} height={53} alt='' />
        </Bounce>

        {/* Fade animation for the fourth image */}
        <Fade direction='right' triggerOnce>
          <Image src='/images/company4.png' width={278} height={53} alt='' />
        </Fade>

        {/* Zoom animation for the fifth image */}
        <Zoom triggerOnce>
          <Image src='/images/company5.png' width={278} height={53} alt='' />
        </Zoom>
      </div>
    </div>
  );
}
