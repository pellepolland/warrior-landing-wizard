import { useEffect, useRef } from "react";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const whiteLogo = "/lovable-uploads/7f78581e-ed7d-4d54-8424-08e21e04f672.png";
  const blackLogo = "/lovable-uploads/3bba71e3-b348-449d-8ee0-bf29d669d35e.png";

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

    // Handle logo animation on scroll
    const handleScroll = () => {
      if (logoRef.current) {
        const scrollPosition = window.scrollY;
        const heroHeight = window.innerHeight;
        const secondBlockThreshold = heroHeight * 0.8; // Threshold for second block
        
        // First phase: Logo color transition (0 to secondBlockThreshold)
        if (scrollPosition <= secondBlockThreshold) {
          const colorProgress = Math.min(scrollPosition / secondBlockThreshold, 1);
          logoRef.current.style.opacity = (1 - colorProgress).toString();
          logoRef.current.style.transform = 'translate(0, 0) scale(1)';
        } 
        // Second phase: Position animation (after secondBlockThreshold)
        else {
          const positionProgress = Math.min((scrollPosition - secondBlockThreshold) / heroHeight, 1);
          const scale = 1 - (positionProgress * 0.9);
          const translateX = positionProgress * -45;
          const translateY = positionProgress * -5;
          
          logoRef.current.style.transform = `translate(${translateX}vw, ${translateY}vh) scale(${scale})`;
          logoRef.current.style.opacity = '1';
        }
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
        <div ref={logoRef} className="transition-all duration-300">
          <img
            src={whiteLogo}
            alt="Warrior Capital Logo"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};