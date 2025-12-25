import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { motion } from "framer-motion";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

export default function Audit() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    websiteUrl: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Audit request sent! We'll analyze your site and get back to you.");
    setFormData({ name: "", email: "", websiteUrl: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <ServiceLayout>
      <section className="py-20 lg:py-32 relative">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-body text-sm tracking-widest uppercase mb-6">
              Free Consultation
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient neon-glow">Free Website & Marketing Audit</span>
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
              Get a comprehensive analysis of your digital presence. We'll identify performance bottlenecks, SEO gaps, and conversion opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Logic/Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-heading font-bold mb-6">What We Analyze</h2>
              <div className="space-y-6">
                {[
                  { title: "Website Performance", desc: "Speed, mobile responsiveness, and technical health." },
                  { title: "SEO Optimization", desc: "Keyword rankings, meta tags, and backlink profile." },
                  { title: "UI/UX Experience", desc: "Navigation, layout, and user journey analysis." },
                  { title: "Conversion Optimization", desc: "Call-to-action effectiveness and lead capture." },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4 p-4 glass-card rounded-xl">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
               <form
                  onSubmit={handleSubmit}
                  className="glass-card p-8 gradient-border rounded-xl"
                >
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-body text-muted-foreground mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 font-body text-foreground"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                        <label className="block text-sm font-body text-muted-foreground mb-2">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 font-body text-foreground"
                          placeholder="your@email.com"
                        />
                      </div>

                    <div>
                      <label className="block text-sm font-body text-muted-foreground mb-2">
                        Website URL
                      </label>
                      <input
                        type="url"
                        name="websiteUrl"
                        value={formData.websiteUrl}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 font-body text-foreground"
                        placeholder="https://example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-body text-muted-foreground mb-2">
                        Specific Concerns (Optional)
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 font-body text-foreground resize-none"
                        placeholder="Any specific issues you want us to look at?"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-neon-fill w-full rounded-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Get Free Audit
                        </>
                      )}
                    </button>
                  </div>
                </form>
            </motion.div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
