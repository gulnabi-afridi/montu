'use client';

import { Bounce, Slide } from 'react-awesome-reveal';
import Image from 'next/image';

function Hero() {
  return (
    <div className='py-[3rem] w-full overflow-hidden'>
      <div className='w-full grid lg:grid-cols-5 gap-[2rem] 2xl:h-[30rem] items-center max-w-[1300px] px-[10px] mx-auto 2xl:relative'>
        {/* Bounce animation for the text */}
        <Bounce cascade damping={0.5} triggerOnce className='lg:col-span-2'>
          <div className='flex lg:col-span-2 flex-col gap-[1rem] items-center md:items-start'>
            <h1 className='text-[40px] font-[600] leading-[50px] text-[--blackColor] text-center md:text-left'>
              Vender con
              <span className='text-[--primaryColor]'>influencers</span> nunca
              fue más simple
            </h1>
            <p className='text-[16px] font-[500] leading-[24px] text-[#2D3648] text-center md:text-left'>
              Conoce la primera solución global de marketing con influencers.
              Diseñada para empresas, agencias y creadores de contenido.
            </p>
            <button className='text-[16px] font-[600] leading-[20px] w-fit text-white list-none bg-[--primaryColor] outline-none rounded-[6px] py-[16px] px-[24px]'>
              ¡Empecemos! 🚀
            </button>
          </div>
        </Bounce>

        {/* Slide animation for the image */}
        <Slide
          direction='right'
          triggerOnce
          className='flex lg:col-span-3 gap-[1rem] w-full relative right-0 lg:right-[-5rem] 2xl:top-0'
        >
          <div className='w-full lg:block flex justify-center items-center'>
            <div className='w-full max-w-[300px] sm:max-w-[300px] sm:w-full md:max-w-[750px] md:w-full lg:max-w-[800px] lg:w-full xl:max-w-[900px] 2xl:max-w-[1000px] 2xl:w-full xl:w-full h-[270px] sm:h-[410px] md:h-[550px] lg:h-[450px] xl:h-[600px] 2xl:h-[500px]'>
              <Image
                src='/images/iphone15.png'
                fill
                alt=''
                className='object-cover'
              />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Hero;
