import NoiseOverlay from "@/components/NoiseOverlay";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProgramsSection from "@/components/ProgramsSection";
import ShowcaseGrid from "@/components/ShowcaseGrid";
import SimulationSection from "@/components/SimulationSection";
import StickyNoteCTA from "@/components/StickyNoteCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NoiseOverlay />
      <Navbar />
      <HeroSection />
      <TrustBar />
      <ProgramsSection />
      <ShowcaseGrid />
      <SimulationSection />
      <StickyNoteCTA />
      <Footer />
    </div>
  );
};

export default Index;
