import { useEffect, useRef } from "react";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      threshold: Array.from({ length: 100 }, (_, i) => i / 100), // Create thresholds for smooth transition
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (videoContainerRef.current) {
          // Calculate opacity based on intersection ratio
          const opacity = entry.intersectionRatio;
          videoContainerRef.current.style.opacity = opacity.toString();
        }
      });
    }, options);

    if (videoContainerRef.current) {
      observer.observe(videoContainerRef.current);
    }

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Video background */}
      <div 
        ref={videoContainerRef}
        className="absolute inset-0 z-0 transition-opacity duration-300"
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