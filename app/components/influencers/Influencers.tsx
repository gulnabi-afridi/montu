'use client';

import React from 'react';
import Image from 'next/image';
import { Fade, Slide } from 'react-awesome-reveal';
import Link from 'next/link';

const Influencers = () => {
  return (
    <div className='py-[3rem] md:py-[5rem]'>
      <div className='container flex-col md:flex-row gap-[2rem] lg:gap-[2rem] items-center justify-center'>
        <Slide direction='left' duration={1000} triggerOnce>
          <div className='flex flex-col gap-[20px] items-center md:items-start md:w-[500px]'>
            <h1 className='text-[40px] font-[600] leading-[50px] text-[--blackColor] text-center md:text-left'>
              Create your Freedom.
            </h1>

            <p className='text-[16px] font-[500] leading-[24px] text-[#2D3648] w-full md:w-[60%] text-center md:text-left'>
              La primera aplicación con la cual podrás colaborar con marcas,
              agencias y otros creadores.
            </p>

            <div className='flex flex-wrap items-center gap-[1rem] justify-center'>
              <Link href='/'>
                <Image
                  src='/images/apple.svg'
                  width={150}
                  height={52}
                  alt='apple'
                ></Image>
              </Link>
              <Link href='#'>
                <Image
                  src='/images/playstore.svg'
                  width={150}
                  height={52}
                  alt='playstore'
                ></Image>
              </Link>
            </div>
          </div>
        </Slide>

        <Slide direction='right' duration={1000} triggerOnce>
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
        </Slide>
      </div>
    </div>
  );
};

export default Influencers;
