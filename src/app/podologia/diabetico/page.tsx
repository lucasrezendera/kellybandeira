import { Metadata } from 'next';
import Hero from '@/components/podologia/diabetico/Hero';
import CareSection from '@/components/podologia/diabetico/CareSection';
import ImportanceSection from '@/components/podologia/diabetico/ImportanceSection';
import FAQ from '@/components/ui/FAQ';
import ServiceCTASection from '@/components/ui/ServiceCTASection';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
    title: "Cuidados com Pé Diabético em Campinas",
    description: "Cuidados especializados para pé diabético em Campinas. Prevenção de úlceras e amputações com podologia preventiva. Atendimento seguro no Cambuí. Proteja seus pés!",
    keywords: ["pé diabético Campinas", "podologia diabético", "cuidados diabetes pés", "neuropatia diabética Campinas", "prevenir amputação", "podóloga diabético Campinas"],
    openGraph: {
        title: "Cuidados com Pé Diabético em Campinas | Kelly Bandeira",
        description: "Cuidados especializados para pé diabético em Campinas. Prevenção de úlceras e amputações com podologia preventiva.",
        url: "https://kellybandeira.com.br/podologia/diabetico",
    },
    alternates: { canonical: "https://kellybandeira.com.br/podologia/diabetico" },
};

export default function PeDiabeticoPage() {
    const faqItems = [
        { question: "O diabético pode ir na manicure comum?", answer: "Não é recomendado. O risco de infecção por alicates não estéreis ou cortes acidentais é altíssimo. Um pequeno pique pode evoluir para uma úlcera grave." },
        { question: "O que é neuropatia diabética?", answer: "É a perda da sensibilidade nos pés devido ao excesso de açúcar no sangue. O paciente pisa em um prego ou pedra e não sente, causando ferimentos graves." },
        { question: "Com que frequência devo vir?", answer: "Mensalmente. O corte das unhas e a inspeção dos pés devem ser feitos por um profissional para garantir que nada passe despercebido." }
    ];

    const breadcrumbItems = [
        { name: 'Podologia', href: '/podologia' },
        { name: 'Pé Diabético', href: '/podologia/diabetico' }
    ];

    return (
        <div className="pt-24 pb-0 bg-stone-50">
            <Breadcrumbs items={breadcrumbItems} />
            <FAQSchema items={faqItems} />
            <Hero />
            <CareSection />
            <ImportanceSection />
            <FAQ items={faqItems} title="Dúvidas Frequentes" className="bg-white py-16 border-t border-stone-200" />

            <ServiceCTASection
                title="Cuidado que inspira confiança"
                description="Temos a experiência e os equipamentos necessários para proteger a saúde dos seus pés."
            />
        </div>
    );
}

