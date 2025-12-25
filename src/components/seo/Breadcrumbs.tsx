'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import Script from 'next/script';

interface BreadcrumbItem {
    name: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
    className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
    // Adiciona Home como primeiro item
    const allItems = [
        { name: 'Início', href: '/' },
        ...items
    ];

    // Schema JSON-LD para Breadcrumbs
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": allItems.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": `https://kellybandeira.com.br${item.href}`
        }))
    };

    return (
        <>
            {/* Schema JSON-LD */}
            <Script
                id="breadcrumb-schema"
                type="application/ld+json"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema)
                }}
            />

            {/* Navegação Visual */}
            <nav
                aria-label="Breadcrumb"
                className={`py-3 px-4 sm:px-6 lg:px-8 bg-stone-100/80 backdrop-blur-sm border-b border-stone-200/50 ${className}`}
            >
                <ol className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-sm">
                    {allItems.map((item, index) => {
                        const isLast = index === allItems.length - 1;

                        return (
                            <li key={item.href} className="flex items-center gap-2">
                                {index === 0 ? (
                                    <Link
                                        href={item.href}
                                        className="text-stone-500 hover:text-brand-600 transition-colors flex items-center gap-1"
                                        aria-label="Página inicial"
                                    >
                                        <Home size={14} />
                                        <span className="hidden sm:inline">{item.name}</span>
                                    </Link>
                                ) : isLast ? (
                                    <span
                                        className="text-stone-800 font-medium truncate max-w-[200px]"
                                        aria-current="page"
                                    >
                                        {item.name}
                                    </span>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="text-stone-500 hover:text-brand-600 transition-colors truncate max-w-[150px]"
                                    >
                                        {item.name}
                                    </Link>
                                )}

                                {!isLast && (
                                    <ChevronRight size={14} className="text-stone-400 flex-shrink-0" />
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}
