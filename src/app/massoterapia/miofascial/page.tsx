import { Metadata } from 'next';
import Hero from '@/components/massoterapia/miofascial/Hero';
import ProblemSection from '@/components/massoterapia/miofascial/ProblemSection';
import MethodSection from '@/components/massoterapia/miofascial/MethodSection';
import ImageSection from '@/components/massoterapia/miofascial/ImageSection';
import BenefitsSection from '@/components/massoterapia/miofascial/BenefitsSection';
import FAQ from '@/components/ui/FAQ';
import ServiceCTASection from '@/components/ui/ServiceCTASection';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
    title: "Liberação Miofascial em Campinas",
    description: "Liberação miofascial em Campinas. Tratamento de fáscia rígida, dores crônicas e restrições de movimento. Técnica avançada no Cambuí. Destrave seu corpo!",
    keywords: ["liberação miofascial Campinas", "fáscia Campinas", "dor crônica Campinas", "trigger point Campinas", "massagem profunda Campinas", "tensão muscular crônica"],
    openGraph: {
        title: "Liberação Miofascial em Campinas | Kelly Bandeira",
        description: "Liberação miofascial em Campinas. Tratamento de fáscia rígida, dores crônicas e restrições de movimento.",
        url: "https://kellybandeira.com.br/massoterapia/miofascial",
    },
    alternates: { canonical: "https://kellybandeira.com.br/massoterapia/miofascial" },
};

export default function MiofascialPage() {
    const faqItems = [
        {
            question: "O que é a Fáscia e por que é importante?",
            answer: "É uma membrana de tecido conjuntivo que envolve todos os músculos, ossos e órgãos. Quando ela fica rígida (aderida), causa dor e limita o movimento."
        },
        {
            question: "A liberação miofascial dói durante a sessão?",
            answer: "É uma técnica intensa. Você pode sentir um desconforto tolerável durante a manipulação dos pontos gatilho, mas a sensação de alívio pós-sessão é imediata."
        },
        {
            question: "É indicada para quem não treina?",
            answer: "Sim! Má postura no trabalho, estresse e sedentarismo também 'grudam' a fáscia. É excelente para dores crônicas nas costas e pescoço."
        }
    ];

    const breadcrumbItems = [
        { name: 'Massoterapia', href: '/massoterapia' },
        { name: 'Liberação Miofascial', href: '/massoterapia/miofascial' }
    ];

    return (
        <div className="pt-24 pb-0 bg-stone-50">
            <Breadcrumbs items={breadcrumbItems} />
            <FAQSchema items={faqItems} />
            <Hero />
            <ProblemSection />
            <MethodSection />
            <ImageSection />
            <BenefitsSection />

            <FAQ items={faqItems} title="Perguntas Frequentes" className="bg-white py-16 border-t border-stone-200" />

            <ServiceCTASection
                title="Destrave seu corpo"
                description="Ideal para atletas de crossfit, musculação, corrida e também para quem trabalha muitas horas na mesma posição."
            />
        </div>
    );
}

