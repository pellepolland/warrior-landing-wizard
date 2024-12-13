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
          className={`transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src="/lovable-uploads/c865e138-a44c-4a9e-8650-447e5445df7f.png"
            alt="Warrior Capital"
            className="h-6 w-auto"
          />
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