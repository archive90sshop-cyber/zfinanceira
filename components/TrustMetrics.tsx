
import React from 'react';

const TrustMetrics: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="mb-10 md:mb-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#004088] mb-4">
            Confiança Certificada
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-bold uppercase tracking-widest">Credibilidade e Segurança</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {/* Google Card */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-6">
              <div className="text-4xl md:text-5xl font-bold text-[#004088]">4,8</div>
              <svg className="w-10 h-10" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
            </div>
            <div className="space-y-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#FBBC05] fill-current" />
                ))}
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Certificado Google Business</p>
            </div>
          </div>

          {/* RA Card */}
          <div className="bg-[#f8f9fa] p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between relative overflow-hidden">
            <div className="text-3xl md:text-4xl font-bold text-[#004088] uppercase tracking-tight">RA 1000</div>
            <img 
               src="https://i.imgur.com/pi419yB.png" 
               className="w-20 absolute top-6 right-6"
               alt="RA"
               referrerPolicy="no-referrer"
            />
            <div className="mt-8">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Resolução 100%</p>
              <h4 className="text-lg font-bold text-[#10B981] uppercase tracking-tight">Excelência no Suporte</h4>
            </div>
          </div>

          {/* Approved Card */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between">
            <div className="text-4xl md:text-5xl font-bold text-[#10B981]">99,7%</div>
            <div className="mt-8 space-y-3">
              <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#10B981]" style={{ width: '99.7%' }}></div>
              </div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Índice de Aprovação Real</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Add Star to imports if needed, but I'll use a simple SVG path for Star to avoid import issues or just use the existing one if it's there.
// Actually, I'll use the Lucide Star if possible.
import { Star } from 'lucide-react';

export default TrustMetrics;