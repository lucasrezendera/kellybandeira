"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Flower2, Siren, Calendar, ChevronDown } from 'lucide-react';


const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [hoveredLink, setHoveredLink] = useState<string | null>(null);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        setIsOpen(false);
        setHoveredLink(null);
    }, [pathname]);

    if (pathname === '/lp/sos-unha-encravada') return null;

    const navLinks = [
        { name: 'Início', path: '/' },
        { name: 'Sobre', path: '/sobre' },
        {
            name: 'Podologia',
            path: '/podologia',
            subLinks: [
                { name: 'Limpeza Técnica', path: '/podologia/limpeza' },
                { name: 'Unha Encravada', path: '/podologia/unha-encravada' },
                { name: 'Calos e Calosidades', path: '/podologia/calos' },
                { name: 'Micoses e Fungos', path: '/podologia/micose' },
                { name: 'Pé Diabético', path: '/podologia/diabetico' },
                { name: 'Órteses', path: '/podologia/orteses' },
            ]
        },
        {
            name: 'Massoterapia',
            path: '/massoterapia',
            subLinks: [
                { name: 'Relaxante', path: '/massoterapia/relaxante' },
                { name: 'Terapêutica', path: '/massoterapia/terapeutica' },
                { name: 'Drenagem Linfática', path: '/massoterapia/drenagem' },
                { name: 'Desportiva', path: '/massoterapia/desportiva' },
                { name: 'Miofascial', path: '/massoterapia/miofascial' },
                { name: 'Pedras Quentes', path: '/massoterapia/pedras-quentes' },
            ]
        },
        { name: 'Reflexologia', path: '/reflexologia' },
    ];

    return (
        <nav
            className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${scrolled
                ? 'top-4 w-[98%] max-w-7xl rounded-full bg-white/90 backdrop-blur-lg shadow-xl py-3 px-8'
                : 'top-0 w-full rounded-none bg-transparent py-6 border-b border-transparent px-0'
                }`}
            onMouseLeave={() => setHoveredLink(null)}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-2 group relative z-50">
                        <div className={`p-2 rounded-full transition-colors ${scrolled ? 'text-brand-800 bg-brand-50' : 'text-brand-900 bg-white/50'}`}>
                            <Flower2 size={24} strokeWidth={1.5} />
                        </div>
                        <span className={`text-2xl font-serif tracking-wide ${scrolled ? 'text-stone-800' : 'text-stone-900'} group-hover:opacity-90 transition-opacity`}>
                            Kelly <span className="italic text-brand-800">Bandeira</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation & Actions */}
                    <div className="hidden md:flex items-center gap-8">
                        {/* Links */}
                        <div className="flex items-center gap-1">
                            {navLinks.map((link) => (
                                <div
                                    key={link.path}
                                    className="relative group"
                                    onMouseEnter={() => setHoveredLink(link.name)}
                                >
                                    <Link
                                        href={link.path}
                                        className={`px-4 py-2 text-xs font-bold uppercase tracking-widest hover:text-brand-700 transition-colors relative flex items-center gap-1 group/link ${scrolled ? 'text-stone-600' : 'text-stone-700'}`}
                                    >
                                        {link.name}
                                        {link.subLinks && (
                                            <ChevronDown
                                                size={12}
                                                className={`transition-transform duration-300 ${hoveredLink === link.name ? 'rotate-180 text-brand-600' : 'text-stone-400'}`}
                                            />
                                        )}
                                    </Link>

                                    {/* Dropdown Desktop */}
                                    {link.subLinks && hoveredLink === link.name && (
                                        <div
                                            className="absolute top-full left-0 pt-6"
                                            onMouseEnter={() => setHoveredLink(link.name)}
                                            onMouseLeave={() => setHoveredLink(null)}
                                        >
                                            <div className={`
                                                min-w-[240px] p-2 rounded-2xl border transition-all duration-300
                                                shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-xl
                                                ${scrolled
                                                    ? 'bg-white/80 border-white/50'
                                                    : 'bg-white/90 border-stone-100'
                                                }
                                                animate-in fade-in slide-in-from-top-4
                                            `}>
                                                <div className="flex flex-col gap-1">
                                                    {link.subLinks.map((subItem) => (
                                                        <Link
                                                            key={subItem.path}
                                                            href={subItem.path}
                                                            className="block px-4 py-3 text-sm text-stone-600 hover:text-brand-800 hover:bg-brand-50/80 rounded-xl transition-all font-medium whitespace-nowrap"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="h-6 w-px bg-stone-300/50"></div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                            {/* Botão Agendar - Redesenhado do Zero */}
                            <button
                                onClick={() => router.push('/agendar')}
                                className="h-10 px-5 flex items-center justify-center gap-2 bg-brand-800 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm hover:bg-brand-900 transition-all hover:-translate-y-0.5 active:translate-y-0"
                            >
                                <Calendar size={14} />
                                <span>Agendar</span>
                            </button>

                            {/* Botão Emergência - Redesenhado do Zero */}
                            <Link
                                href="/lp/sos-unha-encravada"
                                className="h-10 px-5 flex items-center justify-center gap-2 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-sm hover:bg-red-700 transition-all hover:-translate-y-0.5 active:translate-y-0"
                            >
                                <Siren size={14} className="animate-pulse" />
                                <span className="hidden lg:inline">Emergência</span>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-stone-800 focus:outline-none p-2"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden fixed top-0 left-0 w-full h-[100dvh] bg-white z-40 overflow-y-auto">
                    <div className="flex flex-col pt-24 px-6 pb-20 space-y-2">
                        {navLinks.map((link) => (
                            <div key={link.path} className="border-b border-stone-50 last:border-0 pb-2">
                                <Link
                                    href={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-stone-800 hover:text-brand-800 text-2xl font-serif italic py-2"
                                >
                                    {link.name}
                                </Link>

                                {/* Mobile Sublinks - Always visible or indented */}
                                {link.subLinks && (
                                    <div className="pl-4 flex flex-col gap-2 mt-1 mb-3 border-l-2 border-stone-100">
                                        {link.subLinks.map((subItem) => (
                                            <Link
                                                key={subItem.path}
                                                href={subItem.path}
                                                onClick={() => setIsOpen(false)}
                                                className="text-stone-500 hover:text-brand-600 text-base font-light block py-1"
                                            >
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="pt-8 flex flex-col gap-3 mt-4">
                            {/* Mobile Agendar */}
                            <button
                                onClick={() => router.push('/agendar')}
                                className="h-12 w-full flex items-center justify-center gap-3 bg-brand-800 text-white font-bold uppercase tracking-widest rounded-full shadow-md"
                            >
                                <Calendar size={20} />
                                <span>Agendar Horário</span>
                            </button>

                            {/* Mobile Emergência */}
                            <Link
                                href="/lp/sos-unha-encravada"
                                onClick={() => setIsOpen(false)}
                                className="h-12 w-full flex items-center justify-center gap-3 bg-red-600 text-white font-bold uppercase tracking-widest rounded-full shadow-md"
                            >
                                <Siren size={20} className="animate-pulse" />
                                <span>Emergência Unha Encravada</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Header;
