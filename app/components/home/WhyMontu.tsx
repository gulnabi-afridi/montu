'use client';

import Image from 'next/image';
import React from 'react';
import { Fade, Zoom, Slide, Bounce } from 'react-awesome-reveal';

interface Props {
  icon: string;
  title: string;
}

export default function WhyMontu() {
  return (
    <div className='bg-[#F7F7F7] py-[3rem] md:py-[5rem]'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem]'>
          {/* Fade animation for the text content */}
          <Fade cascade damping={0.5} triggerOnce>
            <div className='flex flex-col gap-[2rem]'>
              <Bounce triggerOnce>
                <h1 className='text-[32px] font-[600] leading-[35px] text-center'>
                  ¿Por qué Montu?
                </h1>
              </Bounce>
              <div className='flex flex-col gap-[2rem]'>
                <Slide direction='up' triggerOnce>
                  <p className='text-[16px] sm:text-left text-center font-[500] leading-[22px] text-[#717D96]'>
                    Nuestra plataforma integrada te ahorra horas de trabajo, con
                    creadores verificados y resultados garantizados.
                  </p>
                  <Feature
                    icon='🤖'
                    title='Automatizaciones que te ahorrarán horas de trabajo.'
                  />
                </Slide>
                <Slide direction='up' triggerOnce>
                  <Feature
                    icon='✅'
                    title='Creadores verificados y calificados.'
                  />
                </Slide>
                <Slide direction='up' triggerOnce>
                  <Feature
                    icon='📈'
                    title='Recomendaciones a medida y resultados garantizados.'
                  />
                </Slide>
              </div>
            </div>
          </Fade>

          {/* Zoom animation for the image */}
          <Zoom triggerOnce>
            <div className='flex justify-center items-center w-full'>
              <Image
                src='/images/mobile.png'
                width={700}
                height={700}
                alt=''
                className='w-full'
              />
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  );
}

function Feature({ icon, title }: Props) {
  return (
    <div className='flex items-center gap-[1rem]'>
      <span className='text-[30px]'>{icon}</span>
      <h2 className='text-[20px] md:text-[24px] font-[600] leading-[24px]'>
        {title}
      </h2>
    </div>
  );
}
