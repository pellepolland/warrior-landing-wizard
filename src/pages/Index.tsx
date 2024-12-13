import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { AboutBlock } from "@/components/AboutBlock";
import { ExpertiseBlock } from "@/components/ExpertiseBlock";
import { EthosBlock } from "@/components/EthosBlock";
import { PurposeBlock } from "@/components/PurposeBlock";
import { ApproachBlock } from "@/components/ApproachBlock";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Mission />
      <AboutBlock />
      <ExpertiseBlock />
      <EthosBlock />
      <PurposeBlock />
      <ApproachBlock />
    </main>
  );
};

export default Index;