import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

const UIUXDesign = () => (
  <ServiceTemplate
    title="UI / UX Design"
    subtitle="Intuitive & Engaging User Experiences"
    description="We design user-centric interfaces that not only look beautiful but also provide seamless intuitive experiences. From wireframing to high-fidelity prototypes, we craft designs that users love."
    features={[
      { title: "User Research & Personas", description: "Understanding your audience to design for their needs." },
      { title: "Wireframing & Prototyping", description: "Visualizing the structure and flow before implementation." },
      { title: "Visual Design System", description: "Creating consistent and scalable design languages." },
      { title: "Usability Testing", description: "Validating designs with real users to ensure effectiveness." },
    ]}
    benefits={["Higher User Retention", "Reduced Development Costs", "Increased Customer Satisfaction", "Stronger Brand Identity"]}
  />
);
export default UIUXDesign;
