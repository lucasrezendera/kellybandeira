import { Metadata } from 'next';
import Hero from '@/components/massoterapia/pedras-quentes/Hero';
import ProblemSection from '@/components/massoterapia/pedras-quentes/ProblemSection';
import RitualSection from '@/components/massoterapia/pedras-quentes/RitualSection';
import ImageSection from '@/components/massoterapia/pedras-quentes/ImageSection';
import BenefitsSection from '@/components/massoterapia/pedras-quentes/BenefitsSection';
import FAQ from '@/components/ui/FAQ';
import ServiceCTASection from '@/components/ui/ServiceCTASection';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
    title: "Massagem com Pedras Quentes em Campinas",
    description: "Massagem com pedras quentes em Campinas. Pedras vulcânicas aquecidas que relaxam profundamente e aliviam tensões. Experiência spa no Cambuí. Agende!",
    keywords: ["pedras quentes Campinas", "hot stones Campinas", "massagem spa Campinas", "relaxamento profundo Campinas", "pedras vulcânicas massagem", "ritual relaxante"],
    openGraph: {
        title: "Massagem com Pedras Quentes em Campinas | Kelly Bandeira",
        description: "Massagem com pedras quentes em Campinas. Pedras vulcânicas aquecidas que relaxam profundamente e aliviam tensões.",
        url: "https://kellybandeira.com.br/massoterapia/pedras-quentes",
    },
    alternates: { canonical: "https://kellybandeira.com.br/massoterapia/pedras-quentes" },
};

export default function PedrasQuentesPage() {
    const faqItems = [
        {
            question: "As pedras queimam a pele?",
            answer: "Não. As pedras vulcânicas são aquecidas em água a uma temperatura controlada e segura, testada sempre antes do contato com a pele."
        },
        {
            question: "Qual o benefício do calor das pedras?",
            answer: "O calor causa vasodilatação, o que aumenta o fluxo sanguíneo e relaxa a musculatura profunda muito mais rápido do que apenas as mãos."
        },
        {
            question: "Quanto tempo dura esse ritual?",
            answer: "Geralmente 90 minutos. É um ritual lento, que envolve a colocação das pedras nos chakras e a massagem com as pedras deslizando no óleo."
        }
    ];

    const breadcrumbItems = [
        { name: 'Massoterapia', href: '/massoterapia' },
        { name: 'Pedras Quentes', href: '/massoterapia/pedras-quentes' }
    ];

    return (
        <div className="pt-24 pb-0 bg-stone-50">
            <Breadcrumbs items={breadcrumbItems} />
            <FAQSchema items={faqItems} />
            <Hero />
            <ProblemSection />
            <RitualSection />
            <ImageSection />
            <BenefitsSection />

            <FAQ items={faqItems} title="Dúvidas Frequentes" className="bg-white py-16 border-t border-stone-200" />

            <ServiceCTASection
                title="Aqueça seu corpo e alma"
                description="Uma experiência única de conforto. Perfeito para presentear a si mesma ou a alguém especial."
            />
        </div>
    );
}

