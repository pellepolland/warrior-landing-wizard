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
        } else if (scrollPosition > missionEnd && scrollPosition < aboutStart - viewportHeight) {
          // Fix logo in place after mission section
          logoContainer.style.position = 'absolute';
          logoContainer.style.top = `${missionEnd}px`;
          logoContainer.style.left = '50%';
          logoContainer.style.transform = 'translate(-50%, -50%)';
        } else if (scrollPosition >= aboutStart - viewportHeight) {
          // Start fading out black logo as it approaches viewport top
          const fadeDistance = viewportHeight;
          const fadeProgress = (scrollPosition - (aboutStart - viewportHeight)) / fadeDistance;
          blackOpacity = Math.max(0, 1 - fadeProgress);
          
          // Position logo fixed at top when reaching that point
          if (fadeProgress >= 0.5) {
            logoContainer.style.position = 'fixed';
            logoContainer.style.top = '2rem';
            logoContainer.style.left = '50%';
            logoContainer.style.transform = 'translate(-50%, 0)';
          } else {
            logoContainer.style.position = 'absolute';
            logoContainer.style.top = `${aboutStart - viewportHeight}px`;
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
