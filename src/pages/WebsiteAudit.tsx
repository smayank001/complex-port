import { ServiceLayout } from "@/components/layout/ServiceLayout";
import { motion } from "framer-motion";
import {
  Zap,
  Search,
  FileText,
  Palette,
  Code,
  Shield,
  CheckCircle,
  AlertTriangle,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

export default function WebsiteAudit() {
  const auditSections = [
    {
      id: "performance",
      title: "Performance & Page Speed",
      icon: <Zap className="w-6 h-6" />,
      findings: [
        {
          type: "positive",
          text: "Core Web Vitals score: Good (CLS: 0.05, LCP: 1.8s, FID: 85ms)",
        },
        { type: "positive", text: "Mobile performance rating: 92/100" },
        {
          type: "negative",
          text: "Large hero image causing slight delay in initial render",
        },
        {
          type: "negative",
          text: "Third-party scripts adding 0.8s to load time",
        },
      ],
      recommendations: [
        "Compress and optimize hero images using WebP format",
        "Defer loading of non-critical third-party scripts",
        "Implement code splitting for JavaScript bundles",
        "Add loading='lazy' attribute to below-the-fold images",
      ],
    },
    {
      id: "seo",
      title: "SEO & Visibility Check",
      icon: <Search className="w-6 h-6" />,
      findings: [
        {
          type: "positive",
          text: "Meta titles and descriptions properly implemented",
        },
        { type: "positive", text: "Structured data markup present and valid" },
        {
          type: "negative",
          text: "Missing alt attributes on 3 decorative images",
        },
        { type: "negative", text: "H1 tag used inconsistently across pages" },
      ],
      recommendations: [
        "Add descriptive alt text to all images",
        "Ensure consistent H1 usage (one per page, matching page title)",
        "Submit updated sitemap to Google Search Console",
        "Implement hreflang tags for international targeting",
      ],
    },
    {
      id: "content",
      title: "Content Quality Review",
      icon: <FileText className="w-6 h-6" />,
      findings: [
        {
          type: "positive",
          text: "Content clarity and readability scores above 75%",
        },
        {
          type: "positive",
          text: "Keyword optimization aligned with target audience",
        },
        {
          type: "negative",
          text: "Blog section lacks recent content (last post: 3 months ago)",
        },
        {
          type: "negative",
          text: "CTA placement inconsistent across service pages",
        },
      ],
      recommendations: [
        "Publish new blog content bi-weekly to improve domain authority",
        "Standardize CTA placement and messaging across all pages",
        "Add customer testimonials to key landing pages",
        "Create dedicated FAQ sections for complex service offerings",
      ],
    },
    {
      id: "ux",
      title: "User Experience (UX) & Navigation",
      icon: <Palette className="w-6 h-6" />,
      findings: [
        {
          type: "positive",
          text: "Mobile-responsive design passes all standard tests",
        },
        { type: "positive", text: "Intuitive primary navigation structure" },
        {
          type: "negative",
          text: "Footer navigation links lack visual hierarchy",
        },
        {
          type: "negative",
          text: "Form validation error messages are generic and unhelpful",
        },
      ],
      recommendations: [
        "Restructure footer navigation with grouped categories",
        "Improve form error messaging with specific guidance",
        "Add breadcrumbs for deeper page navigation",
        "Increase touch target sizes for mobile navigation",
      ],
    },
    {
      id: "technical",
      title: "Technical & Accessibility Issues",
      icon: <Code className="w-6 h-6" />,
      findings: [
        {
          type: "positive",
          text: "SSL certificate properly installed and configured",
        },
        {
          type: "positive",
          text: "HTML5 semantic elements used appropriately",
        },
        {
          type: "negative",
          text: "Contrast ratio fails WCAG standards on 2 interactive elements",
        },
        {
          type: "negative",
          text: "Missing ARIA labels on dynamic interface components",
        },
      ],
      recommendations: [
        "Adjust color palette to meet WCAG 2.1 AA contrast requirements",
        "Add ARIA labels and roles to all interactive components",
        "Implement skip navigation link for keyboard users",
        "Add focus-visible polyfill for better keyboard navigation",
      ],
    },
    {
      id: "security",
      title: "Security & Best Practices",
      icon: <Shield className="w-6 h-6" />,
      findings: [
        { type: "positive", text: "Security headers properly configured" },
        {
          type: "positive",
          text: "Forms protected against basic injection attacks",
        },
        {
          type: "negative",
          text: "Mixed content warnings on 2 pages (HTTP assets)",
        },
        { type: "negative", text: "No content security policy implemented" },
      ],
      recommendations: [
        "Replace all HTTP asset references with HTTPS equivalents",
        "Implement Content Security Policy (CSP) header",
        "Add security.txt file for vulnerability disclosure",
        "Regular automated security scanning",
      ],
    },
  ];

  const summaryFindings = [
    {
      category: "Strengths",
      items: [
        "Strong visual design",
        "Good mobile performance",
        "Effective CTAs",
        "Proper semantic structure",
      ],
    },
    {
      category: "Weaknesses",
      items: [
        "Inconsistent content updates",
        "Accessibility gaps",
        "SEO metadata gaps",
        "Technical debt in forms",
      ],
    },
    {
      category: "Priority Fixes",
      items: [
        "Fix accessibility contrast issues",
        "Update mixed content assets",
        "Add missing alt attributes",
        "Standardize navigation",
      ],
    },
  ];

  const actionItems = [
    {
      priority: "High",
      tasks: [
        "Fix accessibility contrast issues",
        "Resolve mixed content warnings",
        "Add missing alt attributes",
        "Implement CSP header",
      ],
    },
    {
      priority: "Medium",
      tasks: [
        "Optimize hero images",
        "Standardize navigation",
        "Add structured data for services",
        "Improve form validation",
      ],
    },
    {
      priority: "Low",
      tasks: [
        "Add breadcrumbs",
        "Enhance footer organization",
        "Implement skip navigation",
        "Add security.txt",
      ],
    },
  ];

  return (
    <ServiceLayout>
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 cyber-grid opacity-10" />
        <div className="container px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-body text-sm tracking-widest uppercase mb-6">
              Comprehensive Analysis
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-gradient neon-glow">
                Website Audit Report
              </span>
            </h1>
            <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
              A complete technical and strategic evaluation of your digital
              presence. This report identifies performance bottlenecks,
              optimization opportunities, and actionable improvements to enhance
              user experience and business outcomes.
            </p>
          </motion.div>

          {/* Summary of Findings */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto mb-20"
          >
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              Executive Summary
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {summaryFindings.map((finding, index) => (
                <div
                  key={finding.category}
                  className="glass-card p-6 rounded-xl neon-border"
                >
                  <h3 className="font-heading text-xl font-bold mb-4 text-primary">
                    {finding.category}
                  </h3>
                  <ul className="space-y-2">
                    {finding.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground font-body">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Detailed Sections */}
          <div className="max-w-6xl mx-auto space-y-16 mb-20">
            {auditSections.map((section, index) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="glass-card rounded-xl p-8 neon-border"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    {section.icon}
                  </div>
                  <h2 className="font-heading text-2xl font-bold">
                    {section.title}
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-heading text-lg font-bold mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-500" />
                      Key Findings
                    </h3>
                    <ul className="space-y-3">
                      {section.findings.map((finding, findingIndex) => (
                        <li
                          key={findingIndex}
                          className={`flex items-start gap-3 p-3 rounded-lg ${
                            finding.type === "positive"
                              ? "bg-green-500/10 border border-green-500/20"
                              : "bg-yellow-500/10 border border-yellow-500/20"
                          }`}
                        >
                          {finding.type === "positive" ? (
                            <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          ) : (
                            <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          )}
                          <span className="font-body text-foreground">
                            {finding.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-heading text-lg font-bold mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5 text-primary" />
                      Recommendations
                    </h3>
                    <ul className="space-y-3">
                      {section.recommendations.map(
                        (recommendation, recIndex) => (
                          <li key={recIndex} className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="font-body text-foreground">
                              {recommendation}
                            </span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Actionable Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-6xl mx-auto mb-20"
          >
            <h2 className="font-heading text-3xl font-bold mb-8 text-center">
              Actionable Recommendations
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {actionItems.map((priorityGroup) => (
                <div
                  key={priorityGroup.priority}
                  className="glass-card p-6 rounded-xl neon-border"
                >
                  <h3 className="font-heading text-xl font-bold mb-4">
                    <span
                      className={
                        priorityGroup.priority === "High"
                          ? "text-red-500"
                          : priorityGroup.priority === "Medium"
                          ? "text-yellow-500"
                          : "text-green-500"
                      }
                    >
                      {priorityGroup.priority} Priority
                    </span>
                  </h3>
                  <ul className="space-y-3">
                    {priorityGroup.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground font-body">
                          {task}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="glass-card p-12 rounded-xl neon-border text-center">
              <h2 className="font-heading text-3xl font-bold mb-4">
                Ready to Implement These Improvements?
              </h2>
              <p className="text-lg text-muted-foreground font-body mb-8 max-w-2xl mx-auto">
                Let our expert team help you execute these recommendations and
                elevate your digital presence to the next level.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="btn-neon-fill rounded-lg inline-flex items-center justify-center gap-2"
                >
                  Schedule Implementation
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="btn-neon rounded-lg inline-flex items-center justify-center gap-2"
                >
                  Download Full Report
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </ServiceLayout>
  );
}
