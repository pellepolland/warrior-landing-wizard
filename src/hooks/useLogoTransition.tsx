import { useEffect, useState } from 'react';

export const useLogoTransition = () => {
  const [opacities, setOpacities] = useState({ white: 1, black: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const missionSection = document.querySelector('.mission-section');
      const aboutSection = document.querySelector('.about-section');
      const logoContainer = document.getElementById('logo-container');
      
      if (missionSection && logoContainer && aboutSection) {
        const scrollPosition = window.scrollY;
        const missionRect = missionSection.getBoundingClientRect();
        const aboutRect = aboutSection.getBoundingClientRect();
        const missionStart = window.scrollY + missionRect.top;
        const missionEnd = missionStart + missionRect.height;
        const viewportHeight = window.innerHeight;
        
        // First transition: white to black during mission section
        let whiteOpacity = 1;
        let blackOpacity = 0;
        
        if (scrollPosition >= missionStart - viewportHeight * 0.3) {
          const progress = (scrollPosition - (missionStart - viewportHeight * 0.3)) / (missionRect.height * 0.7);
          whiteOpacity = Math.max(0, 1 - progress * 2);
          blackOpacity = Math.min(1, progress * 2);
        }

        // Position handling
        const transitionStartPoint = missionEnd - viewportHeight * 0.4;
        const transitionEndPoint = missionEnd;
        
        if (scrollPosition <= transitionStartPoint) {
          // Keep centered
          logoContainer.style.position = 'fixed';
          logoContainer.style.top = '50%';
          logoContainer.style.left = '50%';
          logoContainer.style.transform = 'translate(-50%, -50%)';
        } else if (scrollPosition >= transitionEndPoint) {
          // Lock to final position
          logoContainer.style.position = 'fixed';
          logoContainer.style.top = '32px';
          logoContainer.style.left = '50%';
          logoContainer.style.transform = 'translate(-50%, 0)';
        } else {
          // Smooth transition based on scroll position
          const progress = (scrollPosition - transitionStartPoint) / (transitionEndPoint - transitionStartPoint);
          const startY = viewportHeight / 2;
          const endY = 32;
          const currentY = startY - (progress * (startY - endY));
          
          logoContainer.style.position = 'fixed';
          logoContainer.style.top = `${currentY}px`;
          logoContainer.style.left = '50%';
          logoContainer.style.transform = 'translate(-50%, -50%)';
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
