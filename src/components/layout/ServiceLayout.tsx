import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { ParticleNetwork } from "@/components/effects/ParticleNetwork";
import { CyberLaserLines } from "@/components/effects/CyberLaserLines";
import { CursorRipple } from "@/components/effects/CursorRipple";
import { useEffect } from "react";

export function ServiceLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <LoadingScreen />
      <CustomCursor />
      <CursorRipple />
      <ParticleNetwork />
      <CyberLaserLines />
      <div className="relative overflow-hidden min-h-screen">
        <Navbar />
        <main className="pt-24 min-h-[calc(100vh-theme(spacing.24))]">
            {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
