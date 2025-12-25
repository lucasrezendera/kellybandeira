import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogPosts';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Twitter } from 'lucide-react';
import BlogCTA from '@/components/blog/BlogCTA';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

// 1. Gerar Metadata Dinâmico para SEO Otimizado
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return {
            title: 'Artigo Não Encontrado',
        };
    }

    return {
        title: `${post.title} | Kelly Bandeira`,
        description: post.excerpt,
        keywords: post.keywords,
        openGraph: {
            type: 'article',
            title: post.title,
            description: post.excerpt,
            images: [post.coverImage],
            publishedTime: post.date,
            authors: [post.author],
        },
    };
}

// 2. Gerar Params Estáticos para Performance
export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="bg-white min-h-screen">

            {/* Header do Artigo (ULTRA COMPACTO) */}
            <header className="pt-24 pb-8 bg-stone-50 border-b border-stone-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                    {/* Navegação e Categoria */}
                    <div className="flex flex-col md:flex-row items-center justify-between mb-4">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-stone-500 hover:text-brand-600 transition-colors text-xs font-bold group mb-2 md:mb-0 uppercase tracking-wider"
                        >
                            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
                            Voltar
                        </Link>

                        <span className="bg-white border border-stone-200 text-brand-800 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
                            {post.category}
                        </span>

                        <div className="hidden md:block w-20"></div>
                    </div>

                    {/* Título Principal */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-900 mb-3 leading-tight">
                        {post.title}
                    </h1>

                    {/* Resumo / Lead */}
                    <p className="text-base md:text-lg text-stone-600 font-light max-w-2xl mx-auto leading-normal italic mb-6">
                        {post.excerpt}
                    </p>

                    {/* Metadados */}
                    <div className="flex items-center justify-center gap-6 text-stone-400 text-xs font-medium border-t border-stone-200/50 pt-4 mx-auto max-w-md">
                        <span className="text-stone-900 font-bold">{post.author}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                            <Calendar size={12} />
                            <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
                        </div>
                        <span>•</span>
                        <div className="flex items-center gap-1.5">
                            <Clock size={12} />
                            <span>5 min</span>
                        </div>
                    </div>

                </div>
            </header>

            {/* Imagem de Capa (Wide) */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
                <div className="relative w-full aspect-[21/8] md:aspect-[3/1] rounded-xl overflow-hidden shadow-lg border-4 border-white">
                    <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

            {/* Corpo do Artigo Container */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

                {/* Share Sidebar Compact - Integrado ao topo */}
                <div className="flex items-center justify-end gap-3 mb-6 border-b border-stone-100 pb-4">
                    <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mr-2">Compartilhar:</span>
                    <button className="text-stone-400 hover:text-[#1877F2] transition-colors"><Facebook size={16} /></button>
                    <button className="text-stone-400 hover:text-[#0A66C2] transition-colors"><Linkedin size={16} /></button>
                    <button className="text-stone-400 hover:text-[#1DA1F2] transition-colors"><Twitter size={16} /></button>
                </div>

                {/* Conteúdo Renderizado */}
                <div className="prose prose-stone prose-lg max-w-none">
                    <ReactMarkdown
                        components={{
                            // H2: Tamanho aumentado (Agora: GRANDE e EXPANDIDO)
                            h2: ({ ...props }) => <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-stone-900 mt-12 mb-6 pb-4 border-b border-stone-100 leading-tight" {...props} />,

                            // H3: Tamanho aumentado
                            h3: ({ ...props }) => <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-stone-800 mt-10 mb-4 leading-tight" {...props} />,

                            // P: Alterado de <p> para <div> para evitar Hydration Error com <figure> (imagens)
                            // O visual permanece idêntico (mesmas classes), mas permite nestar blocos.
                            p: ({ ...props }) => <div className="text-stone-700 leading-7 mb-5 font-normal text-base md:text-lg block" {...props} />,

                            // Listas: Espaçamento entre itens
                            ul: ({ ...props }) => <ul className="list-disc pl-5 mb-5 text-stone-700 space-y-1 marker:text-brand-400" {...props} />,
                            ol: ({ ...props }) => <ol className="list-decimal pl-5 mb-5 text-stone-700 space-y-1 marker:text-brand-800 marker:font-bold" {...props} />,
                            li: ({ ...props }) => <li className="pl-1 leading-7 text-base md:text-lg" {...props} />,

                            strong: ({ ...props }) => <strong className="font-bold text-stone-900" {...props} />,
                            em: ({ ...props }) => <em className="italic text-stone-800" {...props} />,

                            // 1. Botões CTA Inteligentes
                            a: ({ href, children, ...props }) => {
                                const text = String(children);
                                if (text.startsWith('CTA:')) {
                                    const buttonText = text.replace('CTA:', '').trim();
                                    return (
                                        <div className="my-10 flex justify-center">
                                            <a
                                                href={href}
                                                className="inline-flex items-center justify-center bg-brand-600 hover:bg-brand-700 text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-xs md:text-sm border-2 border-transparent hover:border-brand-500"
                                                {...props}
                                            >
                                                {buttonText}
                                            </a>
                                        </div>
                                    );
                                }
                                return (
                                    <a
                                        href={href}
                                        className="text-brand-600 font-bold hover:text-brand-800 hover:underline transition-colors decoration-2 underline-offset-2"
                                        {...props}
                                    >
                                        {children}
                                    </a>
                                );
                            },

                            // 2. Imagens Horizontais Obrigatórias
                            img: ({ src, alt }) => {
                                if (!src || typeof src !== 'string') return null;
                                return (
                                    <figure className="my-10 w-full">
                                        <div className="relative w-full aspect-[2/1] rounded-xl overflow-hidden shadow-md bg-stone-100 border-2 border-white">
                                            <Image
                                                src={src}
                                                alt={alt || 'Imagem do artigo'}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                        {alt && <figcaption className="text-center text-[10px] text-stone-400 mt-2 uppercase tracking-widest font-bold">{alt}</figcaption>}
                                    </figure>
                                );
                            },

                            blockquote: ({ ...props }) => <blockquote className="border-l-4 border-brand-400 pl-5 italic my-6 text-lg text-stone-600 font-serif leading-snug bg-stone-50 py-4 rounded-r" {...props} />,
                        }}
                    >
                        {post.content}
                    </ReactMarkdown>
                </div>

                {/* Tags Compactas */}
                <div className="mt-8 pt-4 border-t border-stone-100">
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Tags:</span>
                        {post.keywords.map(tag => (
                            <Link key={tag} href="#" className="text-[10px] bg-stone-100 hover:bg-brand-100 text-stone-600 hover:text-brand-800 px-2 py-1 rounded transition-colors font-bold uppercase">
                                #{tag}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Autor Bio Compacta (Inline) */}
                <div className="mt-8 p-5 bg-stone-50 rounded-lg flex items-center gap-4 border border-stone-100">
                    <div className="relative w-12 h-12 shrink-0">
                        <Image src="/images/kellybandeira.webp" alt="Kelly Bandeira" fill className="object-cover rounded-full" />
                    </div>
                    <div>
                        <div className="flex items-baseline gap-2">
                            <h4 className="text-base font-bold font-serif text-stone-900">Kelly Bandeira</h4>
                            <span className="text-[10px] font-bold text-brand-600 uppercase tracking-widest">Autora</span>
                        </div>
                        <p className="text-stone-500 text-xs leading-snug max-w-xl">
                            Podóloga e Massoterapeuta especialista em cuidados integrativos.
                        </p>
                    </div>
                </div>

                {/* CTA Final */}
                <div className="mt-10">
                    <BlogCTA />
                </div>

            </div>
        </article>
    );
}
