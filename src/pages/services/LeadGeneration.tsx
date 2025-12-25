import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

const LeadGeneration = () => (
  <ServiceTemplate
    title="Lead Generation"
    subtitle="High-Quality Leads for Your Sales Pipeline"
    description="Stop chasing cold prospects. We implement targeted strategies to attract qualified leads who are actively looking for your services, filling your sales funnel with opportunities."
    features={[
      { title: "Targeted Landing Pages", description: "High-converting pages designed to capture visitor information." },
      { title: "Lead Magnets & Funnels", description: "Strategic offers that incentivize users to connect." },
      { title: "CRM Integration", description: "Seamless flow of leads directly into your sales systems." },
      { title: "Automated Follow-ups", description: "Nurturing prospects immediately to increase conversion chances." },
    ]}
    benefits={["Steady Stream of Prospects", "Higher Sales Conversion", "Reduced Customer Acquisition Cost", "Predictable Revenue Growth"]}
  />
);
export default LeadGeneration;
