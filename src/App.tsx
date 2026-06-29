import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Zap,
  Activity,
  Brain,
  Sparkles,
  Calendar,
  PhoneCall,
  MessageSquare,
  ChevronRight,
  CheckCircle2,
  Users,
  Video,
  BookOpen,
  Truck,
  ShieldCheck,
  Menu,
  X,
  Star,
  Play,
  Clock,
  ArrowRight,
  Mail,
  Award,
  Flame
} from 'lucide-react';

import {
  HERO_DATA,
  TRUST_INDICATORS,
  BENEFITS,
  VITAL_METHOD,
  PRODUCT_SHOWCASE,
  TRANSFORMATION_STEPS,
  TESTIMONIALS,
  COMMUNITY_FEATURES,
  FAQS,
  FOOTER_TRUST_ITEMS
} from './data';

import ScarcityBanner from './components/ScarcityBanner';
import StickyCTA from './components/StickyCTA';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import FAQAccordion from './components/FAQAccordion';
import BotanicalElements, { BotanicalSingleLeaf } from './components/BotanicalElements';
import LeadModal from './components/LeadModal';
import ExitIntentHandler from './components/ExitIntentHandler';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeVitalLetter, setActiveVitalLetter] = useState<'V' | 'I' | 'T' | 'A' | 'L'>('V');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalSubtitle, setModalSubtitle] = useState('');
  const [modalCtaText, setModalCtaText] = useState('');
  const [modalSource, setModalSource] = useState('');

  // In-page newsletter form state
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // In-page lead capture form state
  const [inPageName, setInPageName] = useState('');
  const [inPageEmail, setInPageEmail] = useState('');
  const [inPagePhone, setInPagePhone] = useState('');
  const [inPageSuccess, setInPageSuccess] = useState(false);

  const openBookingModal = (
    title = "Agenda tu Sesión de Diagnóstico Gratuita",
    subtitle = "Analizaremos tu vitalidad actual y diseñaremos un plan personalizado de 3 pasos.",
    cta = "Confirmar y Agendar Llamada →",
    source = "General CTA"
  ) => {
    setModalTitle(title);
    setModalSubtitle(subtitle);
    setModalCtaText(cta);
    setModalSource(source);
    setIsModalOpen(true);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSuccess(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 4000);
  };

  const handleInPageLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inPageName || !inPageEmail) return;
    setInPageSuccess(true);
    const lead = {
      name: inPageName,
      email: inPageEmail,
      phone: inPagePhone,
      source: "In-Page Contact Form",
      createdAt: new Date().toISOString()
    };
    const existingLeads = JSON.parse(localStorage.getItem('vital_coach_leads') || '[]');
    existingLeads.push(lead);
    localStorage.setItem('vital_coach_leads', JSON.stringify(existingLeads));
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col font-sans selection:bg-forest-100 selection:text-forest-900 overflow-x-hidden">
      {/* Urgency Banner */}
      <ScarcityBanner />

      {/* Exit Intent detection popup */}
      <ExitIntentHandler />

      {/* Sticky Bottom Scroll CTA */}
      <StickyCTA onCtaClick={() => openBookingModal(
        "Agenda tu Sesión de Diagnóstico Gratuita",
        "Analizaremos tu vitalidad actual y diseñaremos un plan de acción rápido de 3 pasos.",
        "Agendar Llamada Gratis Ahora →",
        "Sticky bottom CTA bar"
      )} />

      {/* Floating WhatsApp Chat Widget */}
      <FloatingWhatsApp />

      {/* Header / Navigation Bar */}
      <header className="sticky top-0 z-40 w-full transition-all duration-300 glass border-b border-forest-800/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('inicio')}>
              <div className="w-10 h-10 rounded-full bg-forest-900 flex items-center justify-center border border-gold-400/20">
                <svg className="w-5.5 h-5.5 text-gold-400" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 15 C35 35 25 50 50 85 C75 50 65 35 50 15 Z" />
                </svg>
              </div>
              <div>
                <span className="block font-serif text-lg font-bold tracking-tight text-forest-900 leading-none">
                  VITAL COACH
                </span>
                <span className="block text-[9px] font-semibold text-gold-600 tracking-widest uppercase">
                  Salud y Bienestar
                </span>
              </div>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-forest-800">
              <button onClick={() => scrollToSection('inicio')} className="hover:text-forest-950 transition-colors cursor-pointer">Inicio</button>
              <button onClick={() => scrollToSection('metodo')} className="hover:text-forest-950 transition-colors cursor-pointer">Método VITAL</button>
              <button onClick={() => scrollToSection('multydrink')} className="hover:text-forest-950 transition-colors cursor-pointer">MultyDrink</button>
              <button onClick={() => scrollToSection('testimonios')} className="hover:text-forest-950 transition-colors cursor-pointer">Testimonios</button>
              <button onClick={() => scrollToSection('comunidad')} className="hover:text-forest-950 transition-colors cursor-pointer">Comunidad</button>
              <button onClick={() => scrollToSection('faq')} className="hover:text-forest-950 transition-colors cursor-pointer">Preguntas</button>
            </nav>

            {/* Right Action button */}
            <div className="hidden md:flex items-center">
              <a
                href="https://wa.me/5491112345678?text=Hola,%20me%20interesa%20agendar%20una%20llamada%20de%20diagn%C3%B3stico%20gratuita."
                target="_blank"
                rel="noopener noreferrer"
                id="header-whatsapp-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-forest-900 text-gold-400 hover:bg-forest-800 text-sm font-medium border border-gold-400/20 transition-all shadow-md shadow-forest-900/5 active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 fill-gold-400/10" /> WhatsApp
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              id="mobile-menu-toggle"
              className="md:hidden p-2 rounded-xl text-forest-900 hover:bg-forest-100 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              id="mobile-menu-dropdown"
              className="md:hidden bg-cream-50 border-t border-forest-800/5 overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-3.5 text-base font-semibold text-forest-800">
                <button onClick={() => scrollToSection('inicio')} className="block w-full text-left py-2 hover:text-forest-950 transition-colors">Inicio</button>
                <button onClick={() => scrollToSection('metodo')} className="block w-full text-left py-2 hover:text-forest-950 transition-colors">Método VITAL</button>
                <button onClick={() => scrollToSection('multydrink')} className="block w-full text-left py-2 hover:text-forest-950 transition-colors">MultyDrink</button>
                <button onClick={() => scrollToSection('testimonios')} className="block w-full text-left py-2 hover:text-forest-950 transition-colors">Testimonios</button>
                <button onClick={() => scrollToSection('comunidad')} className="block w-full text-left py-2 hover:text-forest-950 transition-colors">Comunidad</button>
                <button onClick={() => scrollToSection('faq')} className="block w-full text-left py-2 hover:text-forest-950 transition-colors">Preguntas</button>
                
                <div className="pt-2">
                  <a
                    href="https://wa.me/5491112345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-forest-900 text-gold-400 font-bold border border-gold-400/20 shadow-md"
                  >
                    <MessageSquare className="w-5 h-5" /> Hablar por WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Sections Wrapper */}
      <main className="flex-1 relative">
        <BotanicalElements />

        {/* SECTION 1: HERO SECTION */}
        <section id="inicio" className="relative pt-10 pb-20 sm:pb-24 lg:pt-14 lg:pb-32 overflow-hidden bg-gradient-to-b from-cream-100 to-cream-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Hero Left: Text Content */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold bg-forest-100 text-forest-800 border border-forest-800/5">
                    <Sparkles className="w-3.5 h-3.5 text-gold-500 fill-gold-500/10" /> Coaching de Longevidad y Vitalidad Activa
                  </span>
                  
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-forest-900 leading-tight sm:leading-none tracking-tight">
                    Recupera tu <span className="text-forest-700 italic font-medium">energía</span>, tu salud y tu <span className="text-forest-700 italic font-medium">mejor versión</span> desde hoy.
                  </h1>
                  
                  <p className="text-base sm:text-lg text-forest-800/80 leading-relaxed max-w-2xl">
                    {HERO_DATA.subheadline}
                  </p>

                  <div className="p-3 bg-white/75 border border-gold-300/20 rounded-2xl inline-block shadow-sm">
                    <span className="text-xs sm:text-sm font-bold text-forest-900 flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-gold-500 rounded-full animate-ping" />
                      {HERO_DATA.productHighlight}
                    </span>
                  </div>
                </motion.div>

                {/* Hero Bullets Checklist */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2"
                >
                  {HERO_DATA.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-forest-900 text-gold-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400" />
                      </div>
                      <span className="text-sm font-semibold text-forest-900">{bullet}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Hero CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4"
                >
                  <button
                    onClick={() => openBookingModal(
                      "Comienza tu Transformación",
                      "Ingresa tus datos para agendar tu primera sesión de diagnóstico con el método VITAL y MultyDrink.",
                      "Comenzar Mi Transformación Ahora →",
                      "Hero Primary Button"
                    )}
                    id="hero-primary-cta"
                    className="py-4 px-8 rounded-full bg-forest-900 hover:bg-forest-800 text-white font-bold tracking-wide text-sm sm:text-base border border-gold-500/20 shadow-xl shadow-forest-900/10 cursor-pointer active:scale-[0.98] transition-all text-center flex items-center justify-center gap-2 group"
                  >
                    {HERO_DATA.ctaPrimary}
                  </button>

                  <button
                    onClick={() => openBookingModal(
                      "Reserva tu Llamada de Bienestar",
                      "Elige un horario libre y agenda una asesoría directa de 15 minutos para transformar tus hábitos.",
                      "Reservar Mi Llamada Gratis →",
                      "Hero Secondary Button"
                    )}
                    id="hero-secondary-cta"
                    className="py-4 px-8 rounded-full bg-white hover:bg-cream-100 text-forest-900 font-bold border border-forest-800/10 hover:border-forest-800/25 shadow-md shadow-forest-900/5 cursor-pointer active:scale-[0.98] transition-all text-center flex items-center justify-center gap-2"
                  >
                    <span>{HERO_DATA.ctaSecondary}</span>
                  </button>
                </motion.div>

                {/* Hero Micro Trust Indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.6 }}
                  transition={{ delay: 0.5 }}
                  className="text-xs text-forest-800 font-medium flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" /> +12,000 vidas impactadas • Coach certificado • 100% natural garantizado
                </motion.div>
              </div>

              {/* Hero Right: Premium Box Visual */}
              <div className="lg:col-span-5 relative flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="relative w-full max-w-md sm:max-w-lg lg:max-w-none"
                >
                  {/* Decorative golden background aura */}
                  <div className="absolute inset-0 bg-gold-400/10 rounded-full blur-3xl scale-90 -z-10" />

                  {/* Arched main frame for layout variety */}
                  <div className="relative rounded-[3rem] overflow-hidden border border-gold-300/20 bg-cream-50 p-3 shadow-2xl">
                    <img
                      src={HERO_DATA.productImage}
                      alt="Premium MultyDrink Wellness Product Pack"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover rounded-[2.5rem] transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>

                  {/* Floating badge for added interaction */}
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gold-400/30 flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-600">
                      <Award className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-forest-900 leading-none">Antioxidante Premium</p>
                      <p className="text-[10px] text-forest-800/70 font-medium mt-1">Calidad de Longevidad Premium</p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* TRUST INDICATORS SECTION (Green Background Ribbon) */}
        <section className="bg-forest-900 text-cream-50 py-10 sm:py-12 border-y border-gold-500/15 relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-6 text-center divide-y md:divide-y-0 md:divide-x divide-gold-500/20">
              {TRUST_INDICATORS.map((indicator, idx) => (
                <div key={indicator.id} className={`pt-4 md:pt-0 ${idx > 1 ? 'border-t md:border-t-0' : ''}`}>
                  <h3 className="font-serif text-3xl sm:text-4xl font-bold text-gold-300 tracking-tight">
                    {indicator.value}
                  </h3>
                  <p className="text-sm font-bold text-cream-100 mt-1 uppercase tracking-wider">
                    {indicator.label}
                  </p>
                  <p className="text-[11px] text-cream-100/60 mt-0.5">
                    {indicator.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 2: BENEFITS SECTION */}
        <section className="py-20 sm:py-28 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header Title */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest bg-gold-500/5 px-3.5 py-1 rounded-full">
                Beneficios de tu transformación
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-forest-900 tracking-tight">
                Diseñado para darte el control total de tu vitalidad y bienestar
              </h2>
              <p className="text-base text-forest-800/70 leading-relaxed">
                Integra el poder de la nutrición botánica premium con hábitos prácticos de coaching y experimenta resultados que se sostienen en el tiempo.
              </p>
            </div>

            {/* Benefits Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {BENEFITS.map((benefit, idx) => {
                // Select matching Lucide Icon
                const getIcon = (name: string) => {
                  switch (name) {
                    case 'Zap': return <Zap className="w-6 h-6" />;
                    case 'Activity': return <Activity className="w-6 h-6" />;
                    case 'Brain': return <Brain className="w-6 h-6" />;
                    case 'Sparkles': return <Sparkles className="w-6 h-6" />;
                    case 'Calendar': return <Calendar className="w-6 h-6" />;
                    default: return <Award className="w-6 h-6" />;
                  }
                };

                return (
                  <motion.div
                    key={benefit.id}
                    whileHover={{ y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="p-8 rounded-3xl bg-cream-50 border border-forest-800/5 shadow-sm hover:shadow-xl hover:border-gold-300/30 transition-all text-left group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-forest-900 text-gold-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-md shadow-forest-900/5">
                      {getIcon(benefit.iconName)}
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-bold text-forest-900 mb-3 group-hover:text-forest-700 transition-colors">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-sm text-forest-800/80 leading-relaxed">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
              
              {/* Special interactive card to action */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-forest-900 to-forest-950 text-cream-50 flex flex-col justify-between border border-gold-300/20 text-left shadow-lg relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/10 rounded-full blur-2xl group-hover:bg-gold-400/20 transition-all duration-500" />
                
                <div className="space-y-4">
                  <span className="text-xs text-gold-300 font-bold uppercase tracking-wider">
                    ¿Listo para empezar?
                  </span>
                  <h3 className="text-2xl font-serif font-medium leading-tight text-white">
                    Descubre el nivel de toxicidad y fatiga de tu cuerpo.
                  </h3>
                  <p className="text-xs text-cream-100/70 leading-relaxed">
                    Realiza un autodiagnóstico rápido de tus hábitos digestivos y energéticos en nuestra llamada gratuita de diagnóstico VITAL.
                  </p>
                </div>

                <button
                  onClick={() => openBookingModal(
                    "Agenda tu Autodiagnóstico VITAL",
                    "Te ayudaremos a identificar los ladrones de energía de tu rutina diaria de forma gratuita.",
                    "Hacer Autodiagnóstico Gratis →",
                    "Benefits Special Grid Card"
                  )}
                  id="benefits-quick-cta"
                  className="mt-8 py-3.5 px-6 rounded-full bg-gold-500 text-forest-950 font-bold hover:bg-gold-400 active:scale-[0.98] transition-all flex items-center justify-center gap-2 text-sm shadow-md"
                >
                  Agendar Autodiagnóstico <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: THE VITAL METHOD SECTION */}
        <section id="metodo" className="py-20 sm:py-28 bg-cream-50/50 border-t border-forest-800/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Method Left Column: Interactive Cards Deck */}
              <div className="lg:col-span-7 text-left space-y-6 sm:space-y-8">
                <div>
                  <span className="text-xs font-bold text-gold-600 uppercase tracking-widest bg-gold-500/5 px-3.5 py-1 rounded-full">
                    Metodología exclusiva de transformación
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-forest-900 mt-3 tracking-tight">
                    Conoce el Método VITAL
                  </h2>
                  <p className="text-sm sm:text-base text-forest-800/75 mt-3 max-w-xl">
                    Mi sistema integral de acompañamiento está estructurado bajo cinco pilares esenciales que promueven una salud inquebrantable, óptima absorción y vitalidad perpetua.
                  </p>
                </div>

                {/* Grid of the 5 Letters V-I-T-A-L */}
                <div className="space-y-3.5">
                  {VITAL_METHOD.map((step) => {
                    const isActive = activeVitalLetter === step.letter;
                    return (
                      <div
                        key={step.letter}
                        className={`rounded-2xl border transition-all duration-300 cursor-pointer overflow-hidden ${
                          isActive
                            ? 'bg-white border-gold-300 shadow-md p-6'
                            : 'bg-white/40 border-forest-800/5 p-4 hover:bg-white/85 hover:border-forest-800/10'
                        }`}
                        onClick={() => setActiveVitalLetter(step.letter)}
                      >
                        <div className="flex items-center gap-4">
                          {/* Circular Letter Icon */}
                          <div
                            className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full font-serif font-bold text-lg sm:text-xl flex items-center justify-center shrink-0 border transition-all duration-300 ${
                              isActive
                                ? 'bg-forest-900 text-gold-400 border-gold-400/20 shadow-md'
                                : 'bg-cream-100 text-forest-800 border-transparent'
                            }`}
                          >
                            {step.letter}
                          </div>

                          <div className="flex-1">
                            <h4 className="text-base sm:text-lg font-bold text-forest-900 leading-tight">
                              {step.title}
                            </h4>
                            <p className="text-xs sm:text-sm text-forest-800/60 font-medium">
                              {step.description}
                            </p>
                          </div>

                          {!isActive && (
                            <ChevronRight className="w-5 h-5 text-forest-800/40" />
                          )}
                        </div>

                        {/* Expandable Details on Click */}
                        <AnimatePresence initial={false}>
                          {isActive && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-3 border-t border-forest-800/5 text-sm text-forest-800/80 leading-relaxed"
                            >
                              {step.extendedDescription}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Method Right Column: Large portrait of Wellness Coach */}
              <div className="lg:col-span-5 relative flex justify-center items-center">
                <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
                  {/* Decorative plant silhouette or border overlay */}
                  <div className="absolute inset-0 bg-forest-900/5 rounded-3xl blur-3xl scale-95 -z-10" />

                  {/* Arched image container matching the style guidelines */}
                  <div className="relative rounded-[3rem] overflow-hidden border border-gold-300/20 bg-white p-3.5 shadow-2xl">
                    <img
                      src={HERO_DATA.coachImage}
                      alt="Health & Wellness Coach Portrait"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover rounded-[2.5rem] transition-transform duration-700 hover:scale-[1.02]"
                    />
                    
                    {/* Caption block on coach portrait */}
                    <div className="absolute bottom-8 left-8 right-8 bg-forest-900/95 backdrop-blur-md p-5 rounded-2xl border border-gold-300/10 text-white shadow-xl text-left">
                      <h4 className="font-serif font-bold text-lg text-gold-300">
                        Marcos Santillán
                      </h4>
                      <p className="text-xs text-cream-100/70 font-semibold mt-0.5">
                        Tu Coach de Longevidad y Nutrición Celular
                      </p>
                      <p className="text-[11px] text-cream-100/60 leading-relaxed mt-2 italic">
                        "Mi propósito es simplificar tu camino hacia un cuerpo desinflamado, lleno de energía sostenible y libre de fatiga crónica."
                      </p>
                    </div>
                  </div>

                  {/* Floating single leaf decoration */}
                  <BotanicalSingleLeaf className="absolute -top-6 -right-6 w-12 h-12" />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 4: PRODUCT SHOWCASE SECTION (Forest Green Background) */}
        <section id="multydrink" className="py-20 sm:py-28 bg-forest-900 text-cream-50 relative overflow-hidden border-y border-gold-500/10">
          {/* Subtle background decoration */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(27,94,74,0.15),transparent_60%)] pointer-events-none z-0" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Product Left Column: Copy & Ingredient details */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
                <div>
                  <span className="text-xs font-bold text-gold-400 uppercase tracking-widest bg-white/5 px-3.5 py-1.5 rounded-full border border-white/5">
                    Elíxir de vitalidad y longevidad activa
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-serif font-semibold text-white mt-4 tracking-tight leading-none">
                    MultyDrink® <br />
                    <span className="text-gold-400 font-medium italic text-3xl sm:text-4xl">Tu aliado antioxidante para cada día</span>
                  </h2>
                  <p className="text-sm sm:text-base text-cream-100/80 leading-relaxed mt-4 max-w-xl">
                    {PRODUCT_SHOWCASE.description} Su exclusiva mezcla herbolaria de nivel clínico detiene el desgaste celular y combate los efectos inflamatorios del estrés moderno.
                  </p>
                </div>

                {/* Bullets List */}
                <div className="space-y-3 pt-2">
                  {PRODUCT_SHOWCASE.bullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5.5 h-5.5 rounded-full bg-gold-500 text-forest-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-forest-950 fill-none" />
                      </div>
                      <span className="text-sm sm:text-base font-medium text-cream-100">{bullet}</span>
                    </div>
                  ))}
                </div>

                {/* List of Ingredients */}
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gold-400">
                    Sinergia Botánica de Alta Pureza:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {PRODUCT_SHOWCASE.ingredients.map((ing, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-white/5 p-2.5 rounded-xl border border-white/5 hover:border-gold-500/20 hover:bg-white/10 transition-all">
                        <span className="w-2 h-2 rounded-full bg-gold-400" />
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-white leading-none">{ing.name}</p>
                          <p className="text-[10px] text-cream-100/60 mt-0.5 leading-none">{ing.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action */}
                <div className="pt-4">
                  <button
                    onClick={() => openBookingModal(
                      "Descubre el poder de MultyDrink®",
                      "Conoce el valor y promociones exclusivas de MultyDrink junto a las sesiones gratuitas del Método VITAL.",
                      "Quiero Saber Más de MultyDrink →",
                      "Product Showcase View"
                    )}
                    id="product-showcase-cta"
                    className="py-4 px-8 rounded-full bg-gold-500 hover:bg-gold-400 text-forest-950 font-bold tracking-wide text-sm sm:text-base shadow-lg transition-all active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 inline-flex"
                  >
                    {PRODUCT_SHOWCASE.buttonText}
                  </button>
                </div>
              </div>

              {/* Product Right Column: Visual of Premium Pack with Floating highlights */}
              <div className="lg:col-span-5 relative flex justify-center items-center">
                <div className="relative w-full max-w-md">
                  {/* Decorative premium aura */}
                  <div className="absolute inset-0 bg-gold-300/10 rounded-full blur-3xl scale-95" />

                  {/* Arched glass border panel */}
                  <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-forest-950 p-3.5 shadow-2xl">
                    <img
                      src={PRODUCT_SHOWCASE.image}
                      alt="Premium MultyDrink product package box details"
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover rounded-[2.5rem] hover:scale-105 transition-all duration-700"
                    />
                  </div>

                  {/* Floating trust badges */}
                  <div className="absolute -top-4 -right-4 bg-white text-forest-900 px-4 py-2 rounded-xl shadow-lg border border-gold-300/30 text-[10px] font-bold uppercase tracking-wider">
                    🍇 Resveratrol Clínico
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-white text-forest-900 px-4 py-2 rounded-xl shadow-lg border border-gold-300/30 text-[10px] font-bold uppercase tracking-wider">
                    🍄 Hongo Reishi
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 5: TRANSFORMATION JOURNEY TIMELINE */}
        <section className="py-20 sm:py-28 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header Title */}
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest bg-gold-500/5 px-3.5 py-1 rounded-full">
                Tu Ruta de Crecimiento
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-forest-900 tracking-tight">
                Tu camino hacia una vida plena
              </h2>
              <p className="text-base text-forest-800/70">
                Diseñamos un trayecto progresivo estructurado para guiarte paso a paso desde el primer día, sin estrés, combinando soporte uno a uno y nutrición premium.
              </p>
            </div>

            {/* Timeline Steps layout */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
              {/* Desktop connected dotted line */}
              <div className="hidden md:block absolute top-[28%] left-12 right-12 h-0.5 border-t border-dashed border-forest-800/20 -z-10" />

              {TRANSFORMATION_STEPS.map((step, idx) => (
                <div key={step.stepNumber} className="flex flex-col items-center text-center space-y-4 group">
                  {/* Step image frame (Arched / rounded) */}
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-forest-800/5 shadow-md group-hover:shadow-lg transition-all">
                    <img
                      src={step.image}
                      alt={step.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                    />
                    
                    {/* Floating step number badge */}
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-forest-900 text-gold-400 text-xs font-bold flex items-center justify-center border border-gold-400/20 shadow-md">
                      {step.stepNumber}
                    </div>
                  </div>

                  {/* Step title and content */}
                  <div className="space-y-1.5 px-2 text-center">
                    <h4 className="font-serif font-bold text-base sm:text-lg text-forest-900 group-hover:text-forest-700 transition-colors">
                      {step.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-forest-800/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Middle conversion step button */}
            <div className="mt-16 text-center">
              <button
                onClick={() => openBookingModal(
                  "Agenda tu Llamada Gratis de Bienestar",
                  "Consigue claridad sobre cómo integrar la Guía, el coaching y MultyDrink a tu rutina diaria en 15 minutos.",
                  "Quiero Iniciar Mi Ruta de Salud →",
                  "Transformation Timeline CTA"
                )}
                id="timeline-main-cta"
                className="py-4 px-10 rounded-full bg-forest-900 hover:bg-forest-800 text-white font-bold text-sm sm:text-base border border-gold-500/20 shadow-xl shadow-forest-900/10 cursor-pointer flex items-center gap-2 justify-center inline-flex"
              >
                Comienza Tu Camino de Transformación <ArrowRight className="w-4 h-4 text-gold-400" />
              </button>
            </div>

          </div>
        </section>

        {/* SECTION 6: SOCIAL PROOF / TESTIMONIALS SECTION */}
        <section id="testimonios" className="py-20 sm:py-28 bg-cream-100/50 border-t border-forest-800/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Testimonials Left Column: Cards */}
              <div className="lg:col-span-8 text-left space-y-8">
                <div>
                  <span className="text-xs font-bold text-gold-600 uppercase tracking-widest bg-gold-500/5 px-3.5 py-1 rounded-full">
                    Casos de éxito reales
                  </span>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-forest-900 mt-3 tracking-tight">
                    Historias reales, resultados reales
                  </h2>
                  <p className="text-sm sm:text-base text-forest-800/75 max-w-xl">
                    Descubre el impacto del Método VITAL y la suplementación con MultyDrink de boca de profesionales que recuperaron su bienestar, ligereza e impulso de forma natural.
                  </p>
                </div>

                {/* Grid of the Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {TESTIMONIALS.map((test) => (
                    <div
                      key={test.id}
                      className="bg-white rounded-2xl p-6 border border-forest-800/5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between text-left relative"
                    >
                      {/* Image header with Video Play Overlay for visual value */}
                      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 border border-forest-800/5 shrink-0 group cursor-pointer">
                        <img
                          src={test.image}
                          alt={test.name}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Elegant Glass play button to suggest video proof */}
                        <div className="absolute inset-0 bg-forest-950/20 flex items-center justify-center">
                          <span className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-forest-900 shadow-md group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-forest-950 transition-all">
                            <Play className="w-4 h-4 fill-current pl-0.5" />
                          </span>
                        </div>
                        {/* Badge with client designation metrics */}
                        <div className="absolute bottom-2 left-2 bg-forest-900/90 text-[9px] font-bold text-gold-300 py-1 px-2 rounded border border-gold-300/20 leading-none">
                          {test.metrics}
                        </div>
                      </div>

                      {/* Stars and feedback content */}
                      <div className="space-y-3 flex-1 flex flex-col justify-between">
                        <div className="space-y-2">
                          <div className="flex gap-0.5 text-gold-500">
                            {[...Array(test.stars)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                          </div>
                          <p className="text-xs sm:text-sm text-forest-800/80 leading-relaxed italic">
                            "{test.text}"
                          </p>
                        </div>

                        {/* Person identification */}
                        <div className="pt-3 border-t border-forest-800/5 mt-3">
                          <h4 className="text-xs font-bold text-forest-900 leading-none">
                            {test.name}
                          </h4>
                          <p className="text-[10px] text-forest-800/50 mt-0.5 font-medium">
                            {test.designation}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonials Right Column: Large Trust panel box */}
              <div className="lg:col-span-4">
                <div className="bg-forest-900 text-cream-50 rounded-3xl p-8 border border-gold-300/25 shadow-xl text-left relative overflow-hidden space-y-6">
                  {/* Decorative background circle */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gold-400/5 rounded-full blur-2xl" />

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400">
                      Métricas de impacto
                    </span>
                    <h3 className="font-serif text-3xl font-bold leading-tight text-white">
                      Unión que impacta vidas
                    </h3>
                  </div>

                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div>
                      <h4 className="text-4xl font-serif font-bold text-gold-300 leading-none">
                        +12K
                      </h4>
                      <p className="text-xs text-cream-100/70 mt-1 font-semibold uppercase tracking-wider">
                        Vidas transformadas con éxito
                      </p>
                    </div>

                    <div>
                      <h4 className="text-4xl font-serif font-bold text-gold-300 leading-none">
                        98%
                      </h4>
                      <p className="text-xs text-cream-100/70 mt-1 font-semibold uppercase tracking-wider">
                        Recomiendan MultyDrink® y el método
                      </p>
                    </div>

                    <div>
                      <h4 className="text-4xl font-serif font-bold text-gold-300 leading-none">
                        4.9/5
                      </h4>
                      <p className="text-xs text-cream-100/70 mt-1 font-semibold uppercase tracking-wider">
                        Calificación promedio de satisfacción
                      </p>
                    </div>
                  </div>

                  {/* Trust box small visual of MultyDrink with ingredients */}
                  <div className="pt-6 border-t border-white/10 flex items-center gap-3">
                    <img
                      src={HERO_DATA.productImage}
                      alt="Mini MultyDrink Pack"
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 object-cover rounded-xl border border-white/10"
                    />
                    <div>
                      <p className="text-[10px] font-bold text-white uppercase tracking-wider leading-none">MultyDrink®</p>
                      <p className="text-[9px] text-cream-100/60 leading-relaxed mt-0.5">Suplementación diaria de nivel superior.</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </section>

        {/* SECTION 7: COMMUNITY SECTION */}
        <section id="comunidad" className="py-20 sm:py-28 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header Title */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest bg-gold-500/5 px-3.5 py-1 rounded-full">
                Soporte y Crecimiento Continuo
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-forest-900 tracking-tight">
                No estás solo en este camino
              </h2>
              <p className="text-base text-forest-800/70">
                Al unirte a nuestro programa obtienes acceso inmediato a un ecosistema de soporte activo diseñado para sostener tus hábitos, resolver tus dudas diarias y festejar cada uno de tus logros.
              </p>
            </div>

            {/* Community Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {COMMUNITY_FEATURES.map((feat) => {
                const getIcon = (name: string) => {
                  switch (name) {
                    case 'Users': return <Users className="w-5 h-5" />;
                    case 'Video': return <Video className="w-5 h-5" />;
                    case 'BookOpen': return <BookOpen className="w-5 h-5" />;
                    default: return <Award className="w-5 h-5" />;
                  }
                };

                return (
                  <div
                    key={feat.id}
                    className="p-8 rounded-3xl bg-cream-50 border border-forest-800/5 shadow-sm hover:shadow-lg transition-all relative overflow-hidden group hover:border-gold-300/35"
                  >
                    <div className="w-10 h-10 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform shadow-md">
                      {getIcon(feat.iconName)}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-forest-900 mb-3 group-hover:text-forest-700 transition-colors">
                      {feat.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-forest-800/85 leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Newsletter signup area (email opt-in element) */}
            <div className="mt-16 max-w-2xl mx-auto p-8 rounded-3xl bg-cream-100/70 border border-gold-300/20 text-center space-y-4">
              <Mail className="w-8 h-8 text-gold-500 mx-auto" />
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-forest-900">
                Únete a mi Newsletter de Longevidad
              </h3>
              <p className="text-xs sm:text-sm text-forest-800/75 max-w-md mx-auto">
                Recibe semanalmente tips prácticos de biohacking, recetas funcionales desinflamatorias y promociones exclusivas para la comunidad.
              </p>

              {!newsletterSuccess ? (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row items-stretch gap-2.5 max-w-md mx-auto pt-2">
                  <input
                    type="email"
                    required
                    placeholder="Tu mejor correo electrónico"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-full text-xs sm:text-sm text-forest-950 bg-white border border-forest-800/10 focus:outline-none focus:ring-1 focus:ring-forest-700 transition-all"
                  />
                  <button
                    type="submit"
                    id="newsletter-submit-btn"
                    className="py-3 px-6 rounded-full bg-forest-900 text-gold-400 font-bold text-xs sm:text-sm hover:bg-forest-800 transition-colors shrink-0"
                  >
                    Suscribirse Gratis
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-forest-100 text-forest-900 font-medium text-sm p-4 rounded-full max-w-md mx-auto border border-forest-700/15"
                >
                  🎉 ¡Gracias por suscribirte! Revisa tu bandeja de entrada en breve.
                </motion.div>
              )}
            </div>

          </div>
        </section>

        {/* SECTION 8: FAQ SECTION */}
        <section id="faq" className="py-20 sm:py-28 bg-cream-50/50 border-t border-forest-800/5 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Header Title */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold text-gold-600 uppercase tracking-widest bg-gold-500/5 px-3.5 py-1 rounded-full">
                Preguntas frecuentes
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-forest-900 tracking-tight">
                Preguntas y respuestas claras
              </h2>
              <p className="text-sm sm:text-base text-forest-800/70">
                Todo lo que necesitas saber sobre el funcionamiento de las sesiones de coaching del Método VITAL, la dosificación de MultyDrink, envíos y garantías.
              </p>
            </div>

            {/* Accordion List */}
            <FAQAccordion items={FAQS} />

          </div>
        </section>

        {/* SECTION 9: FINAL CTA SECTION & LEAD CAPTURE FORM */}
        <section className="py-20 sm:py-28 bg-gradient-to-br from-forest-900 to-forest-950 text-cream-50 border-t border-gold-500/15 relative overflow-hidden">
          {/* Subtle natural glowing lights */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(51,159,128,0.1),transparent_60%)] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,rgba(194,155,71,0.06),transparent_60%)] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Copy Side */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-gold-300 border border-white/5">
                  <Flame className="w-3.5 h-3.5" /> Cupos limitados para esta semana
                </span>
                
                <h2 className="text-3xl sm:text-5xl font-serif font-semibold leading-tight text-white tracking-tight">
                  Comienza tu transformación hoy
                </h2>
                
                <p className="text-base text-cream-100/80 leading-relaxed">
                  Agenda una llamada gratuita de 15 minutos para conversar directamente conmigo y descubrir cómo puedo ayudarte a lograr más energía, una digestión óptima y salud celular integral.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-gold-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-cream-100 font-medium">Llamada corta y directa: solo 15 minutos de diagnóstico honesto.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                    <span className="text-xs sm:text-sm text-cream-100 font-medium">Sin rodeos ni compromisos de compra forzados.</span>
                  </div>
                </div>

                {/* Smaller preview box with ingredients */}
                <div className="pt-6 border-t border-white/10 flex items-center gap-4">
                  <img
                    src={HERO_DATA.productImage}
                    alt="MultyDrink Box Premium Pack"
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 object-cover rounded-2xl border border-white/10 shadow-lg"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white leading-none">MultyDrink® + Método VITAL</h4>
                    <p className="text-xs text-cream-100/60 leading-relaxed mt-1">El binomio perfecto para restablecer tu mitocondria y vitalidad.</p>
                  </div>
                </div>
              </div>

              {/* Lead Form Side (In-Page Lead capture form) */}
              <div className="lg:col-span-6 relative flex justify-center">
                <div className="w-full max-w-md bg-white text-forest-950 p-8 sm:p-10 rounded-3xl border border-gold-300/30 shadow-2xl relative">
                  
                  {/* Decorative golden tab */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-3 bg-gold-500 text-forest-950 px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest leading-none shadow-md">
                    ⚡ Asesoría Directa
                  </div>

                  {!inPageSuccess ? (
                    <form onSubmit={handleInPageLeadSubmit} className="space-y-4 text-left">
                      <div className="text-center mb-6">
                        <h3 className="font-serif text-2xl font-bold text-forest-900 leading-tight">
                          Agenda Tu Llamada Gratis
                        </h3>
                        <p className="text-xs text-forest-800/70 mt-1">
                          Ingresa tus datos de contacto y te agendaremos a la brevedad.
                        </p>
                      </div>

                      <div>
                        <label htmlFor="inpage-name" className="block text-[10px] font-bold text-forest-900 uppercase tracking-widest mb-1">
                          Tu Nombre Completo *
                        </label>
                        <input
                          type="text"
                          id="inpage-name"
                          required
                          placeholder="Ej. Roberto Martínez"
                          value={inPageName}
                          onChange={(e) => setInPageName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-forest-800/10 bg-cream-50 text-forest-950 focus:outline-none focus:ring-1 focus:ring-forest-700 transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="inpage-email" className="block text-[10px] font-bold text-forest-900 uppercase tracking-widest mb-1">
                          Correo Electrónico *
                        </label>
                        <input
                          type="email"
                          id="inpage-email"
                          required
                          placeholder="Ej. roberto@gmail.com"
                          value={inPageEmail}
                          onChange={(e) => setInPageEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-forest-800/10 bg-cream-50 text-forest-950 focus:outline-none focus:ring-1 focus:ring-forest-700 transition-all text-sm"
                        />
                      </div>

                      <div>
                        <label htmlFor="inpage-phone" className="block text-[10px] font-bold text-forest-900 uppercase tracking-widest mb-1">
                          WhatsApp / Celular (Opcional)
                        </label>
                        <input
                          type="tel"
                          id="inpage-phone"
                          placeholder="Ej. +54 9 11 9876 5432"
                          value={inPagePhone}
                          onChange={(e) => setInPagePhone(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl border border-forest-800/10 bg-cream-50 text-forest-950 focus:outline-none focus:ring-1 focus:ring-forest-700 transition-all text-sm"
                        />
                      </div>

                      <button
                        type="submit"
                        id="in-page-submit-btn"
                        className="w-full py-4 px-6 mt-2 rounded-xl bg-forest-900 text-white font-bold text-xs sm:text-sm hover:bg-forest-800 shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                      >
                        <PhoneCall className="w-4 h-4 text-gold-400" />
                        Agendar Llamada Gratis Ahora
                      </button>

                      <div className="text-center mt-4">
                        <span className="text-[10px] text-forest-800/50 font-medium">
                          🔒 Tus datos están protegidos. No enviamos spam jamás.
                        </span>
                      </div>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-8 text-forest-950"
                    >
                      <div className="w-14 h-14 bg-forest-100 text-forest-700 rounded-full flex items-center justify-center mx-auto mb-5">
                        <CheckCircle2 className="w-8 h-8 text-forest-600" />
                      </div>
                      
                      <h3 className="font-serif text-2xl font-bold text-forest-900 leading-tight">
                        ¡Asesoría Solicitada!
                      </h3>
                      <p className="text-xs sm:text-sm text-forest-800/85 mt-3 leading-relaxed">
                        Gracias por dar el primer paso, <strong className="text-forest-900">{inPageName}</strong>. Te enviaremos un correo electrónico a <strong>{inPageEmail}</strong> para coordinar tu horario de llamada de vitalidad gratuita.
                      </p>

                      <div className="mt-6 p-4 rounded-xl bg-forest-100 text-left text-xs space-y-1 text-forest-800">
                        <p className="font-bold text-forest-900 mb-1">🎁 Mientras esperas:</p>
                        <p>Te hemos enviado la Guía Básica Desinflamatoria de cortesía directamente a tu bandeja de correo.</p>
                      </div>

                      <button
                        onClick={() => setInPageSuccess(false)}
                        className="mt-6 w-full py-3 rounded-xl bg-forest-900 text-white font-bold text-xs hover:bg-forest-800 transition-colors"
                      >
                        Agendar otra llamada
                      </button>
                    </motion.div>
                  )}

                </div>
              </div>

            </div>
          </div>
        </section>
      </main>

      {/* FOOTER SECTION */}
      <footer className="bg-cream-100/80 border-t border-forest-800/5 pt-12 pb-8 relative z-10 text-left">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Trust Indicators Bar in Footer */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pb-12 border-b border-forest-800/10">
            {FOOTER_TRUST_ITEMS.map((item, idx) => {
              const getIcon = (name: string) => {
                switch (name) {
                  case 'Truck': return <Truck className="w-6 h-6" />;
                  case 'ShieldCheck': return <ShieldCheck className="w-6 h-6" />;
                  case 'CheckCircle2': return <CheckCircle2 className="w-6 h-6" />;
                  default: return <Award className="w-6 h-6" />;
                }
              };

              return (
                <div key={idx} className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl border border-forest-800/5 hover:bg-white transition-all">
                  <div className="w-12 h-12 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center shrink-0 shadow-sm">
                    {getIcon(item.iconName)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-forest-900 leading-tight">{item.title}</h4>
                    <p className="text-xs text-forest-800/60 mt-0.5">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Footer Content */}
          <div className="pt-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-8 text-xs text-forest-800/60">
            {/* Logo and Brand tagline */}
            <div className="space-y-3 max-w-sm">
              <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('inicio')}>
                <div className="w-8 h-8 rounded-full bg-forest-900 flex items-center justify-center border border-gold-400/20">
                  <svg className="w-4.5 h-4.5 text-gold-400" viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 15 C35 35 25 50 50 85 C75 50 65 35 50 15 Z" />
                  </svg>
                </div>
                <div>
                  <span className="block font-serif text-sm font-bold tracking-tight text-forest-900 leading-none">
                    VITAL COACH
                  </span>
                  <span className="block text-[7px] font-semibold text-gold-600 tracking-widest uppercase">
                    Salud y Bienestar
                  </span>
                </div>
              </div>
              <p className="text-[11px] leading-relaxed">
                Acompaño a profesionales ocupados a desinflamar su intestino, multiplicar su energía y promover su longevidad celular de forma 100% natural, práctica y personalizada.
              </p>
            </div>

            {/* Links and Disclaimers */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-x-8 gap-y-3 font-semibold text-forest-900">
              <span className="cursor-pointer hover:text-forest-750 transition-colors" onClick={() => scrollToSection('metodo')}>Sobre Mí</span>
              <span className="cursor-pointer hover:text-forest-750 transition-colors" onClick={() => scrollToSection('multydrink')}>MultyDrink®</span>
              <span className="cursor-pointer hover:text-forest-750 transition-colors" onClick={() => scrollToSection('faq')}>Políticas de Envío</span>
              <span className="cursor-pointer hover:text-forest-750 transition-colors" onClick={() => openBookingModal(
                "Términos y Privacidad",
                "Al rellenar nuestros formularios, tus datos se guardan de forma local y 100% segura para uso exclusivo de contacto de tu asesoría.",
                "Entendido, Volver →",
                "Footer disclaimer click"
              )}>Políticas de Privacidad</span>
            </div>
          </div>

          {/* Copyright line */}
          <div className="pt-8 mt-8 border-t border-forest-800/5 text-center text-[10px] text-forest-800/40">
            <p>© {new Date().getFullYear()} Vital Coach & MultyDrink. Todos los derechos reservados.</p>
            <p className="mt-1 max-w-4xl mx-auto leading-normal">
              Aviso legal: La información provista en esta página y las asesorías no pretenden sustituir el diagnóstico, tratamiento o consejo médico profesional. Siempre consulte con su médico antes de comenzar cualquier dieta o régimen de suplementación.
            </p>
          </div>

        </div>
      </footer>

      {/* Global Lead capture Modal instance */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        subtitle={modalSubtitle}
        ctaText={modalCtaText}
        source={modalSource}
      />
    </div>
  );
}
