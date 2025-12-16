import React, { useEffect, useRef, useState } from 'react';

type RevealVariant = 'blur-up' | 'scale' | 'left' | 'right';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // em ms
  variant?: RevealVariant;
  threshold?: number; // 0 a 1 (quanto do elemento precisa aparecer)
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  variant = 'blur-up', // Padrão agora é o Blur Up (Mais elegante)
  threshold = 0.15 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Desconecta para performar melhor e não animar ao subir de volta
          if (ref.current) observer.unobserve(ref.current); 
        }
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -50px 0px" // Margem de segurança
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      style={delayStyle}
      className={`reveal-base variant-${variant} ${isVisible ? 'reveal-visible' : 'reveal-hidden'} ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;