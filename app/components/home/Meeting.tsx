import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function Meeting() {
  return (
    <div className='py-[3rem] md:py-[5rem] bg-[#F7F7F7]'>
      <div className='container flex-col gap-[1rem]'>
        <h1 className='text-[32px] font-[600] leading-[35px]'>
          ¡Empieza a colaborar hoy!
        </h1>
        <p className='text-[16px] font-[500] leading-[22px] text-[#717D96]'>
          Agendemos una reunión y comienza a colaborar a través de Montu.
        </p>
        <div className='flex flex-col sm:flex-row justify-between gap-[2rem] mt-[1rem]'>
          <input
            type='text'
            className='p-[12px] border-2 outline-none rounded-[5px] border-[#CBD2E0] w-full sm:w-[80%]'
          />
          <button className='text-[16px] font-[600] leading-[20px] text-white list-none bg-[--primaryColor] outline-none rounded-[6px] py-[16px] px-[24px] w-fit'>
            ¡Empecemos! 🚀
          </button>
        </div>
      </div>
    </div>
  );
}
