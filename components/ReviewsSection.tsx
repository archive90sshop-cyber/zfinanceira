
import React from 'react';
import { REVIEWS } from '../constants';

const ReviewsSection: React.FC = () => (
  <section className="py-12 md:py-20 bg-white border-t border-gray-100">
    <div className="max-w-[1200px] mx-auto px-4">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#004088] mb-4">Depoimentos Reais</h2>
        <p className="text-sm md:text-base text-gray-500 font-bold uppercase tracking-widest">O que nossos clientes dizem sobre a experiência Z Financeira</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {REVIEWS.map((review, i) => (
          <div key={i} className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, star) => (
                    <Star key={star} size={14} className="text-[#FBBC05] fill-current" />
                  ))}
                </div>
                <div className="flex items-center gap-1.5 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">
                  <span className="text-[8px] font-bold uppercase text-gray-400">Google Review</span>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed italic text-sm md:text-base">"{review.text}"</p>
            </div>
            
            <div className="mt-8 flex items-center gap-4">
              <img 
                src={review.avatar} 
                alt={review.name} 
                className="w-12 h-12 rounded-full border border-gray-200 object-cover shadow-sm bg-gray-50" 
                referrerPolicy="no-referrer"
              />
              <div className="flex flex-col">
                <h4 className="font-bold text-[#004088] text-sm md:text-base">{review.name}</h4>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{review.location}</p>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center justify-center w-3 h-3 bg-[#10B981] rounded-full">
                    <svg className="w-2 h-2 text-white" fill="none" stroke="currentColor" strokeWidth="4" viewBox="0 0 24 24">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-[8px] font-bold text-[#10B981] uppercase tracking-widest">Identidade Confirmada</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

import { Star } from 'lucide-react';

export default ReviewsSection;