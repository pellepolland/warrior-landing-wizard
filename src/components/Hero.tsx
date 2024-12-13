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
      
      if (whiteLogoElement && blackLogoElement) {
        const scrollPosition = window.scrollY;
        const triggerPoint = window.innerHeight; // Trigger at second block
        const fadeDistance = window.innerHeight * 0.5; // Distance over which fade occurs
        
        let opacity = 1;
        if (scrollPosition > triggerPoint) {
          opacity = Math.max(0, 1 - (scrollPosition - triggerPoint) / fadeDistance);
        }
        
        whiteLogoElement.style.opacity = opacity.toString();
        blackLogoElement.style.opacity = (1 - opacity).toString();
      }
    };

    window.addEventListener('scroll', handleScroll);

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
      <div className="relative z-10 w-full max-w-[80vw] mx-auto">
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