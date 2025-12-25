import { motion } from "framer-motion";
import { TechCube } from "../3d/TechCube";
import { CinematicCodeAnimation } from "../effects/CinematicCodeAnimation";

const technologies = [
  { name: "React", category: "Frontend", color: "#61DAFB" },
  { name: "Next.js", category: "Frontend", color: "#FFFFFF" },
  { name: "TypeScript", category: "Language", color: "#3178C6" },
  { name: "Node.js", category: "Backend", color: "#339933" },
  { name: "MongoDB", category: "Database", color: "#47A248" },
  { name: "PostgreSQL", category: "Database", color: "#336791" },
  { name: "Python", category: "Language", color: "#3776AB" },
  { name: "TensorFlow", category: "AI/ML", color: "#FF6F00" },
  { name: "AWS", category: "Cloud", color: "#FF9900" },
  { name: "Docker", category: "DevOps", color: "#2496ED" },
  { name: "GraphQL", category: "API", color: "#E10098" },
  { name: "Tailwind", category: "Styling", color: "#06B6D4" },
];

function TechBadge({
  tech,
  index,
}: {
  tech: (typeof technologies)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{
        scale: 1.15,
        y: -8,
        rotate: [0, 2, -2, 0],
      }}
      whileTap={{ scale: 0.95 }}
      className="group relative cursor-pointer"
      animate={{
        y: [0, -5, 0],
      }}
    >
      <div
        className="glass-card px-6 py-4 transition-all duration-300 relative overflow-hidden"
        style={{
          boxShadow: `0 0 0 1px ${tech.color}30`,
        }}
      >
        {/* Glow border effect */}
        <div
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${tech.color}20, transparent)`,
            boxShadow: `0 0 20px ${tech.color}40`,
            border: `1px solid ${tech.color}60`,
          }}
        />

        <div className="flex items-center gap-3 relative z-10">
          <motion.div
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: tech.color }}
            whileHover={{
              scale: 1.5,
              boxShadow: `0 0 15px ${tech.color}`,
            }}
            transition={{ type: "spring", stiffness: 500 }}
          />
          <div>
            <p className="font-heading text-sm font-semibold text-foreground">
              {tech.name}
            </p>
            <p className="text-xs text-muted-foreground font-body font-times">
              {tech.category}
            </p>
          </div>
        </div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-20"
          style={{
            background: `linear-gradient(90deg, transparent, ${tech.color}80, transparent)`,
          }}
          whileHover={{ x: ["-100%", "100%"] }}
          transition={{ duration: 0.6 }}
        />
      </div>
    </motion.div>
  );
}

export function TechStack() {
  return (
    <section id="tech" className="py-32 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-10" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-body text-sm tracking-widest uppercase mb-6">
            Technologies
          </span>
          <h2 className="section-title mb-4">Tech Stack</h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Modern tools and frameworks I use to build exceptional digital
            products
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Cinematic Code Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 h-[400px] rounded-xl overflow-hidden relative"
          >
            <CinematicCodeAnimation />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/10 rounded-xl pointer-events-none" />
            <div className="absolute inset-0 rounded-xl border border-cyan-500/20 pointer-events-none" />
          </motion.div>

          {/* Tech Badges Grid - Centered */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
              {technologies.map((tech, index) => (
                <TechBadge key={tech.name} tech={tech} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
