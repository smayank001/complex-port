import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ServiceLayout } from "@/components/layout/ServiceLayout";
import {
  Play,
  Image,
  Layers,
  Globe,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

// Media data structure
interface MediaItem {
  id: number;
  title: string;
  description?: string;
  category: string;
  type: "image" | "video" | "logo" | "poster" | "live";
  thumbnail: string;
  fullSize?: string;
  liveUrl?: string;
  tags?: string[];
}

// Sample media data
const mediaData: MediaItem[] = [
  // Images
  {
    id: 1,
    title: "Corporate Branding",
    description: "Modern corporate identity design",
    category: "Images",
    type: "image",
    thumbnail:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400",
    fullSize:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200",
    tags: ["branding", "corporate"],
  },
  {
    id: 2,
    title: "Product Photography",
    description: "High-quality product shots for e-commerce",
    category: "Images",
    type: "image",
    thumbnail:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    fullSize:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200",
    tags: ["product", "photography"],
  },
  {
    id: 3,
    title: "Lifestyle Campaign",
    description: "Authentic lifestyle imagery for marketing",
    category: "Images",
    type: "image",
    thumbnail:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400",
    fullSize:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200",
    tags: ["lifestyle", "campaign"],
  },

  // Videos
  {
    id: 4,
    title: "Product Launch Reel",
    description: "Cinematic product reveal with motion graphics",
    category: "Videos",
    type: "video",
    thumbnail:
      "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400",
    fullSize:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    tags: ["product", "motion"],
  },
  {
    id: 5,
    title: "Brand Story",
    description: "Corporate storytelling with emotional impact",
    category: "Videos",
    type: "video",
    thumbnail:
      "https://images.unsplash.com/photo-1574717024456-4444c0ad7830?w=400",
    fullSize:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    tags: ["branding", "storytelling"],
  },
  {
    id: 6,
    title: "Social Media Ads",
    description: "High-converting video advertisements",
    category: "Videos",
    type: "video",
    thumbnail:
      "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400",
    fullSize:
      "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",
    tags: ["social", "ads"],
  },

  // Logos
  {
    id: 7,
    title: "TechFlow Logo",
    description: "Modern tech company logo",
    category: "Logos",
    type: "logo",
    thumbnail: "",
    tags: ["tech", "minimal"],
  },
  {
    id: 8,
    title: "EcoLeaf Brand",
    description: "Sustainable brand identity",
    category: "Logos",
    type: "logo",
    thumbnail: "",
    tags: ["eco", "nature"],
  },
  {
    id: 9,
    title: "Quantum Dynamics",
    description: "Futuristic tech brand",
    category: "Logos",
    type: "logo",
    thumbnail: "",
    tags: ["futuristic", "tech"],
  },

  // Posters
  {
    id: 10,
    title: "Music Festival Poster",
    description: "Vibrant event promotion design",
    category: "Posters",
    type: "poster",
    thumbnail:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400",
    fullSize:
      "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=1200",
    tags: ["event", "music"],
  },
  {
    id: 11,
    title: "Movie Premiere",
    description: "Cinematic promotional artwork",
    category: "Posters",
    type: "poster",
    thumbnail:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400",
    fullSize:
      "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200",
    tags: ["cinema", "promotion"],
  },

  // Live Projects
  {
    id: 12,
    title: "E-commerce Platform",
    description: "Fully responsive online store",
    category: "Live Projects",
    type: "live",
    thumbnail:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=400",
    liveUrl: "https://example.com",
    tags: ["web", "ecommerce"],
  },
  {
    id: 13,
    title: "Portfolio Website",
    description: "Creative designer portfolio",
    category: "Live Projects",
    type: "live",
    thumbnail:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400",
    liveUrl: "https://example.com",
    tags: ["portfolio", "design"],
  },
];

const categories = [
  "All",
  "Images",
  "Videos",
  "Logos",
  "Posters",
  "Live Projects",
];

export default function MediaGallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMedia, setFilteredMedia] = useState<MediaItem[]>(mediaData);
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filter media based on category and search query
  useEffect(() => {
    let result = mediaData;

    // Apply category filter
    if (activeCategory !== "All") {
      result = result.filter((item) => item.category === activeCategory);
    }

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description?.toLowerCase().includes(query) ||
          item.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    setFilteredMedia(result);
  }, [activeCategory, searchQuery]);

  // Handle media selection
  const handleMediaSelect = (media: MediaItem, index: number) => {
    setSelectedMedia(media);
    setCurrentIndex(index);
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedMedia(null);
  };

  // Navigate to next media
  const nextMedia = () => {
    const newIndex = (currentIndex + 1) % filteredMedia.length;
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredMedia[newIndex]);
  };

  // Navigate to previous media
  const prevMedia = () => {
    const newIndex =
      (currentIndex - 1 + filteredMedia.length) % filteredMedia.length;
    setCurrentIndex(newIndex);
    setSelectedMedia(filteredMedia[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedMedia) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        nextMedia();
      } else if (e.key === "ArrowLeft") {
        prevMedia();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedMedia, currentIndex, filteredMedia]);

  return (
    <ServiceLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 cyber-grid opacity-10" />
          <div className="container px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-16"
            >
              <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-body text-sm tracking-widest uppercase mb-6">
                Creative Showcase
              </span>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="text-gradient neon-glow">Media</span> Gallery
              </h1>
              <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto">
                Explore our diverse collection of creative work spanning video
                production, graphic design, branding, and live projects.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter and Search Section */}
        <section className="py-8 sticky top-24 bg-background/80 backdrop-blur-md z-20 border-b border-border">
          <div className="container px-4">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-body transition-all ${
                      activeCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80 text-muted-foreground"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative w-full md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search media..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-muted border border-border focus:border-primary focus:outline-none font-body text-foreground"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Media Grid */}
        <section className="py-12">
          <div className="container px-4">
            {filteredMedia.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-muted-foreground font-body">
                  No media found matching your criteria.
                </p>
              </div>
            ) : (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                layout
              >
                <AnimatePresence>
                  {filteredMedia.map((media, index) => (
                    <motion.div
                      key={media.id}
                      layout
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                      whileHover={{ y: -10 }}
                      className="group cursor-pointer"
                      onClick={() => handleMediaSelect(media, index)}
                    >
                      <div className="relative rounded-xl overflow-hidden glass-card">
                        {/* Media Thumbnail */}
                        <div className="aspect-square relative">
                          {media.type === "logo" ? (
                            // Logo placeholder with gradient
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                              <Layers className="w-12 h-12 text-primary" />
                            </div>
                          ) : (
                            // Image/Video thumbnail
                            <img
                              src={media.thumbnail}
                              alt={media.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                          )}

                          {/* Type indicator */}
                          <div className="absolute top-3 right-3">
                            {media.type === "video" && (
                              <div className="w-8 h-8 rounded-full bg-primary/90 flex items-center justify-center">
                                <Play className="w-4 h-4 text-primary-foreground" />
                              </div>
                            )}
                            {media.type === "live" && (
                              <div className="w-8 h-8 rounded-full bg-green-500/90 flex items-center justify-center">
                                <Globe className="w-4 h-4 text-primary-foreground" />
                              </div>
                            )}
                            {media.type === "image" && (
                              <div className="w-8 h-8 rounded-full bg-blue-500/90 flex items-center justify-center">
                                <Image className="w-4 h-4 text-primary-foreground" />
                              </div>
                            )}
                          </div>

                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                            <div>
                              <h3 className="font-heading text-lg font-bold text-foreground">
                                {media.title}
                              </h3>
                              <p className="text-xs text-muted-foreground mt-1">
                                {media.category}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Media info */}
                        <div className="p-4">
                          <h3 className="font-heading font-bold text-foreground truncate">
                            {media.title}
                          </h3>
                          {media.description && (
                            <p className="text-sm text-muted-foreground mt-1 truncate">
                              {media.description}
                            </p>
                          )}

                          {/* Live project button */}
                          {media.type === "live" && media.liveUrl && (
                            <div className="mt-3">
                              <div className="inline-flex items-center gap-1 text-xs text-primary hover:underline">
                                View Live
                                <ExternalLink className="w-3 h-3" />
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </div>
        </section>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <div
                className="relative max-w-6xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-red-500/10 transition-colors"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>

                {/* Navigation buttons */}
                <button
                  onClick={prevMedia}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>

                <button
                  onClick={nextMedia}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-foreground" />
                </button>

                {/* Media content */}
                <div className="rounded-xl overflow-hidden glass-card">
                  {selectedMedia.type === "video" ? (
                    <div className="aspect-video bg-black flex items-center justify-center">
                      <div className="text-center">
                        <Play className="w-16 h-16 text-primary mx-auto mb-4" />
                        <p className="text-foreground font-heading">
                          Video Player
                        </p>
                        <p className="text-muted-foreground text-sm mt-2">
                          Video content would play here
                        </p>
                      </div>
                    </div>
                  ) : selectedMedia.type === "live" ? (
                    <div className="aspect-video bg-gradient-to-br from-primary/10 to-secondary/10 flex flex-col items-center justify-center p-8 text-center">
                      <Globe className="w-16 h-16 text-primary mb-4" />
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                        {selectedMedia.title}
                      </h3>
                      <p className="text-muted-foreground mb-6">
                        {selectedMedia.description}
                      </p>
                      {selectedMedia.liveUrl && (
                        <a
                          href={selectedMedia.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-neon-fill rounded-lg inline-flex items-center gap-2"
                        >
                          Visit Live Site
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  ) : selectedMedia.type === "logo" ? (
                    <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 flex flex-col items-center justify-center p-8">
                      <Layers className="w-24 h-24 text-primary mb-6" />
                      <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
                        {selectedMedia.title}
                      </h3>
                      <p className="text-muted-foreground text-center">
                        {selectedMedia.description}
                      </p>
                    </div>
                  ) : (
                    <img
                      src={selectedMedia.fullSize || selectedMedia.thumbnail}
                      alt={selectedMedia.title}
                      className="w-full h-auto max-h-[70vh] object-contain"
                    />
                  )}
                </div>

                {/* Media info */}
                <div className="mt-4 text-center">
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {selectedMedia.title}
                  </h3>
                  {selectedMedia.description && (
                    <p className="text-muted-foreground mt-2">
                      {selectedMedia.description}
                    </p>
                  )}
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">
                      {selectedMedia.category}
                    </span>
                    {selectedMedia.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ServiceLayout>
  );
}
