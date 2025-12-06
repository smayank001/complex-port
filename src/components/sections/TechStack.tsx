import { motion } from 'framer-motion';
import { TechCube } from '../3d/TechCube';

const technologies = [
  { name: 'React', category: 'Frontend', color: '#61DAFB' },
  { name: 'Next.js', category: 'Frontend', color: '#FFFFFF' },
  { name: 'TypeScript', category: 'Language', color: '#3178C6' },
  { name: 'Node.js', category: 'Backend', color: '#339933' },
  { name: 'MongoDB', category: 'Database', color: '#47A248' },
  { name: 'PostgreSQL', category: 'Database', color: '#336791' },
  { name: 'Python', category: 'Language', color: '#3776AB' },
  { name: 'TensorFlow', category: 'AI/ML', color: '#FF6F00' },
  { name: 'AWS', category: 'Cloud', color: '#FF9900' },
  { name: 'Docker', category: 'DevOps', color: '#2496ED' },
  { name: 'GraphQL', category: 'API', color: '#E10098' },
  { name: 'Tailwind', category: 'Styling', color: '#06B6D4' },
];

function TechBadge({ tech, index }: { tech: typeof technologies[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="group relative"
    >
      <div 
        className="glass-card px-6 py-4 cursor-pointer transition-all duration-300"
        style={{
          boxShadow: `0 0 0 1px ${tech.color}30`,
        }}
      >
        <div className="flex items-center gap-3">
          <div 
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: tech.color, boxShadow: `0 0 10px ${tech.color}` }}
          />
          <div>
            <p className="font-heading text-sm font-semibold text-foreground">
              {tech.name}
            </p>
            <p className="text-xs text-muted-foreground font-body">
              {tech.category}
            </p>
          </div>
        </div>
        
        {/* Hover Glow */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, ${tech.color}10, transparent)`,
            boxShadow: `0 0 20px ${tech.color}20`,
          }}
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
            Modern tools and frameworks I use to build exceptional digital products
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 3D Cube */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <TechCube />
            <p className="text-center text-muted-foreground text-sm font-body mt-4">
              Drag to rotate • Hover to stop
            </p>
          </motion.div>
          
          {/* Tech Badges Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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
