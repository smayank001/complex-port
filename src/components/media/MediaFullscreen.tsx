import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
  { id: 2, name: "AeroSync", colors: ["#FF6B9D", "#FFD700"] },
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
              {/* Lazy loaded image with loading attribute */}
              <img
                src={videos[currentIndex].thumbnail}
                alt={videos[currentIndex].title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />

              {/* Play overlay */}
              <div className="absolute inset-0 bg-background/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.button
                  className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsPlaying(!isPlaying)}
                  aria-label={isPlaying ? "Pause video" : "Play video"}
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
              <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-sm font-body">
                {videos[currentIndex].duration}
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-6 text-center">
              <h4 className="font-heading text-2xl font-bold mb-2">
                {videos[currentIndex].title}
              </h4>
              <p className="text-muted-foreground font-body mb-2">
                {videos[currentIndex].description}
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-body">
                {videos[currentIndex].category}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <motion.button
            onClick={prevVideo}
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous video"
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
                aria-label={`Go to video ${i + 1}`}
              />
            ))}
          </div>

          <motion.button
            onClick={nextVideo}
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next video"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>
      </div>

      {/* Preview thumbnails */}
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
            loading="lazy"
            decoding="async"
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
            loading="lazy"
            decoding="async"
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
                {/* Lazy loaded image */}
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />

                {/* Holographic overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBmaWxsPSIjMDBFNkZGIi8+PGNpcmNsZSBjeD0iNDAiIGN5PSI0MCIgcj0iMSIgZmlsbD0iIzhGMDAwRiIvPjwvc3ZnPg==')] opacity-20" />
                </div>

                {/* Info overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h4 className="font-heading text-lg font-bold text-foreground">
                    {design.title}
                  </h4>
                  <span className="text-primary text-sm font-body">
                    {design.category}
                  </span>
                </div>

                {/* Expand button */}
                <motion.button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                  aria-label={`View ${design.title}`}
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
        {logos.map((logo) => (
          <motion.div
            key={logo.id}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="aspect-square rounded-2xl glass-card flex flex-col items-center justify-center p-6 cursor-pointer group"
            onClick={() => handleRotate(logo.id)}
          >
            <motion.div
              className="w-24 h-24 rounded-full flex items-center justify-center mb-4"
              style={{
                background: `linear-gradient(135deg, ${logo.colors[0]}, ${logo.colors[1]})`,
              }}
              animate={{ rotate: rotations[logo.id] || 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="font-heading text-2xl font-bold text-white">
                {logo.name.charAt(0)}
              </span>
            </motion.div>
            <h4 className="font-heading text-lg font-bold text-foreground group-hover:text-primary transition-colors">
              {logo.name}
            </h4>
            <div className="flex gap-2 mt-2">
              {logo.colors.map((color, i) => (
                <div
                  key={i}
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

interface MediaFullscreenProps {
  onClose: () => void;
}

export default function MediaFullscreen({ onClose }: MediaFullscreenProps) {
  const [activeTab, setActiveTab] = useState<"video" | "design" | "logo">(
    "video"
  );

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl"
    >
      <div className="container px-4 py-8 h-full flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="font-heading text-3xl font-bold">
            <span className="text-gradient">Media</span> Gallery
          </h2>

          <motion.button
            onClick={onClose}
            className="p-3 rounded-full glass-card hover:bg-red-500/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close media gallery"
          >
            <X className="w-6 h-6 text-foreground" />
          </motion.button>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8 border-b border-border">
          <button
            onClick={() => setActiveTab("video")}
            className={`pb-3 px-1 font-body text-sm font-medium transition-colors ${
              activeTab === "video"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Videos
          </button>
          <button
            onClick={() => setActiveTab("design")}
            className={`pb-3 px-1 font-body text-sm font-medium transition-colors ${
              activeTab === "design"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Designs
          </button>
          <button
            onClick={() => setActiveTab("logo")}
            className={`pb-3 px-1 font-body text-sm font-medium transition-colors ${
              activeTab === "logo"
                ? "text-primary border-b-2 border-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            Logos
          </button>
        </div>

        {/* Content */}
        <div className="flex-grow overflow-y-auto">
          {activeTab === "video" && <VideoCarousel />}
          {activeTab === "design" && <DesignGallery />}
          {activeTab === "logo" && <LogoGallery />}
        </div>
      </div>
    </motion.div>
  );
}
