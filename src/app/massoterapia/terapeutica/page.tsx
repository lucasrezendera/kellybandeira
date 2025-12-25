import { Metadata } from 'next';
import Hero from '@/components/massoterapia/terapeutica/Hero';
import ProblemSection from '@/components/massoterapia/terapeutica/ProblemSection';
import ImageSection from '@/components/massoterapia/terapeutica/ImageSection';
import TechniqueSection from '@/components/massoterapia/terapeutica/TechniqueSection';
import ResultsSection from '@/components/massoterapia/terapeutica/ResultsSection';
import FAQ from '@/components/ui/FAQ';
import ServiceCTASection from '@/components/ui/ServiceCTASection';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
    title: "Massagem Terapêutica em Campinas",
    description: "Massagem terapêutica em Campinas. Alívio de dores musculares, tensões crônicas e trigger points. Tratamento especializado no Cambuí. Resolva suas dores!",
    keywords: ["massagem terapêutica Campinas", "dor muscular Campinas", "trigger points Campinas", "dor nas costas Campinas", "tensão muscular Campinas", "massoterapeuta dores"],
    openGraph: {
        title: "Massagem Terapêutica em Campinas | Kelly Bandeira",
        description: "Massagem terapêutica em Campinas. Alívio de dores musculares, tensões crônicas e trigger points.",
        url: "https://kellybandeira.com.br/massoterapia/terapeutica",
    },
    alternates: { canonical: "https://kellybandeira.com.br/massoterapia/terapeutica" },
};

export default function TerapeuticaPage() {
    const faqItems = [
        {
            question: "Qual a diferença para massagem relaxante?",
            answer: "Enquanto a relaxante foca no prazer e bem-estar, a terapêutica foca na resolução de dores específicas. A pressão e as técnicas são mais firmes e precisas."
        },
        {
            question: "Quantas sessões preciso para melhorar?",
            answer: "Muitos sentem alívio logo na primeira sessão. Para quadros crônicos, recomendamos um pacote de 4 a 6 sessões para resultados duradouros."
        },
        {
            question: "Posso indicar onde dói?",
            answer: "Deve! Mas também fazemos uma avaliação para identificar músculos que você nem sabia que estavam causando sua dor (dor referida)."
        }
    ];

    const breadcrumbItems = [
        { name: 'Massoterapia', href: '/massoterapia' },
        { name: 'Massagem Terapêutica', href: '/massoterapia/terapeutica' }
    ];

    return (
        <div className="pt-24 pb-0 bg-stone-50">
            <Breadcrumbs items={breadcrumbItems} />
            <FAQSchema items={faqItems} />
            <Hero />
            <ProblemSection />
            <TechniqueSection />
            <ImageSection />
            <ResultsSection />

            <FAQ items={faqItems} title="Dúvidas Frequentes" className="bg-white py-16 border-t border-stone-200" />

            <ServiceCTASection
                title="Chega de sentir dor"
                description="Não é normal conviver com dores crônicas. Agende uma avaliação e vamos resolver isso juntos."
            />
        </div>
    );
}

