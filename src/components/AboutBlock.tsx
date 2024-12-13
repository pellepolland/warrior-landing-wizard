export const AboutBlock = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-4">
        {/* Text content */}
        <div className="flex flex-col justify-center animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-warrior-dark">
            ABOUT US
          </h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Warrior is a boutique, Notting Hill-based property investment and development business, 
              born from the legacy of a London real estate-centric family office. Acting as a trusted 
              local partner, we specialise in unlocking the potential of mixed-use, commercial, and 
              residential property through active asset management, a unique co-investment mandate 
              alongside the family office, and tailored, end-to-end advisory services.
            </p>
            <p>
              Since 2014, Warrior has managed multi-billion-pound schemes, spanning in excess of 1 
              million sq ft of mixed-use space. Our creative, hands-on approach transforms underutilised 
              properties in some of London's most iconic and sought-after locations into thriving spaces 
              with charm and personality – that truly serve the local area.
            </p>
            <p>
              At Warrior, we see our investments as more than just buildings. Like a personal spiritual 
              journey, they evolve in the hands of wisdom and purpose, embodied by genius loci - the 
              unique spirit of place.
            </p>
          </div>
        </div>
        
        {/* Video content */}
        <div className="relative h-[400px] md:h-full animate-fade-up">
          <video
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/about-video.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};