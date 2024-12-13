import { Button } from "./ui/button";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-warrior-dark text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to Get Started?</h2>
        <p className="text-lg mb-8 text-warrior-gray">
          Let's discuss how we can help your business grow
        </p>
        <Button 
          className="bg-warrior-purple hover:bg-warrior-secondary text-white px-8 py-6 rounded-lg text-lg"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};