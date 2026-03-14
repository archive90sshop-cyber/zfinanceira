
import React from 'react';
import { BANKS } from '../constants';

const TrustSection: React.FC = () => {
  const displayBanks = BANKS.slice(0, 4);

  return (
    <section className="py-12 md:py-20 bg-white border-y border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {[
            { 
              icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', 
              label: 'Segurança', 
              sub: 'Lotus+ 256 bits', 
              iconColor: 'text-[#10B981]'
            },
            { 
              icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', 
              label: 'Autorizado', 
              sub: 'Correspondente Oficial', 
              iconColor: 'text-[#10B981]'
            },
            { 
              icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', 
              label: 'Suporte 24h', 
              sub: 'Especialistas no WhatsApp', 
              iconColor: 'text-[#10B981]'
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-6 md:p-8 rounded-xl border border-gray-200 flex items-center gap-6 group">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-[#10B981]/10 flex items-center justify-center shrink-0">
                <svg className={`w-8 h-8 md:w-10 ${item.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <path d={item.icon} strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="space-y-1">
                <h4 className="text-lg md:text-xl font-bold text-[#004088] tracking-tight uppercase">{item.label}</h4>
                <p className="text-gray-600 font-bold text-[10px] md:text-xs uppercase tracking-widest">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 lg:gap-20">
          {displayBanks.map(bank => (
            <img 
              key={bank.name} 
              src={bank.logoUrl} 
              alt={bank.name} 
              className="h-10 md:h-12 lg:h-16 object-contain grayscale hover:grayscale-0 transition-all cursor-help" 
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;