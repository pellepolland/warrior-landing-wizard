import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-24 px-4 animate-fade-up">
      {/* Top section */}
      <div className="container mx-auto mb-32">
        <p className="text-xl mb-20">
          Detailed information about Warrior projects is available upon request.
        </p>
      </div>

      {/* Bottom section */}
      <div className="container mx-auto mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Address */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Address</h3>
            <p className="text-warrior-gray text-lg">103 Portobello Road</p>
            <p className="text-warrior-gray text-lg">London W11 2QB</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Get in touch</h3>
            <p className="text-warrior-gray text-lg">+44 (0) 207 985 0157</p>
            <a 
              href="mailto:info@warriorcapital.co.uk" 
              className="text-warrior-gray hover:text-white transition-colors text-lg"
            >
              info@warriorcapital.co.uk
            </a>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-6 text-lg">Find us on</h3>
            <div className="space-y-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-warrior-gray hover:text-white transition-colors text-lg"
              >
                <Instagram size={24} />
                Instagram
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 text-warrior-gray hover:text-white transition-colors text-lg"
              >
                <Linkedin size={24} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};