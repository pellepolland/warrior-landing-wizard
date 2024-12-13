export const InvestmentBlock = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-4">
        {/* Video content */}
        <div className="relative h-[400px] md:h-full animate-fade-up">
          <video
            className="w-full h-full object-cover rounded-lg"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/videos/investment-video.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-center animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-warrior-dark">
            INVESTMENT
          </h2>
          <div className="space-y-6 text-gray-600">
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