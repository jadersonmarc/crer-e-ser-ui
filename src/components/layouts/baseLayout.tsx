import React , { ReactNode } from 'react';
import Navbar from '../organisms/navbar';
import Footer from '../organisms/footer';

interface LayoutBaseProps {
  children: ReactNode;
}

const BaseLayout: React.FC<LayoutBaseProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div >
         {children}
      </div>
      <Footer />
    </div>
  );
};

export default BaseLayout;