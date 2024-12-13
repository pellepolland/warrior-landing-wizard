import { useEffect, useState } from "react";
import { UserRound } from "lucide-react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        const isScrolledPastHero = scrollPosition > heroHeight - 100;
        setIsScrolled(isScrolledPastHero);

        // Calculate opacity for smooth transition
        // Start transition when scrolling is at 70% of hero height
        const transitionStart = heroHeight * 0.7;
        const transitionDuration = heroHeight * 0.3; // Complete over 30% of hero height
        const progress = Math.max(0, Math.min(1, (scrollPosition - transitionStart) / transitionDuration));
        setOpacity(progress);
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
        {/* Logo container with both logos */}
        <div className="relative">
          {/* White logo */}
          <a 
            href="/" 
            className={`font-semibold text-xl transition-opacity duration-300 absolute`}
            style={{ opacity: 1 - opacity }}
          >
            <img
              src="/lovable-uploads/7f78581e-ed7d-4d54-8424-08e21e04f672.png"
              alt="Warrior Capital White Logo"
              className="h-8"
            />
          </a>
          
          {/* Black logo */}
          <a 
            href="/" 
            className={`font-semibold text-xl transition-opacity duration-300 absolute`}
            style={{ opacity: opacity }}
          >
            <img
              src="/lovable-uploads/cb686a4b-89e9-4566-82b5-58944e13878f.png"
              alt="Warrior Capital Black Logo"
              className="h-8"
            />
          </a>
        </div>

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