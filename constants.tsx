import React from 'react';

export interface IconProps {
  className?: string;
}

const BookIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
  </svg>
);

const TagIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
  </svg>
);

const LinkIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
  </svg>
);

const BriefcaseIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 01-2.25 2.25H5.998a2.25 2.25 0 01-2.25-2.25v-4.07a2.25 2.25 0 01.521-1.428l3.682-4.603a2.25 2.25 0 013.496 0l3.682 4.603a2.25 2.25 0 01.521 1.428zM19.5 8.25L12 1.5 4.5 8.25" />
  </svg>
);

const ShoppingCartIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c.51 0 .962-.328 1.093-.828l2.558-9.026A1.125 1.125 0 0017.25 3H4.25z" />
  </svg>
);

const BuildingOfficeIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375a.375.375 0 01.375.375v1.5a.375.375 0 01-.375.375H9a.375.375 0 01-.375-.375v-1.5A.375.375 0 019 6.75zM9 12.75h6.375a.375.375 0 01.375.375v1.5a.375.375 0 01-.375.375H9a.375.375 0 01-.375-.375v-1.5A.375.375 0 019 12.75z" />
  </svg>
);

const LightBulbIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-11.36a6.01 6.01 0 00-3 0 6.01 6.01 0 001.5 11.36z" />
  </svg>
);

const CarIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 013.375-3.375h9.75a3.375 3.375 0 013.375 3.375v1.875m-17.25 4.5h16.5" />
  </svg>
);

const MegaphoneIcon: React.FC<IconProps> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
  </svg>
);

const ChatBubbleIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.125 2.994 2.707 3.227 1.068.158 2.222.28 3.393.364V19.5a.75.75 0 001.5 0v-2.025c1.171-.084 2.325-.206 3.393-.364 1.582-.233 2.707-1.626 2.707-3.227V6.75a2.25 2.25 0 00-2.25-2.25H5.625a2.25 2.25 0 00-2.25-2.25v6.01z" />
    </svg>
);

const GiftIcon: React.FC<IconProps> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a2.25 2.25 0 01-2.25 2.25H5.25a2.25 2.25 0 01-2.25-2.25v-8.25M12 4.875A3.375 3.375 0 006.375 8.25H17.625A3.375 3.375 0 0012 4.875zM12 4.875v16.5" />
    </svg>
);


export const MODULES = [
    {
        icon: BookIcon,
        title: "Amazon KDP",
        description: "Cria e vende livros e produtos digitais lucrativos usando ferramentas gratuitas, sem precisares de aparecer."
    },
    {
        icon: TagIcon,
        title: "Vinted para Lucrar",
        description: "Vende rapidamente e evita avaliações negativas com estratégias que funcionam mesmo sem experiência."
    },
    {
        icon: LinkIcon,
        title: "Marketing de Afiliados",
        description: "Promove produtos e ganha comissões sem falar com ninguém - com exemplos práticos."
    },
    {
        icon: BriefcaseIcon,
        title: "Freelancing de Sucesso",
        description: "Transforma as tuas habilidades em rendimento, encontra clientes e define os teus próprios preços."
    },
    {
        icon: ShoppingCartIcon,
        title: "eCommerce Gratuito",
        description: "Monta a tua loja online sem custos mensais e sem complicações técnicas (Dropshipping incluído)."
    },
    {
        icon: BuildingOfficeIcon,
        title: "Negócios Físicos Simples",
        description: "Descobre como comecei uma empresa de limpezas do zero e como podes replicar o modelo."
    },
     {
        icon: LightBulbIcon,
        title: "Mentalidade Anti-Fracasso",
        description: "Evita os erros que fazem 90% dos iniciantes desistir antes mesmo de começarem."
    },
    {
        icon: MegaphoneIcon,
        title: "Facebook Ads para Iniciantes",
        description: "Um guia para iniciantes para criares as tuas primeiras campanhas de sucesso."
    }
];

export const BONUSES = [
    {
        icon: CarIcon,
        title: "Roadmap de Importação Automóvel",
        description: "Um guia de consultoria para importares veículos de forma segura e lucrativa."
    },
    {
        icon: ChatBubbleIcon,
        title: "Acompanhamento WhatsApp",
        description: "Acesso direto para tirares as tuas dúvidas e receberes apoio personalizado."
    },
    {
        icon: GiftIcon,
        title: "Domínio, Host e Email Profissional Grátis",
        description: "Ensino passo a passo como ter tudo grátis para sempre e poupar 100€/ano."
    }
];

export const TESTIMONIAL_IMAGES = [
  "https://i.postimg.cc/C5qqRYtc/final1.png",
  "https://i.postimg.cc/Dz6R84bw/final2.png",
  "https://i.postimg.cc/vH9YDX88/final3.png",
  "https://i.postimg.cc/vZtGtB6p/final4.png",
  "https://i.postimg.cc/0yPsjsHZ/final5.png",
  "https://i.postimg.cc/zX1m2N55/final6.png",
  "https://i.postimg.cc/tCbftzt4/final7.png",
  "https://i.postimg.cc/L53x0rB6/final8.png",
  "https://i.postimg.cc/0yBc3Gmm/final9.png",
  "https://i.postimg.cc/ydFjkwGX/final10.png"
];

export const FAQS = [
    {
        question: "Para quem é este workshop?",
        answer: "Este workshop é para qualquer pessoa que queira criar uma nova fonte de rendimento, seja um extra ou um negócio a tempo inteiro. Não é necessária qualquer experiência prévia."
    },
    {
        question: "Preciso de muito dinheiro para começar?",
        answer: "Não. A maioria dos métodos ensinados pode ser iniciada com um investimento muito baixo ou até mesmo zero, utilizando as ferramentas e estratégias gratuitas que partilhamos."
    },
    {
        question: "Como funciona o acesso ao workshop?",
        answer: "O acesso é imediato e vitalício. Após o pagamento, recebes um email com todos os dados para acederes à plataforma e podes começar a aprender ao teu próprio ritmo."
    },
    {
        question: "E se eu tiver dúvidas durante o curso?",
        answer: "Não te preocupes! Tens acesso a acompanhamento via WhatsApp para colocares todas as tuas questões diretamente e receberes o apoio que precisas."
    },
    {
        question: "O pagamento é único?",
        answer: "Sim, o pagamento de 97€ é único e dá-te acesso para sempre a todo o conteúdo e a todas as futuras atualizações, sem qualquer custo adicional."
    }
];