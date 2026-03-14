
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WhatsAppFloat from './components/WhatsAppFloat';
import PortabilidadePage from './pages/PortabilidadePage';
import RedirectScreen from './components/RedirectScreen';

const App: React.FC = () => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleRedirect = () => {
    setIsRedirecting(true);
  };

  return (
    <Router>
      <div className="min-h-screen bg-[#050810] selection:bg-emerald-400 selection:text-black font-sans scroll-smooth">
        <Routes>
          <Route path="/" element={<PortabilidadePage onRedirect={handleRedirect} />} />
          {/* Fallback to home for any other route */}
          <Route path="*" element={<PortabilidadePage onRedirect={handleRedirect} />} />
        </Routes>
        <WhatsAppFloat onRedirect={handleRedirect} />
        {isRedirecting && <RedirectScreen />}
      </div>
    </Router>
  );
};

export default App;
