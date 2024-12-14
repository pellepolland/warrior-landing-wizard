import { useEffect, useRef } from 'react';

export const InvestmentBlock = () => {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-4">
        {/* Video content */}
        <div ref={videoRef} className="relative h-[400px] md:h-full animate-fade-up bg-white video-container">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://cdn.prod.website-files.com/670fe89eb5229a7ce7da32e2%2F6729eec10fde63d85c7f3a53_166%20Vignette-transcode.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-center animate-fade-up px-8 sm:px-12 lg:px-16 xl:px-20">
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-warrior-dark">
            INVESTMENT
          </h2>
          <div className="space-y-8 text-gray-600 text-sm md:text-base">
            <p>
              Our approach to investment is guided by the Warrior ethos - blending intuition, experience, and a deep respect for genius loci. With a firm commitment to ESG principles and sustainability, we aim to create lasting value while safeguarding both the environment and the places we create for future generations.
            </p>
            <p>
              We view every investor as a partner, offering not just access to exclusive opportunities but also the reassurance of a co-investment mandate alongside our family office. By treating investor capital with the same care as our own, we maximise efficiency, drive profit, and ensure every decision is made with intention. This collaborative approach allows us to deliver returns that resonate with our long-term vision, setting new benchmarks in both value and place-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};