import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

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

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up text-white">
          Transforming Ideas Into
          <span className="text-warrior-purple"> Digital Success</span>
        </h1>
        <p 
          className="text-lg md:text-xl mb-8 text-warrior-gray animate-fade-up" 
          style={{ animationDelay: "0.2s" }}
        >
          We help businesses achieve their goals through innovative digital solutions
        </p>
        <Button 
          className="bg-warrior-purple hover:bg-warrior-secondary text-white px-8 py-6 rounded-lg text-lg animate-fade-up flex items-center gap-2 mx-auto"
          style={{ animationDelay: "0.4s" }}
        >
          Get Started <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};