import { motion } from "framer-motion";
import { Play, Image, Layers } from "lucide-react";

export function Media() {
  const mediaItems = [
    {
      id: 1,
      title: "Brand Video",
      type: "video",
      thumbnail:
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=400",
    },
    {
      id: 2,
      title: "Product Design",
      type: "image",
      thumbnail:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400",
    },
    {
      id: 3,
      title: "Logo Collection",
      type: "logo",
      thumbnail:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400",
    },
    {
      id: 4,
      title: "UI Design",
      type: "image",
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400",
    },
  ];

  return (
    <section id="media" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-radial from-secondary/5 via-transparent to-transparent" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-body text-sm tracking-widest uppercase mb-6">
            Creative Work
          </span>
          <h2 className="section-title mb-4">Media Gallery</h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Explore our diverse collection of creative work spanning video
            production, graphic design, and brand identity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden glass-card">
                <div className="aspect-video relative">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Type indicator */}
                  <div className="absolute top-3 right-3">
                    {item.type === "video" && (
                      <div className="w-8 h-8 rounded-full bg-primary/90 flex items-center justify-center">
                        <Play className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                    {item.type === "logo" && (
                      <div className="w-8 h-8 rounded-full bg-purple-500/90 flex items-center justify-center">
                        <Layers className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                    {item.type === "image" && (
                      <div className="w-8 h-8 rounded-full bg-blue-500/90 flex items-center justify-center">
                        <Image className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/media-gallery"
            className="btn-neon rounded-lg inline-block px-8 py-3"
          >
            View Full Gallery
          </a>
        </motion.div>
      </div>
    </section>
  );
}
