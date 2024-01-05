import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function Discover() {
  return (
    <div className='py-[3rem] md:py-[5rem] bg-[#F7F7F7]'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[4rem] place-items-center'>
          <div className='flex gap-[1rem]'>
            <Image
              src='/images/image3.png'
              width={300}
              height={623}
              alt=''
            ></Image>
            <Image
              src='/images/image4.png'
              width={300}
              height={623}
              alt=''
            ></Image>
          </div>
          <div className='flex flex-col gap-[2rem]'>
            <h1 className='text-[32px] font-[600] leading-[35px] text-[--blackColor]'>
              Descubre todo el poder de las integraciones
            </h1>
            <p className='text-[16px] font-[500] leading-[24px] text-[#717D96]'>
              Te ofrecemos la primera app 100% integrada con Meta y TikTok, para
              que tengas información al detalle de todos tus colaboradores.
            </p>
            <div className='flex items-center gap-[1rem]'>
              <Image
                src='/images/meta.png'
                width={50}
                height={50}
                alt='apple'
              ></Image>
              <h2 className='text-[24px] font-[600] leading-[26px]'>
                Meta Business Suite
              </h2>
            </div>
            <div className='flex items-center gap-[1rem]'>
              <Image
                src='/images/insta.png'
                width={50}
                height={50}
                alt='apple'
              ></Image>
              <h2 className='text-[24px] font-[600] leading-[26px]'>
                Instagram Graph
              </h2>
            </div>
            <div className='flex items-center gap-[1rem]'>
              <Image
                src='/images/tiktoc.png'
                width={50}
                height={50}
                alt='apple'
              ></Image>
              <h2 className='text-[24px] font-[600] leading-[26px]'>
                TikTok for Business
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
