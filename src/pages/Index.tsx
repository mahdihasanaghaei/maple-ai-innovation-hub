import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MissionSection from "@/components/MissionSection";
import AboutSection from "@/components/AboutSection";
import GlobalPresenceSection from "./GlobalPresence";
import MapleAwardsSection from "@/components/MapleAward";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <MapleAwardsSection />
      <GlobalPresenceSection />
      <MissionSection />
      <AboutSection />
      <Footer />
    </div>
  );
};

export default Index;
