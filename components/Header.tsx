
import React from 'react';
import { Link } from 'react-router-dom';
import { LOGO_URL as logoUrl } from '../constants';

const Header: React.FC<{ onRedirect: () => void }> = ({ onRedirect }) => (
  <header className="sticky top-0 z-50 w-full shadow-sm">
    {/* Top Bar - Institutional Blue */}
    <div className="bg-[#004088] py-2 px-4 md:px-10">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold text-white uppercase tracking-wider">Brasil</span>
          <div className="w-px h-3 bg-white/30 mx-2"></div>
          <span className="text-[10px] font-medium text-white/80 uppercase tracking-wider">Z Financeira</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-medium text-white/80 uppercase tracking-wider hidden sm:block">Acesso à informação</span>
          <span className="text-[10px] font-medium text-white/80 uppercase tracking-wider hidden sm:block">Legislação</span>
          <span className="text-[10px] font-medium text-white/80 uppercase tracking-wider hidden sm:block">Canais</span>
        </div>
      </div>
    </div>

    {/* Main Header - White */}
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 h-20 md:h-24 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center h-10 md:h-14 overflow-hidden">
          <img 
            src={logoUrl} 
            alt="Z Financeira" 
            className="h-full w-auto object-contain" 
            style={{ filter: 'none' }}
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-bold text-[#004088] hover:underline transition-all uppercase tracking-wide">Portabilidade</Link>
          <button 
            onClick={(e) => { e.preventDefault(); onRedirect(); }}
            className="text-sm font-bold text-[#004088] hover:underline transition-all uppercase tracking-wide"
          >
            Simular
          </button>
          <a href="#vantagens" className="text-sm font-bold text-[#004088] hover:underline transition-all uppercase tracking-wide">Vantagens</a>
        </nav>
        
        {/* Status de Verificação */}
        <div className="flex items-center gap-2 md:gap-3">
          <div className="text-right flex flex-col justify-center">
            <span className="text-[7px] md:text-[9px] font-bold text-gray-500 uppercase tracking-widest leading-none mb-0.5 md:mb-1">
              ATENDIMENTO OFICIAL
            </span>
            <span className="text-[7px] md:text-[9px] font-bold text-[#004088] uppercase tracking-widest leading-none">
              CORRESPONDENTE AUTORIZADO
            </span>
          </div>
          
          <div className="w-6 h-6 md:w-8 md:h-8 rounded bg-[#004088] flex items-center justify-center shrink-0">
            <svg className="w-3 h-3 md:w-4 md:h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
              <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
