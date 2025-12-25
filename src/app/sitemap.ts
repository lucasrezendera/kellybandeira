import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://kellybandeira.com.br';

    // Data de última modificação (usar data atual ou data real de modificação)
    const lastModified = new Date();

    // Páginas principais
    const mainPages = [
        {
            url: baseUrl,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 1.0,
        },
        {
            url: `${baseUrl}/sobre`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/agendar`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
    ];

    // Páginas de Podologia
    const podologiaPages = [
        {
            url: `${baseUrl}/podologia`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/podologia/unha-encravada`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/podologia/calos`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/podologia/micose`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/podologia/diabetico`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/podologia/orteses`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/podologia/limpeza`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
    ];

    // Páginas de Massoterapia
    const massoterapiaPages = [
        {
            url: `${baseUrl}/massoterapia`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/massoterapia/relaxante`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/massoterapia/terapeutica`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/massoterapia/drenagem`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/massoterapia/desportiva`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/massoterapia/miofascial`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
        {
            url: `${baseUrl}/massoterapia/pedras-quentes`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        },
    ];

    // Página de Reflexologia
    const reflexologiaPages = [
        {
            url: `${baseUrl}/reflexologia`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
    ];

    return [
        ...mainPages,
        ...podologiaPages,
        ...massoterapiaPages,
        ...reflexologiaPages,
    ];
}
