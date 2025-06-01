import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import CustomCursor from './CustomCursor';
import LoadingScreen from './LoadingScreen';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <CustomCursor />
      <Navbar />
      <main className="relative">
        {/* Background gradient elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-portfolio-purple/20 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-portfolio-cyan/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-portfolio-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
