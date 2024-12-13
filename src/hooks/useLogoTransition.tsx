import { useEffect, useState } from 'react';

export const useLogoTransition = () => {
  const [opacities, setOpacities] = useState({ white: 1, black: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const missionSection = document.querySelector('.mission-section');
      const logoContainer = document.getElementById('logo-container');
      
      if (missionSection && logoContainer) {
        const scrollPosition = window.scrollY;
        const missionRect = missionSection.getBoundingClientRect();
        const missionStart = window.scrollY + missionRect.top;
        const missionEnd = missionStart + missionRect.height;
        
        // Position the logo container
        if (scrollPosition <= missionEnd) {
          logoContainer.style.position = 'fixed';
          logoContainer.style.top = '50%';
          logoContainer.style.left = '50%';
          logoContainer.style.transform = 'translate(-50%, -50%)';
        } else {
          logoContainer.style.position = 'absolute';
          logoContainer.style.top = `${missionEnd}px`;
        }
        
        let whiteOpacity = 1;
        let blackOpacity = 0;
        
        // First transition: white to black
        if (scrollPosition >= missionStart - window.innerHeight * 0.3) {
          const progress = (scrollPosition - (missionStart - window.innerHeight * 0.3)) / (missionRect.height * 0.7);
          whiteOpacity = Math.max(0, 1 - progress * 2);
          blackOpacity = Math.min(1, progress * 2);
        }
        
        // Second transition: black to transparent
        if (scrollPosition >= missionEnd) {
          const fadeOutDistance = window.innerHeight;
          const fadeOutProgress = Math.min(1, (scrollPosition - missionEnd) / fadeOutDistance);
          blackOpacity = Math.max(0, 1 - fadeOutProgress);
        }
        
        setOpacities({ white: whiteOpacity, black: blackOpacity });
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return opacities;
};