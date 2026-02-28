import { useState } from 'react';
import { 
  Shield, 
  ShieldCheck, 
  Users, 
  Lock, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  Star,
  ChevronDown,
  ChevronUp,
  Car,
  Building2,
  Eye
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import logo from './logo.png';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const WhatsAppButton = () => (
  <motion.a
    initial={{ scale: 0, opacity: 0 }}
    animate={{ 
      scale: [1, 1.05, 1], 
      opacity: 1,
      y: [0, -8, 0] 
    }}
    transition={{
      scale: { 
        duration: 4, 
        repeat: Infinity, 
        ease: "easeInOut" 
      },
      opacity: { duration: 0.5 },
      y: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }}
    whileHover={{ scale: 1.1 }}
    href="https://wa.me/5548984868277"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center border-4 border-white"
    aria-label="Contato via WhatsApp"
  >
    <WhatsAppIcon className="w-8 h-8" />
  </motion.a>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Áreas', href: '#areas' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-3">
            <img 
              src={logo} 
              alt="SCHMITT Segurança Logo" 
              className="h-14 w-auto object-contain"
            />
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-xl tracking-tight text-neutral-900">
                SCHMITT
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-neutral-500">
                Segurança & Vigilância
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-600 hover:text-black font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contato"
              className="bg-black text-white px-6 py-2.5 rounded-full font-semibold hover:bg-neutral-800 transition-all shadow-lg shadow-black/20"
            >
              Orçamento Grátis
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-neutral-900 p-2">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-neutral-200 absolute w-full"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-neutral-600 hover:text-black hover:bg-neutral-50 rounded-lg"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contato"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center bg-black text-white px-6 py-3 rounded-lg font-semibold"
                >
                  Orçamento Grátis
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img
        src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=2000"
        alt="Empresa de segurança em São José SC - SCHMITT"
        className="w-full h-full object-cover opacity-10 grayscale"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 via-transparent to-neutral-50" />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-neutral-900 uppercase bg-neutral-100 rounded-full">
            Sua Melhor Opção em Segurança Privada São José SC
          </span>
          <h1 className="text-5xl lg:text-7xl font-display font-bold text-neutral-900 leading-[1.1] mb-8">
            A Melhor <span className="text-neutral-600">Empresa de Segurança em São José SC</span>
          </h1>
          <p className="text-xl text-neutral-600 mb-10 leading-relaxed">
            Especialistas em <strong>segurança patrimonial em São José SC</strong> e <strong>segurança privada em São José SC</strong>. A SCHMITT é a <strong>empresa de vigilância São José SC</strong> que você procura para proteção 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-black rounded-xl hover:bg-neutral-800 transition-all shadow-xl shadow-black/25 group"
            >
              Orçamento de Segurança Privada
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/5548984868277"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-black bg-white border-2 border-black rounded-xl hover:bg-neutral-50 transition-all"
            >
              <WhatsAppIcon className="mr-2 w-6 h-6 fill-[#25D366]" />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="sobre" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000"
            alt="Empresa de Vigilância São José SC - SCHMITT"
            className="rounded-3xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-8 -right-8 bg-black text-white p-8 rounded-3xl shadow-xl hidden md:block">
            <p className="text-4xl font-bold mb-1">15+</p>
            <p className="font-medium opacity-90">Anos de Experiência</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-display font-bold text-neutral-900 mb-6">
            Líder em Segurança Patrimonial em São José SC
          </h2>
          <div className="space-y-6 text-lg text-neutral-600">
            <p>
              Se você busca por uma <strong>empresa de segurança em São José SC</strong> que ofereça confiança e tecnologia, a SCHMITT é a escolha certa. Somos uma <strong>empresa de vigilância São José SC</strong> com vasta experiência no mercado catarinense.
            </p>
            <p>
              Nossa expertise em <strong>segurança privada São José SC</strong> nos permite entregar soluções personalizadas para cada cliente, garantindo que a <strong>segurança patrimonial em São José SC</strong> seja executada com perfeição técnica e tática.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                'Referência em segurança privada em São José SC',
                'Monitoramento inteligente e vigilância patrimonial',
                'Especialistas em segurança para condomínios em São José SC',
                'Equipe tática de prontidão na Grande Florianópolis'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-black flex-shrink-0 mt-0.5" />
                  <span className="font-medium text-neutral-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: 'Vigilância Patrimonial',
      icon: ShieldCheck,
      description: 'A melhor segurança patrimonial em São José SC para sua empresa ou residência. Proteção ativa com vigilantes treinados e tecnologia de ponta.',
      benefits: ['Vigilância patrimonial São José SC 24h', 'Análise de riscos detalhada', 'Equipe armada e desarmada'],
      apps: 'Indústrias, Comércios e Residências'
    },
    {
      title: 'Segurança Privada',
      icon: Users,
      description: 'Serviço de segurança privada em São José SC com foco em proteção executiva e eventos. Discrição e eficiência em cada operação.',
      benefits: ['Segurança privada São José SC VIP', 'Escolta especializada', 'Planejamento estratégico'],
      apps: 'Executivos e Eventos de Grande Porte'
    },
    {
      title: 'Segurança para Condomínios',
      icon: Building2,
      description: 'Especialistas em segurança para condomínios em São José SC. Tranquilidade para moradores e gestão eficiente para síndicos.',
      benefits: ['Segurança para condomínios em São José SC', 'Controle de acesso inteligente', 'Rondas perimetrais'],
      apps: 'Condomínios Residenciais e Comerciais'
    },
    {
      title: 'Portaria e Controle de Acesso',
      icon: Lock,
      description: 'Complemento essencial para a segurança patrimonial em São José SC. Gestão profissional de entradas e saídas.',
      benefits: ['Identificação rigorosa', 'Treinamento de portaria', 'Tecnologia de acesso'],
      apps: 'Empresas e Edifícios'
    },
    {
      title: 'Ronda Motorizada',
      icon: Car,
      description: 'Apoio tático para segurança privada em São José SC. Presença constante e resposta imediata em qualquer ocorrência.',
      benefits: ['Ronda motorizada 24h', 'Veículos rastreados', 'Apoio tático rápido'],
      apps: 'Loteamentos e Áreas Industriais'
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-display font-bold text-neutral-900 mb-6">
            Serviços da Melhor Empresa de Segurança em São José SC
          </h2>
          <p className="text-xl text-neutral-600">
            Soluções integradas de <strong>segurança patrimonial em São José SC</strong> e <strong>segurança privada em São José SC</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-neutral-200 hover:border-black/30 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-black transition-colors">
                <service.icon className="w-8 h-8 text-black group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">{service.title}</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              <div className="space-y-3 mb-6">
                {service.benefits.map((benefit, j) => (
                  <div key={j} className="flex items-center gap-2 text-sm font-medium text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-black" />
                    {benefit}
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-neutral-100">
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2">Aplicações</p>
                <p className="text-sm font-semibold text-neutral-900">{service.apps}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Areas = () => (
  <section id="areas" className="py-24 bg-neutral-900 text-white overflow-hidden relative">
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-0 left-0 w-96 h-96 bg-neutral-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    </div>
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-display font-bold mb-8">
            Atuação em São José SC e Grande Florianópolis
          </h2>
          <p className="text-xl text-neutral-300 mb-10 leading-relaxed">
            Como a principal <strong>empresa de vigilância São José SC</strong>, atendemos toda a região metropolitana com agilidade e foco em <strong>segurança privada em São José SC</strong>:
          </p>
          <div className="grid grid-cols-2 gap-6">
            {[
              'São José SC (Sede)',
              'Florianópolis',
              'Palhoça',
              'Biguaçu',
              'Santo Amaro',
              'Grande Florianópolis'
            ].map((city, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl backdrop-blur-sm border border-white/10">
                <MapPin className="w-5 h-5 text-neutral-400" />
                <span className="font-semibold">{city}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="aspect-square bg-neutral-800/50 rounded-full flex items-center justify-center p-12 border border-neutral-700">
            <div className="text-center">
              <Shield className="w-24 h-24 text-neutral-400 mx-auto mb-6" />
              <p className="text-3xl font-bold mb-2 text-white">Segurança Privada São José SC</p>
              <p className="text-neutral-400">Proteção garantida pela melhor empresa de segurança em São José SC.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const WhyUs = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-4xl font-display font-bold text-neutral-900 mb-6">
          Por que Escolher a SCHMITT Segurança?
        </h2>
        <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
          Unimos tradição, tecnologia e inteligência para ser a melhor empresa de segurança em São José SC.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { title: 'Autoridade Máxima', desc: 'Referência no setor com histórico impecável de proteção.', icon: Eye },
          { title: 'Tecnologia 4.0', desc: 'Sistemas inteligentes de monitoramento e análise de dados.', icon: Shield },
          { title: 'Treinamento Tático', desc: 'Equipe preparada para situações de alto risco.', icon: Users },
          { title: 'Atendimento 24h', desc: 'Suporte e vigilância ininterruptos todos os dias.', icon: Phone }
        ].map((item, i) => (
          <div key={i} className="text-center p-8 rounded-3xl bg-neutral-50 border border-neutral-100">
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mx-auto mb-6">
              <item.icon className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-xl font-bold text-neutral-900 mb-3">{item.title}</h3>
            <p className="text-neutral-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-neutral-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-display font-bold text-neutral-900 mb-4">O que dizem nossos clientes</h2>
        <div className="flex justify-center gap-1">
          {[1, 2, 3, 4, 5].map((s) => <Star key={s} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
        </div>
        <p className="mt-4 text-neutral-600 font-medium">Nota 4.9/5 baseada em mais de 200 avaliações no Google</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { name: 'Ricardo Silva', role: 'Síndico Profissional', text: 'A SCHMITT transformou a segurança do nosso condomínio em São José. Profissionais extremamente educados e vigilantes.' },
          { name: 'Ana Paula Costa', role: 'Gerente Industrial', text: 'Melhor empresa de vigilância São José SC. O sistema de ronda motorizada deles é impecável e nos dá muita paz.' },
          { name: 'Marcos Oliveira', role: 'Empresário', text: 'Contratei a segurança patrimonial para minha loja e estou muito satisfeito. Atendimento rápido e tecnologia de ponta.' }
        ].map((t, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100">
            <p className="text-neutral-600 italic mb-6">"{t.text}"</p>
            <div>
              <p className="font-bold text-neutral-900">{t.name}</p>
              <p className="text-sm text-neutral-500">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const faqs = [
    { q: 'Quanto custa uma empresa de segurança em São José SC?', a: 'O valor de uma empresa de segurança em São José SC depende da complexidade do projeto. Oferecemos orçamentos personalizados para segurança patrimonial em São José SC com o melhor custo-benefício.' },
    { q: 'Como contratar segurança patrimonial em São José SC?', a: 'Para contratar segurança patrimonial em São José SC, entre em contato com a SCHMITT. Fazemos uma análise técnica e apresentamos o melhor plano de vigilância.' },
    { q: 'Qual a melhor empresa de vigilância São José SC?', a: 'A SCHMITT é reconhecida como a melhor empresa de vigilância São José SC devido ao seu rigoroso treinamento e tecnologia avançada.' },
    { q: 'Como funciona a segurança para condomínios em São José SC?', a: 'Nossa segurança para condomínios em São José SC integra portaria, rondas e monitoramento para garantir a paz total dos moradores.' },
    { q: 'A SCHMITT faz segurança privada em São José SC?', a: 'Sim, somos especialistas em segurança privada em São José SC, atendendo executivos, eventos e proteção VIP com máxima discrição.' },
    { q: 'Por que investir em segurança privada São José SC?', a: 'Investir em segurança privada São José SC garante a proteção do seu patrimônio e a integridade das pessoas com profissionais qualificados.' },
    { q: 'A empresa de segurança em São José SC atende 24 horas?', a: 'Sim, como uma empresa de segurança em São José SC de elite, operamos 24 horas por dia, 7 dias por semana.' },
    { q: 'Quais os diferenciais da segurança patrimonial em São José SC da SCHMITT?', a: 'Nossa segurança patrimonial em São José SC se destaca pelo uso de inteligência artificial no monitoramento e resposta tática imediata.' },
    { q: 'Como verificar se uma empresa de vigilância São José SC é legalizada?', a: 'Uma empresa de vigilância São José SC séria deve possuir autorização da Polícia Federal, como é o caso da SCHMITT.' },
    { q: 'Onde encontrar segurança para condomínios em São José SC?', a: 'A SCHMITT é a parceira ideal para segurança para condomínios em São José SC, com centenas de clientes satisfeitos na região.' }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-display font-bold text-neutral-900 mb-12 text-center">
          Perguntas Frequentes sobre Segurança em São José SC
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-neutral-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-neutral-50 transition-colors"
              >
                <span className="font-bold text-neutral-900">{faq.q}</span>
                {openIndex === i ? <ChevronUp className="text-black" /> : <ChevronDown className="text-neutral-400" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-neutral-600 leading-relaxed border-t border-neutral-100">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contato" className="py-24 bg-neutral-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl font-display font-bold mb-8">
            Solicite seu Orçamento de Segurança Privada São José
          </h2>
          <p className="text-xl text-neutral-400 mb-10">
            Não deixe seu patrimônio vulnerável. Fale agora com nossos especialistas e tenha a melhor proteção da Grande Florianópolis.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-neutral-400" />
              </div>
              <div>
                <p className="font-bold mb-1">Endereço</p>
                <p className="text-neutral-400">Rua João Paulo Gaspar, 2702 – Pedregal, São José – SC, 88113-311</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-neutral-400" />
              </div>
              <div>
                <p className="font-bold mb-1">Telefone / WhatsApp</p>
                <p className="text-neutral-400">(48) 98486-8277</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neutral-800 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-neutral-400" />
              </div>
              <div>
                <p className="font-bold mb-1">E-mail</p>
                <p className="text-neutral-400">contato@schmittseguranca.com.br</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-2xl">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-neutral-900 mb-2">Nome Completo</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 focus:ring-2 focus:ring-black outline-none transition-all" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-bold text-neutral-900 mb-2">WhatsApp</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 focus:ring-2 focus:ring-black outline-none transition-all" placeholder="(48) 99999-9999" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-neutral-900 mb-2">Tipo de Serviço</label>
              <select className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 focus:ring-2 focus:ring-black outline-none transition-all">
                <option>Vigilância Patrimonial</option>
                <option>Segurança Privada</option>
                <option>Segurança para Condomínios</option>
                <option>Portaria e Acesso</option>
                <option>Ronda Motorizada</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-neutral-900 mb-2">Mensagem</label>
              <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-neutral-200 text-neutral-900 focus:ring-2 focus:ring-black outline-none transition-all" placeholder="Como podemos ajudar?"></textarea>
            </div>
            <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-neutral-800 transition-all shadow-xl shadow-black/20">
              Enviar Solicitação
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-neutral-950 text-white py-12 border-t border-neutral-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div className="col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img 
              src={logo} 
              alt="SCHMITT Logo" 
              className="h-12 w-auto brightness-0 invert opacity-80"
            />
            <span className="font-display font-bold text-2xl tracking-tight">
              SCHMITT <span className="text-neutral-500">SEGURANÇA</span>
            </span>
          </div>
          <p className="text-neutral-500 max-w-md leading-relaxed">
            A SCHMITT é a principal empresa de segurança em São José SC, oferecendo soluções de vigilância patrimonial e segurança privada com o mais alto padrão de qualidade e tecnologia.
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-lg">Links Rápidos</h4>
          <ul className="space-y-4 text-neutral-500">
            <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
            <li><a href="#sobre" className="hover:text-white transition-colors">Sobre Nós</a></li>
            <li><a href="#servicos" className="hover:text-white transition-colors">Serviços</a></li>
            <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-lg">Serviços</h4>
          <ul className="space-y-4 text-neutral-500">
            <li><a href="#servicos" className="hover:text-white transition-colors">Vigilância Patrimonial</a></li>
            <li><a href="#servicos" className="hover:text-white transition-colors">Segurança Privada</a></li>
            <li><a href="#servicos" className="hover:text-white transition-colors">Ronda Motorizada</a></li>
            <li><a href="#servicos" className="hover:text-white transition-colors">Portaria 24h</a></li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-neutral-800 text-center text-neutral-600 text-sm">
        <p>© {new Date().getFullYear()} SCHMITT – Vigilância Patrimonial e Segurança. Todos os direitos reservados.</p>
        <p className="mt-2">Desenvolvido com foco em SEO e Alta Conversão.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Areas />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
