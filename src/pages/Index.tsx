import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Features />
      <About />
      <Contact />
    </main>
  );
};

export default Index;