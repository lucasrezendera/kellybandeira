import Script from 'next/script';

interface SchemaOrgProps {
    type?: 'website' | 'service' | 'faq';
    serviceName?: string;
    serviceDescription?: string;
    faqItems?: { question: string; answer: string }[];
}

export default function SchemaOrg({
    type = 'website',
    serviceName,
    serviceDescription,
    faqItems
}: SchemaOrgProps) {

    // Schema base do negócio local
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "HealthAndBeautyBusiness",
        "@id": "https://kellybandeira.com.br/#business",
        "name": "Kelly Bandeira - Podologia e Massoterapia",
        "alternateName": "Kelly Bandeira Podóloga",
        "description": "Podóloga e Massoterapeuta especializada em Campinas. Tratamentos para unha encravada, pé diabético, massagem relaxante e terapêutica.",
        "url": "https://kellybandeira.com.br",
        "telephone": "+55-19-98369-0695",
        "email": "contato@kellybandeira.com.br",
        "priceRange": "$$",
        "image": "https://kellybandeira.com.br/images/kellybandeira.webp",
        "logo": "https://kellybandeira.com.br/images/logo.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Rua Antônio Lapa, 1066",
            "addressLocality": "Campinas",
            "addressRegion": "SP",
            "postalCode": "13025-242",
            "addressCountry": "BR",
            "addressNeighborhood": "Cambuí"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "-22.8954",
            "longitude": "-47.0543"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "5.0",
            "reviewCount": "127"
        },
        "areaServed": [
            {
                "@type": "City",
                "name": "Campinas",
                "sameAs": "https://pt.wikipedia.org/wiki/Campinas"
            },
            {
                "@type": "State",
                "name": "São Paulo"
            }
        ],
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "08:00",
                "closes": "13:00"
            }
        ],
        "sameAs": [
            "https://www.instagram.com/kellybandeira"
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Serviços de Podologia e Massoterapia",
            "itemListElement": [
                {
                    "@type": "OfferCatalog",
                    "name": "Podologia",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tratamento de Unha Encravada" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Limpeza de Unhas Técnica" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Remoção de Calos" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tratamento de Micose" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cuidados com Pé Diabético" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Órteses Ungueais" } }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": "Massoterapia",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Massagem Relaxante" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Massagem Terapêutica" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Drenagem Linfática" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Massagem Desportiva" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Liberação Miofascial" } },
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Massagem com Pedras Quentes" } }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": "Reflexologia",
                    "itemListElement": [
                        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Reflexologia Podal" } }
                    ]
                }
            ]
        }
    };

    // Schema da profissional
    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Kelly Bandeira",
        "jobTitle": ["Podóloga", "Massoterapeuta"],
        "description": "Podóloga e Massoterapeuta especializada, referência em tratamentos podológicos e massoterapia em Campinas.",
        "worksFor": {
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://kellybandeira.com.br/#business"
        },
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Campinas",
            "addressRegion": "SP",
            "addressCountry": "BR"
        }
    };

    // Schema de serviço específico
    const serviceSchema = serviceName ? {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceName,
        "description": serviceDescription,
        "provider": {
            "@type": "HealthAndBeautyBusiness",
            "@id": "https://kellybandeira.com.br/#business"
        },
        "areaServed": {
            "@type": "City",
            "name": "Campinas"
        },
        "serviceType": "Saúde e Bem-estar"
    } : null;

    // Schema de FAQ
    const faqSchema = faqItems && faqItems.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    } : null;

    // Website schema
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "name": "Kelly Bandeira - Podologia e Massoterapia",
        "url": "https://kellybandeira.com.br",
        "description": "Site oficial de Kelly Bandeira, podóloga e massoterapeuta em Campinas.",
        "publisher": {
            "@type": "Person",
            "name": "Kelly Bandeira"
        }
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const schemas: any[] = [localBusinessSchema, personSchema, websiteSchema];

    if (serviceSchema) schemas.push(serviceSchema);
    if (faqSchema) schemas.push(faqSchema);

    return (
        <Script
            id="schema-org"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(schemas)
            }}
        />
    );
}
