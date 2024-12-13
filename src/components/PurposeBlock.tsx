export const PurposeBlock = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 z-0 opacity-30">
        <img 
          src="/overlay.png" 
          alt="Overlay pattern" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-xl md:text-2xl text-warrior-dark leading-relaxed animate-fade-up">
          Navigating complexity with purpose; crafting spaces that create value and inspire growth.
        </p>
      </div>
    </section>
  );
};