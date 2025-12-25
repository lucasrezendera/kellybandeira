"use client";

import React, { useEffect, useState, useRef } from 'react';

interface StepsConnectorProps {
    stepsCount: number;
    color?: 'brand' | 'amber';
    animationDuration?: number;
}

const StepsConnector: React.FC<StepsConnectorProps> = ({
    stepsCount,
    color = 'brand',
    animationDuration = 2500
}) => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Intersection Observer para iniciar animação quando visível
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !isVisible) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
        if (!isVisible) return;

        // Animação suave do progresso
        const startTime = Date.now();
        const animate = () => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min(elapsed / animationDuration, 1);
            setProgress(newProgress);

            if (newProgress < 1) {
                requestAnimationFrame(animate);
            }
        };

        // Pequeno delay antes de iniciar
        const timeout = setTimeout(() => {
            requestAnimationFrame(animate);
        }, 300);

        return () => clearTimeout(timeout);
    }, [isVisible, animationDuration]);

    // Calcular largura da linha (de centro do primeiro ao centro do último)
    const lineStart = 100 / (stepsCount * 2);
    const lineEnd = 100 - lineStart;
    const lineWidth = lineEnd - lineStart;

    // Classes de cor baseadas na prop
    const progressColorClass = color === 'amber' ? 'bg-amber-500' : 'bg-brand-500';
    const glowColorClass = color === 'amber' ? 'bg-amber-400' : 'bg-brand-400';

    return (
        <div
            ref={containerRef}
            className="hidden lg:block absolute top-[45px] h-[2px] z-0"
            style={{
                left: `${lineStart}%`,
                width: `${lineWidth}%`
            }}
        >
            {/* Linha de fundo */}
            <div className="absolute inset-0 bg-stone-200 rounded-full"></div>

            {/* Linha animada de progresso */}
            <div
                className={`absolute top-0 left-0 h-full ${progressColorClass} rounded-full`}
                style={{
                    width: `${progress * 100}%`,
                    transition: 'width 50ms ease-out'
                }}
            ></div>

            {/* Glow effect no ponto de progresso */}
            {progress > 0.05 && progress < 0.98 && (
                <div
                    className={`absolute top-1/2 w-2 h-2 ${glowColorClass} rounded-full animate-pulse`}
                    style={{
                        left: `calc(${progress * 100}% - 4px)`,
                        transform: 'translateY(-50%)',
                        boxShadow: `0 0 8px 2px ${color === 'amber' ? 'rgba(245, 158, 11, 0.6)' : 'rgba(var(--brand-500-rgb, 199, 134, 174), 0.6)'}`
                    }}
                ></div>
            )}
        </div>
    );
};

export default StepsConnector;
