import { Metadata } from 'next';
import Hero from '@/components/reflexologia/Hero';
import SymptomsSection from '@/components/reflexologia/SymptomsSection';
import BenefitsSection from '@/components/reflexologia/BenefitsSection';
import TechniqueSection from '@/components/reflexologia/TechniqueSection';
import ServiceCTASection from '@/components/ui/ServiceCTASection';

export const metadata: Metadata = {
    title: "Reflexologia Podal em Campinas",
    description: "Reflexologia podal em Campinas. Técnica milenar que alivia estresse, melhora a circulação e promove equilíbrio corporal. Atendimento exclusivo no Cambuí. Agende sua sessão!",
    keywords: [
        "reflexologia Campinas",
        "reflexologia podal Campinas",
        "massagem nos pés Campinas",
        "terapia alternativa Campinas",
        "alívio de estresse Campinas",
        "reflexoterapia Campinas"
    ],
    openGraph: {
        title: "Reflexologia Podal em Campinas | Kelly Bandeira",
        description: "Reflexologia podal em Campinas. Técnica milenar que alivia estresse, melhora a circulação e promove equilíbrio corporal.",
        url: "https://kellybandeira.com.br/reflexologia",
    },
    alternates: {
        canonical: "https://kellybandeira.com.br/reflexologia",
    },
};

export default function ReflexologiaPage() {
    return (
        <div className="pt-24 pb-0 bg-stone-50">
            <Hero />
            <SymptomsSection />
            <BenefitsSection />
            <TechniqueSection />
            <ServiceCTASection
                title="Reconecte-se com sua essência"
                description="Muitas vezes, a resposta para o cansaço mental está no relaxamento físico. Permita-se parar e receber este cuidado."
            />
        </div>
    );
}
