
import React from 'react';
import { SERASA_SCORE_DATA } from '../constants';

const ScoreTable: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-[#f8f9fa] border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004088]">Score Serasa e Aprovação</h2>
          <p className="text-gray-600 font-bold uppercase tracking-widest text-[11px] md:text-sm">Entenda suas chances reais de aprovação na Z Financeira</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-2 bg-[#004088] text-white font-bold text-[11px] md:text-sm uppercase tracking-widest">
            <div className="p-6 md:p-8 border-r border-[#004088]/20 text-center">Sua Faixa Score</div>
            <div className="p-6 md:p-8 text-center">Probabilidade</div>
          </div>
          
          <div className="divide-y divide-gray-100">
            {SERASA_SCORE_DATA.map((item, idx) => (
              <div key={idx} className={`grid grid-cols-2 hover:bg-gray-50 transition-colors ${idx % 2 === 0 ? 'bg-transparent' : 'bg-gray-50/50'}`}>
                <div className="p-6 md:p-8 text-center font-bold text-gray-700 text-sm md:text-xl border-r border-gray-100">
                  {item.range}
                </div>
                <div className="p-6 md:p-8 text-center font-bold text-[#10B981] text-sm md:text-xl italic">
                  {item.approval}
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 bg-[#10B981] text-white text-center">
            <p className="text-[11px] md:text-sm font-bold uppercase tracking-widest leading-relaxed">
              * Mesmo com score baixo, as chances de aprovação são altas pois utilizamos o limite disponível do seu cartão como garantia da transação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScoreTable;
