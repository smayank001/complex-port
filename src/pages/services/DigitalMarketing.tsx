import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

const DigitalMarketing = () => (
  <ServiceTemplate
    title="Digital Marketing"
    subtitle="Result-Oriented Growth Strategies"
    description="Accelerate your business growth with our comprehensive digital marketing strategies. We focus on ROI-driven campaigns that increase visibility, engagement, and conversions."
    features={[
      { title: "Social Media Marketing", description: "Building community and brand awareness across platforms." },
      { title: "Content Marketing", description: "Creating valuable content that attracts and retains customers." },
      { title: "Email Marketing Services", description: "Personalized campaigns to nurture leads and drive retention." },
      { title: "Analytics & Reporting", description: "Transparent data tracking to measure and optimize performance." },
    ]}
    benefits={["Increased Brand Awareness", "Targeted Audience Reach", "Cost-Effective Leads", "Measurable ROI"]}
  />
);
export default DigitalMarketing;
