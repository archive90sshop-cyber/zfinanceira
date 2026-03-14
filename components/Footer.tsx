
import React from 'react';
import Logo from './Logo';
import { FINAL_LINK } from '../constants';

const Footer: React.FC<{ onRedirect: () => void }> = ({ onRedirect }) => {
  const handleAction = () => {
    onRedirect();
  };

  return (
    <footer className="bg-[#004088] text-white py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          <div className="space-y-6 max-w-md">
            <Logo className="h-12 md:h-16" inverted />
            <p className="text-sm text-white/70 leading-relaxed">
              Z Financeira - Correspondente Bancário Autorizado. Atuamos com transparência e segurança seguindo as normas do Banco Central do Brasil.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10">
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest border-b border-white/20 pb-2">
                Institucional
              </h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Portal da LGPD</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ética e Compliance</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest border-b border-white/20 pb-2">
                Atendimento
              </h4>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex flex-col gap-1 cursor-pointer group" onClick={handleAction}>
                  <span className="text-white/50 text-[10px] font-bold uppercase">Canal Oficial</span>
                  <span className="text-white text-lg font-bold group-hover:underline">(37) 99100-5684</span>
                </li>
                <li className="flex flex-col gap-1">
                  <span className="text-white/50 text-[10px] font-bold uppercase">E-mail</span>
                  <span className="text-white">contato@zfinanceira.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-sm text-white/50">
            &copy; {new Date().getFullYear()} Z Financeira. Todos os direitos reservados.
            <br />
            CNPJ: 49.522.539/0001-08
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded border border-white/10">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001z" clipRule="evenodd" />
              </svg>
              <span className="text-[10px] font-bold uppercase tracking-widest">SSL 256 bits</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-widest">Banco Central</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
