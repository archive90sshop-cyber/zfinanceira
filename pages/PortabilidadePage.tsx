import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingDown, 
  Wallet, 
  ShieldCheck, 
  Users, 
  FileText, 
  Zap,
  MessageCircle,
  ChevronDown,
  HelpCircle,
  Star,
  BadgeCheck
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ReviewsSection from '../components/ReviewsSection';
import { WHATSAPP_LINK } from '../constants';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => {
        const isFull = i + 1 <= Math.floor(rating);
        const isHalf = !isFull && i < rating;
        return (
          <Star 
            key={i} 
            size={14} 
            className={`${isFull || isHalf ? 'fill-[#FFB800] text-[#FFB800]' : 'text-gray-300'}`} 
          />
        );
      })}
    </div>
  );
};

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left hover:text-[#004088] transition-colors group"
      >
        <span className="text-lg font-bold pr-8">{question}</span>
        <ChevronDown 
          size={20} 
          className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#004088]' : 'text-gray-400'}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}
      >
        <p className="text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const PortabilidadePage: React.FC<{ onRedirect: () => void }> = ({ onRedirect }) => {
  const handleRedirect = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    onRedirect();
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 selection:bg-[#004088] selection:text-white font-sans">
      <Header onRedirect={onRedirect} />
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-4 pb-6 md:pt-32 md:pb-32 bg-[#f8f9fa] overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#004088]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-64 h-64 md:w-96 md:h-96 bg-[#004088]/5 rounded-full blur-3xl" />

          <div className="max-w-[1200px] mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-3 py-1 bg-[#004088]/10 text-[#004088] rounded-full text-[10px] md:text-sm font-bold mb-2 md:mb-6 tracking-wide uppercase">
                  Economia Inteligente
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 leading-tight text-[#004088]">
                  Portabilidade de Consignado:<br className="hidden md:block" />
                  <span className="text-gray-900"> Pague Menos e Libere Dinheiro Extra</span>
                </h1>
                <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed">
                  Troque sua dívida cara por uma mais barata. Reduza suas parcelas ou receba um <span className="text-[#004088] font-bold">"troco" direto na sua conta</span>, sem aumentar o que você paga por mês.
                </p>
                
                <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
                  <button 
                    onClick={handleRedirect}
                    className="w-full sm:w-auto px-8 py-4 md:px-10 md:py-5 bg-[#004088] hover:bg-[#003066] text-white font-bold rounded shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 text-base md:text-lg uppercase tracking-wider"
                  >
                    SIMULAR MEU DESCONTO AGORA
                    <ArrowRight size={20} className="md:w-[22px] md:h-[22px]" />
                  </button>
                  
                  {/* Desktop version of the button */}
                  <button 
                    onClick={handleRedirect}
                    className="hidden sm:inline-flex px-8 py-4 md:px-10 md:py-5 bg-white hover:bg-gray-50 border-2 border-[#004088] text-[#004088] rounded font-bold transition-all items-center justify-center gap-3 text-base md:text-lg shadow-sm hover:shadow-md uppercase tracking-wider"
                  >
                    <MessageCircle size={20} className="md:w-[22px] md:h-[22px]" />
                    Falar com Especialista
                  </button>

                  {/* Mobile version - subtle text link */}
                  <button 
                    onClick={handleRedirect}
                    className="sm:hidden text-[#004088] font-bold text-sm underline underline-offset-4 hover:text-[#003066] transition-colors flex items-center gap-2"
                  >
                    <MessageCircle size={16} />
                    Falar com Especialista
                  </button>
                </div>

                <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-4 md:gap-8 opacity-60 grayscale">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <ShieldCheck size={16} className="md:w-5 md:h-5" />
                    <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest">Seguro</span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <Zap size={16} className="md:w-5 md:h-5" />
                    <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest">Rápido</span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <CheckCircle2 size={16} className="md:w-5 md:h-5" />
                    <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest">Garantido</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* O que é a Portabilidade */}
        <section className="py-12 md:py-24 bg-[#f8f8f8]">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6 md:space-y-8"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#004088]/10 rounded flex items-center justify-center text-[#004088] shadow-sm">
                  <ShieldCheck size={28} className="md:w-8 md:h-8" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#004088] flex items-center gap-3 md:gap-4">
                  O que é a Portabilidade?
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                    A portabilidade do consignado é o seu direito de transferir um empréstimo de um banco para outro que ofereça juros menores.
                  </p>
                  <p className="text-base md:text-lg text-gray-500 leading-relaxed">
                    Na prática, o novo banco quita sua dívida antiga e assume o contrato com condições muito mais vantajosas. É a inteligência financeira aplicada ao seu benefício ou salário.
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="aspect-[4/3] bg-white rounded-xl border border-gray-200 shadow-lg flex items-center justify-center p-6 md:p-12 overflow-hidden">
                  <div className="relative z-10 text-center space-y-3 md:space-y-6">
                    <div className="text-4xl md:text-6xl font-bold text-[#004088] tracking-tight">Juros -30%</div>
                    <div className="text-sm md:text-lg text-gray-400 font-bold uppercase tracking-widest">Economia real no seu bolso</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* O que acontece quando você muda */}
        <section id="vantagens" className="py-12 md:py-20 bg-[#f8f9fa] border-y border-gray-200">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-[#004088]">O que acontece quando você muda para melhor:</h2>
              <p className="text-sm md:text-base text-gray-500 font-bold uppercase tracking-widest">Vantagens exclusivas da Z Financeira</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto">
              {[
                {
                  icon: <TrendingDown className="text-[#004088]" />,
                  title: "Redução imediata",
                  desc: "O valor da sua parcela mensal diminui drasticamente."
                },
                {
                  icon: <Zap className="text-[#004088]" />,
                  title: "Juros baixos",
                  desc: "Você sai de taxas abusivas para as melhores do mercado."
                },
                {
                  icon: <Wallet className="text-[#004088]" />,
                  title: "Dinheiro no bolso",
                  desc: "Em muitos casos, a diferença de juros gera um 'troco' liberado na hora."
                },
                {
                  icon: <CheckCircle2 className="text-[#004088]" />,
                  title: "Liberdade",
                  desc: "Você escolhe o banco que te trata melhor, não fica preso ao antigo."
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 md:p-8 rounded-xl bg-white border border-gray-200 hover:shadow-md transition-all group"
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-4 md:mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 text-[#004088]">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quem pode solicitar */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="max-w-4xl mx-auto bg-[#f8f8f8] p-6 md:p-12 rounded border border-gray-200">
              <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
                <div className="flex-1 space-y-4 md:space-y-6">
                  <div className="flex items-center gap-3 text-[#004088]">
                    <Users size={20} className="md:w-6 md:h-6" />
                    <h2 className="text-xl md:text-2xl font-bold">Quem pode solicitar?</h2>
                  </div>
                  <p className="text-sm md:text-base text-gray-600">
                    Se você possui um empréstimo consignado ativo, pode pedir a portabilidade hoje mesmo:
                  </p>
                  <ul className="space-y-3 md:space-y-4">
                    {[
                      "Aposentados e Pensionistas do INSS",
                      "Servidores Públicos Federais",
                      "Servidores Públicos Estaduais e Municipais"
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 size={16} className="text-[#004088] shrink-0 md:w-[18px] md:h-[18px]" />
                        <span className="text-sm md:text-base text-gray-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="hidden md:block w-px h-40 bg-gray-300" />
                <div className="flex-1 space-y-4 md:space-y-6">
                  <div className="flex items-center gap-3 text-[#004088]">
                    <FileText size={20} className="md:w-6 md:h-6" />
                    <h2 className="text-xl md:text-2xl font-bold">Regras Principais</h2>
                  </div>
                  <div className="space-y-3 md:space-y-4 text-xs md:text-sm text-gray-600">
                    <p><strong className="text-[#004088]">Contrato Ativo:</strong> Você precisa ter um consignado em andamento.</p>
                    <p><strong className="text-[#004088]">Desconto em Folha:</strong> A praticidade continua! A parcela segue sendo descontada direto do benefício.</p>
                    <p><strong className="text-[#004088]">Vantagem Real:</strong> O novo banco é obrigado a oferecer uma taxa menor ou condição superior.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vantagens da Portabilidade */}
        <section className="py-12 md:py-20 bg-[#f8f8f8] border-t border-gray-200">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-10 md:mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-[#004088]">Por que fazer a portabilidade agora?</h2>
                <p className="text-sm md:text-base text-gray-500 font-bold uppercase tracking-widest">Resultados reais para sua vida financeira</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  {
                    title: "Menos Juros",
                    desc: "O custo total da sua dívida cai drasticamente.",
                    icon: "📉"
                  },
                  {
                    title: "Parcela Menor",
                    desc: "Mais fôlego no seu orçamento mensal para o que importa.",
                    icon: "💰"
                  },
                  {
                    title: "Dinheiro Extra",
                    desc: "Receba a diferença dos juros em dinheiro, sem aumentar sua dívida.",
                    icon: "💸"
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center md:items-start md:text-left">
                    <span className="text-3xl mb-4">{item.icon}</span>
                    <h3 className="text-lg md:text-xl font-bold text-[#004088] mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof & Metrics */}
        <section className="py-12 md:py-20 bg-white">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-[#004088] text-center md:text-left">Por que escolher a Z Financeira?</h2>
              
              <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-20">
                {/* Google Card */}
                <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-[#004088]">4,5</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">GOOGLE</div>
                  <StarRating rating={4.5} />
                  <div className="text-[10px] text-gray-400 mt-4 font-bold uppercase">1755 avaliações</div>
                </div>

                {/* Reclame Aqui Card */}
                <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm flex flex-col">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-3xl md:text-4xl font-bold mb-1 text-[#004088]">Ótimo</div>
                      <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">RECLAME AQUI</div>
                    </div>
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center">
                      <img 
                        src="https://i.imgur.com/pi419yB.png" 
                        alt="Selo Reclame Aqui Ótimo" 
                        className="w-full h-auto object-contain"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <div className="mt-auto text-[10px] text-gray-400 font-bold uppercase">172 avaliações</div>
                </div>

                {/* CSAT Card */}
                <div className="bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-sm">
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-[#004088]">95%</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">CSAT - SATISFAÇÃO</div>
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-[#4CAF50]" style={{ width: '95%' }}></div>
                  </div>
                  <div className="text-[10px] text-gray-400 font-bold uppercase">143 respostas</div>
                </div>
              </div>

              <ReviewsSection />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 md:py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-8 md:mb-12 justify-center md:justify-start">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-[#004088]/10 rounded flex items-center justify-center text-[#004088]">
                  <HelpCircle size={20} className="md:w-6 md:h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-[#004088]">Dúvidas Frequentes</h2>
              </div>

              <div className="space-y-2">
                <FAQItem 
                  question="A portabilidade tem algum custo?" 
                  answer="Não. A portabilidade é um direito gratuito garantido pelo Banco Central. Você não deve pagar nenhuma taxa antecipada ou comissão para transferir sua dívida. O processo é 100% gratuito para o cliente."
                />
                <FAQItem 
                  question="Posso fazer portabilidade mesmo com o nome negativado?" 
                  answer="Sim! Como o empréstimo consignado tem o desconto feito diretamente em folha de pagamento, a maioria dos bancos parceiros não realiza consulta ao SPC ou Serasa para aprovar a portabilidade."
                />
                <FAQItem 
                  question="O que é o 'troco' na portabilidade?" 
                  answer="O troco é uma modalidade onde reduzimos a taxa de juros do seu contrato atual, mas mantemos o valor da parcela que você já paga. A economia gerada pela redução dos juros é liberada como dinheiro vivo diretamente na sua conta bancária."
                />
                <FAQItem 
                  question="Quanto tempo demora o processo?" 
                  answer="Em média, o processo completo leva de 7 a 15 dias úteis. Esse prazo depende principalmente da agilidade do seu banco atual em liberar os dados do contrato (DED) para o novo banco."
                />
                <FAQItem 
                  question="O banco atual pode se recusar a liberar meu contrato?" 
                  answer="Não. De acordo com as normas do Banco Central, nenhuma instituição financeira pode impedir a portabilidade. O banco tem o prazo de até 5 dias úteis para fornecer os dados necessários. Caso haja qualquer dificuldade, nossa equipe jurídica intervém para garantir seu direito."
                />
                <FAQItem 
                  question="Preciso avisar o meu banco atual que vou sair?" 
                  answer="Não é necessário. Todo o trâmite de comunicação e quitação da dívida é feito de forma automática entre os bancos. Você não precisa enfrentar filas ou burocracia no seu banco antigo."
                />
              </div>

              <div className="mt-8 md:mt-12 p-6 md:p-8 bg-[#f8f9fa] rounded-xl border border-gray-200">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="text-[#10B981] shrink-0" size={24} />
                  <div>
                    <h4 className="text-sm md:text-base font-bold text-[#004088] mb-1 uppercase tracking-wider">Dica de Segurança</h4>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                      A Z Financeira nunca solicita depósitos antecipados ou pagamentos de taxas para liberação de crédito. Nosso serviço é remunerado diretamente pelas instituições bancárias parceiras.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="simular" className="py-16 md:py-24 bg-[#004088] text-white">
          <div className="max-w-[1200px] mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 text-white leading-tight">Pronto para economizar?</h2>
              <p className="text-base md:text-xl text-white/80 mb-10 md:mb-12 leading-relaxed">
                Não deixe seu dinheiro parado no banco antigo. Nossa equipe analisa seu contrato e busca a melhor taxa do mercado para você.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <button 
                  onClick={handleRedirect}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 md:px-12 md:py-6 bg-[#10B981] hover:bg-[#059669] text-white font-bold rounded shadow-lg hover:shadow-xl transition-all text-lg md:text-xl uppercase tracking-wider"
                >
                  <MessageCircle size={24} className="md:w-7 md:h-7" />
                  QUERO FALAR COM UM ESPECIALISTA
                </button>
              </div>
              <p className="mt-8 text-xs md:text-sm text-white/40 font-bold uppercase tracking-widest">
                Atendimento 100% humano e personalizado
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer onRedirect={onRedirect} />
    </div>
  );
};

export default PortabilidadePage;
