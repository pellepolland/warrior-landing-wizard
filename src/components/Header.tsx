import { useEffect, useState } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.querySelector('.about-section');
      if (aboutSection) {
        const aboutRect = aboutSection.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const aboutStart = scrollPosition + aboutRect.top;
        setIsScrolled(scrollPosition > aboutStart - 100);
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

        {/* Investor Login - updated styling with border bottom */}
        <a
          href="/login"
          className={`transition-colors font-['EB_Garamond'] text-[12px] tracking-wide uppercase border-b ${
            isScrolled 
              ? 'text-warrior-dark hover:text-warrior-purple border-warrior-dark' 
              : 'text-white hover:text-warrior-gray border-white'
          }`}
        >
          Investor Login
        </a>
      </div>
    </header>
  );
};