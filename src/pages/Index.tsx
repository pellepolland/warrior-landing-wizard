import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { AboutBlock } from "@/components/AboutBlock";
import { ExpertiseBlock } from "@/components/ExpertiseBlock";
import { EthosBlock } from "@/components/EthosBlock";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Mission />
      <AboutBlock />
      <ExpertiseBlock />
      <EthosBlock />
    </main>
  );
};

export default Index;