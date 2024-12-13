import { useEffect, useState } from 'react';

export const useLogoTransition = () => {
  const [opacities, setOpacities] = useState({ 
    white: 1, 
    black: 0,
    overall: 1 
  });
  const [scale, setScale] = useState(1);

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
        let currentScale = 1;
        
        if (scrollPosition >= missionStart - viewportHeight * 0.3) {
          const progress = (scrollPosition - (missionStart - viewportHeight * 0.3)) / (missionRect.height * 0.7);
          whiteOpacity = Math.max(0, 1 - progress * 2);
          blackOpacity = Math.min(1, progress * 2);
        }

        // Handle size reduction and fade out between mission and about sections
        if (scrollPosition >= missionStart && scrollPosition <= aboutStart) {
          const transitionProgress = (scrollPosition - missionStart) / (aboutStart - missionStart);
          const scaleProgress = Math.min(1, transitionProgress * 1.5); // Faster scale reduction
          currentScale = Math.max(0.1, 1 - (scaleProgress * 0.9)); // Scale down to 10%
          overallOpacity = Math.max(0, 1 - transitionProgress);
        } else if (scrollPosition < missionStart) {
          currentScale = 1;
          overallOpacity = 1;
        } else if (scrollPosition > aboutStart) {
          currentScale = 0.1;
          overallOpacity = 0;
        }
        
        setOpacities({ 
          white: whiteOpacity, 
          black: blackOpacity,
          overall: overallOpacity 
        });
        setScale(currentScale);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ...opacities, scale };
};