'use client';

import Image from 'next/image';
import React from 'react';
import { Slide, Zoom } from 'react-awesome-reveal';

interface Props {
  icon: string;
  title: string;
}

export default function Benefits() {
  return (
    <div className='py-[3rem] md:py-[5rem]'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[4rem] place-items-center'>
          {/* Slide animations for the text content */}
          <Slide direction='right' triggerOnce>
            <div className='flex flex-col gap-[2rem]'>
              <h1 className='text-[32px] sm:text-left text-center font-[600] leading-[35px] text-[--blackColor]'>
                Todos los beneficios del marketing de influencers en un solo
                lugar
              </h1>
              <p className='text-[16px] sm:text-left text-center font-[500] leading-[24px] text-[#717D96]'>
                Gracias al poder de nuestra tecnología, podemos darte acceso a
                mejores colaboraciones, a un precio que no rompe tu bolsillo.
              </p>
              <BenefitPoint icon='🥇' title='Mejora tu posicionamiento' />
              <BenefitPoint icon='🤝' title='Genera confianza y credibilidad' />
              <BenefitPoint icon='🎯' title='Involucra a tu mercado objetivo' />
            </div>
          </Slide>

          {/* Zoom animations for the images */}
          <Zoom triggerOnce>
            <div className='flex gap-[1rem]'>
              <Image src='/images/image1.png' width={300} height={623} alt='' />
              <Image src='/images/image2.png' width={300} height={623} alt='' />
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

function BenefitPoint({ icon, title }: Props) {
  return (
    <div className='flex items-center gap-[1rem]'>
      <span className='text-[30px]'>{icon}</span>
      <h2 className='text-[24px] font-[600] leading-[26px]'>{title}</h2>
    </div>
  );
}
