import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    content:
      "Mayank delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise are unmatched. The platform has increased our conversion rate by 45%.",
    rating: 5,
    project: "E-commerce Platform",
    results: "+45% Conversion Rate",
  },
  {
    name: "Michael Chen",
    role: "Founder, EduLearn",
    company: "EduLearn",
    content:
      "The CRM system Mayank built transformed our business operations. The automation features alone saved us countless hours every week. Our team productivity increased by 60% after implementation.",
    rating: 5,
    project: "Enterprise CRM",
    results: "+60% Productivity",
  },
  {
    name: "Emily Davis",
    role: "Director, Creative Agency",
    company: "Nova Creative",
    content:
      "Working with Mayank was a fantastic experience. He understood our vision perfectly and delivered a stunning website that our clients love. The new site increased our leads by 75% in the first quarter.",
    rating: 5,
    project: "Agency Website",
    results: "+75% Lead Generation",
  },
  {
    name: "David Wilson",
    role: "CTO, DataFlow Systems",
    company: "DataFlow Systems",
    content:
      "The AI chatbot integration was seamless. Mayank's knowledge of modern technologies and best practices is truly impressive. Customer satisfaction scores improved by 40% with 24/7 automated support.",
    rating: 5,
    project: "AI Chatbot Solution",
    results: "+40% Customer Satisfaction",
  },
  {
    name: "Priya Sharma",
    role: "Marketing Director, GrowthCo",
    company: "GrowthCo",
    content:
      "Mayank's SEO optimization and performance enhancements transformed our digital presence. Our organic traffic grew by 120% in six months, and page load times decreased by 65%.",
    rating: 5,
    project: "SEO & Performance",
    results: "+120% Organic Traffic",
  },
];

export function ClientStories() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section id="client-stories" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-secondary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 cyber-grid opacity-5" />

      {/* Animated particles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-secondary/10 blur-3xl animate-pulse delay-1000" />

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
            Success Stories
          </motion.span>
          <h2 className="section-title mb-4">Client Success Stories</h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Real results from real partnerships
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Main Card */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50, rotateY: -10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -50, rotateY: 10 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
              className="glass-card p-8 md:p-12 neon-border-purple relative overflow-hidden"
            >
              {/* Background gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 -z-10" />

              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Quote className="w-16 h-16 text-secondary/20 mb-6" />
              </motion.div>

              {/* Project Badge */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
              >
                <span className="text-primary font-heading text-sm font-medium tracking-wider">
                  {testimonials[activeIndex].project}
                </span>
              </motion.div>

              {/* Content */}
              <motion.p
                className="text-xl md:text-2xl text-foreground font-body leading-relaxed mb-8"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{
                  fontFeatureSettings: "'salt', 'ss02', 'ss03'",
                }}
              >
                "{testimonials[activeIndex].content}"
              </motion.p>

              {/* Results Highlight */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
                  <span className="font-heading text-primary font-bold text-lg">
                    {testimonials[activeIndex].results}
                  </span>
                  <span className="text-muted-foreground font-body text-sm">
                    measurable results
                  </span>
                </div>
              </motion.div>

              {/* Author */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center gap-6"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-foreground font-heading font-bold text-2xl shadow-lg">
                  {testimonials[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading text-xl font-bold text-foreground mb-1">
                    {testimonials[activeIndex].name}
                  </p>
                  <p className="text-primary font-body text-base font-medium mb-1">
                    {testimonials[activeIndex].role}
                  </p>
                  <p className="text-muted-foreground font-body text-sm">
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </motion.div>

              {/* Rating */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="absolute top-8 right-8 flex gap-1"
              >
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-primary/5 blur-2xl -z-10" />
              <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-secondary/5 blur-2xl -z-10" />
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12">
              <motion.button
                onClick={prevTestimonial}
                className="p-4 rounded-full glass-card hover:bg-primary/10 transition-all duration-300 group"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-3">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-500 ${
                      index === activeIndex
                        ? "bg-primary w-10"
                        : "bg-muted hover:bg-primary/50"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="p-4 rounded-full glass-card hover:bg-primary/10 transition-all duration-300 group"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </motion.button>
            </div>

            {/* Testimonial Count */}
            <div className="text-center mt-6">
              <p className="text-muted-foreground font-body text-sm">
                <span className="text-primary font-heading font-bold">
                  {activeIndex + 1}
                </span>{" "}
                of {testimonials.length}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
