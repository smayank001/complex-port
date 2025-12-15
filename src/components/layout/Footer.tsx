import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="pt-16 pb-24 border-t border-border relative">
      {/* Animated Background */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="container px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo & Brand */}
          <div className="text-center lg:text-left max-w-md">
            <motion.a
              href="#"
              className="font-heading text-3xl font-bold text-gradient neon-glow inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              Webzo
            </motion.a>
            <motion.p
              className="text-muted-foreground font-body text-sm mt-3 font-times"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Crafting digital experiences that push boundaries and redefine
              possibilities.
            </motion.p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {["Home", "Work", "Services", "About", "Contact"].map(
              (item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="font-body text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium font-times relative group"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </motion.a>
              )
            )}
          </div>
        </div>

        {/* Separator with Animation */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-muted-foreground font-body text-sm font-times">
              © {new Date().getFullYear()} Webzo. All rights reserved.
            </p>
            <p className="text-muted-foreground/70 font-body text-xs mt-1 font-times">
              Crafted with passion and precision
            </p>
          </motion.div>

          {/* Social Links with Glow Effect */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{
                    scale: 1.15,
                    y: -3,
                    backgroundColor: "hsl(var(--primary) / 0.2)",
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                    style={{
                      background:
                        "radial-gradient(circle, hsl(var(--primary) / 0.4), transparent 70%)",
                      zIndex: -1,
                    }}
                  />
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 p-3 rounded-full glass-card hover:bg-primary/20 transition-all duration-300 group z-50 ${
          isVisible ? "block" : "hidden"
        }`}
        whileHover={{
          scale: 1.1,
          y: -5,
        }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp className="w-5 h-5 text-primary group-hover:text-foreground transition-colors duration-300" />
        {/* Glow effect */}
        <div
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
          style={{
            background:
              "radial-gradient(circle, hsl(var(--primary) / 0.4), transparent 70%)",
            zIndex: -1,
          }}
        />
      </motion.button>
    </footer>
  );
}
