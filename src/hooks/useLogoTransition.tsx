import { useEffect, useState } from 'react';

export const useLogoTransition = () => {
  const [opacities, setOpacities] = useState({ 
    white: 1, 
    black: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const missionSection = document.querySelector('.mission-section');
      const aboutSection = document.querySelector('.about-section');
      
      if (missionSection && aboutSection) {
        const scrollPosition = window.scrollY;
        const missionRect = missionSection.getBoundingClientRect();
        const aboutRect = aboutSection.getBoundingClientRect();
        const missionStart = window.scrollY + missionRect.top;
        const aboutStart = window.scrollY + aboutRect.top;
        const viewportHeight = window.innerHeight;
        
        // Handle white to black transition during mission section
        let whiteOpacity = 1;
        let blackOpacity = 0;
        
        if (scrollPosition >= missionStart - viewportHeight * 0.3) {
          const progress = (scrollPosition - (missionStart - viewportHeight * 0.3)) / (missionRect.height * 0.7);
          whiteOpacity = Math.max(0, 1 - progress * 2);
          blackOpacity = Math.min(1, progress * 2);
        }

        // Handle fade out before about section
        if (scrollPosition >= aboutStart - viewportHeight * 0.5) {
          const fadeOutProgress = (scrollPosition - (aboutStart - viewportHeight * 0.5)) / (viewportHeight * 0.3);
          const fadeOutFactor = Math.max(0, 1 - fadeOutProgress);
          whiteOpacity *= fadeOutFactor;
          blackOpacity *= fadeOutFactor;
        }
        
        setOpacities({ 
          white: whiteOpacity, 
          black: blackOpacity,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return opacities;
};