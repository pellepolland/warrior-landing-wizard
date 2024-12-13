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
        const aboutStart = window.scrollY + aboutRect.top;
        const viewportHeight = window.innerHeight;
        
        // First transition: white to black during mission section
        let whiteOpacity = 1;
        let blackOpacity = 0;
        
        if (scrollPosition >= missionStart - viewportHeight * 0.3) {
          const progress = (scrollPosition - (missionStart - viewportHeight * 0.3)) / (missionRect.height * 0.7);
          whiteOpacity = Math.max(0, 1 - progress * 2);
          blackOpacity = Math.min(1, progress * 2);
        }

        // Position and fade handling
        if (scrollPosition <= missionEnd) {
          // Keep logo centered until end of mission section
          logoContainer.style.position = 'fixed';
          logoContainer.style.top = '50%';
          logoContainer.style.left = '50%';
          logoContainer.style.transform = 'translate(-50%, -50%)';
        } else {
          // After mission section, let the logo scroll with the content
          const distanceFromTop = logoContainer.getBoundingClientRect().top;
          
          if (distanceFromTop <= 32) { // 2rem = 32px
            // Start fading out when logo approaches top of viewport
            const fadeProgress = 1 - (distanceFromTop / 32);
            blackOpacity = Math.max(0, 1 - fadeProgress);
            
            // Fix position at top when fully scrolled up
            logoContainer.style.position = 'fixed';
            logoContainer.style.top = '2rem';
            logoContainer.style.left = '50%';
            logoContainer.style.transform = 'translate(-50%, 0)';
          } else {
            // Let logo scroll naturally with content
            logoContainer.style.position = 'absolute';
            logoContainer.style.top = `${missionEnd}px`;
            logoContainer.style.left = '50%';
            logoContainer.style.transform = 'translate(-50%, -50%)';
          }
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
