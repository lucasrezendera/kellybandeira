"use client";

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

interface TreatmentCardProps {
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    link: string;
    image?: string;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ title, subtitle, description, icon, link, image }) => {
    return (
        <Link
            href={link}
            className="group relative flex flex-col h-[280px] lg:h-[380px] rounded-sm overflow-hidden"
        >
            {/* Background Image */}
            <Image
                src={image || "https://picsum.photos/800/600"}
                alt={title}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-800 via-brand-700/80 to-transparent opacity-95 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Icon Badge - Top Right */}
            <div className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-white/20 border border-white/30 flex items-center justify-center text-white group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                {icon}
            </div>

            {/* Content */}
            <div className="relative z-10 mt-auto p-6 flex flex-col">
                {/* Subtitle */}
                <span className="text-white/80 text-xs font-bold tracking-widest uppercase mb-1">
                    {subtitle}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-serif text-white mb-2 leading-tight group-hover:translate-x-1 transition-transform duration-300">
                    {title}
                </h3>

                {/* Description - Hidden, shows on hover */}
                <p className="text-white/70 text-sm leading-relaxed mb-4 max-h-0 overflow-hidden opacity-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 ease-out">
                    {description}
                </p>

                {/* CTA */}
                <div className="flex items-center gap-2 text-white/90 group-hover:text-white transition-colors duration-300">
                    <span className="text-sm font-medium tracking-wide">Explorar</span>
                    <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
            </div>
        </Link>
    );
};

export default TreatmentCard;
