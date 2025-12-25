import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

const SEO = () => (
  <ServiceTemplate
    title="Search Engine Optimization"
    subtitle="Dominate Search Results Organicallly"
    description="Get found by customers who are searching for you. Our data-driven SEO strategies improve your visibility on Google, driving sustainable organic traffic to your site."
    features={[
      { title: "On-Page SEO", description: "Optimizing content and structure for relevant keywords." },
      { title: "Technical SEO", description: "Improving site speed, mobile-friendliness, and crawlability." },
      { title: "Link Building", description: "Acquiring high-quality backlinks to boost authority." },
      { title: "Local SEO", description: "Dominating local search results for area-specific businesses." },
    ]}
    benefits={["Long-Term Traffic Growth", "Higher Credibility", "Best ROI in Marketing", "Competitive Advantage"]}
  />
);
export default SEO;
