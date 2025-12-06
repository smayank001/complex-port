import { motion } from 'framer-motion';
import { Globe, Smartphone, Bot, Database, Shield, Zap } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Full Website Development',
    description: 'Custom websites built with modern technologies, optimized for performance and SEO.',
    color: '#00E6FF',
  },
  {
    icon: Smartphone,
    title: 'Web Applications',
    description: 'Complex web apps with real-time features, authentication, and scalable architecture.',
    color: '#8F00FF',
  },
  {
    icon: Bot,
    title: 'AI Chatbot & Automation',
    description: 'Intelligent chatbots and workflow automation to streamline your business processes.',
    color: '#00FF88',
  },
  {
    icon: Database,
    title: 'CRM & Admin Software',
    description: 'Custom CRM solutions with role-based access, analytics, and reporting dashboards.',
    color: '#FFD700',
  },
  {
    icon: Shield,
    title: 'Security & Optimization',
    description: 'Secure implementations with SSL, authentication, and performance optimization.',
    color: '#FF6B35',
  },
  {
    icon: Zap,
    title: 'Deployment & DevOps',
    description: 'Cloud deployment, CI/CD pipelines, and infrastructure management.',
    color: '#FF4500',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group perspective-1000"
    >
      <div className="relative preserve-3d transition-transform duration-700 group-hover:rotate-y-12 group-hover:rotate-x-6">
        <div 
          className="glass-card p-8 h-full transition-all duration-500"
          style={{
            boxShadow: `0 0 0 1px ${service.color}20`,
          }}
        >
          {/* Icon */}
          <div 
            className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110"
            style={{
              backgroundColor: `${service.color}20`,
              boxShadow: `0 0 30px ${service.color}30`,
            }}
          >
            <Icon 
              className="w-8 h-8 transition-all duration-500"
              style={{ color: service.color }}
            />
          </div>
          
          {/* Title */}
          <h3 className="font-heading text-xl font-bold text-foreground mb-3">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="text-muted-foreground font-body leading-relaxed">
            {service.description}
          </p>
          
          {/* Hover Glow */}
          <div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${service.color}05, transparent)`,
              boxShadow: `inset 0 0 30px ${service.color}10`,
            }}
          />
        </div>
        
        {/* Background Glow */}
        <div 
          className="absolute -inset-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10"
          style={{ backgroundColor: `${service.color}15` }}
        />
      </div>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-32 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-radial from-secondary/5 via-transparent to-transparent" />
      
      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary font-body text-sm tracking-widest uppercase mb-6">
            Services
          </span>
          <h2 className="section-title mb-4">What I Do</h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            End-to-end digital solutions tailored to your business needs
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
