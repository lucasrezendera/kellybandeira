import { Metadata } from 'next';
import Hero from '@/components/massoterapia/Hero';
import SymptomsSection from '@/components/massoterapia/SymptomsSection';
import ServicesGrid from '@/components/massoterapia/ServicesGrid';
import ExperienceSection from '@/components/massoterapia/ExperienceSection';
import ServiceCTASection from '@/components/ui/ServiceCTASection';

export const metadata: Metadata = {
    title: "Massoterapia Terapêutica em Campinas",
    description: "Massoterapia especializada em Campinas. Massagem relaxante, terapêutica, drenagem linfática, desportiva e pedras quentes. Alívio de dores e bem-estar no Cambuí. Agende!",
    keywords: [
        "massoterapia Campinas",
        "massoterapeuta Campinas",
        "massagem relaxante Campinas",
        "massagem terapêutica Campinas",
        "drenagem linfática Campinas",
        "massagem desportiva Campinas",
        "liberação miofascial Campinas",
        "massagem pedras quentes Campinas",
        "alívio de dores Campinas"
    ],
    openGraph: {
        title: "Massoterapia Terapêutica em Campinas | Kelly Bandeira",
        description: "Massoterapia especializada em Campinas. Massagem relaxante, terapêutica, drenagem linfática, desportiva e pedras quentes.",
        url: "https://kellybandeira.com.br/massoterapia",
    },
    alternates: {
        canonical: "https://kellybandeira.com.br/massoterapia",
    },
};

export default function MassoterapiaPage() {
    return (
        <div className="pt-24 pb-0">
            <Hero />
            <SymptomsSection />
            <ExperienceSection />
            <ServicesGrid />
            <ServiceCTASection
                title="Seu corpo precisa desse cuidado"
                description="Atendimento com hora marcada, sem atrasos, em ambiente climatizado e exclusivo. Valores justos para um serviço de excelência."
            />
        </div>
    );
}
