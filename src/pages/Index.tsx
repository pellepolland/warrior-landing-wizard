import { Hero } from "@/components/Hero";
import { Mission } from "@/components/Mission";
import { AboutBlock } from "@/components/AboutBlock";
import { ExpertiseBlock } from "@/components/ExpertiseBlock";
import { EthosBlock } from "@/components/EthosBlock";
import { PurposeBlock } from "@/components/PurposeBlock";
import { ApproachBlock } from "@/components/ApproachBlock";
import { ValueBlock } from "@/components/ValueBlock";
import { InvestmentBlock } from "@/components/InvestmentBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Mission />
      <AboutBlock />
      <ExpertiseBlock />
      <EthosBlock />
      <PurposeBlock />
      <ApproachBlock />
      <ValueBlock />
      <InvestmentBlock />
      <Footer />
    </main>
  );
};

export default Index;