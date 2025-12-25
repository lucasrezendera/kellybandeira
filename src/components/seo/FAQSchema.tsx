'use client';

import Script from 'next/script';

interface FAQSchemaItem {
    question: string;
    answer: string;
}

interface FAQSchemaProps {
    items: FAQSchemaItem[];
}

export default function FAQSchema({ items }: FAQSchemaProps) {
    if (!items || items.length === 0) return null;

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <Script
            id="faq-schema"
            type="application/ld+json"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(faqSchema)
            }}
        />
    );
}
