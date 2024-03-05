import React from 'react';
import Navbar from '../organisms/navbar';
import Footer from '../organisms/footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="flex-1">
        {/* Conteúdo da Página */}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;