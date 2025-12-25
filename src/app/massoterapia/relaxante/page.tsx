import { Metadata } from 'next';
import Hero from '@/components/massoterapia/relaxante/Hero';
import SinaisSection from '@/components/massoterapia/relaxante/SinaisSection';
import SensorialSection from '@/components/massoterapia/relaxante/SensorialSection';
import ImageSection from '@/components/massoterapia/relaxante/ImageSection';
import BenefitsSection from '@/components/massoterapia/relaxante/BenefitsSection';
import FAQ from '@/components/ui/FAQ';
import ServiceCTASection from '@/components/ui/ServiceCTASection';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
    title: "Massagem Relaxante em Campinas",
    description: "Massagem relaxante em Campinas. Alívio do estresse, tensão muscular e ansiedade. Ambiente exclusivo no Cambuí. Presenteie-se com bem-estar. Agende agora!",
    keywords: ["massagem relaxante Campinas", "spa Campinas", "relaxamento Campinas", "stress Campinas", "massagem anti-stress", "massoterapia relaxante Cambuí"],
    openGraph: {
        title: "Massagem Relaxante em Campinas | Kelly Bandeira",
        description: "Massagem relaxante em Campinas. Alívio do estresse, tensão muscular e ansiedade. Ambiente exclusivo no Cambuí.",
        url: "https://kellybandeira.com.br/massoterapia/relaxante",
    },
    alternates: { canonical: "https://kellybandeira.com.br/massoterapia/relaxante" },
};

export default function MassagemRelaxantePage() {
    const faqItems = [
        {
            question: "Qual a roupa adequada?",
            answer: "Fornecemos roupa íntima descartável e toalhas higienizadas. O ambiente é totalmente privado e climatizado para seu conforto."
        },
        {
            question: "Dói?",
            answer: "Absolutamente não. A massagem relaxante usa movimentos suaves e deslizantes. Se sentir qualquer desconforto, avise a terapeuta para ajustar a pressão."
        },
        {
            question: "Posso fazer grávida?",
            answer: "Sim, mas com adaptações e somente após o 3º mês de gestação (com liberação médica). Temos almofadas especiais para conforto da gestante."
        }
    ];

    const breadcrumbItems = [
        { name: 'Massoterapia', href: '/massoterapia' },
        { name: 'Massagem Relaxante', href: '/massoterapia/relaxante' }
    ];

    return (
        <div className="pt-24 pb-0 bg-stone-50">
            <Breadcrumbs items={breadcrumbItems} />
            <FAQSchema items={faqItems} />
            <Hero />
            <SinaisSection />
            <SensorialSection />
            <ImageSection />
            <BenefitsSection />

            <FAQ items={faqItems} title="Dúvidas Frequentes" className="bg-white py-16 border-t border-stone-200" />

            <ServiceCTASection
                title="Você merece esse momento"
                description="Desconecte-se do mundo e reconecte-se com você."
            />
        </div>
    );
}
