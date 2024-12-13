import { useEffect, useRef } from "react";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const whiteLogo = "/lovable-uploads/7f78581e-ed7d-4d54-8424-08e21e04f672.png";
  const blackLogo = "/lovable-uploads/8e43d334-5a0c-4341-a13c-ec79cd2ae8e8.png";

  useEffect(() => {
    const options = {
      threshold: Array.from({ length: 100 }, (_, i) => i / 100),
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (videoContainerRef.current) {
          const opacity = entry.intersectionRatio;
          videoContainerRef.current.style.opacity = opacity.toString();
        }
      });
    }, options);

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    // Handle logo transition on scroll
    const handleScroll = () => {
      const whiteLogoElement = document.getElementById('white-logo');
      const blackLogoElement = document.getElementById('black-logo');
      const logoContainer = document.getElementById('logo-container');
      const missionSection = document.querySelector('.mission-section');
      
      if (whiteLogoElement && blackLogoElement && logoContainer && missionSection) {
        const scrollPosition = window.scrollY;
        const missionRect = missionSection.getBoundingClientRect();
        const missionStart = window.scrollY + missionRect.top;
        const missionEnd = missionStart + missionRect.height;
        
        // Keep the logo container fixed until the end of the mission section
        if (scrollPosition <= missionEnd) {
          logoContainer.style.position = 'fixed';
          logoContainer.style.top = '50%';
          logoContainer.style.left = '50%';
          logoContainer.style.transform = 'translate(-50%, -50%)';
        } else {
          logoContainer.style.position = 'absolute';
          logoContainer.style.top = `${missionEnd}px`;
        }
        
        // Calculate opacity based on position within mission section
        let opacity = 1;
        if (scrollPosition >= missionStart) {
          const progress = (scrollPosition - missionStart) / missionRect.height;
          opacity = Math.max(0, 1 - progress * 2); // Multiply by 2 to complete fade by middle of section
        }
        
        whiteLogoElement.style.opacity = opacity.toString();
        blackLogoElement.style.opacity = (1 - opacity).toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial position
    handleScroll();

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Video background */}
      <div 
        ref={videoContainerRef}
        className="absolute inset-0 z-0 transition-opacity duration-150"
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source 
            src="https://cdn.prod.website-files.com/670fe89eb5229a7ce7da32e2/6731ee575dd5459de8bc192d_Warrior%20Capital%20NO%20LOGO%20-%20Reframed-transcode.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Logo overlay */}
      <div id="logo-container" className="fixed z-10 w-full max-w-[80vw] mx-auto">
        <div className="relative">
          {/* White logo */}
          <img
            id="white-logo"
            src={whiteLogo}
            alt="Warrior Capital Logo White"
            className="w-full h-auto absolute top-0 left-0 transition-opacity duration-300"
          />
          {/* Black logo */}
          <img
            id="black-logo"
            src={blackLogo}
            alt="Warrior Capital Logo Black"
            className="w-full h-auto opacity-0 transition-opacity duration-300"
          />
          {/* Spacer to maintain layout */}
          <img
            src={whiteLogo}
            alt=""
            className="w-full h-auto invisible"
          />
        </div>
      </div>
    </section>
  );
};
