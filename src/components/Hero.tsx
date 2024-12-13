import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-warrior-dark text-white px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-up">
          Transforming Ideas Into
          <span className="text-warrior-purple"> Digital Success</span>
        </h1>
        <p className="text-lg md:text-xl mb-8 text-warrior-gray animate-fade-up" style={{ animationDelay: "0.2s" }}>
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