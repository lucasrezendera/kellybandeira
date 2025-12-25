import { Metadata } from 'next';
import Hero from '@/components/sobre/Hero';
import StorySection from '@/components/sobre/StorySection';
import SpaceSection from '@/components/sobre/SpaceSection';
import ServiceCTASection from '@/components/ui/ServiceCTASection';

export const metadata: Metadata = {
    title: "Sobre Kelly Bandeira - Podóloga e Massoterapeuta",
    description: "Conheça Kelly Bandeira, podóloga e massoterapeuta especializada em Campinas. Anos de experiência em tratamentos podológicos e massoterapia terapêutica no Cambuí.",
    keywords: [
        "Kelly Bandeira",
        "podóloga Campinas",
        "massoterapeuta Campinas",
        "sobre Kelly Bandeira",
        "especialista em podologia",
        "profissional de massoterapia Campinas"
    ],
    openGraph: {
        title: "Sobre Kelly Bandeira | Podóloga e Massoterapeuta em Campinas",
        description: "Conheça Kelly Bandeira, podóloga e massoterapeuta especializada em Campinas. Anos de experiência em tratamentos podológicos e massoterapia.",
        url: "https://kellybandeira.com.br/sobre",
    },
    alternates: {
        canonical: "https://kellybandeira.com.br/sobre",
    },
};

export default function SobrePage() {
    return (
        <div className="pt-24 pb-0 bg-stone-50">
            <Hero />
            <StorySection />
            <SpaceSection />
            <ServiceCTASection
                title="Vamos cuidar de você?"
                description="Agende sua avaliação e descubra como é ser atendido com atenção, técnica e carinho."
            />
        </div>
    );
}
