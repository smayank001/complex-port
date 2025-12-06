import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  RotateCcw,
  X,
} from "lucide-react";

// Video showcase data
const videos = [
  {
    id: 1,
    title: "Product Launch Reel",
    description: "Cinematic product reveal with motion graphics",
    thumbnail:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800",
    duration: "2:30",
    category: "Motion Graphics",
  },
  {
    id: 2,
    title: "Brand Story",
    description: "Corporate storytelling with emotional impact",
    thumbnail:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800",
    duration: "3:45",
    category: "Brand Video",
  },
  {
    id: 3,
    title: "App Demo",
    description: "UI/UX showcase with screen recordings",
    thumbnail:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
    duration: "1:20",
    category: "Demo Video",
  },
  {
    id: 4,
    title: "Social Media Ads",
    description: "High-converting video advertisements",
    thumbnail:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800",
    duration: "0:30",
    category: "Advertising",
  },
];

// Graphic designs data
const designs = [
  {
    id: 1,
    title: "Festival Poster",
    category: "Print Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800",
  },
  {
    id: 2,
    title: "App Dashboard",
    category: "UI Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
  },
  {
    id: 3,
    title: "Brand Guidelines",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800",
  },
  {
    id: 4,
    title: "Marketing Banner",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
  },
  {
    id: 5,
    title: "E-commerce UI",
    category: "UI Design",
    image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800",
  },
  {
    id: 6,
    title: "Social Media Kit",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800",
  },
];

// Logo designs data
const logos = [
  { id: 1, name: "TechFlow", colors: ["#00E6FF", "#8F00FF"] },
  { id: 2, name: "EcoLeaf", colors: ["#00FF88", "#00E6FF"] },
  { id: 3, name: "Quantum", colors: ["#FFD700", "#FF6B35"] },
  { id: 4, name: "Nebula", colors: ["#8F00FF", "#E91E63"] },
  { id: 5, name: "Forge", colors: ["#FF4500", "#FFD700"] },
  { id: 6, name: "Prism", colors: ["#00E6FF", "#00FF88"] },
];

