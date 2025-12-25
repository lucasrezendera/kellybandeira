import { Metadata } from 'next';
import Hero from '@/components/podologia/micose/Hero';
import EnemySection from '@/components/podologia/micose/EnemySection';
import DifferentialSection from '@/components/podologia/micose/DifferentialSection';
import FAQ from '@/components/ui/FAQ';
import ServiceCTASection from '@/components/ui/ServiceCTASection';
import FAQSchema from '@/components/seo/FAQSchema';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
    title: "Tratamento de Micose nas Unhas em Campinas",
    description: "Tratamento especializado de micose ungueal em Campinas. Limpeza podológica profissional que potencializa o efeito do medicamento. Recupere suas unhas no Cambuí!",
    keywords: ["micose ungueal Campinas", "fungos nas unhas Campinas", "onicomicose Campinas", "tratamento micose", "unha amarelada Campinas", "podóloga micose"],
    openGraph: {
        title: "Tratamento de Micose nas Unhas em Campinas | Kelly Bandeira",
        description: "Tratamento especializado de micose ungueal em Campinas. Limpeza podológica profissional que potencializa o efeito do medicamento.",
        url: "https://kellybandeira.com.br/podologia/micose",
    },
    alternates: { canonical: "https://kellybandeira.com.br/podologia/micose" },
};

export default function MicosePage() {
    const faqItems = [
        { question: "Quanto tempo demora o tratamento?", answer: "É um tratamento de longo prazo. As unhas dos pés crescem lentamente (cerca de 1 a 2mm por mês). Para renovar a unha inteira, leva-se de 6 a 12 meses. A persistência é o segredo." },
        { question: "Só passar remédio resolve?", answer: "Dificilmente. O fungo fica protegido embaixo da unha e sob camadas de queratina morta. O remédio tópico não consegue penetrar sozinho. A limpeza podológica mensal remove essa 'barreira', potencializando o efeito do medicamento em até 3x." },
        { question: "Preciso ir ao médico também?", answer: "Em casos mais avançados, sim. A podóloga cuida da limpeza e manutenção local, enquanto o dermatologista pode prescrever medicamentos orais quando necessário. Trabalhamos em parceria." }
    ];

    const breadcrumbItems = [
        { name: 'Podologia', href: '/podologia' },
        { name: 'Tratamento de Micoses', href: '/podologia/micose' }
    ];

    return (
        <div className="pt-24 pb-0 bg-stone-50">
            <Breadcrumbs items={breadcrumbItems} />
            <FAQSchema items={faqItems} />
            <Hero />
            <EnemySection />
            <DifferentialSection />
            <FAQ items={faqItems} title="Perguntas Frequentes" className="bg-white py-16 border-t border-stone-200" />

            <ServiceCTASection
                title="Não esconda mais seus pés"
                description="Inicie seu tratamento hoje e recupere a autoestima e a saúde das suas unhas."
            />
        </div>
    );
}

