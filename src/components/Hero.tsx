import { useEffect, useRef } from "react";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoContainerRef.current) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const opacity = Math.max(0, 1 - (scrollPosition / windowHeight));
        videoContainerRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      <div 
        ref={videoContainerRef}
        className="fixed inset-0 z-0 transition-opacity duration-300"
        style={{ willChange: 'opacity' }}
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
    </section>
  );
};