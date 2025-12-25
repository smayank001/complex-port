import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

const PPC = () => (
  <ServiceTemplate
    title="Pay-Per-Click Advertising"
    subtitle="Instant Traffic & Measurable Results"
    description="Need results fast? Our expert PPC campaigns on Google and Social Media put your brand in front of the right people at the right time, maximizing your ad spend."
    features={[
      { title: "Google Ads Management", description: "Search, Display, and Shopping campaigns optimized for conversions." },
      { title: "Social Media Ads", description: "Targeted advertising on Facebook, Instagram, and LinkedIn." },
      { title: "Retargeting Campaigns", description: "Re-engaging visitors who didn't convert the first time." },
      { title: "A/B Testing", description: "Continuous testing of ad copy and creatives for best performance." },
    ]}
    benefits={["Immediate Visibility", "Precise Audience Targeting", "Full Budget Control", "Clear Performance Metrics"]}
  />
);
export default PPC;
