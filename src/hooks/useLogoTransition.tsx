import { useEffect, useState } from 'react';

export const useLogoTransition = () => {
  const [opacities, setOpacities] = useState({ 
    white: 1, 
    black: 0,
    overall: 1 
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
        let overallOpacity = 1;
        
        if (scrollPosition >= missionStart - viewportHeight * 0.3) {
          const progress = (scrollPosition - (missionStart - viewportHeight * 0.3)) / (missionRect.height * 0.7);
          whiteOpacity = Math.max(0, 1 - progress * 2);
          blackOpacity = Math.min(1, progress * 2);
        }

        // Handle fade out between mission and about sections
        if (scrollPosition >= missionStart && scrollPosition <= aboutStart) {
          const transitionProgress = (scrollPosition - missionStart) / (aboutStart - missionStart);
          overallOpacity = Math.max(0, 1 - transitionProgress);
        } else if (scrollPosition < missionStart) {
          overallOpacity = 1;
        } else if (scrollPosition > aboutStart) {
          overallOpacity = 0;
        }
        
        setOpacities({ 
          white: whiteOpacity, 
          black: blackOpacity,
          overall: overallOpacity 
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ...opacities };
};