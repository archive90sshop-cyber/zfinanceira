
import React from 'react';
import { COMPARISON } from '../constants';

const ComparisonSection: React.FC = () => (
  <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
    <div className="max-w-[1200px] mx-auto px-4 relative">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#004088] mb-4">Comparativo de Mercado</h2>
        <p className="text-gray-600 font-bold uppercase tracking-widest text-[10px] md:text-xs">Por que a Portabilidade da Z Financeira é a melhor opção</p>
      </div>

      <div className="overflow-hidden rounded-xl border border-gray-200 shadow-lg bg-white">
        <div className="grid grid-cols-3 bg-[#004088] text-white">
          <div className="p-4 md:p-6 text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-60 flex items-center">
            Benefício
          </div>
          <div className="p-4 md:p-6 text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white flex items-center justify-center text-center bg-[#10B981]">
            Z Financeira
          </div>
          <div className="p-4 md:p-6 text-[9px] md:text-[10px] font-bold uppercase tracking-widest opacity-60 flex items-center justify-center text-center">
            Outros Bancos
          </div>
        </div>

        <div className="divide-y divide-gray-100">
          {COMPARISON.map((item, idx) => (
            <div key={idx} className="grid grid-cols-3 hover:bg-gray-50 transition-colors">
              <div className="p-4 md:p-6 flex items-center">
                <span className="font-bold text-gray-900 text-[10px] md:text-sm tracking-tight uppercase leading-tight">
                  {item.feature}
                </span>
              </div>
              
              <div className="p-4 md:p-6 bg-[#10B981]/5 flex items-center justify-center text-center">
                <span className="font-bold text-gray-900 text-[10px] md:text-base tracking-tight leading-tight">
                  {item.zFinanceira}
                </span>
              </div>
              
              <div className="p-4 md:p-6 flex items-center justify-center text-center">
                <span className="text-gray-400 font-bold text-[9px] md:text-sm italic leading-tight">
                  {item.others}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ComparisonSection;
