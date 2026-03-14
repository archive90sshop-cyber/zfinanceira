
import React from 'react';

const ConditionsSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          
          <div className="space-y-8 md:space-y-10">
            <div className="space-y-4">
              <span className="text-[11px] font-bold text-[#10B981] uppercase tracking-widest">Requisitos</span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#004088] tracking-tight leading-none">Quem pode realizar a Portabilidade?</h2>
              <p className="text-gray-600 font-medium text-lg">A solução mais inteligente para reduzir seus juros. Se você tem consignado, a economia é sua.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               {[
                 { t: 'Aposentados', d: 'Beneficiários do INSS', i: '✅' },
                 { t: 'Pensionistas', d: 'Beneficiários do INSS', i: '✅' },
                 { t: 'Servidores', d: 'Federais, Estaduais e Municipais', i: '✅' },
                 { t: 'Sem Consultas', d: 'Não precisa ter nome limpo', i: '🚫' }
               ].map((item, idx) => (
                 <div key={idx} className="p-5 md:p-6 bg-gray-50 rounded-xl border border-gray-200 flex items-center gap-5 hover:bg-gray-100 transition-colors">
                    <span className="text-2xl">{item.i}</span>
                    <div className="flex flex-col">
                      <h4 className="font-bold text-[#004088] text-xs md:text-sm uppercase leading-tight">{item.t}</h4>
                      <p className="text-[9px] font-bold text-gray-500 uppercase tracking-tight mt-1">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-[#004088] rounded-xl p-8 md:p-10 lg:p-14 text-white space-y-10 lg:space-y-12 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-[80px]"></div>
            
            <div className="space-y-6 md:space-y-8 relative z-10">
              <h3 className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#10B981] flex items-center gap-4">
                <span className="w-10 h-[3px] bg-[#10B981]"></span> Vantagens Exclusivas
              </h3>
              <div className="grid grid-cols-1 gap-4 md:gap-5">
                {[
                  { t: 'Redução de Juros', d: 'Taxas menores que o seu banco atual.', i: '📉' },
                  { t: 'Troco na Conta', d: 'Receba a diferença via Pix.', i: '💰' },
                  { t: 'Sem Custos', d: 'Operação 100% gratuita para você.', i: '🆓' },
                  { t: 'Blindagem Lotus+', d: 'Dados 100% protegidos.', i: '🛡️' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 md:gap-5 bg-white/10 p-5 md:p-6 rounded-xl border border-white/10 hover:border-[#10B981]/30 transition-all">
                    <span className="text-2xl md:text-3xl">{item.i}</span>
                    <div>
                      <h4 className="font-bold text-white text-base md:text-lg uppercase">{item.t}</h4>
                      <p className="text-xs md:text-sm text-white/70 font-medium mt-1">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConditionsSection;