export const ApproachBlock = () => {
  return (
    <section className="min-h-screen flex items-center">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-4">
        {/* Text content */}
        <div className="flex flex-col justify-center animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-warrior-dark">
            APPROACH
          </h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Our process spans the entire investment cycle—from acquisition and feasibility to financing, planning, construction, and asset management. Every stage is interconnected; each decision shapes and defines the project's success.
            </p>
            <p>
              We implement tailored financing structures to optimise the capital stack and leverage our deep understanding of national frameworks, local policies, and stakeholder relationships to navigate complex regulatory environments and secure elusive planning approvals. Flexibility drives our strategy, whether through light-touch asset management or hands-on development. By combining market insight with a design-led vision, we curate tenant mixes and enhance inherent charm, positioning each property for enduring value.
            </p>
            <p>
              These capabilities are seamlessly woven into our approach, driving sustainable growth, record-breaking prices, and exceptional returns.
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
            <source src="/approach-video.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};