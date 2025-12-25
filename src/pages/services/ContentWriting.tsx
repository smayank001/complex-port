import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

const ContentWriting = () => (
  <ServiceTemplate
    title="Blog & Content Writing"
    subtitle="Words That Engage & Convert"
    description="Content is king. We create compelling written content that establishes your authority, educates your audience, and drives them to take action."
    features={[
      { title: "SEO Blog Posts", description: "Articles dealing with industry topics to drive organic traffic." },
      { title: "Website Copywriting", description: "Persuasive text for landing pages and service descriptions." },
      { title: "Technical Writing", description: "Clear and concise documentation for complex products." },
      { title: "Email Newsletters", description: "Engaging updates to keep your audience connected." },
    ]}
    benefits={["Established Thought Leadership", "Improved SEO Rankings", "Better Customer Education", "Increased Trust"]}
  />
);
export default ContentWriting;
