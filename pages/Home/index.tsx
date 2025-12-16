import React from 'react';
import Hero from './Hero';
import TrustBar from './TrustBar';
import ServicesPreview from './ServicesPreview';
import AboutProfessional from './AboutProfessional';
import AboutSpace from './AboutSpace';
import Button from '../../components/UI/Button';
import RevealOnScroll from '../../components/UI/RevealOnScroll';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <TrustBar />
      
      <RevealOnScroll>
        <AboutProfessional />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <ServicesPreview />
      </RevealOnScroll>
      
      <RevealOnScroll>
        <AboutSpace />
      </RevealOnScroll>
      
      {/* Seção Extra de CTA Final - Padronizada */}
      <RevealOnScroll>
        <section className="py-16 bg-stone-900 text-white text-center">
            <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-5xl font-serif text-white mb-4 leading-none">Pronta para se sentir renovada?</h2>
            <p className="text-xl text-stone-400 mb-10 max-w-2xl mx-auto font-light leading-snug">
                Não adie seu bem-estar. Agende uma avaliação hoje mesmo e descubra o padrão de cuidado que você merece.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button onClick={() => window.open('https://wa.me/5519999999999', '_blank')} className="bg-brand-600 hover:bg-brand-500 text-white border-none shadow-lg px-10 py-4">
                    Agendar Horário
                </Button>
                <Button variant="outline" className="border-stone-600 text-stone-300 hover:bg-stone-800 hover:text-white" onClick={() => window.open('https://wa.me/5519999999999', '_blank')}>
                    Tirar Dúvidas
                </Button>
            </div>
            </div>
        </section>
      </RevealOnScroll>
    </>
  );
};

export default HomePage;