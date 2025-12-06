import { motion, AnimatePresence } from "framer-motion";
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
    <section id="client-stories" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-secondary/3 via-transparent to-transparent" />
      <div className="absolute inset-0 cyber-grid opacity-3" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <motion.span
            className="inline-block px-3 py-1 rounded-full border border-secondary/30 bg-secondary/10 text-secondary font-body text-xs tracking-widest uppercase mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Success Stories
          </motion.span>
          <h2 className="section-title mb-3 text-3xl md:text-4xl">
            Client Success Stories
          </h2>
          <p className="text-muted-foreground font-body text-base max-w-xl mx-auto font-times">
            Real results from real partnerships
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Card - Compact Design */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 300 }}
                className="glass-card p-6 md:p-8 neon-border-purple relative overflow-hidden"
                whileHover={{ y: -5 }}
              >
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-secondary/3 -z-10" />

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Author Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-foreground font-heading font-bold text-xl shadow-lg">
                      {testimonials[activeIndex].name.charAt(0)}
                    </div>
                  </div>

                  <div className="flex-grow">
                    {/* Project Badge */}
                    <motion.div
                      initial={{ y: -10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                      className="inline-block px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3"
                    >
                      <span className="text-primary font-heading text-xs font-medium tracking-wider">
                        {testimonials[activeIndex].project}
                      </span>
                    </motion.div>

                    {/* Content */}
                    <motion.p
                      className="text-base md:text-lg text-foreground font-body leading-relaxed mb-4 font-times"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      "{testimonials[activeIndex].content}"
                    </motion.p>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      {/* Results Highlight */}
                      <motion.div
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30">
                          <span className="font-heading text-primary font-bold text-base">
                            {testimonials[activeIndex].results}
                          </span>
                        </div>
                      </motion.div>

                      {/* Author Info */}
                      <motion.div
                        initial={{ x: 10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        <div>
                          <p className="font-heading text-base font-bold text-foreground mb-0.5">
                            {testimonials[activeIndex].name}
                          </p>
                          <p className="text-primary font-body text-xs font-medium mb-0.5">
                            {testimonials[activeIndex].role}
                          </p>
                          <p className="text-muted-foreground font-body text-xs font-times">
                            {testimonials[activeIndex].company}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-4 right-4 flex gap-0.5"
                >
                  {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </motion.div>

                {/* Decorative elements */}
                <div className="absolute bottom-0 right-0 w-24 h-24 rounded-full bg-primary/3 blur-xl -z-10" />
              </motion.div>
            </AnimatePresence>

            {/* Navigation - Compact */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <motion.button
                onClick={prevTestimonial}
                className="p-2 rounded-full glass-card hover:bg-primary/10 transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </motion.button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-primary w-6"
                        : "bg-muted hover:bg-primary/50"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <motion.button
                onClick={nextTestimonial}
                className="p-2 rounded-full glass-card hover:bg-primary/10 transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
              </motion.button>
            </div>

            {/* Testimonial Count */}
            <div className="text-center mt-4">
              <p className="text-muted-foreground font-body text-xs font-times">
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
