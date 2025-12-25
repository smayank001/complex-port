import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Scene3D } from "../3d/Scene3D";
import { ChevronDown, Mic, Play, Sparkles } from "lucide-react";

function VoiceAssistantIcon() {
  const [isListening, setIsListening] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  const toggleListening = () => {
    setIsListening(!isListening);
    setIsPulsing(true);
    setTimeout(() => setIsPulsing(false), 1000);
  };

  return (
    <motion.button
      onClick={toggleListening}
      className="fixed bottom-8 right-8 w-14 h-14 rounded-full glass-card flex items-center justify-center group z-30"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={
        isPulsing
          ? {
              boxShadow: [
                "0 0 0 0 hsl(var(--primary) / 0.5)",
                "0 0 0 10px hsl(var(--primary) / 0.3)",
                "0 0 0 0 hsl(var(--primary) / 0)",
              ],
            }
          : {}
      }
      transition={{ duration: 0.5, repeat: isPulsing ? Infinity : 0 }}
    >
      <Mic className="w-6 h-6 text-primary group-hover:text-foreground transition-colors" />
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-primary"
        animate={isPulsing ? { scale: [1, 1.5, 1], opacity: [1, 0, 1] } : {}}
        transition={{ duration: 1, repeat: isPulsing ? Infinity : 0 }}
      />
    </motion.button>
  );
}

function HologramName() {
  return (
    <motion.div
      className="relative inline-block"
      animate={{
        rotateY: [0, 5, -5, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <span className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
        WEBZO
      </span>
      {/* <img
        src="/webzo_logo_back-removebg-preview.png"
        alt="Logo"
        className="inline-block h-8 md:h-32 w-auto"
      /> */}

      {/* Hologram scan lines */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary) / 0.1) 2px, hsl(var(--primary) / 0.1) 4px)",
        }}
        animate={{ y: ["-100%", "100%"] }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 blur-xl -z-10"
        style={{ background: "hsl(var(--primary) / 0.3)" }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
}

function LightRays() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[200%] w-1"
          style={{
            left: `${10 + i * 12}%`,
            top: "-50%",
            background: `linear-gradient(to bottom, transparent, hsl(var(--primary) / 0.1), transparent)`,
            transform: `rotate(${15 - i * 4}deg)`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            y: ["-10%", "10%"],
          }}
          transition={{
            duration: 4 + i * 0.5,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
}

function ParticleBlastButton({
  children,
  href,
  variant = "primary",
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
}) {
  const [isBlasting, setIsBlasting] = useState(false);
  const buttonRef = useRef<HTMLAnchorElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    setIsBlasting(true);
    setTimeout(() => setIsBlasting(false), 600);
  };

  const isPrimary = variant === "primary";

  return (
    <motion.a
      ref={buttonRef}
      href={href}
      onClick={handleClick}
      className={`relative overflow-hidden rounded-xl px-8 py-4 font-heading font-semibold uppercase tracking-wider transition-all duration-300 ${
        isPrimary
          ? "bg-primary text-primary-foreground border-2 border-primary hover:shadow-[0_0_40px_hsl(var(--primary)/0.6)]"
          : "bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground hover:shadow-[0_0_40px_hsl(var(--secondary)/0.6)]"
      }`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.98 }}
      style={{
        boxShadow: isPrimary
          ? "0 10px 30px -10px hsl(var(--primary) / 0.5), inset 0 -4px 10px hsl(var(--primary) / 0.2)"
          : "0 10px 30px -10px hsl(var(--secondary) / 0.3)",
      }}
    >
      {children}

      {/* Particle burst effect */}
      {isBlasting && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: "50%",
                top: "50%",
                background: isPrimary
                  ? "hsl(var(--primary))"
                  : "hsl(var(--secondary))",
              }}
              initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
              animate={{
                x: Math.cos((i * 30 * Math.PI) / 180) * 100,
                y: Math.sin((i * 30 * Math.PI) / 180) * 100,
                scale: 0,
                opacity: 0,
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ))}
        </div>
      )}

      {/* Depth shadow */}
      <div
        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-4 blur-xl -z-10"
        style={{
          background: isPrimary
            ? "hsl(var(--primary) / 0.5)"
            : "hsl(var(--secondary) / 0.5)",
        }}
      />
    </motion.a>
  );
}

function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.5, duration: 0.8 }}
      onAnimationComplete={onComplete}
    >
      <motion.div
        className="text-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="relative"
          animate={{ rotateY: 360 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <Sparkles className="w-20 h-20 text-primary mx-auto mb-6" />
        </motion.div>
        <motion.p
          className="font-heading text-xl text-primary"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, times: [0, 0.5, 1] }}
        >
          Tap to Activate
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

export function HeroEnhanced() {
  const [showIntro, setShowIntro] = useState(true);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const parallaxX = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const parallaxY = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Scene3D />
        <LightRays />

        {/* Voice Assistant - Moved further down and right to avoid navbar overlap */}
        <div className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass-card flex items-center justify-center group z-30">
          <VoiceAssistantIcon />
        </div>

        {/* Cyber Grid Overlay */}
        <div className="absolute inset-0 cyber-grid opacity-30" />

        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />

        <motion.div
          className="container relative z-10 px-4 text-center"
          style={{ x: parallaxX, y: parallaxY }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-body text-sm tracking-widest uppercase">
              Full-Stack Engineer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
          >
            <span className="text-foreground">We Build </span>
            <span className="text-gradient neon-glow">Modern</span>
            <br />
            <span className="text-gradient-cyan">Digital Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-body text-xl md:text-2xl text-muted-foreground mb-4 tracking-wide font-times"
            style={{
              fontFeatureSettings: "'salt', 'ss02', 'ss03'",
            }}
          >
            Web • Apps • AI • Video • SEO • Branding
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-12"
          >
            <HologramName />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <ParticleBlastButton href="#projects" variant="primary">
              View Our Work
            </ParticleBlastButton>
            <ParticleBlastButton href="/audit" variant="secondary">
              AUDIT
            </ParticleBlastButton>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-16 text-muted-foreground font-body text-sm tracking-wider font-times"
          >
            "One Stop Digital Solution Provider"
          </motion.p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs font-body tracking-widest uppercase">
              Scroll
            </span>
            <ChevronDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
