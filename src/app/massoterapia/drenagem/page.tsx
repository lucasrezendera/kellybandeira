import { Metadata } from 'next';
import Hero from '@/components/massoterapia/drenagem/Hero';
import SinaisSection from '@/components/massoterapia/drenagem/SinaisSection';
import TechniqueSection from '@/components/massoterapia/drenagem/TechniqueSection';
import ImageSection from '@/components/massoterapia/drenagem/ImageSection';
import BenefitsSection from '@/components/massoterapia/drenagem/BenefitsSection';
import FAQ from '@/components/ui/FAQ';
import ServiceCTASection from '@/components/ui/ServiceCTASection';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
    title: "Drenagem Linfática em Campinas",
    description: "Drenagem linfática em Campinas. Reduz inchaço, retenção de líquidos e pós-operatório. Técnica Vodder no Cambuí. Ideal para gestantes. Agende!",
    keywords: ["drenagem linfática Campinas", "inchaço Campinas", "pós-operatório Campinas", "retenção de líquidos Campinas", "drenagem gestante Campinas", "massagem drenante"],
    openGraph: {
        title: "Drenagem Linfática em Campinas | Kelly Bandeira",
        description: "Drenagem linfática em Campinas. Reduz inchaço, retenção de líquidos e pós-operatório. Técnica Vodder no Cambuí.",
        url: "https://kellybandeira.com.br/massoterapia/drenagem",
    },
    alternates: { canonical: "https://kellybandeira.com.br/massoterapia/drenagem" },
};

export default function DrenagemLinfaticaPage() {
    const faqItems = [
        {
            question: "Drenagem Linfática dói ou deixa roxo?",
            answer: "Não! Esse é um mito comum. A drenagem real é feita com pressão suave e ritmo lento, pois os vasos linfáticos são superficiais. Se doer ou deixar roxo, não é drenagem, é massagem modeladora."
        },
        {
            question: "Quantas sessões são necessárias para pós-operatório?",
            answer: "Depende da cirurgia, mas geralmente indicamos o início imediato (com liberação médica) e pacotes de 10 sessões para garantir a redução total do edema e evitar a formação de fibrose."
        },
        {
            question: "Gestantes podem fazer esse procedimento?",
            answer: "Devem! É a técnica mais indicada para gestantes a partir do 3º mês, aliviando o inchaço nas pernas e pés e melhorando a circulação sanguínea."
        }
    ];

    const breadcrumbItems = [
        { name: 'Massoterapia', href: '/massoterapia' },
        { name: 'Drenagem Linfática', href: '/massoterapia/drenagem' }
    ];

    return (
        <div className="pt-24 pb-0 bg-stone-50">
            <Breadcrumbs items={breadcrumbItems} />
            <FAQSchema items={faqItems} />
            <Hero />
            <SinaisSection />
            <TechniqueSection />
            <ImageSection />
            <BenefitsSection />

            <FAQ items={faqItems} title="Dúvidas sobre Drenagem" className="bg-white py-16 border-t border-stone-200" />

            <ServiceCTASection
                title="Sinta-se leve novamente"
                description="Agende uma sessão avulsa para conhecer ou feche um pacote de tratamento para resultados duradouros."
            />
        </div>
    );
}

