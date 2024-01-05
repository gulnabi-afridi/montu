'use client';

import Image from 'next/image';
import React from 'react';
import { Slide, Fade } from 'react-awesome-reveal';

interface props {
  bgColor: string;
  imageSrc: string;
  testimonial: string;
  author: string;
}

export default function OurClients() {
  return (
    <div className='py-[3rem] md:py-[5rem]'>
      <div className='container flex-col gap-[1rem]'>
        {/* Fade animation for the title and introduction */}
        <Fade triggerOnce>
          <h1 className='text-[32px] sm:text-left text-center font-[600] leading-[35px]'>
            Nuestros clientes no lo pueden creer.
          </h1>
          <p className='text-[16px] font-[500] sm:text-left text-center leading-[22px] text-[#717D96] mb-[1rem]'>
            Mira lo que nuestros usuarios dicen sobre Montu.
          </p>
        </Fade>

        {/* Slide animations for each client testimonial */}
        <Slide direction='left' triggerOnce>
          <ClientTestimonial
            bgColor='bg-[#DED2FF]'
            imageSrc='/images/person1.svg'
            testimonial='Montu me ahorra horas de trabajo y nos permite conectar con nuestro público objetivo.'
            author='Pedro Fernández, Marketing Specialist.'
          />
        </Slide>

        <Slide direction='right' triggerOnce>
          <ClientTestimonial
            bgColor='bg-[#FFEEF7]'
            imageSrc='/images/person2.svg'
            testimonial='Montu fue el empujón que necesitábamos para atrevernos a hacer campañas con influencers. Los resultados nos han sorprendido.'
            author='Isabel Muñoz, Emprendedora.'
          />
        </Slide>

        <Slide direction='left' triggerOnce>
          <ClientTestimonial
            bgColor='bg-[#FFEFD4]'
            imageSrc='/images/person3.svg'
            testimonial='Montu nos permite ordenar el trabajo con grandes volúmenes de creadores de contenido a través de un canal directo.'
            author='Rosa Salinas, ejecutiva agencia de marketing digital.'
          />
        </Slide>
      </div>
    </div>
  );
}

function ClientTestimonial({ bgColor, imageSrc, testimonial, author }: props) {
  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-[1rem] ${bgColor} p-[1.5rem] rounded-[8px]`}
    >
      <div className='w-[150px] h-[150px] flex items-center justify-center'>
        <Image
          src={imageSrc}
          width={150}
          height={150}
          alt=''
          className='w-full'
        />
      </div>
      <div className='flex flex-col gap-[10px]'>
        <h2 className='text-[24px] font-[600] leading-[26px] text-center md:text-left'>
          {testimonial}
        </h2>
        <p className='text-[16px] font-[500] leading-[22px] text-center md:text-left'>
          {author}
        </p>
      </div>
    </div>
  );
}
