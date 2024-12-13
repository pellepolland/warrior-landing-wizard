import { useEffect, useState } from "react";
import { UserRound } from "lucide-react";

export const Header = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('section');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        setIsVisible(scrollPosition > heroHeight - 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-warrior-dark font-semibold text-xl">
          WARRIOR
        </a>

        {/* Investor Login */}
        <a
          href="/login"
          className="flex items-center gap-2 text-warrior-dark hover:text-warrior-purple transition-colors"
        >
          <UserRound size={20} />
          Investor Login
        </a>
      </div>
    </header>
  );
};