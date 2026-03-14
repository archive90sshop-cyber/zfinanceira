
import React from 'react';
import { FAQ_DATA, FINAL_LINK } from '../constants';

const FAQ: React.FC = () => {
  const handleAction = () => {
    window.location.href = FINAL_LINK;
  };

  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004088]">Dúvidas Frequentes</h2>
          <p className="text-gray-600 font-bold uppercase tracking-widest text-xs md:text-sm">Tire suas dúvidas e comece sua simulação agora</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {FAQ_DATA.map((item, i) => {
            const isHighlighted = i === 0 || i === 2;
            
            return (
              <details 
                key={i} 
                open={isHighlighted}
                className={`group rounded-xl border overflow-hidden transition-all duration-300 ${
                  isHighlighted 
                    ? 'bg-gray-50 border-[#004088]/30 shadow-sm' 
                    : 'bg-white border-gray-200'
                }`}
              >
                <summary className="p-6 md:p-8 font-bold cursor-pointer flex justify-between items-center list-none hover:bg-gray-50 transition-colors uppercase tracking-tight text-xs md:text-base">
                  <span className={`${isHighlighted ? 'text-[#004088]' : 'text-gray-900'} pr-6`}>
                    {item.question}
                  </span>
                  <span className={`group-open:rotate-180 transition-transform ${isHighlighted ? 'text-[#004088]' : 'text-[#004088]'} bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center border border-gray-200 flex-shrink-0`}>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"/>
                    </svg>
                  </span>
                </summary>
                <div className="px-6 md:px-8 pb-8 pt-2 text-gray-600 leading-relaxed text-sm md:text-lg font-medium border-t border-gray-100 mt-2 pt-6">
                  {item.answer}
                </div>
              </details>
            );
          })}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <button 
            onClick={handleAction}
            className="text-[#004088] font-bold uppercase tracking-widest text-[10px] md:text-xs hover:underline underline-offset-8"
          >
            Ainda tem dúvidas? Falar com especialista agora →
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;