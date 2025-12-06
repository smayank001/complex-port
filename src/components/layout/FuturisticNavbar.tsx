import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Home, Code, Video, Cpu, User, Mail } from "lucide-react";
import MediaFullscreen from "@/components/media/MediaFullscreen";

const navItems = [
  { name: "Home", href: "#hero", icon: Home },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Services", href: "#services", icon: Cpu },
  { name: "Media", href: "#media", icon: Video },
  { name: "Tech", href: "#tech", icon: Cpu },
  { name: "About", href: "#about", icon: User },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function FuturisticNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMediaFullscreen, setIsMediaFullscreen] = useState(false);
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

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isScrolled) {
      controls.start({
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(12px)",
        height: "70px",
      });
    } else {
      controls.start({
        backgroundColor: "rgba(0, 0, 0, 0.3)",
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

  const handleMediaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMediaFullscreen(true);
    document.body.style.overflow = "hidden";
  };

  const closeMediaFullscreen = () => {
    setIsMediaFullscreen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <motion.nav
        ref={navbarRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(0, 230, 255, 0.2)",
          boxShadow: "0 0 20px rgba(0, 230, 255, 0.1)",
        }}
        onMouseMove={handleMouseMove}
      >
        {/* Mouse follower effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(0, 230, 255, 0.1), transparent 40%)`,
          }}
          animate={controls}
        />

        <div className="container px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="font-heading text-2xl font-bold z-10 relative"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
              MS
            </span>
            <motion.div
              className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background:
                  "linear-gradient(45deg, rgba(0, 230, 255, 0.3), rgba(143, 0, 255, 0.3))",
                filter: "blur(8px)",
                zIndex: -1,
              }}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.name.toLowerCase();

              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={item.name === "Media" ? handleMediaClick : undefined}
                  className={`relative px-4 py-2 rounded-lg flex items-center gap-2 text-sm font-medium transition-all duration-300 z-10 ${
                    isActive
                      ? "text-cyan-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                  whileHover={{
                    y: -2,
                    backgroundColor: "rgba(0, 230, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full"
                      layoutId="activeIndicator"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}

                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background:
                        "linear-gradient(45deg, rgba(0, 230, 255, 0.1), rgba(143, 0, 255, 0.1))",
                      filter: "blur(8px)",
                      zIndex: -1,
                    }}
                    whileHover={{ opacity: 1 }}
                  />
                </motion.a>
              );
            })}

            {/* Hire Me Button */}
            <motion.a
              href="#contact"
              className="ml-4 relative px-6 py-2 rounded-full font-heading font-semibold text-sm uppercase tracking-wider z-10 overflow-hidden"
              style={{
                background: "linear-gradient(45deg, #00E6FF, #8F00FF)",
                color: "white",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(0, 230, 255, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Hire Me</span>
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "linear-gradient(45deg, #8F00FF, #00E6FF)",
                }}
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 z-10 relative"
            whileTap={{ scale: 0.9 }}
            type="button"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{
            height: isMobileMenuOpen ? "calc(100vh - 80px)" : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden absolute top-full left-0 right-0 z-50"
          style={{
            background: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(0, 230, 255, 0.2)",
          }}
        >
          <div className="container px-4 py-6 flex flex-col gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.name.toLowerCase();

              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.name === "Media") {
                      e.preventDefault();
                      setIsMobileMenuOpen(false);
                      setIsMediaFullscreen(true);
                      document.body.style.overflow = "hidden";
                    } else {
                      setIsMobileMenuOpen(false);
                    }
                  }}
                  className={`relative px-4 py-4 rounded-lg flex items-center gap-3 text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-gray-300 hover:text-white hover:bg-white/5"
                  }`}
                  whileHover={{
                    x: 10,
                    backgroundColor: "rgba(0, 230, 255, 0.1)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>

                  {/* Active indicator */}
                  {isActive && (
                    <motion.div
                      className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 rounded-r-full"
                      layoutId="mobileActiveIndicator"
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

            {/* Mobile Hire Me Button */}
            <motion.a
              href="#contact"
              className="mt-4 relative px-6 py-4 rounded-full font-heading font-semibold text-base uppercase tracking-wider text-center overflow-hidden"
              style={{
                background: "linear-gradient(45deg, #00E6FF, #8F00FF)",
                color: "white",
              }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 0 30px rgba(0, 230, 255, 0.7)",
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span className="relative z-10">Hire Me</span>
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background: "linear-gradient(45deg, #8F00FF, #00E6FF)",
                }}
                whileHover={{ opacity: 1 }}
              />
            </motion.a>
          </div>
        </motion.div>
      </motion.nav>

      {/* Media Fullscreen Modal */}
      {isMediaFullscreen && <MediaFullscreen onClose={closeMediaFullscreen} />}
    </>
  );
}
