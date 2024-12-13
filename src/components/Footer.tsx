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
            <a 
              href="https://maps.app.goo.gl/CJWVFeoxHmA7cGAu8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warrior-gray hover:text-white transition-colors"
            >
              <p className="text-lg">103 Portobello Road</p>
              <p className="text-lg">London W11 2QB</p>
            </a>
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
                href="https://www.instagram.com/warrior_capital" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-warrior-gray hover:text-white transition-colors text-lg"
              >
                Instagram
              </a>
              <a 
                href="https://uk.linkedin.com/company/warrior-capital1" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block text-warrior-gray hover:text-white transition-colors text-lg"
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