import Hero from '@/components/lp/unha-encravada/Hero';
import WarningSection from '@/components/lp/unha-encravada/WarningSection';
import AuthoritySection from '@/components/lp/unha-encravada/AuthoritySection';
import ProcessSection from '@/components/lp/unha-encravada/ProcessSection';
import SocialProofSection from '@/components/lp/unha-encravada/SocialProofSection';
import CTASection from '@/components/lp/unha-encravada/CTASection';
import FAQ from '@/components/ui/FAQ';

export default function UnhaEncravadaLP() {
    const faqItems = [
        {
            question: "Estou com muita dor e pus, vocês atendem hoje?",
            answer: "Sim. Nosso espaço no Cambuí reserva horários de encaixe prioritário para casos infeccionados. Clique no botão verde para verificar o horário mais próximo."
        },
        {
            question: "Tenho medo de doer na hora de mexer.",
            answer: "Esqueça experiências ruins do passado. Somos especialistas nisso. Usamos anestésico tópico potente e técnica de alívio sem cortes traumáticos na pele. O foco é seu alívio."
        },
        {
            question: "Já fui em manicure e piorou. Vocês resolvem?",
            answer: "Sim. Manicures cuidam da beleza, nós cuidamos da patologia. Temos instrumental esterilizado para remover a espícula (ponta da unha) que está lá no fundo causando a infecção."
        },
        {
            question: "Aceitam convênio ou reembolso?",
            answer: "Emitimos nota fiscal para você solicitar reembolso no seu convênio (se cobrir Podologia). O pagamento no local é particular para garantir a excelência dos materiais."
        }
    ];

    return (
        <div className="bg-white font-sans text-stone-800">
            <Hero />
            <WarningSection />
            <AuthoritySection />
            <ProcessSection />
            <SocialProofSection />
            <FAQ items={faqItems} title="Dúvidas Rápidas" className="bg-stone-50" />
            <CTASection />
        </div>
    );
}
