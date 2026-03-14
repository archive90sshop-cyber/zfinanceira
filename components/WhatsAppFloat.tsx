
import React from 'react';
import { FINAL_LINK } from '../constants';

const WhatsAppFloat: React.FC<{ onRedirect: () => void }> = ({ onRedirect }) => {
  const handleAction = () => {
    onRedirect();
  };
  
  return (
    <button 
      onClick={handleAction}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[100] bg-white pl-4 pr-1 py-1.5 md:pl-6 md:pr-2 md:py-2.5 rounded shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 md:gap-6 group border border-gray-200"
    >
      <div className="flex flex-col items-start leading-none text-left">
        <span className="text-[8px] md:text-[10px] font-bold uppercase tracking-wider text-[#004088] mb-1">
          Portabilidade Consignado
        </span>
        <span className="text-sm md:text-base font-bold text-gray-800 tracking-tight">
          Pagar Menos Agora
        </span>
      </div>
      
      <div className="w-10 h-10 md:w-12 md:h-12 bg-[#004088] rounded flex items-center justify-center group-hover:bg-[#003066] transition-colors duration-300">
        <svg 
          className="w-5 h-5 md:w-6 md:h-6 text-white" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.185-.573c.948.517 2.011.876 3.144.876 3.181 0 5.767-2.586 5.767-5.766 0-3.181-2.586-5.767-5.765-5.767zm3.38 8.157c-.144.405-.833.778-1.157.827-.324.05-1.108.093-1.635-.054-.336-.095-.733-.231-1.258-.456-2.246-.961-3.704-3.235-3.816-3.385-.113-.15-.92-1.221-.92-2.329 0-1.108.579-1.652.785-1.876.207-.223.454-.279.606-.279.151 0 .303.001.433.007.136.007.319-.052.499.387.185.452.634 1.545.689 1.658.055.113.092.245.018.396-.074.15-.112.245-.221.373-.11.127-.23.284-.329.381-.11.107-.225.223-.096.444.129.221.574.947 1.233 1.533.849.756 1.564 1.013 1.789 1.126.225.113.358.094.49-.057.132-.15.564-.658.714-.884.15-.226.301-.189.508-.113.207.075 1.317.621 1.543.734.225.113.376.169.432.263.056.095.056.546-.088.951z"/>
        </svg>
      </div>
    </button>
  );
};

export default WhatsAppFloat;
