import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

const WebsiteDevelopment = () => {
  return (
    <ServiceTemplate
      title="Website Development"
      subtitle="Custom High-Performance Websites"
      description="We build blazing fast, responsive, and SEO-optimized websites tailored to your business goals. From corporate sites to landing pages, our solutions are designed to convert."
      features={[
        {
          title: "Custom Design & Development",
          description: "Unique designs that reflect your brand identity, built from scratch without bloated templates.",
        },
        {
          title: "Responsive & Mobile-First",
          description: "Flawless experience across all devices, ensuring your site looks great on desktops, tablets, and phones.",
        },
        {
          title: "Speed & Performance Optimization",
          description: "Lightning-fast load times using modern frameworks like React and Next.js for better UX and SEO.",
        },
        {
          title: "CMS Integration",
          description: "Easy-to-manage content with headless CMS integration or custom admin panels.",
        },
      ]}
      benefits={[
        "Increased Conversion Rates",
        "Better Search Engine Rankings",
        "Enhanced User Experience",
        "Scalable Architecture",
        "Secure & Reliable Hosting",
      ]}
    />
  );
};

export default WebsiteDevelopment;
