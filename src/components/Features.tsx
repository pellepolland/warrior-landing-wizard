import { Shield, Star, User } from "lucide-react";

const features = [
  {
    icon: <Star className="w-8 h-8 text-warrior-purple" />,
    title: "Excellence",
    description: "We strive for excellence in every project we undertake",
  },
  {
    icon: <Shield className="w-8 h-8 text-warrior-purple" />,
    title: "Security",
    description: "Your data and projects are protected with enterprise-grade security",
  },
  {
    icon: <User className="w-8 h-8 text-warrior-purple" />,
    title: "Support",
    description: "24/7 dedicated support team at your service",
  },
];

export const Features = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-warrior-dark">
          Why Choose Us
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-warrior-dark">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};