import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function CompanyList() {
  return (
    <div className='bg-[#f7f7f7] py-[3rem] md:py-[5rem]'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[2rem] max-w-[1300px] px-[10px] mx-auto'>
        <Image src='/images/company1.png' width={278} height={53} alt='' />
        <Image src='/images/company2.png' width={278} height={53} alt='' />
        <Image src='/images/company3.png' width={278} height={53} alt='' />
        <Image src='/images/company4.png' width={278} height={53} alt='' />
        <Image src='/images/company5.png' width={278} height={53} alt='' />
      </div>
    </div>
  );
}
