import { Metadata } from 'next';
import Hero from '@/components/podologia/Hero';
import SignsAlert from '@/components/podologia/SignsAlert';
import TreatmentsGrid from '@/components/podologia/TreatmentsGrid';

import ServiceCTASection from '@/components/ui/ServiceCTASection';

export const metadata: Metadata = {
    title: "Podologia Especializada em Campinas",
    description: "Tratamentos podológicos especializados em Campinas. Unha encravada, calos, micoses, pé diabético e órteses ungueais. Biossegurança hospitalar no Cambuí. Agende sua avaliação!",
    keywords: [
        "podologia Campinas",
        "podóloga Campinas",
        "tratamento unha encravada Campinas",
        "pé diabético Campinas",
        "calos e calosidades Campinas",
        "micose ungueal Campinas",
        "órteses ungueais Campinas",
        "limpeza de unhas Campinas",
        "podologia Cambuí"
    ],
    openGraph: {
        title: "Podologia Especializada em Campinas | Kelly Bandeira",
        description: "Tratamentos podológicos especializados em Campinas. Unha encravada, calos, micoses, pé diabético e órteses ungueais.",
        url: "https://kellybandeira.com.br/podologia",
    },
    alternates: {
        canonical: "https://kellybandeira.com.br/podologia",
    },
};

export default function PodologiaPage() {
    return (
        <div className="pt-24 pb-0 bg-stone-50">
            <Hero />
            <SignsAlert />
            <TreatmentsGrid />



            <ServiceCTASection
                title="Cuide da sua base"
                description="Não espere a dor limitar seus movimentos. Agende uma avaliação preventiva e descubra como é caminhar nas nuvens."
            />
        </div>
    );
}
