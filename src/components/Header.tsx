import { useEffect, useState } from "react";

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
        {/* Logo - decreased size from h-6 to h-4 */}
        <a 
          href="/" 
          className={`transition-opacity duration-300 ${
            isScrolled ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img 
            src="/lovable-uploads/c865e138-a44c-4a9e-8650-447e5445df7f.png"
            alt="Warrior Capital"
            className="h-4 w-auto"
          />
        </a>

        {/* Investor Login - updated to Garamond 10px */}
        <a
          href="/login"
          className={`transition-colors font-['EB_Garamond'] text-[10px] uppercase underline ${
            isScrolled 
              ? 'text-warrior-dark hover:text-warrior-purple' 
              : 'text-white hover:text-warrior-gray'
          }`}
        >
          Investor Login
        </a>
      </div>
    </header>
  );
};