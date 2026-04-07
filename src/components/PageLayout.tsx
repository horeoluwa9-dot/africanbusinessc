import NoiseOverlay from "@/components/NoiseOverlay";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => (
  <div className="min-h-screen bg-background">
    <NoiseOverlay />
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default PageLayout;
