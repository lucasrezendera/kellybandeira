import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flower2, Siren } from 'lucide-react';
import Button from '../UI/Button';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Podologia', path: '/podologia' },
    { name: 'Massoterapia', path: '/massoterapia' },
    { name: 'Reflexologia', path: '/reflexologia' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className={`p-2 rounded-full transition-colors ${scrolled ? 'text-brand-800 bg-brand-50' : 'text-brand-900 bg-white/50'}`}>
              <Flower2 size={24} strokeWidth={1.5} />
            </div>
            <span className={`text-2xl font-serif tracking-wide ${scrolled ? 'text-stone-800' : 'text-stone-900'}`}>
              Kelly <span className="italic text-brand-800">Bandeira</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`text-sm uppercase tracking-widest hover:text-brand-700 transition-colors font-medium ${scrolled ? 'text-stone-600' : 'text-stone-700'}`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Link Especial S.O.S */}
            <Button 
              to="/sos-unha-encravada" 
              className="bg-red-600 hover:bg-red-700 text-white border-none shadow-md gap-2 !px-5"
            >
               <Siren size={18} /> S.O.S
            </Button>

            <Button variant="primary" to="/agendar">
              Agendar Horário
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-stone-800 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-t border-stone-100 h-screen overflow-y-auto pb-20">
          <div className="flex flex-col px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="text-stone-600 hover:text-brand-800 text-lg font-serif italic px-2 py-2 border-b border-stone-50"
              >
                {link.name}
              </Link>
            ))}
            
             {/* Link Especial Mobile */}
             <div className="pt-4 flex flex-col gap-3">
               <Button 
                to="/sos-unha-encravada" 
                fullWidth
                className="bg-red-600 hover:bg-red-700 text-white border-none gap-2"
              >
                 <Siren size={18} /> S.O.S
              </Button>

              <Button fullWidth to="/agendar">
                Agendar Horário
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;