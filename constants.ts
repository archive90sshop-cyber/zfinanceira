
export const FINAL_LINK = "https://zfinanceira.com/obrigadocard/";
export const LOGO_URL = "https://lh3.googleusercontent.com/d/1iGdVO1va_n3nM6MF8yNjhBRUB_D-Gtnh";
// WHATSAPP_LINK constructed from the official phone number (37) 99100-5684
export const WHATSAPP_LINK = "https://wa.me/5537991005684?text=Ol%C3%A1%2C%20quero%20simular%20a%20portabilidade%20do%20meu%20contrato.";

export const BANKS = [
    { name: 'Visa', logoUrl: 'https://cdn.freebiesupply.com/logos/large/2x/visa-logo-png-transparent.png' },
    { name: 'Mastercard', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png' },
    { name: 'Elo', logoUrl: 'https://i.imgur.com/7ejDPBA.png' },
    { name: 'Hipercard', logoUrl: 'https://i.imgur.com/7P66ftj.png' },
    { name: 'American Express', logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png' }
];

export const FAQ_DATA = [
    { 
        question: '1. O dinheiro cai na conta na hora?', 
        answer: 'Sim! O processo é automatizado. Assim que a transação é aprovada pela operadora do seu cartão, o valor é transferido via Pix para sua conta bancária em poucos minutos (geralmente em menos de 10 minutos).' 
    },
    { 
        question: '2. É um empréstimo bancário?', 
        answer: 'Não. É uma operação de compra assistida. Nós passamos o valor no seu cartão de crédito (como se você estivesse comprando algo) e transferimos esse valor em dinheiro para você. Por isso, não depende de análise de banco.' 
    },
    { 
        question: '3. Preciso ter "Nome Limpo" para fazer?', 
        answer: 'Não! Como utilizamos o limite do seu cartão de crédito, não fazemos consulta ao SPC ou Serasa. Se você tem limite disponível no cartão, seu crédito já está pré-aprovado conosco.' 
    },
    { 
        question: '4. Como eu pago esse valor depois?', 
        answer: 'Você pagará diretamente na fatura do seu cartão de crédito. Pode ser à vista (na próxima fatura) ou parcelado em até 12 vezes, dependendo da sua escolha na hora da simulação.' 
    },
    { 
        question: '5. É seguro informar os dados do meu cartão?', 
        answer: 'Totalmente. Utilizamos a tecnologia Lotus+ com criptografia de ponta a ponta (a mesma usada pelos grandes bancos). Seus dados são processados apenas para essa transação e não ficam salvos. Além disso, temos selo de site verificado.' 
    },
    { 
        question: '6. Aceita cartão de terceiros ou só o meu?', 
        answer: 'Por medidas rigorosas de segurança contra fraudes, só aceitamos cartão do próprio titular. O Pix também deve ser enviado para uma conta bancária com o mesmo CPF do dono do cartão.' 
    },
    { 
        question: '7. O valor total da fatura compromete meu limite?', 
        answer: 'Sim. O valor do saque + a taxa da operação serão descontados do seu limite disponível. À medida que você paga as faturas mensais, seu limite vai sendo liberado novamente pelo seu banco.' 
    },
    { 
        question: '8. Quais bandeiras de cartão são aceitas?', 
        answer: 'Aceitamos as principais bandeiras do mercado: Visa, Mastercard, Elo, Hipercard e Amex. Cartões virtuais (gerados no app do banco) também são aceitos e recomendados para maior segurança.' 
    }
];

export const REVIEWS = [
    {
        name: 'Carlos Alberto S.',
        location: 'Aposentado - São Paulo/SP',
        text: 'Fiz a portabilidade e minha parcela caiu de R$ 450 para R$ 310. Sobrou um dinheiro ótimo no fim do mês!',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&h=300&auto=format&fit=crop'
    },
    {
        name: 'Maria Helena G.',
        location: 'Pensionista - Belo Horizonte/MG',
        text: 'Consegui liberar um troco de R$ 3.500 fazendo a portabilidade. O atendimento da Z Financeira foi nota 10.',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=300&h=300&auto=format&fit=crop'
    },
    {
        name: 'Ricardo Mendes',
        location: 'Servidor Federal - Brasília/DF',
        text: 'Reduzi os juros do meu consignado e ainda unifiquei minhas parcelas. Processo rápido e transparente.',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300&h=300&auto=format&fit=crop'
    }
];

export const DREAMS = [
    {
        id: 1,
        title: 'Viagem e Lazer ✈️',
        description: 'Comprou a passagem no cartão e agora precisa de dinheiro para os passeios e gastos lá? Transforme o limite que sobrou em Pix e aproveite cada momento.',
        icon: '🌴',
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 2,
        title: 'Novas Conquistas 📱',
        description: 'Surgiu aquela promoção de um iPhone novo ou notebook que você tanto queria, mas o vendedor só aceita Pix? Não perca a oportunidade por falta de saldo.',
        icon: '📸',
        imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 3,
        title: 'Reforma e Casa 🏡',
        description: 'Quer dar aquela repaginada na sala ou comprar um móvel planejado com desconto à vista? Use seu limite inteligente e pague parcelado na fatura.',
        icon: '🛋️',
        imageUrl: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80'
    }
];

export const COMPARISON = [
    { feature: 'Taxas', zFinanceira: 'A partir de 2,14%', others: 'Até 15% ao mês' },
    { feature: 'Liberação', zFinanceira: 'Instantânea no Pix', others: '2 a 15 dias úteis' },
    { feature: 'Burocracia', zFinanceira: 'Nenhuma', others: 'Análise rigorosa' },
    { feature: 'Parcelamento', zFinanceira: 'Em até 12x', others: 'Apenas à vista' }
];

export const SERASA_SCORE_DATA = [
    { range: '0 a 300', approval: '95% de Aprovação' },
    { range: '301 a 500', approval: '98% de Aprovação' },
    { range: '501 a 700', approval: '99% de Aprovação' },
    { range: '701 a 1000', approval: '100% de Aprovação' }
];