function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const nextVideo = () => setCurrentIndex((prev) => (prev + 1) % videos.length);
  const prevVideo = () =>
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);

  return (
    <div className="relative">
      <h3 className="font-heading text-3xl font-bold text-center mb-8">
        <span className="text-gradient">Video</span> Showcase
      </h3>

      <div className="relative max-w-4xl mx-auto perspective-1000">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, rotateY: -30, z: -100 }}
            animate={{ opacity: 1, rotateY: 0, z: 0 }}
            exit={{ opacity: 0, rotateY: 30, z: -100 }}
            transition={{ duration: 0.5 }}
            className="relative preserve-3d"
          >
            <div className="relative aspect-video rounded-2xl overflow-hidden glass-card group">
              <img
                src={videos[currentIndex].thumbnail}
                alt={videos[currentIndex].title}
                className="w-full h-full object-cover"
              />

              {/* Play overlay */}
              <div className="absolute inset-0 bg-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.button
                  className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-primary-foreground" />
                  ) : (
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  )}
                </motion.button>
              </div>

              {/* Neon edge glow */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  boxShadow: "inset 0 0 30px hsl(var(--primary) / 0.5)",
                }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              {/* Duration badge */}
              <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-background/80 text-foreground text-sm font-body">
                {videos[currentIndex].duration}
              </div>
            </div>

            {/* Video info */}
            <div className="mt-6 text-center">
              <span className="text-primary text-sm font-body uppercase tracking-wider">
                {videos[currentIndex].category}
              </span>
              <h4 className="font-heading text-2xl font-bold mt-2">
                {videos[currentIndex].title}
              </h4>
              <p className="text-muted-foreground font-body mt-2">
                {videos[currentIndex].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            onClick={prevVideo}
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <div className="flex items-center gap-2">
            {videos.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={nextVideo}
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      <div className="absolute -left-20 top-1/2 -translate-y-1/2 hidden xl:block">
        <motion.div
          className="w-32 h-20 rounded-lg overflow-hidden glass-card opacity-50"
          animate={{ y: [0, -10, 0], rotateY: [0, 10, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <img
            src={
              videos[(currentIndex - 1 + videos.length) % videos.length]
                .thumbnail
            }
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      <div className="absolute -right-20 top-1/2 -translate-y-1/2 hidden xl:block">
        <motion.div
          className="w-32 h-20 rounded-lg overflow-hidden glass-card opacity-50"
          animate={{ y: [0, 10, 0], rotateY: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
        >
          <img
            src={videos[(currentIndex + 1) % videos.length].thumbnail}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}

function DesignGallery() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div>
      <h3 className="font-heading text-3xl font-bold text-center mb-8">
        <span className="text-gradient-cyan">Graphic</span> Design
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {designs.map((design, index) => (
          <motion.div
            key={design.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            onMouseEnter={() => setHoveredId(design.id)}
            onMouseLeave={() => setHoveredId(null)}
            className="relative group perspective-1000 cursor-pointer"
          >
            <motion.div
              className="preserve-3d transition-transform duration-500"
              animate={
                hoveredId === design.id
                  ? { rotateX: 5, rotateY: -5 }
                  : { rotateX: 0, rotateY: 0 }
              }
            >
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden glass-card">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Holographic overlay */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(135deg, transparent, hsl(var(--primary) / 0.2), transparent)",
                  }}
                  animate={
                    hoveredId === design.id ? { x: ["100%", "-100%"] } : {}
                  }
                  transition={{ duration: 0.8 }}
                />

                {/* Info overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="text-primary text-xs uppercase tracking-wider">
                      {design.category}
                    </span>
                    <h4 className="font-heading text-lg font-bold text-foreground">
                      {design.title}
                    </h4>
                  </div>
                </div>

                {/* Expand button */}
                <motion.button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <Maximize2 className="w-4 h-4 text-foreground" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function LogoGallery() {
  const [rotations, setRotations] = useState<{ [key: number]: number }>({});

  const handleRotate = (id: number) => {
    setRotations((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 90,
    }));
  };

  return (
    <div>
      <h3 className="font-heading text-3xl font-bold text-center mb-8">
        <span className="neon-glow-purple">Logo</span> Design
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {logos.map((logo, index) => (
          <motion.div
            key={logo.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative group"
          >
            <motion.div
              className="aspect-square rounded-xl glass-card p-4 flex flex-col items-center justify-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              animate={{ rotateY: rotations[logo.id] || 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{
                boxShadow: `0 0 30px ${logo.colors[0]}30`,
              }}
            >
              {/* 3D Hologram Logo */}
              <motion.div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-3 relative"
                style={{
                  background: `linear-gradient(135deg, ${logo.colors[0]}, ${logo.colors[1]})`,
                }}
                animate={{ rotateY: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <span className="font-heading text-2xl font-bold text-white">
                  {logo.name[0]}
                </span>

                {/* Hologram effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background:
                      "linear-gradient(45deg, transparent 40%, rgba(255,255,255,0.3) 50%, transparent 60%)",
                  }}
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              </motion.div>

              <span className="font-body text-sm text-muted-foreground">
                {logo.name}
              </span>

              {/* Glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  boxShadow: `0 0 40px ${logo.colors[0]}50, inset 0 0 20px ${logo.colors[0]}20`,
                }}
              />
            </motion.div>

            {/* Rotation control */}
            <motion.button
              onClick={() => handleRotate(logo.id)}
              className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full bg-background border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <RotateCcw className="w-4 h-4 text-primary" />
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

interface MediaFullscreenProps {
  onClose: () => void;
}

const MediaFullscreen = ({ onClose }: MediaFullscreenProps) => {
  return (
    <div className="fixed inset-0 z-[100] bg-background overflow-y-auto">
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold hover:bg-primary/80 transition-colors shadow-lg"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="container px-4 py-20">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />

          <div className="container px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-body text-sm tracking-widest uppercase mb-6">
                Portfolio
              </span>
              <h1 className="section-title mb-4">Media Gallery</h1>
              <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
                A showcase of creative work spanning video production, graphic
                design, and brand identity
              </p>
            </motion.div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 relative">
          <div className="container px-4">
            <VideoCarousel />
          </div>
        </section>

        {/* Design Section */}
        <section className="py-20 relative">
          <div className="container px-4">
            <DesignGallery />
          </div>
        </section>

        {/* Logo Section */}
        <section className="py-20 relative">
          <div className="container px-4">
            <LogoGallery />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="container px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-12 text-center max-w-3xl mx-auto"
            >
              <h2 className="font-heading text-3xl font-bold mb-4">
                Ready to Transform Your{" "}
                <span className="text-gradient">Digital Presence</span>?
              </h2>
              <p className="text-muted-foreground font-body mb-8">
                Let's collaborate on your next groundbreaking project and
                transform your vision into reality
              </p>
              <motion.button
                onClick={onClose}
                className="btn-neon-fill rounded-xl inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Close Gallery
              </motion.button>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MediaFullscreen;
