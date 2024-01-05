'use client';

import Image from 'next/image';
import React from 'react';
import { Slide, Bounce } from 'react-awesome-reveal';

interface Props {
  imageSrc: string;
  title: string;
}

export default function Discover() {
  return (
    <div className='py-[3rem] md:py-[5rem] bg-[#F7F7F7]'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[4rem] place-items-center'>
          {/* Slide animations for images */}
          <Slide direction='left' triggerOnce>
            <div className='flex gap-[1rem]'>
              <Image src='/images/image3.png' width={300} height={623} alt='' />
              <Image src='/images/image4.png' width={300} height={623} alt='' />
            </div>
          </Slide>

          {/* Bounce animation for the text content */}
          <Bounce triggerOnce>
            <div className='flex flex-col gap-[2rem]'>
              <h1 className='text-[32px] sm:text-left text-center font-[600] leading-[35px] text-[--blackColor]'>
                Descubre todo el poder de las integraciones
              </h1>
              <p className='text-[16px] sm:text-left text-center font-[500] leading-[24px] text-[#717D96]'>
                Te ofrecemos la primera app 100% integrada con Meta y TikTok,
                para que tengas información al detalle de todos tus
                colaboradores.
              </p>
              <IntegrationDetails
                imageSrc='/images/meta.png'
                title='Meta Business Suite'
              />
              <IntegrationDetails
                imageSrc='/images/insta.png'
                title='Instagram Graph'
              />
              <IntegrationDetails
                imageSrc='/images/tiktoc.png'
                title='TikTok for Business'
              />
            </div>
          </Bounce>
        </div>
      </div>
    </div>
  );
}

function IntegrationDetails({ imageSrc, title }: Props) {
  return (
    <div className='flex items-center gap-[1rem]'>
      <Image src={imageSrc} width={50} height={50} alt='integration icon' />
      <h2 className='text-[24px] font-[600] leading-[26px]'>{title}</h2>
    </div>
  );
}
