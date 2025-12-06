import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="absolute inset-0 cyber-grid opacity-5" />
      
      <div className="container px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <a href="#" className="font-heading text-2xl font-bold text-gradient">
              Mayank Saxena
            </a>
            <p className="text-muted-foreground font-body text-sm mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-body text-muted-foreground text-center"
          >
            Full-Stack Solutions. Zero Limits.
          </motion.p>
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 rounded-lg glass-card hover:bg-primary/10 hover:neon-border transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
