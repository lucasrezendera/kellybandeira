import { Metadata } from 'next';
import Hero from '@/components/podologia/unha-encravada/Hero';
import ExplanationSection from '@/components/podologia/unha-encravada/ExplanationSection';
import TreatmentSection from '@/components/podologia/unha-encravada/TreatmentSection';
import FAQ from '@/components/ui/FAQ';
import ServiceCTASection from '@/components/ui/ServiceCTASection';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
    title: "Tratamento de Unha Encravada em Campinas",
    description: "Tratamento profissional de unha encravada em Campinas. Procedimento indolor com técnica minimamente invasiva. Alívio imediato da dor no Cambuí. Agende agora!",
    keywords: ["unha encravada Campinas", "tratamento unha encravada", "podóloga unha encravada", "onicocriptose Campinas", "dor unha encravada", "extrair unha encravada Campinas"],
    openGraph: {
        title: "Tratamento de Unha Encravada em Campinas | Kelly Bandeira",
        description: "Tratamento profissional de unha encravada em Campinas. Procedimento indolor com técnica minimamente invasiva.",
        url: "https://kellybandeira.com.br/podologia/unha-encravada",
    },
    alternates: { canonical: "https://kellybandeira.com.br/podologia/unha-encravada" },
};

export default function UnhaEncravadaPage() {
    const faqItems = [
        { question: "Vou sentir dor na hora de tirar?", answer: "Nosso foco é o 'Desconforto Zero'. Usamos produtos que amolecem a pele e anestésicos em spray/creme antes de encostar na sua unha. A maioria dos pacientes diz: 'Nossa, já acabou? Nem senti!'." },
        { question: "Consigo calçar sapato depois?", answer: "Sim. Fazemos um curativo especial que protege o dedo. Se possível, venha com um calçado mais folgado ou chinelo, mas se precisar voltar para o trabalho de sapato fechado, você conseguirá caminhar normalmente." },
        { question: "A unha vai encravar de novo?", answer: "Nós resolvemos a dor de agora. Porém, se o formato da sua unha for muito curvo ou se você continuar cortando os cantos em casa, ela pode voltar. Nesses casos, sugerimos o uso de Órteses." }
    ];

    const breadcrumbItems = [
        { name: 'Podologia', href: '/podologia' },
        { name: 'Unha Encravada', href: '/podologia/unha-encravada' }
    ];

    return (
        <div className="pt-24 pb-0 bg-stone-50">
            <Breadcrumbs items={breadcrumbItems} />
            <FAQSchema items={faqItems} />
            <Hero />
            <ExplanationSection />
            <TreatmentSection />
            <FAQ items={faqItems} title="Perguntas Frequentes sobre Unha Encravada" className="bg-white py-16 border-t border-stone-200" />

            <ServiceCTASection
                title="Não espere a dor piorar."
                description="Infecção não espera. Atendemos casos de dor com prioridade na agenda."
            />
        </div>
    );
}

