import { useEffect, useState } from 'react';

export const useLogoTransition = () => {
  const [opacities, setOpacities] = useState({ white: 1, black: 0 });
  const [position, setPosition] = useState({ isCentered: true, progress: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const missionSection = document.querySelector('.mission-section');
      const aboutSection = document.querySelector('.about-section');
      
      if (missionSection && aboutSection) {
        const scrollPosition = window.scrollY;
        const missionRect = missionSection.getBoundingClientRect();
        const aboutRect = aboutSection.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Handle color transition during mission section
        const missionStart = window.scrollY + missionRect.top;
        if (scrollPosition >= missionStart - viewportHeight * 0.3) {
          const progress = (scrollPosition - (missionStart - viewportHeight * 0.3)) / (missionRect.height * 0.7);
          setOpacities({
            white: Math.max(0, 1 - progress * 2),
            black: Math.min(1, progress * 2)
          });
        } else {
          setOpacities({ white: 1, black: 0 });
        }

        // Handle position transition between mission and about sections
        const transitionStart = missionStart + missionRect.height;
        const transitionEnd = window.scrollY + aboutRect.top - 100; // Buffer space before about section
        
        if (scrollPosition < transitionStart) {
          setPosition({ isCentered: true, progress: 0 });
        } else if (scrollPosition > transitionEnd) {
          setPosition({ isCentered: false, progress: 1 });
        } else {
          const progress = (scrollPosition - transitionStart) / (transitionEnd - transitionStart);
          setPosition({ isCentered: false, progress });
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { ...opacities, position };
};