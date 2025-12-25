import { Metadata } from 'next';
import Hero from '@/components/podologia/orteses/Hero';
import MechanicsSection from '@/components/podologia/orteses/MechanicsSection';
import TypesSection from '@/components/podologia/orteses/TypesSection';
import FAQ from '@/components/ui/FAQ';
import ServiceCTASection from '@/components/ui/ServiceCTASection';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
    title: "Órteses Ungueais em Campinas - Correção de Unhas",
    description: "Órteses ungueais para correção de unhas em Campinas. Tratamento indolor para unhas que encravadas repetidamente. Correção definitiva no Cambuí. Agende sua avaliação!",
    keywords: ["órteses ungueais Campinas", "correção de unhas Campinas", "ortonixia Campinas", "fibra de memória unha", "unha encravada correção", "podóloga órteses"],
    openGraph: {
        title: "Órteses Ungueais em Campinas | Kelly Bandeira",
        description: "Órteses ungueais para correção de unhas em Campinas. Tratamento indolor para unhas que encravadas repetidamente.",
        url: "https://kellybandeira.com.br/podologia/orteses",
    },
    alternates: { canonical: "https://kellybandeira.com.br/podologia/orteses" },
};

export default function OrtesesPage() {
    const faqItems = [
        { question: "Incomoda para usar sapato?", answer: "Não. A maioria das órteses é muito fina e não causa volume dentro do calçado. Você esquece que está usando." },
        { question: "Quanto tempo preciso usar?", answer: "Depende do grau de curvatura e da velocidade de crescimento da sua unha. O tratamento dura, em média, de 6 a 12 meses para correção completa." },
        { question: "Posso esmaltar por cima?", answer: "Na maioria dos casos, sim! A fibra de memória e os botões permitem esmaltação normal, camuflando o tratamento." }
    ];

    const breadcrumbItems = [
        { name: 'Podologia', href: '/podologia' },
        { name: 'Órteses Ungueais', href: '/podologia/orteses' }
    ];

    return (
        <div className="pt-24 pb-0 bg-stone-50">
            <Breadcrumbs items={breadcrumbItems} />
            <FAQSchema items={faqItems} />
            <Hero />
            <MechanicsSection />
            <TypesSection />
            <FAQ items={faqItems} title="Dúvidas sobre Órteses" className="bg-white py-16 border-t border-stone-200" />

            <ServiceCTASection
                title="Sua unha, corrigida"
                description="Não espere encravar novamente. Inicie a correção definitiva hoje."
            />
        </div>
    );
}

