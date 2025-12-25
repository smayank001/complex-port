import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ServiceLayout } from "../layout/ServiceLayout";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  features: ServiceFeature[];
  benefits: string[];
  ctaText?: string;
}

export function ServiceTemplate({
  title,
  subtitle,
  description,
  features,
  benefits,
  ctaText = "Audit",
}: ServiceTemplateProps) {
  return (
    <ServiceLayout>
      <section className="relative py-20 lg:py-32">
        <div className="container px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-body text-sm tracking-widest uppercase mb-6">
              Services
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient neon-glow">{title}</span>
            </h1>
            <p className="text-xl text-primary font-heading mb-6">{subtitle}</p>
            <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 max-w-6xl mx-auto">
            {/* Features */}
            <div className="space-y-8">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-heading font-bold"
              >
                What We Offer
              </motion.h2>
              <div className="grid gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass-card p-6 border-l-4 border-l-primary"
                  >
                    <h3 className="text-xl font-heading font-bold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-body">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Benefits & CTA */}
            <div className="space-y-10">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-heading font-bold mb-8">
                  Key Benefits
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-muted-foreground font-body">
                        {benefit}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center"
              >
                <h3 className="text-2xl font-heading font-bold mb-4">
                  Ready to Grow?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss how our {title} services can help your business
                  thrive.
                </p>
                <a
                  href="/audit"
                  className="btn-neon-fill inline-flex items-center gap-2 group"
                >
                  {ctaText}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  );
}
