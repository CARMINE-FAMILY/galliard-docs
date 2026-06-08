import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer'; // <- Importas el footer

const App: React.FC = () => {
  return (
    <div className="App" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <Navbar />
        <main>
          <Hero />
        </main>
      </div>
      
      {/* El Footer va al final de todo */}
      <Footer />
    </div>
  );
};

export default App;