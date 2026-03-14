
import React from 'react';

const ProcessSection: React.FC = () => {
  const steps = [
    { t: 'Simulação', d: 'Escolha o valor e parcelas.' },
    { t: 'Segurança', d: 'Confirmação via Lotus+.' },
    { t: 'Pix na Hora', d: 'Receba direto na sua conta.' }
  ];

  return (
    <section className="py-12 md:py-20 bg-[#f8f9fa] border-t border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004088]">Dinheiro em 3 Passos</h2>
          <p className="text-gray-600 font-bold uppercase tracking-widest text-[10px] md:text-xs">Rápido como um Pix deve ser</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-6 w-16 h-16 md:w-20 md:h-20 bg-white text-[#004088] rounded-xl flex items-center justify-center font-bold text-2xl md:text-3xl shadow-sm border border-gray-200">
                {i + 1}
              </div>
              <h3 className="font-bold text-xl md:text-2xl text-[#004088] mb-2 tracking-tight uppercase">{s.t}</h3>
              <p className="text-gray-600 text-sm md:text-base font-medium max-w-[240px]">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;