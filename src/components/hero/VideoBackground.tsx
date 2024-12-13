import { useRef, useEffect } from "react";

interface VideoBackgroundProps {
  onIntersection: (opacity: number) => void;
}

export const VideoBackground = ({ onIntersection }: VideoBackgroundProps) => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      threshold: Array.from({ length: 100 }, (_, i) => i / 100),
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        onIntersection(entry.intersectionRatio);
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
  }, [onIntersection]);

  return (
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
  );
};