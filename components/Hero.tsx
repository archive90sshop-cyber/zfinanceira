
import React from 'react';
import { Link } from 'react-router-dom';
import Calculator from './Calculator';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-fit lg:h-[75vh] xl:h-[70vh] flex items-center overflow-hidden bg-white pt-12 pb-12 lg:pt-0 lg:pb-0 border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5 lg:space-y-6 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4">
              <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 px-3 py-1 rounded-full">
                <span className="flex h-1 w-1 rounded-full bg-[#004088] animate-pulse"></span>
                <span className="text-[8px] md:text-[9px] font-bold text-[#004088] uppercase tracking-widest">Antecipação Imediata</span>
              </div>
              
              <Link to="/portabilidade" className="inline-flex items-center gap-2 bg-[#004088]/10 border border-[#004088]/20 px-3 py-1 rounded-full hover:bg-[#004088]/20 transition-colors group">
                <span className="flex h-1 w-1 rounded-full bg-[#004088]"></span>
                <span className="text-[8px] md:text-[9px] font-bold text-[#004088] uppercase tracking-widest">Portabilidade de Consignado</span>
                <span className="text-[8px] md:text-[9px] font-bold text-white bg-[#004088] px-1.5 rounded-sm">NOVO</span>
              </Link>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-[#004088]">
              Limite no cartão?<br />
              <span className="inline-block bg-[#10B981] text-white px-2 md:px-3 py-0.5 mt-1">
                Dinheiro na conta. 💸
              </span>
            </h1>
            
            <p className="text-sm md:text-lg xl:text-xl text-gray-600 max-w-lg mx-auto lg:mx-0 font-medium leading-snug">
              Transforme seu limite em Pix agora e <br className="hidden lg:block" />
              <span className="text-[#004088] font-bold">pague apenas na próxima fatura.</span>
            </p>

            <div className="lg:hidden mt-6 max-w-sm mx-auto">
              <Calculator />
            </div>

            <div className="hidden lg:flex items-center gap-8 xl:gap-12 pt-1">
              <div className="flex flex-col gap-0">
                <span className="text-xl xl:text-2xl font-bold text-[#004088] tracking-tight">Instantâneo</span>
                <span className="text-[7px] xl:text-[8px] font-bold text-gray-400 uppercase tracking-widest">Via Pix</span>
              </div>
              <div className="w-px h-8 bg-gray-200"></div>
              <div className="flex flex-col gap-0">
                <span className="text-xl xl:text-2xl font-bold text-[#004088] tracking-tight">Certificado</span>
                <span className="text-[7px] xl:text-[8px] font-bold text-gray-400 uppercase tracking-widest">Protocolo Lotus+</span>
              </div>
            </div>
          </div>
          
          <div className="hidden lg:block lg:col-span-5 relative">
            <div className="max-w-[420px] ml-auto">
              <Calculator />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
