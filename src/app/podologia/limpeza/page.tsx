import { Metadata } from 'next';
import Hero from '@/components/podologia/limpeza/Hero';
import ExplanationSection from '@/components/podologia/limpeza/ExplanationSection';
import ProcedureSection from '@/components/podologia/limpeza/ProcedureSection';
import FAQ from '@/components/ui/FAQ';
import ServiceCTASection from '@/components/ui/ServiceCTASection';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
    title: "Limpeza de Unhas Técnica em Campinas",
    description: "Limpeza de unhas técnica profissional em Campinas. Procedimento mensal de manutenção podológica com biossegurança. Cuide dos seus pés no Cambuí. Agende!",
    keywords: ["limpeza de unhas Campinas", "manutenção podológica Campinas", "podologia mensal", "cuidar dos pés Campinas", "limpeza técnica unhas", "podóloga limpeza"],
    openGraph: {
        title: "Limpeza de Unhas Técnica em Campinas | Kelly Bandeira",
        description: "Limpeza de unhas técnica profissional em Campinas. Procedimento mensal de manutenção podológica com biossegurança.",
        url: "https://kellybandeira.com.br/podologia/limpeza",
    },
    alternates: { canonical: "https://kellybandeira.com.br/podologia/limpeza" },
};

export default function LimpezaPage() {
    const faqItems = [
        { question: "Com que frequência devo fazer?", answer: "O ciclo ideal de crescimento da unha e renovação celular é de 28 dias. Recomendamos a manutenção mensal (a cada 30 dias) para manter a saúde e prevenir problemas." },
        { question: "Vocês tiram a cutícula funda?", answer: "Não. A cutícula é a barreira de proteção da unha contra bactérias e fungos. Removemos apenas o excesso de pele morta (o que levanta) e fazemos o acabamento com brocas, deixando o contorno limpo e estético, sem agredir a matriz." },
        { question: "Vocês esmaltam?", answer: "Somos um espaço de saúde e bem-estar. Finalizamos com óleos essenciais e hidratantes de alta performance. Não aplicamos esmalte para permitir que a lâmina ungueal respire e absorva os nutrientes do tratamento." }
    ];

    const breadcrumbItems = [
        { name: 'Podologia', href: '/podologia' },
        { name: 'Limpeza Técnica', href: '/podologia/limpeza' }
    ];

    return (
        <div className="pt-24 pb-0 bg-stone-50">
            <Breadcrumbs items={breadcrumbItems} />
            <FAQSchema items={faqItems} />
            <Hero />
            <ExplanationSection />
            <ProcedureSection />
            <FAQ items={faqItems} title="Dúvidas sobre o Procedimento" className="bg-white py-16 border-t border-stone-200" />

            <ServiceCTASection
                title="Seus pés sustentam sua vida"
                description="Dê a eles o cuidado profissional que merecem. Agende sua manutenção mensal."
            />
        </div>
    );
}

