import React , { ReactNode } from 'react';
import Navbar from '../organisms/navbar';
import Footer from '../organisms/footer';
import Statistics from "@/components/organisms/statistics";

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
      <Statistics />
      <Footer />
    </div>
  );
};

export default BaseLayout;