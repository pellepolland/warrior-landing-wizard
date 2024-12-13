export const EthosBlock = () => {
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
            <source src="https://cdn.prod.website-files.com/670fe89eb5229a7ce7da32e2%2F672a3c0def7acc4cb72811a2_Ethos%20Vignette%20v20-transcode.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text content */}
        <div className="flex flex-col justify-center animate-fade-up">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-warrior-dark">
            ETHOS
          </h2>
          <div className="space-y-6 text-gray-600">
            <p>
              Guided by intuition, expertise, and relationships honed over three decades, we leverage our deep experience to deliver enduring returns for our investors across varying time horizons, from short-term gains to long-term, sustainable growth. Both in the making and cultivating of places.
            </p>
            <p>
              We identify and maximise opportunities across the investment spectrum and through our extensive network, provide an end-to-end service that enables our partners the benefit of being hands-off whilst giving them access to exclusive deals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};