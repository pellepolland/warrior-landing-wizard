import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { AboutBlock } from "@/components/AboutBlock";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Mission />
      <AboutBlock />
    </main>
  );
};

export default Index;