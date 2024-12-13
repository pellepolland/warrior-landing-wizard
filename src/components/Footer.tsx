import { useEffect, useRef } from "react";
import { FooterAddress } from "./footer/FooterAddress";
import { FooterContact } from "./footer/FooterContact";
import { FooterSocial } from "./footer/FooterSocial";

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
          className="mb-8 h-12 transition-all duration-2000 opacity-0 translate-y-10"
        />
        <p className="text-sm">
          Detailed information about Warrior projects is available upon request.
        </p>
      </div>

      {/* Bottom section */}
      <div className="container mx-auto mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <FooterAddress />
          <FooterContact />
          <FooterSocial />
        </div>
      </div>
    </footer>
  );
};