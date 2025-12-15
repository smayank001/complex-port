import { motion } from "framer-motion";
import { Code2, Rocket, Users, Award } from "lucide-react";

const timeline = [
  {
    year: "2019",
    title: "Started Coding Journey",
    description: "Began learning web development",
  },
  {
    year: "2020",
    title: "First Freelance Project",
    description: "Delivered first client website",
  },
  {
    year: "2021",
    title: "Full-Stack Mastery",
    description: "Expanded to backend & databases",
  },
  {
    year: "2022",
    title: "AI Integration",
    description: "Started building AI-powered solutions",
  },
  {
    year: "2023",
    title: "SaaS Development",
    description: "Built enterprise-grade platforms",
  },
  {
    year: "2024",
    title: "Automation Expert",
    description: "Specializing in workflow automation",
  },
];

const stats = [
  { icon: Code2, value: "50+", label: "Projects Completed" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Rocket, value: "5+", label: "Years Experience" },
  { icon: Award, value: "100%", label: "Client Satisfaction" },
];

export function About() {
  return (
    <section id="about" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-body text-sm tracking-widest uppercase mb-6">
            About Me
          </span>
          <h2 className="section-title mb-4">Our Journey</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8 neon-border">
              <h3 className="font-heading text-3xl font-bold text-gradient mb-6">
                Webzo
              </h3>
              <p className="text-muted-foreground font-body text-lg leading-relaxed mb-6">
                We are a Full-Stack Development Company passionate about
                building modern digital solutions that make a real impact. With
                expertise spanning web development, mobile apps, AI integration,
                and automation, we transform ideas into powerful digital
                realities.
              </p>
              <p className="text-muted-foreground font-body leading-relaxed mb-8">
                Our approach combines technical excellence with creative
                problem-solving. Whether it's a sleek e-commerce platform, a
                complex SaaS application, or an AI-powered chatbot, we deliver
                solutions that exceed expectations.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-4 rounded-lg bg-muted/50"
                    >
                      <Icon className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-heading text-2xl font-bold text-primary">
                          {stat.value}
                        </p>
                        <p className="text-xs text-muted-foreground font-body">
                          {stat.label}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-8">
              Company Journey
            </h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-primary" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-12 pb-8 last:pb-0"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-2 top-1 w-4 h-4 rounded-full bg-primary"
                    style={{ boxShadow: "0 0 15px hsl(var(--primary))" }}
                  />

                  {/* Content */}
                  <div className="glass-card p-4">
                    <span className="text-primary font-heading text-sm font-bold">
                      {item.year}
                    </span>
                    <h4 className="font-heading text-lg font-semibold text-foreground mt-1">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground font-body text-sm mt-1">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
