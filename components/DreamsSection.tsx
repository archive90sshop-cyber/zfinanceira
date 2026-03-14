
import React from 'react';
import { DREAMS } from '../constants';

const DreamsSection: React.FC = () => (
  <section className="py-12 md:py-20 bg-white border-t border-gray-100">
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#004088] mb-4">Como usar seu Pix?</h2>
        <p className="text-sm md:text-base text-gray-500 font-bold uppercase tracking-widest">Transforme seu limite na solução que você precisa hoje</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {DREAMS.map(dream => (
          <div key={dream.id} className="bg-white rounded-xl overflow-hidden border border-gray-200 flex flex-col shadow-sm hover:shadow-md transition-all">
            <div className="h-48 md:h-56 overflow-hidden relative">
               <img 
                src={dream.imageUrl} 
                className="w-full h-full object-cover" 
                alt={dream.title}
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 bg-[#004088] p-3 rounded-lg shadow-lg text-white">
                <span className="text-xl md:text-2xl">{dream.icon}</span>
              </div>
            </div>
            
            <div className="p-6 md:p-8 flex-grow flex flex-col">
              <h3 className="font-bold text-xl md:text-2xl text-[#004088] mb-3">
                {dream.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {dream.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 md:mt-16 text-center">
        <p className="text-gray-400 font-bold text-xs md:text-sm uppercase tracking-widest">
          Não é dívida nova, é inteligência financeira com o limite que você já tem.
        </p>
      </div>
    </div>
  </section>
);

export default DreamsSection;