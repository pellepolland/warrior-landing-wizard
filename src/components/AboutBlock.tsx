export const AboutBlock = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="w-full grid md:grid-cols-2 gap-12">
        {/* Text content */}
        <div className="flex flex-col justify-center animate-fade-up px-4 sm:px-6 lg:px-8 xl:px-12">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-warrior-dark">
            ABOUT US
          </h2>
          <div className="space-y-6 text-gray-600 text-sm md:text-base">
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
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://cdn.prod.website-files.com/670fe89eb5229a7ce7da32e2%2F6717d0991841085902747eec_Vignette%20Stucco-transcode.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};