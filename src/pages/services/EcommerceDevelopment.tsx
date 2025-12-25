import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

const EcommerceDevelopment = () => (
  <ServiceTemplate
    title="E-Commerce Development"
    subtitle="Scalable Online Stores That Sell"
    description="We build robust e-commerce platforms that drive sales and growth. Whether you need a simple shopify store or a complex custom marketplace, we have the expertise to deliver."
    features={[
      { title: "Custom Storefronts", description: "Unique shopping experiences tailored to your brand." },
      { title: "Payment Gateway Integration", description: "Secure and diverse payment options for your customers." },
      { title: "Inventory Management", description: "Streamlined systems to track stock and orders effortlessly." },
      { title: "Shopping Cart Optimization", description: "Reducing abandonment with smooth checkout flows." },
    ]}
    benefits={["Global Reach", "24/7 Sales Capability", "Data-Driven Insights", "Automated Sales Processes"]}
  />
);
export default EcommerceDevelopment;
