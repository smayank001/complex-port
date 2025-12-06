import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroEnhanced } from "@/components/sections/HeroEnhanced";
import { Projects } from "@/components/sections/Projects";
import { ServicesExpanded } from "@/components/sections/ServicesExpanded";
import { TechStack } from "@/components/sections/TechStack";
import { About } from "@/components/sections/About";
import { ClientStories } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { ParticleNetwork } from "@/components/effects/ParticleNetwork";
import { CyberLaserLines } from "@/components/effects/CyberLaserLines";
import { CursorRipple } from "@/components/effects/CursorRipple";

const Index = () => {
  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <CursorRipple />
      <ParticleNetwork />
      <CyberLaserLines />
      <div className="relative overflow-hidden">
        <Navbar />
        <main>
          <HeroEnhanced />
          <Projects />
          <ServicesExpanded />
          <TechStack />
          <About />
          <ClientStories />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
