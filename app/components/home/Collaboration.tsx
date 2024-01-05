'use client';

import React from 'react';
import { Fade, Bounce } from 'react-awesome-reveal';

interface Props {
  bgColor: string;
  emoji: string;
  title: string;
  des: string;
}

export default function Collaboration() {
  return (
    <div className='py-[3rem] md:py-[5rem]'>
      <div className='container flex-col gap-[4rem]'>
        {/* Fade animation for the heading and paragraph */}
        <Fade triggerOnce>
          <div className='flex flex-col gap-[10px] mx-auto md:w-[57%]'>
            <h1 className='text-[32px] font-[600] leading-[35px]'>
              Empieza a colaborar hoy mismo a través de campañas con impacto
              real
            </h1>
            <p className='text-[16px] font-[500] leading-[22px] text-[#717D96]'>
              Desarrolla colaboraciones con impacto en las ventas de tu negocio
              o las de tus clientes.
            </p>
          </div>
        </Fade>

        {/* Grid with Bounce animations for each content box */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] place-items-center'>
          <Bounce triggerOnce>
            <ContentBox
              bgColor='bg-[#DED2FF]'
              emoji='🚀'
              title='Crea tu campaña'
              des='Completa el brief de la campaña y lanza tu campaña en nuestra app, libre de cobros y comisiones.'
            />
          </Bounce>
          <Bounce triggerOnce>
            <ContentBox
              bgColor='bg-[#FFEEF7]'
              emoji='📱'
              title='Elige y colabora'
              des='¿No sabes cómo elegir? Utiliza nuestras recomendaciones basadas en datos de audiencia y engagement.'
            />
          </Bounce>
          <Bounce triggerOnce>
            <ContentBox
              bgColor='bg-[#FFEFD4]'
              emoji='⭐'
              title='Califica y repite'
              des='Cuéntanos sobre tu experiencia y vuelve a colaborar. Contrata nuestros planes mensuales para colaboraciones ilimitadas.'
            />
          </Bounce>
        </div>
      </div>
    </div>
  );
}

function ContentBox({ bgColor, emoji, title, des }: Props) {
  return (
    <div
      className={`${bgColor} max-w-[420px] w-full px-[15px] md:px-[24px] py-[50px] md:py-[100px] flex flex-col gap-[1.5rem] rounded-[8px]`}
    >
      <h1 className='text-[28px] md:text-[32px] font-[600] leading-[35px] text-center md:text-left'>
        {emoji} {title}
      </h1>
      <p className='text-[16px] font-[400] leading-[22px] text-center md:text-left'>
        {des}
      </p>
    </div>
  );
}
