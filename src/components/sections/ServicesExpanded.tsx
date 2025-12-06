import { motion, useMotionValue, useTransform } from "framer-motion";
import {
  Globe,
  Smartphone,
  Bot,
  Database,
  Shield,
  Zap,
  Video,
  TrendingUp,
  Palette,
  Hexagon,
  Brush,
  Search,
} from "lucide-react";
import { useRef, useState } from "react";

const services = [
  {
    icon: Globe,
    title: "Full Website Development",
    description:
      "Custom, high-performance websites engineered for conversions. From sleek landing pages to complex e-commerce platforms, every pixel is optimized for your business growth.",
    color: "#00E6FF",
  },
  {
    icon: Smartphone,
    title: "Web & Mobile Applications",
    description:
      "Scalable, real-time applications with cutting-edge architecture. Cross-platform solutions that deliver seamless experiences across all devices and drive user engagement.",
    color: "#8F00FF",
  },
  {
    icon: Bot,
    title: "AI Chatbot & Automation",
    description:
      "Transform your workflow with intelligent automation. Custom AI chatbots that convert visitors, streamline operations, and deliver 24/7 customer engagement.",
    color: "#00FF88",
  },
  {
    icon: Database,
    title: "CRM & Admin Software",
    description:
      "Enterprise-grade CRM solutions with role-based access, advanced analytics, and automated reporting. Built to scale with your business and maximize team productivity.",
    color: "#FFD700",
  },
  {
    icon: Shield,
    title: "Security & Optimization",
    description:
      "Bulletproof security implementations with SSL, OAuth, and penetration testing. Performance optimization that ensures lightning-fast load times and top search rankings.",
    color: "#FF6B35",
  },
  {
    icon: Zap,
    title: "Deployment & DevOps",
    description:
      "Seamless cloud deployment with CI/CD pipelines, container orchestration, and infrastructure as code. Zero-downtime deployments that keep your business running.",
    color: "#FF4500",
  },
  {
    icon: Video,
    title: "Video Editing & Motion Graphics",
    description:
      "Cinematic video production that tells your brand story. From promotional reels to animated explainers, every frame is crafted to captivate and convert your audience.",
    color: "#E91E63",
  },
  {
    icon: TrendingUp,
    title: "SEO Optimization",
    description:
      "Data-driven SEO strategies that dominate search rankings. Technical optimization, content strategy, and analytics that deliver measurable growth and ROI.",
    color: "#4CAF50",
  },
  {
    icon: Palette,
    title: "Graphic & UI/UX Design",
    description:
      "Award-worthy visual designs that define your brand identity. From stunning UI interfaces to marketing collateral, every design element drives engagement.",
    color: "#FF9800",
  },
  {
    icon: Hexagon,
    title: "Logo Designing & Branding",
    description:
      "Iconic brand identities that leave lasting impressions. Strategic logo design and comprehensive brand guidelines that position you as an industry leader.",
    color: "#9C27B0",
  },
];

function ServiceCard3D({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const Icon = service.icon;
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [15, -15]);
  const rotateY = useTransform(x, [-100, 100], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="perspective-1000 cursor-pointer"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="preserve-3d relative"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div
          className="glass-card p-6 h-full transition-all duration-500 relative overflow-hidden group"
          style={{
            boxShadow: isHovered
              ? `0 0 40px ${service.color}40, inset 0 0 30px ${service.color}10`
              : `0 0 0 1px ${service.color}20`,
          }}
        >
          {/* Animated Background Gradient */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${service.color}15, transparent 70%)`,
            }}
          />

          {/* Neon sweep effect */}
          <motion.div
            className="absolute inset-0"
            initial={{ x: "-100%" }}
            animate={isHovered ? { x: "100%" } : { x: "-100%" }}
            transition={{ duration: 0.8 }}
            style={{
              background: `linear-gradient(90deg, transparent, ${service.color}30, transparent)`,
            }}
          />

          {/* Icon Container */}
          <motion.div
            className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 relative z-10"
            style={{
              backgroundColor: `${service.color}20`,
              boxShadow: isHovered
                ? `0 0 40px ${service.color}50`
                : `0 0 20px ${service.color}20`,
            }}
            animate={
              isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }
            }
            transition={{ type: "spring", stiffness: 400 }}
          >
            <Icon
              className="w-7 h-7 transition-all duration-500"
              style={{ color: service.color }}
            />
          </motion.div>

          {/* Title */}
          <h3
            className="font-heading text-lg font-bold mb-3 relative z-10 transition-colors duration-300"
            style={{
              color: isHovered ? service.color : "hsl(var(--foreground))",
            }}
          >
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-muted-foreground font-body text-sm leading-relaxed relative z-10">
            {service.description}
          </p>

          {/* Corner Accents */}
          <div
            className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(225deg, ${service.color}30, transparent)`,
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(45deg, ${service.color}30, transparent)`,
            }}
          />

          {/* Reflection Effect */}
          <div
            className="absolute -bottom-full left-0 right-0 h-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"
            style={{
              background: `linear-gradient(to bottom, ${service.color}20, transparent)`,
              transform: "scaleY(-1)",
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ServicesExpanded() {
  return (
    <section id="services" className="py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-secondary/5 via-transparent to-transparent" />

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "60px 60px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary font-body text-sm tracking-widest uppercase mb-6"
            whileHover={{ scale: 1.05 }}
          >
            Services
          </motion.span>

          {/* Neon sweep heading */}
          <div className="relative inline-block">
            <h2 className="section-title mb-4">What I Build</h2>
            <motion.div
              className="absolute inset-0"
              initial={{ x: "-100%" }}
              whileInView={{ x: "200%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{
                background:
                  "linear-gradient(90deg, transparent, hsl(var(--primary) / 0.5), transparent)",
                mixBlendMode: "overlay",
              }}
            />
          </div>

          <p className="text-muted-foreground font-body text-lg max-w-3xl mx-auto mt-4">
            End-to-end digital solutions engineered for growth. From concept to
            deployment, I deliver results that transform businesses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {services.slice(0, 5).map((service, index) => (
            <ServiceCard3D
              key={service.title}
              service={service}
              index={index}
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mt-5">
          {services.slice(5).map((service, index) => (
            <ServiceCard3D
              key={service.title}
              service={service}
              index={index + 5}
            />
          ))}
        </div>

        {/* Agency Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <p className="font-heading text-2xl md:text-3xl text-gradient neon-glow">
            "One Stop Digital Solution Provider"
          </p>
          <p
            className="text-muted-foreground font-body text-lg mt-4 tracking-wider"
            style={{
              fontFeatureSettings: "'salt', 'ss02', 'ss03'",
            }}
          >
            Web • Apps • AI • Video • SEO • Branding
          </p>
        </motion.div>
      </div>
    </section>
  );
}
