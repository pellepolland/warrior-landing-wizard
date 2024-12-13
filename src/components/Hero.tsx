import { useEffect, useRef } from "react";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

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
        const heroHeight = window.innerHeight * 0.5;
        const progress = Math.min(scrollPosition / heroHeight, 1);

        const scale = 1 - (progress * 0.9);
        const translateX = progress * -45;
        const translateY = progress * -5;
        const opacity = 1 - progress;

        logoRef.current.style.transform = `translate(${translateX}vw, ${translateY}vh) scale(${scale})`;
        logoRef.current.style.opacity = opacity.toString();
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
      <div 
        ref={logoRef}
        className="relative z-10 w-full max-w-[80vw] mx-auto transition-all duration-150"
      >
        <img
          src="/lovable-uploads/7f78581e-ed7d-4d54-8424-08e21e04f672.png"
          alt="Warrior Capital Logo"
          className="w-full h-auto"
        />
      </div>
    </section>
  );
};