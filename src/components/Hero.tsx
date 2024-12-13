export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/hero-video.mov" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
        
        {/* PNG overlay */}
        <div className="absolute inset-0">
          <img 
            src="/overlay.png" 
            alt="Overlay pattern" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-warrior-dark/80" />
      </div>
    </section>
  );
};