import React from 'react';
import { MapPin, Phone, Instagram, Mail, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-stone-950 text-stone-400 pt-20 pb-10 border-t border-stone-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Grid Container 4 Colunas */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-stone-900">

                    {/* Coluna 1: Marca & Essência */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <h3 className="text-3xl text-white font-serif tracking-wide hover:opacity-90 transition-opacity">
                                Kelly <span className="italic text-brand-500">Bandeira</span>
                            </h3>
                        </Link>
                        <p className="text-stone-500 text-sm leading-relaxed font-light max-w-xs">
                            Um refúgio de cuidado e saúde em Campinas. Unimos ciência e bem-estar para devolver o equilíbrio que seu corpo merece.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-stone-400 hover:bg-brand-900 hover:text-white transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="mailto:contato@kellybandeira.com.br" className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-stone-400 hover:bg-brand-900 hover:text-white transition-all duration-300">
                                <Mail size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Coluna 2: Navegação */}
                    <div className="space-y-6">
                        <h4 className="text-white font-serif text-lg tracking-wide">Navegação</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/" className="hover:text-brand-400 transition-colors flex items-center gap-2 group">
                                    <ArrowRight size={14} className="text-brand-800 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link href="/podologia" className="hover:text-brand-400 transition-colors flex items-center gap-2 group">
                                    <ArrowRight size={14} className="text-brand-800 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                                    Podologia
                                </Link>
                            </li>
                            <li>
                                <Link href="/massoterapia" className="hover:text-brand-400 transition-colors flex items-center gap-2 group">
                                    <ArrowRight size={14} className="text-brand-800 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                                    Massoterapia
                                </Link>
                            </li>
                            <li>
                                <Link href="/sobre" className="hover:text-brand-400 transition-colors flex items-center gap-2 group">
                                    <ArrowRight size={14} className="text-brand-800 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                                    Sobre a Profissional
                                </Link>
                            </li>
                            <li>
                                <Link href="/agendar" className="hover:text-brand-400 transition-colors flex items-center gap-2 group">
                                    <ArrowRight size={14} className="text-brand-800 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                                    Agendar Horário
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 3: Tratamentos (SEO) */}
                    <div className="space-y-6">
                        <h4 className="text-white font-serif text-lg tracking-wide">Tratamentos</h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/podologia/unha-encravada" className="hover:text-brand-400 transition-colors block">
                                    Unha Encravada
                                </Link>
                            </li>
                            <li>
                                <Link href="/podologia/calos" className="hover:text-brand-400 transition-colors block">
                                    Remoção de Calos
                                </Link>
                            </li>
                            <li>
                                <Link href="/massoterapia/relaxante" className="hover:text-brand-400 transition-colors block">
                                    Massagem Relaxante
                                </Link>
                            </li>
                            <li>
                                <Link href="/massoterapia/drenagem" className="hover:text-brand-400 transition-colors block">
                                    Drenagem Linfática
                                </Link>
                            </li>
                            <li>
                                <Link href="/reflexologia" className="hover:text-brand-400 transition-colors block">
                                    Reflexologia Podal
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 4: Contato Premium */}
                    <div className="space-y-6">
                        <h4 className="text-white font-serif text-lg tracking-wide">Visite o Espaço</h4>

                        <div className="space-y-4">
                            <a href="https://maps.app.goo.gl/link-fake-campinas" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                                <MapPin className="text-brand-600 mt-1 group-hover:text-brand-400 transition-colors" size={20} />
                                <span className="text-sm font-light group-hover:text-stone-200 transition-colors">
                                    Rua Antônio Lapa, 1066<br />
                                    Cambuí, Campinas - SP
                                </span>
                            </a>

                            <div className="flex items-center gap-3">
                                <Clock className="text-brand-600" size={20} />
                                <div className="text-sm font-light">
                                    <p>Seg - Sex: 08h às 19h</p>
                                    <p>Sáb: 08h às 13h</p>
                                </div>
                            </div>

                            <div className="pt-2">
                                <a
                                    href="https://wa.me/5519983690695"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 bg-brand-900/20 text-brand-400 border border-brand-900/50 px-6 py-3 rounded-sm hover:bg-brand-900 hover:text-white transition-all duration-300 w-full justify-center group"
                                >
                                    <Phone size={18} />
                                    <span className="font-medium tracking-wide">(19) 98369-0695</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-stone-600">
                    <p>© {new Date().getFullYear()} Kelly Bandeira. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="/politica-privacidade" className="hover:text-stone-400 transition-colors">Política de Privacidade</Link>
                        <Link href="/termos-uso" className="hover:text-stone-400 transition-colors">Termos de Uso</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
