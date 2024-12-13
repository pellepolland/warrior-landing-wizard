export const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#f7f4f0] to-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-warrior-dark">Our Mission</h2>
        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          We are dedicated to empowering businesses through innovative digital solutions. 
          Our team of experts works tirelessly to deliver exceptional results that drive 
          growth and success for our clients.
        </p>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {["Projects", "Clients", "Years"].map((item, index) => (
            <div key={item} className="p-4">
              <div className="text-4xl font-bold text-warrior-purple mb-2">
                {index === 0 ? "500+" : index === 1 ? "200+" : "10+"}
              </div>
              <div className="text-gray-600">{item}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};