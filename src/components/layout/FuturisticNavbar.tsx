import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Home, Code, Video, Cpu, User, Mail } from "lucide-react";
import { handleAnchorClick } from "@/lib/smoothScroll";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Services", href: "#services", icon: Cpu },
  { name: "Media", href: "/media-gallery", icon: Video },
  { name: "Tech", href: "#tech", icon: Cpu },
  { name: "About", href: "#about", icon: User },
  { name: "Contact", href: "#contact", icon: Mail },
];

interface FuturisticNavbarProps {
  onClose?: () => void;
}

export function FuturisticNavbar({ onClose }: FuturisticNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const controls = useAnimation();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = [
        "hero",
        "projects",
        "services",
        "media",
        "tech",
        "about",
        "contact",
      ];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isScrolled) {
      controls.start({
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        backdropFilter: "blur(12px)",
        height: "80px",
      });
    } else {
      controls.start({
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(8px)",
        height: "80px",
      });
    }
  }, [isScrolled, controls]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (navbarRef.current) {
      const rect = navbarRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const handleNavigationClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    handleAnchorClick(e, href);
    if (onClose) onClose();
  };

  return (
    <>
      <motion.nav
        ref={navbarRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-40 transition-all duration-300 h-screen overflow-y-auto"
        style={{
          background: "rgba(0, 0, 0, 0.95)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
        onMouseMove={handleMouseMove}
      >
        {/* Mouse follower effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(800px circle at ${mouseX}px ${mouseY}px, rgba(0, 230, 255, 0.15), transparent 40%)`,
          }}
        />

        <div className="container px-4 h-full flex flex-col py-12">
          {/* Logo and Close Button */}
          <div className="flex justify-between items-center mb-16">
            <motion.a
              href="#"
              className="z-10 relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                if (onClose) onClose();
                // Scroll to top smoothly
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              <img
                src="/webzo_logo_back-removebg-preview.png"
                alt="Webzo Logo"
                className="h-16 w-auto object-contain"
              />
            </motion.a>

            {onClose && (
              <motion.button
                onClick={onClose}
                className="p-3 rounded-full bg-black/50 backdrop-blur-md border border-red-500/30 hover:bg-red-500/10 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close navigation"
              >
                <X className="w-8 h-8 text-red-400" />
              </motion.button>
            )}
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center justify-center flex-grow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.name.toLowerCase();

                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      if (item.href.startsWith("/")) {
                        // For internal routes, let the browser handle navigation
                        if (onClose) onClose();
                      } else {
                        // For anchor links, use smooth scroll
                        handleNavigationClick(e, item.href);
                      }
                    }}
                    className={`relative p-6 rounded-2xl flex flex-col items-center gap-4 text-center font-medium transition-all duration-300 z-10 ${
                      isActive
                        ? "bg-cyan-500/10 border border-cyan-500/30"
                        : "bg-black/30 border border-white/10 hover:bg-white/5"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(0, 230, 255, 0.1)",
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="p-3 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <span className="font-heading text-xl text-white">
                      {item.name}
                    </span>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full"
                        layoutId="modalActiveIndicator"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Hire Me Button */}
          <motion.div
            className="flex justify-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <motion.a
              href="/audit"
              className="relative px-10 py-4 rounded-full font-heading font-bold text-lg uppercase tracking-wider z-10 overflow-hidden"
              style={{
                background: "linear-gradient(45deg, #00E6FF, #8F00FF)",
                color: "white",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(0, 230, 255, 0.7)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "/audit";
                if (onClose) onClose();
              }}
            >
              <span className="relative z-10">AUDIT</span>
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "linear-gradient(45deg, #8F00FF, #00E6FF)",
                }}
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}
