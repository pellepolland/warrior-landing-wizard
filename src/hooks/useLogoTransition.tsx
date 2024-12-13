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
        if (scrollPosition <= missionEnd - viewportHeight * 0.4) {
          // Keep logo centered
          logoContainer.style.position = 'fixed';
          logoContainer.style.top = '50%';
          logoContainer.style.left = '50%';
          logoContainer.style.transform = 'translate(-50%, -50%)';
        } else {
          const distanceToTop = 32; // Final top position (2rem)
          const startPosition = viewportHeight / 2; // Starting from center
          
          // Calculate the scroll progress
          const scrollProgress = Math.max(0, Math.min(1, 
            (scrollPosition - (missionEnd - viewportHeight * 0.4)) / (viewportHeight * 0.3)
          ));
          
          // Calculate the current position based on scroll progress
          const currentTop = startPosition - ((startPosition - distanceToTop) * scrollProgress);
          
          // Apply the position
          logoContainer.style.position = 'fixed';
          logoContainer.style.top = `${currentTop}px`;
          logoContainer.style.left = '50%';
          logoContainer.style.transform = `translate(-50%, ${scrollProgress >= 1 ? '0' : '-50%'})`;
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