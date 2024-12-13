import { useEffect, useState } from "react";
import { UserRound } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > heroHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-transparent' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="/" 
          className={`font-semibold text-xl transition-colors ${
            isScrolled ? 'text-warrior-dark' : 'text-white'
          }`}
        >
          WARRIOR
        </a>

        {/* Investor Login */}
        <a
          href="/login"
          className={`flex items-center gap-2 transition-colors ${
            isScrolled 
              ? 'text-warrior-dark hover:text-warrior-purple' 
              : 'text-white hover:text-warrior-gray'
          }`}
        >
          <UserRound size={20} />
          Investor Login
        </a>
      </div>
    </header>
  );
};