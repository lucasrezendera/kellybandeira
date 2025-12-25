"use client";

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'ghost' | 'cta';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    to?: string;
    onClick?: () => void;
    className?: string;
    fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    href,
    to,
    onClick,
    className = '',
    fullWidth = false
}) => {
    const destination = href || to;

    // Base: fonte negrito, uppercase, tracking
    const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-widest transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand-400 transform cursor-pointer";

    const sizes = {
        sm: "px-6 py-3 text-xs",
        md: "px-8 py-4 text-xs md:text-sm", // Padrão
        lg: "px-10 py-5 text-base md:text-lg" // Hero / Destaque
    };

    const variants = {
        primary: "bg-brand-800 text-white hover:bg-brand-900 shadow-lg hover:shadow-xl border border-transparent hover:-translate-y-0.5",
        outline: "bg-transparent text-brand-900 border border-brand-800 hover:bg-brand-50 hover:-translate-y-0.5",
        ghost: "bg-transparent text-brand-800 hover:bg-brand-100/50 hover:text-brand-900",
        cta: "bg-black text-white hover:bg-white hover:text-black shadow-xl border-2 border-black hover:-translate-y-0.5"
    };

    const widthClass = fullWidth ? "w-full" : "";
    const combinedClasses = `${baseStyles} ${sizes[size]} ${variants[variant]} ${widthClass} ${className}`;

    if (destination) {
        return (
            <Link href={destination} className={combinedClasses}>
                {children}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={combinedClasses}>
            {children}
        </button>
    );
};

export default Button;
