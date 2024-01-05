import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function Benefits() {
  return (
    <div className='py-[3rem] md:py-[5rem]'>
      <div className='container'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[4rem] place-items-center'>
          <div className='flex flex-col gap-[2rem]'>
            <h1 className='text-[32px] font-[600] leading-[35px] text-[--blackColor]'>
              Todos los beneficios del marketing de influencers en un solo lugar
            </h1>
            <p className='text-[16px] font-[500] leading-[24px] text-[#717D96]'>
              Gracias al poder de nuestra tecnología, podemos darte acceso a
              mejores colaboraciones, a un precio que no rompe tu bolsillo.
            </p>
            <div className='flex items-center gap-[1rem]'>
              <span className='text-[30px]'>🥇</span>
              <h2 className='text-[24px] font-[600] leading-[26px]'>
                Mejora tu posicionamiento
              </h2>
            </div>
            <div className='flex items-center gap-[1rem]'>
              <span className='text-[30px]'>🤝</span>
              <h2 className='text-[24px] font-[600] leading-[26px]'>
                Genera confianza y credibilidad
              </h2>
            </div>
            <div className='flex items-center gap-[1rem]'>
              <span className='text-[30px]'>🎯</span>
              <h2 className='text-[24px] font-[600] leading-[26px]'>
                Involucra a tu mercado objetivo
              </h2>
            </div>
          </div>
          <div className='flex gap-[1rem]'>
            <Image
              src='/images/image1.png'
              width={300}
              height={623}
              alt=''
            ></Image>
            <Image
              src='/images/image2.png'
              width={300}
              height={623}
              alt=''
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
