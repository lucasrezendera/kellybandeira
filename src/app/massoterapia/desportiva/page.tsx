import { Metadata } from 'next';
import Hero from '@/components/massoterapia/desportiva/Hero';
import SinaisSection from '@/components/massoterapia/desportiva/SinaisSection';
import ProtocolSection from '@/components/massoterapia/desportiva/ProtocolSection';
import ImageSection from '@/components/massoterapia/desportiva/ImageSection';
import BenefitsSection from '@/components/massoterapia/desportiva/BenefitsSection';
import FAQ from '@/components/ui/FAQ';
import ServiceCTASection from '@/components/ui/ServiceCTASection';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
    title: "Massagem Desportiva em Campinas",
    description: "Massagem desportiva em Campinas. Recuperação muscular, prevenção de lesões e melhora de performance. Ideal para atletas e praticantes. Agende!",
    keywords: ["massagem desportiva Campinas", "massagem atleta Campinas", "recuperação muscular Campinas", "prevenção lesões Campinas", "crossfit Campinas", "musculação recovery"],
    openGraph: {
        title: "Massagem Desportiva em Campinas | Kelly Bandeira",
        description: "Massagem desportiva em Campinas. Recuperação muscular, prevenção de lesões e melhora de performance.",
        url: "https://kellybandeira.com.br/massoterapia/desportiva",
    },
    alternates: { canonical: "https://kellybandeira.com.br/massoterapia/desportiva" },
};

export default function DesportivaPage() {
    const faqItems = [
        {
            question: "Devo fazer antes ou depois do treino?",
            answer: "Depende do objetivo. A pré-evento é rápida e vigorosa para aquecer (preparar). A pós-evento (recovery) é mais lenta e profunda para drenar ácido lático e relaxar a musculatura."
        },
        {
            question: "É só para atletas profissionais?",
            answer: "Não! É indicada para qualquer pessoa que pratica atividade física regular (musculação, corrida, crossfit, tênis) e quer evitar lesões."
        },
        {
            question: "Com que frequência devo fazer?",
            answer: "Para quem treina intensamente, recomendamos 1 vez por semana ou quinzenalmente para manutenção e prevenção de lesões."
        }
    ];

    const breadcrumbItems = [
        { name: 'Massoterapia', href: '/massoterapia' },
        { name: 'Massagem Desportiva', href: '/massoterapia/desportiva' }
    ];

    return (
        <div className="pt-24 pb-0 bg-stone-50">
            <Breadcrumbs items={breadcrumbItems} />
            <FAQSchema items={faqItems} />
            <Hero />
            <SinaisSection />
            <ProtocolSection />
            <ImageSection />
            <BenefitsSection />

            <FAQ items={faqItems} title="Dúvidas sobre Desportiva" className="bg-white py-16 border-t border-stone-200" />

            <ServiceCTASection
                title="Melhore sua Performance"
                description="Seu corpo é seu principal equipamento. Faça a manutenção preventiva que ele precisa."
            />
        </div>
    );
}

