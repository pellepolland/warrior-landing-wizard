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
          <source 
            src="https://cdn.prod.website-files.com/670fe89eb5229a7ce7da32e2/6731ee575dd5459de8bc192d_Warrior%20Capital%20NO%20LOGO%20-%20Reframed-transcode.mp4" 
            type="video/mp4" 
          />
          <source 
            src="https://cdn.prod.website-files.com/670fe89eb5229a7ce7da32e2/6731ee575dd5459de8bc192d_Warrior%20Capital%20NO%20LOGO%20-%20Reframed-transcode.webm" 
            type="video/webm" 
          />
          Your browser does not support the video tag.
        </video>
        
        {/* PNG overlay */}
        <div className="absolute inset-0">
          <img 
            src="/images/overlay.png" 
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