import type { Metadata } from 'next';
import { blogPosts } from '@/data/blogPosts';
import BlogCard from '@/components/blog/BlogCard';

export const metadata: Metadata = {
    title: 'Blog de Podologia e Massoterapia | Kelly Bandeira Campinas',
    description: 'Artigos, dicas e informações sobre saúde dos pés, podologia, massoterapia e bem-estar. Tire suas dúvidas com a especialista Kelly Bandeira.',
};

export default function BlogListingPage() {
    return (
        <main className="bg-stone-50 min-h-screen pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header da Página */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 font-bold">
                        Blog & Dicas de Saúde
                    </h1>
                    <p className="text-lg text-stone-600 font-light leading-relaxed">
                        Informação é o primeiro passo para o cuidado. Explore nossos artigos sobre podologia, bem-estar e tratamentos especializados.
                    </p>
                </div>

                {/* Grid de Posts */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <BlogCard key={post.slug} post={post} />
                    ))}
                </div>

            </div>
        </main>
    );
}
