import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-4">
      {/* Top section */}
      <div className="container mx-auto">
        <p className="text-lg mb-20">
          Detailed information about Warrior projects is available upon request.
        </p>
      </div>

      {/* Bottom section */}
      <div className="container mx-auto mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Address */}
          <div>
            <h3 className="font-semibold mb-4">Address</h3>
            <p className="text-warrior-gray">103 Portobello Road</p>
            <p className="text-warrior-gray">London W11 2QB</p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in touch</h3>
            <p className="text-warrior-gray">+44 (0) 207 985 0157</p>
            <a 
              href="mailto:info@warriorcapital.co.uk" 
              className="text-warrior-gray hover:text-white transition-colors"
            >
              info@warriorcapital.co.uk
            </a>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold mb-4">Find us on</h3>
            <div className="space-y-2">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-warrior-gray hover:text-white transition-colors"
              >
                <Instagram size={20} />
                Instagram
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-warrior-gray hover:text-white transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};