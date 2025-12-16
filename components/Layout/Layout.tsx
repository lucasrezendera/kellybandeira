import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  // Lista de rotas onde o Navbar padrão não deve aparecer (foco em conversão)
  const isLandingPage = location.pathname === '/sos-unha-encravada';

  return (
    <div className="flex flex-col min-h-screen">
      {!isLandingPage && <Navbar />}
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;