import { Metadata } from 'next';
import Hero from '@/components/podologia/calos/Hero';
import ExplanationSection from '@/components/podologia/calos/ExplanationSection';
import TreatmentSection from '@/components/podologia/calos/TreatmentSection';
import FAQ from '@/components/ui/FAQ';
import ServiceCTASection from '@/components/ui/ServiceCTASection';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
    title: "Remoção de Calos e Calosidades em Campinas",
    description: "Remoção profissional de calos e calosidades em Campinas. Procedimento indolor com alívio imediato. Tratamento especializado no Cambuí. Agende sua avaliação!",
    keywords: ["calos Campinas", "calosidades Campinas", "remover calo", "podóloga calos", "dor nos pés Campinas", "hiperqueratose Campinas"],
    openGraph: {
        title: "Remoção de Calos e Calosidades em Campinas | Kelly Bandeira",
        description: "Remoção profissional de calos e calosidades em Campinas. Procedimento indolor com alívio imediato.",
        url: "https://kellybandeira.com.br/podologia/calos",
    },
    alternates: { canonical: "https://kellybandeira.com.br/podologia/calos" },
};

export default function CalosPage() {
    const faqItems = [
        { question: "O calo volta?", answer: "Se a causa do atrito (sapato apertado, pisada errada) continuar, o corpo voltará a produzir pele para se proteger. Por isso, orientamos sobre calçados e palmilhas." },
        { question: "Dói para tirar?", answer: "Não. A camada de pele grossa (hiperqueratose) é tecido morto, sem terminações nervosas. A remoção é totalmente indolor e traz alívio imediato." },
        { question: "Posso cortar em casa?", answer: "Nunca! O uso de alicates ou giletes em casa é perigoso, pode causar cortes profundos e infecções graves. Deixe para um profissional." }
    ];

    const breadcrumbItems = [
        { name: 'Podologia', href: '/podologia' },
        { name: 'Calos e Calosidades', href: '/podologia/calos' }
    ];

    return (
        <div className="pt-24 pb-0 bg-stone-50">
            <Breadcrumbs items={breadcrumbItems} />
            <FAQSchema items={faqItems} />
            <Hero />
            <ExplanationSection />
            <TreatmentSection />
            <FAQ items={faqItems} title="Dúvidas Frequentes" className="bg-white py-16 border-t border-stone-200" />

            <ServiceCTASection
                title="Caminhe com leveza"
                description="Agende uma avaliação e livre-se do desconforto hoje mesmo."
            />
        </div>
    );
}

