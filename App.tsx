import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import HorizontalGallery from './components/HorizontalGallery';
import VideoSection from './components/VideoSection';
import BioSection from './components/BioSection';
import CustomCursor from './components/CustomCursor';

const App: React.FC = () => {
  // Mobile check for cursor - we usually disable custom cursor on touch devices
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      {!isMobile && <CustomCursor />}
      
      <main className="relative z-10">
        <Hero />
        
        {/* The Exhibition Space */}
        <div className="relative z-20 shadow-[0_-50px_100px_rgba(0,0,0,1)]">
            <HorizontalGallery />
        </div>
        
        <VideoSection />
        
        <BioSection />
      </main>

      {/* Global Gradient Mesh Background (fixed at bottom) */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-900 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[10000ms]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-indigo-900 rounded-full blur-[150px] mix-blend-screen animate-pulse duration-[15000ms]" />
      </div>
    </div>
  );
};

export default App;