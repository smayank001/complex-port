import { motion } from 'framer-motion';
import { ExternalLink, Github, FileText } from 'lucide-react';

const projects = [
  {
    title: 'EDU-CRM',
    description: 'Biggest SaaS Project: Role-based dashboards, DB, automation',
    tags: ['SaaS', 'Dashboard', 'Automation'],
    color: '#00E6FF',
    featured: true,
  },
  {
    title: 'Polished Nails',
    description: 'Beauty e-commerce Portal with modern UX',
    tags: ['E-commerce', 'Beauty', 'React'],
    color: '#FF6B9D',
  },
  {
    title: 'ACE Rank',
    description: 'Educational Ranking Platform for students',
    tags: ['Education', 'Rankings', 'Platform'],
    color: '#FFD700',
  },
  {
    title: 'Profess Photography',
    description: 'Photography Service Website with gallery',
    tags: ['Photography', 'Portfolio', 'Gallery'],
    color: '#8F00FF',
  },
  {
    title: 'Shorya Saxena Portfolio',
    description: 'Personal portfolio showcasing creative work',
    tags: ['Portfolio', 'Personal', 'Design'],
    color: '#00FF88',
  },
  {
    title: 'DanceFlow',
    description: 'Dance Academy Website with booking system',
    tags: ['Dance', 'Academy', 'Booking'],
    color: '#FF4500',
  },
  {
    title: 'FranzFilo',
    description: 'Food Service Website with online ordering',
    tags: ['Food', 'Service', 'Ordering'],
    color: '#FF6B35',
  },
  {
    title: 'AtoZ Car Rental',
    description: 'Car rental platform with fleet management',
    tags: ['Automotive', 'Rental', 'Platform'],
    color: '#00BFFF',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative ${project.featured ? 'md:col-span-2' : ''}`}
    >
      <div 
        className="glass-card p-6 h-full transition-all duration-500 hover:scale-[1.02]"
        style={{
          boxShadow: `0 0 0 1px ${project.color}20, 0 0 30px ${project.color}10`,
        }}
      >
        {/* Animated Border */}
        <div 
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${project.color}20, transparent, ${project.color}20)`,
          }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          {project.featured && (
            <span 
              className="inline-block px-3 py-1 rounded-full text-xs font-heading tracking-wider mb-4"
              style={{ 
                backgroundColor: `${project.color}20`,
                color: project.color,
                border: `1px solid ${project.color}40`,
              }}
            >
              FEATURED
            </span>
          )}
          
          <h3 
            className="font-heading text-2xl font-bold mb-3 transition-colors duration-300"
            style={{ color: project.color }}
          >
            {project.title}
          </h3>
          
          <p className="text-muted-foreground font-body mb-4 leading-relaxed">
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full text-xs font-body bg-muted text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          
          {/* Actions */}
          <div className="flex gap-3">
            <button 
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: `${project.color}20`,
                color: project.color,
                border: `1px solid ${project.color}40`,
              }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body bg-muted text-muted-foreground hover:bg-muted/80 transition-all duration-300 hover:scale-105">
              <Github className="w-4 h-4" />
              Code
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-body bg-muted text-muted-foreground hover:bg-muted/80 transition-all duration-300 hover:scale-105">
              <FileText className="w-4 h-4" />
              Case Study
            </button>
          </div>
        </div>
        
        {/* Glow Effect */}
        <div 
          className="absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10"
          style={{ backgroundColor: `${project.color}20` }}
        />
      </div>
    </motion.div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-32 relative">
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
            Portfolio
          </span>
          <h2 className="section-title mb-4">Featured Projects</h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            A showcase of my recent work — from SaaS platforms to e-commerce solutions
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
