
import React, { useState } from 'react';
import { FINAL_LINK } from '../constants';

const Calculator: React.FC = () => {
  const [amount, setAmount] = useState(1500);

  const socialPhotos = [
    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&h=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&h=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&h=100&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&h=100&auto=format&fit=crop"
  ];

  const formatCurrency = (val: number) => 
    val.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });

  const handleAction = () => {
    window.location.href = FINAL_LINK;
  };

  return (
    <div id="simulador" className="p-5 md:p-8 rounded-xl shadow-xl border border-gray-200 w-full relative z-10 mx-auto max-w-md overflow-hidden bg-white">
      <div className="absolute -top-16 -right-16 w-32 h-32 bg-[#004088]/5 rounded-full blur-[50px]"></div>

      <div className="space-y-5 md:space-y-6 relative z-10">
        <div className="space-y-2">
          <div className="flex flex-col items-center gap-0.5">
            <label className="text-[8px] font-bold text-gray-400 uppercase tracking-widest leading-none">Simule sua Portabilidade</label>
            <span className="text-4xl md:text-5xl xl:text-6xl font-bold text-[#004088] leading-none tracking-tight">
              {formatCurrency(amount)}
            </span>
          </div>
          <div className="pt-2 px-1">
            <input 
              type="range" 
              min="100" 
              max="15000" 
              step="100" 
              value={amount} 
              onChange={(e) => setAmount(Number(e.target.value))} 
              className="w-full h-1 accent-[#004088]" 
            />
          </div>
        </div>

        <div className="bg-gray-50 p-4 md:p-5 rounded-xl border border-gray-200 flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <span className="text-[8px] font-bold uppercase text-gray-400 block tracking-widest">Liberação</span>
              <div className="text-lg md:text-xl font-bold text-[#10B981]">Na Hora</div>
            </div>
            <div className="text-right space-y-0.5">
              <span className="text-[8px] font-bold uppercase text-gray-400 block tracking-widest">Até 12x de</span>
              <div className="text-lg md:text-xl font-bold text-[#004088]">R$ {(amount/12 + amount*0.05).toFixed(0)}</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <button 
            onClick={handleAction}
            className="group relative flex flex-col items-center justify-center w-full bg-[#004088] text-white font-bold py-4 md:py-5 rounded-xl shadow-md hover:bg-[#003366] transition-all uppercase tracking-widest text-[10px] md:text-sm"
          >
            <span>SIMULAR AGORA</span>
          </button>

          <div className="flex items-center justify-center gap-3 pt-3 border-t border-gray-100">
            <div className="flex -space-x-1.5">
              {socialPhotos.map((photo, i) => (
                <img 
                  key={i}
                  className="w-6 h-6 md:w-8 md:h-8 rounded-full border-2 border-white object-cover"
                  src={photo}
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-[8px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
              <span className="text-[#004088]">+5K PESSOAS</span> ATENDIDAS ESTE MÊS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
