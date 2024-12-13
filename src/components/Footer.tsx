import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            wordmarkRef.current?.classList.add('opacity-100', 'translate-y-0');
            wordmarkRef.current?.classList.remove('opacity-0', 'translate-y-10');
          } else {
            wordmarkRef.current?.classList.remove('opacity-100', 'translate-y-0');
            wordmarkRef.current?.classList.add('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-black text-white py-24 px-4 animate-fade-up uppercase tracking-widest">
      {/* Top section */}
      <div className="container mx-auto mb-32">
        <img 
          ref={wordmarkRef}
          src="/lovable-uploads/3bba71e3-b348-449d-8ee0-bf29d669d35e.png" 
          alt="Warrior Capital"
          className="mb-8 h-12 transition-all duration-1000 opacity-0 translate-y-10"
        />
        <p className="text-sm">
          Detailed information about Warrior projects is available upon request.
        </p>
      </div>

      {/* Bottom section */}
      <div className="container mx-auto mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Address */}
          <div>
            <h3 className="font-semibold mb-6 text-sm normal-case">Address</h3>
            <a 
              href="https://maps.app.goo.gl/CJWVFeoxHmA7cGAu8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warrior-gray hover:text-white transition-colors"
            >
              <p className="text-sm">103 Portobello Road</p>
              <p className="text-sm">London W11 2QB</p>
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-6 text-sm normal-case">Get in touch</h3>
            <p className="text-warrior-gray text-sm">+44 (0) 207 985 0157</p>
            <a 
              href="mailto:info@warriorcapital.co.uk" 
              className="text-warrior-gray hover:text-white transition-colors text-sm"
            >
              info@warriorcapital.co.uk
            </a>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-6 text-sm normal-case">Find us on</h3>
            <div className="space-y-4">
              <a 
                href="https://www.instagram.com/warrior_capital" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-warrior-gray hover:text-white transition-colors text-sm"
              >
                Instagram
              </a>
              <a 
                href="https://uk.linkedin.com/company/warrior-capital1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-warrior-gray hover:text-white transition-colors text-sm"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};