import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function WhyMontu() {
  return (
    <div className='bg-[#F7F7F7] py-[3rem] md:py-[5rem]'>
      <div className='container'>
        <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-[2rem]'>
          <div className='flex flex-col gap-[2rem]'>
            <h1 className='text-[32px] font-[600] leading-[35px] text-center'>
              ¿Por qué Montu?
            </h1>
            <p className='text-[16px] font-[500] leading-[22px] text-[#717D96]'>
              Nuestra plataforma integrada te ahorra horas de trabajo, con
              creadores verificados y resultados garantizados.
            </p>
            <div className='flex items-center gap-[1rem]'>
              <span className='text-[30px]'>🤖</span>
              <h2 className='text-[20px] md:text-[24px] font-[600] leading-[24px]'>
                Automatizaciones que te ahorrarán horas de trabajo.
              </h2>
            </div>
            <div className='flex items-center gap-[1rem]'>
              <span className='text-[30px]'>✅</span>
              <h2 className='text-[20px] md:text-[24px] font-[600] leading-[24px]'>
                Creadores verificados y calificados.
              </h2>
            </div>
            <div className='flex items-center gap-[1rem]'>
              <span className='text-[30px]'>📈</span>
              <h2 className='text-[20px] md:text-[24px] font-[600] leading-[24px]'>
                Recomendaciones a medida y resultados garantizados.
              </h2>
            </div>
          </div>
          <div className='flex justify-center items-center w-full'>
            <Image
              src='/images/mobile.png'
              width={700}
              height={700}
              alt=''
              className='w-full'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
