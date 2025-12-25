import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/blogPosts';
import { ArrowRight, Calendar, User } from 'lucide-react';

interface BlogCardProps {
    post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
    return (
        <article className="group bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden hover:shadow-xl hover:border-brand-100 transition-all duration-300 flex flex-col h-full">
            {/* Imagem de Capa */}
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-800 uppercase tracking-wider shadow-sm">
                    {post.category}
                </div>
            </div>

            {/* Conteúdo */}
            <div className="p-6 flex flex-col flex-grow">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-stone-400 mb-3">
                    <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString('pt-BR')}
                    </div>
                    <div className="flex items-center gap-1">
                        <User size={12} />
                        {post.author}
                    </div>
                </div>

                {/* Título */}
                <Link href={`/blog/${post.slug}`} className="block mb-3">
                    <h3 className="text-xl font-bold text-stone-800 group-hover:text-brand-600 transition-colors line-clamp-2 leading-tight">
                        {post.title}
                    </h3>
                </Link>

                {/* Resumo */}
                <p className="text-stone-500 text-sm leading-relaxed line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                </p>

                {/* Botão Ler Mais */}
                <div className="mt-auto">
                    <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-800 transition-colors uppercase tracking-wide group/link"
                    >
                        Ler Artigo Completo
                        <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
