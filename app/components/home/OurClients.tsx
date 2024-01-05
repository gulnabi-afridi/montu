import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function OurClients() {
  return (
    <div className='py-[3rem] md:py-[5rem]'>
      <div className='container flex-col gap-[1rem]'>
        <h1 className='text-[32px] font-[600] leading-[35px]'>
          Nuestros clientes no lo pueden creer.
        </h1>
        <p className='text-[16px] font-[500] leading-[22px] text-[#717D96] mb-[1rem]'>
          Mira lo que nuestros usuarios dicen sobre Montu.
        </p>
        <div className='flex flex-col md:flex-row items-center gap-[1rem] bg-[#DED2FF] p-[1.5rem] rounded-[8px]'>
          <div className='w-[150px] md:w-[100px] h-[150px] md:h-[100px] flex items-center justify-center'>
            <Image
              src='/images/person1.svg'
              width={150}
              height={150}
              alt=''
              className='w-full'
            />
          </div>
          <div className='flex flex-col gap-[10px]'>
            <h2 className='text-[24px] font-[600] leading-[26px] text-center md:text-left'>
              “Montu me ahorra horas de trabajo y nos permite conectar con
              nuestro público objetivo”.
            </h2>
            <p className='text-[16px] font-[500] leading-[22px] text-center md:text-left'>
              Pedro Fernández, Marketing Specialist.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center gap-[1rem] bg-[#FFEEF7] p-[1.5rem] rounded-[8px] my-[1rem]'>
          <div className='w-[150px] h-[150px] flex items-center justify-center'>
            <Image
              src='/images/person2.svg'
              width={150}
              height={150}
              alt=''
              className='w-full'
            />
          </div>
          <div className='flex flex-col gap-[10px]'>
            <h2 className='text-[24px] font-[600] leading-[26px] text-center md:text-left'>
              “Montu fue el empujón que necesitábamos para atrevernos a hacer
              campañas con influencers. Los resultados nos han sorprendido”.
            </h2>
            <p className='text-[16px] font-[500] leading-[22px] text-center md:text-left'>
              Isabel Muñoz, Emprendedora.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center gap-[1rem] bg-[#FFEFD4] p-[1.5rem] rounded-[8px]'>
          <div className='w-[150px] h-[150px] flex items-center justify-center'>
            <Image
              src='/images/person3.svg'
              width={150}
              height={150}
              alt=''
              className='w-full'
            />
          </div>
          <div className='flex flex-col gap-[10px]'>
            <h2 className='text-[24px] font-[600] leading-[26px] text-center md:text-left'>
              “Montu nos permite ordenar el trabajo con grandes volúmenes de
              creadores de contenido a través de un canal directo”.
            </h2>
            <p className='text-[16px] font-[500] leading-[22px] text-center md:text-left'>
              Rosa Salinas, ejecutiva agencia de marketing digital.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
