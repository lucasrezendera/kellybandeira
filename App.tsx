import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './pages/Home';
import PodologiaPage from './pages/Podologia';
// Subpáginas de Podologia
import UnhaEncravadaPage from './pages/Podologia/UnhaEncravada';
import LimpezaPage from './pages/Podologia/Limpeza';
import CalosPage from './pages/Podologia/Calos';
import DiabeticoPage from './pages/Podologia/Diabetico';
import MicosePage from './pages/Podologia/Micose';
import OrtesesPage from './pages/Podologia/Orteses';

import MassoterapiaPage from './pages/Massoterapia';
import MassagemRelaxantePage from './pages/Massoterapia/Relaxante';
import MassagemTerapeuticaPage from './pages/Massoterapia/Terapeutica';
import DrenagemLinfaticaPage from './pages/Massoterapia/Drenagem';
import MiofascialPage from './pages/Massoterapia/Miofascial';
import DesportivaPage from './pages/Massoterapia/Desportiva';
import PedrasQuentesPage from './pages/Massoterapia/PedrasQuentes';
import ReflexologiaPage from './pages/Reflexologia';

// Booking
import BookingPage from './pages/Booking';

// Landing Pages (Ads)
import UnhaEncravadaLP from './pages/Landing/UnhaEncravadaLP';

// Componente auxiliar para rolar para o topo ao mudar de rota
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* Rotas de Podologia */}
          <Route path="/podologia" element={<PodologiaPage />} />
          <Route path="/podologia/unha-encravada" element={<UnhaEncravadaPage />} />
          <Route path="/podologia/limpeza" element={<LimpezaPage />} />
          <Route path="/podologia/calos" element={<CalosPage />} />
          <Route path="/podologia/diabetico" element={<DiabeticoPage />} />
          <Route path="/podologia/micose" element={<MicosePage />} />
          <Route path="/podologia/orteses" element={<OrtesesPage />} />

          {/* Rotas de Massoterapia */}
          <Route path="/massoterapia" element={<MassoterapiaPage />} />
          <Route path="/massoterapia/relaxante" element={<MassagemRelaxantePage />} />
          <Route path="/massoterapia/terapeutica" element={<MassagemTerapeuticaPage />} />
          <Route path="/massoterapia/drenagem" element={<DrenagemLinfaticaPage />} />
          <Route path="/massoterapia/miofascial" element={<MiofascialPage />} />
          <Route path="/massoterapia/desportiva" element={<DesportivaPage />} />
          <Route path="/massoterapia/pedras-quentes" element={<PedrasQuentesPage />} />
          
          <Route path="/reflexologia" element={<ReflexologiaPage />} />

          {/* Agendamento */}
          <Route path="/agendar" element={<BookingPage />} />

          {/* Landing Pages (Focadas em Conversão/Ads) */}
          <Route path="/sos-unha-encravada" element={<UnhaEncravadaLP />} />

        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;