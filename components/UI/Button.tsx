import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  to?: string;
  onClick?: () => void;
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  fullWidth = false
}) => {
  // ATUALIZAÇÃO PREMIUM: 
  // - uppercase: Todas as letras maiúsculas
  // - tracking-widest: Espaçamento elegante entre letras
  // - font-bold: Mais peso para chamar atenção
  // - py-4 px-8: Botões maiores e mais clicáveis
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-brand-400 transform";
  
  const variants = {
    primary: "bg-brand-800 text-white hover:bg-brand-900 shadow-lg hover:shadow-xl border border-transparent hover:-translate-y-0.5",
    outline: "bg-transparent text-brand-900 border border-brand-800 hover:bg-brand-50 hover:-translate-y-0.5",
    ghost: "bg-transparent text-brand-800 hover:bg-brand-100/50 hover:text-brand-900"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
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