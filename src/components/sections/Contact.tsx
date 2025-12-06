import { motion } from "framer-motion";
import { useState } from "react";
import { Send, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
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
    <section id="contact" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-body text-sm tracking-widest uppercase mb-6">
            Contact
          </span>
          <h2 className="section-title mb-4">Let's Build Something Great</h2>
          <p className="text-muted-foreground font-body text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your
            vision to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                Get In Touch
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Feel free to reach out
                through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "mayanksaxen1262@gmail.com",
                },
                { icon: Phone, label: "Phone", value: "+91 8851432459" },
                { icon: MapPin, label: "Location", value: "Noida, India" },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="glass-card p-4 flex items-center gap-4 group hover:neon-border transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-muted-foreground font-body text-sm">
                        {item.label}
                      </p>
                      <p className="font-heading text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 gradient-border rounded-xl"
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>

                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 font-body text-foreground"
                    placeholder="Project inquiry"
                  />
                </div>

                <div>
                  <label className="block text-sm font-body text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all duration-300 font-body text-foreground resize-none"
                    placeholder="Tell me about your project..."
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
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
