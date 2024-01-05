import React from 'react';
import { Fade } from 'react-awesome-reveal';

export default function Collaboration() {
  return (
    <div className='py-[3rem] md:py-[5rem]'>
      <div className='container flex-col gap-[4rem]'>
        <div className='flex flex-col gap-[10px] mx-auto md:w-[57%]'>
          <h1 className='text-[32px] font-[600] leading-[35px]'>
            Empieza a colaborar hoy mismo a través de campañas con impacto real
          </h1>
          <p className='text-[16px] font-[500] leading-[22px] text-[#717D96]'>
            Desarrolla colaboraciones con impacto en las ventas de tu negocio o
            las de tus clientes.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1.5rem] place-items-center'>
          <div className='bg-[#DED2FF] max-w-[420px] w-full px-[15px] md:px-[24px] py-[50px] md:py-[100px] flex flex-col gap-[1.5rem] rounded-[8px]'>
            <h1 className='text-[28px] md:text-[32px] font-[600] leading-[35px] text-center md:text-left'>
              🚀 Crea tu campaña
            </h1>
            <p className='text-[16px] font-[400] leading-[22px] text-center md:text-left'>
              Completa el brief de la campaña y lanza tu campaña en nuestra app,
              libre de cobros y comisiones.
            </p>
          </div>
          <div className='bg-[#FFEEF7] max-w-[420px] w-full px-[15px] md:px-[24px] py-[50px] md:py-[100px] flex flex-col gap-[1.5rem] rounded-[8px]'>
            <h1 className='text-[28px] md:text-[32px] font-[600] leading-[35px] text-center md:text-left'>
              📱 Elige y colabora
            </h1>
            <p className='text-[16px] font-[400] leading-[22px] text-center md:text-left'>
              ¿No sabes cómo elegir? Utiliza nuestras recomendaciones basadas en
              datos de audiencia y engagement.
            </p>
          </div>
          <div className='bg-[#FFEFD4] max-w-[420px] w-full px-[15px] md:px-[24px] py-[50px] md:py-[100px] flex flex-col gap-[1.5rem] rounded-[8px]'>
            <h1 className='text-[28px] md:text-[32px] font-[600] leading-[35px] text-center md:text-left'>
              ⭐ Califica y repite
            </h1>
            <p className='text-[16px] font-[400] leading-[22px] text-center md:text-left'>
              Cuéntanos sobre tu experiencia y vuelve a colaborar. Contrata
              nuestros planes mensuales para colaboraciones ilimitadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
