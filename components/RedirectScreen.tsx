
import React, { useEffect, useState } from 'react';
import { WHATSAPP_LINK, LOGO_URL } from '../constants';

const RedirectScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Iniciando conexão segura...",
    "Validando protocolo Lotus+...",
    "Ambiente 100% Criptografado...",
    "Redirecionando para o WhatsApp..."
  ];

  useEffect(() => {
    const originalTitle = document.title;
    document.title = "Z Financeira - Conexão Segura";

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    const msgTimer = setInterval(() => {
      setMessageIndex((prev) => (prev < messages.length - 1 ? prev + 1 : prev));
    }, 750);

    const redirectTimer = setTimeout(() => {
      window.location.href = WHATSAPP_LINK;
    }, 3000);

    return () => {
      clearInterval(timer);
      clearInterval(msgTimer);
      clearTimeout(redirectTimer);
      document.title = originalTitle;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-between p-6 md:p-12 text-center overflow-hidden font-sans">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-50 to-white pointer-events-none"></div>

      <div className="w-full max-w-sm flex flex-col items-center pt-10 relative z-10">
        <img 
          src={LOGO_URL} 
          alt="Z Financeira" 
          className="h-10 md:h-14 w-auto object-contain grayscale brightness-0 opacity-90" 
        />
        <div className="mt-4 flex items-center gap-2 bg-gray-100 px-4 py-1.5 rounded-full border border-gray-200 shadow-sm">
           <svg className="w-3.5 h-3.5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
             <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
           </svg>
           <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Conexão Blindada</span>
        </div>
      </div>

      <div className="w-full max-w-xs space-y-8 md:space-y-12 relative z-10">
        <div className="relative flex justify-center">
          <div className="relative w-36 h-36 md:w-48 md:h-48">
            <svg className="w-full h-full text-gray-100" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" fill="none" stroke="currentColor" strokeWidth="3" />
              <circle 
                cx="50" cy="50" r="44" 
                fill="none" 
                stroke="#004088" 
                strokeWidth="4" 
                strokeDasharray={`${progress * 2.76} 276`}
                strokeLinecap="round"
                className="transition-all duration-300 ease-linear transform -rotate-90 origin-center"
              />
            </svg>
            
            <div className="absolute inset-0 flex items-center justify-center">
              {progress < 100 ? (
                <div className="flex flex-col items-center">
                  <span className="text-3xl md:text-4xl font-bold text-[#004088] tracking-tight">{progress}%</span>
                  <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mt-1">Verificando</span>
                </div>
              ) : (
                <div className="animate-in zoom-in duration-300 flex items-center justify-center">
                   <div className="w-20 h-20 bg-[#10B981] rounded-full flex items-center justify-center shadow-lg shadow-[#10B981]/20">
                     <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="4">
                       <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                     </svg>
                   </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="h-6 flex items-center justify-center">
            <p className="text-sm md:text-lg font-bold text-[#004088] uppercase tracking-widest animate-pulse">
              {messages[messageIndex]}
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-4 pt-2">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 opacity-60">
                <img src="https://i.imgur.com/pi419yB.png" alt="Selo RA" className="h-7 grayscale" />
              </div>
              <div className="w-px h-5 bg-gray-200"></div>
              <div className="flex items-center gap-2">
                 <svg className="w-5 h-5 text-[#004088]" fill="currentColor" viewBox="0 0 20 20">
                   <path d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001z" />
                 </svg>
                 <span className="text-[10px] font-bold text-[#004088] uppercase tracking-widest">SSL 256 bits</span>
              </div>
            </div>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Protocolo de Segurança Bancária Ativo</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-sm space-y-6 pb-10 relative z-10">
        <div className="p-5 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-[11px] md:text-xs text-gray-600 font-medium leading-relaxed">
            Você está sendo redirecionado para um canal oficial da <br/>
            <span className="text-[#004088] font-bold">Z Financeira</span>. Seus dados estão protegidos por criptografia de ponta a ponta.
          </p>
        </div>
        
        <div className="space-y-2">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">
            Z Financeira LTDA • CNPJ: 49.522.539/0001-08
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#10B981] animate-ping"></div>
            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">Ambiente Monitorado e Seguro</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RedirectScreen;
