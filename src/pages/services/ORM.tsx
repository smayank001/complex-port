import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

const ORM = () => (
  <ServiceTemplate
    title="Online Reputation Management"
    subtitle="Protect & Enhance Your Brand Image"
    description="Your reputation is your most valuable asset. We help you monitor, protect, and improve how your brand is perceived online, ensuring trust and credibility."
    features={[
      { title: "Review Management", description: "Monitoring and responding to customer feedback across platforms." },
      { title: "Crisis Management", description: "Strategic handling of negative press or social media issues." },
      { title: "Positive Asset Promotion", description: "Highlighting your success stories to overshadow negativity." },
      { title: "Brand Monitoring", description: "Real-time tracking of brand mentions across the web." },
    ]}
    benefits={["Increased Customer Trust", "Better Talent Acquisition", "Higher Customer LTV", "Crisis Resilience"]}
  />
);
export default ORM;
