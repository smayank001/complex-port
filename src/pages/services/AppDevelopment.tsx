import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

const AppDevelopment = () => {
  return (
    <ServiceTemplate
      title="App Development"
      subtitle="Native & Cross-Platform Mobile Apps"
      description="Transform your ideas into powerful mobile applications. We develop intuitive, high-performance apps for iOS and Android that users love to engage with."
      features={[
        {
          title: "Cross-Platform Development",
          description: "Build once, deploy everywhere using React Native and Flutter for cost-effective solutions.",
        },
        {
          title: "Native Performance",
          description: "Smooth animations and fast response times that feel truly native.",
        },
        {
          title: "Intuitive UI/UX",
          description: "User-centric design principles to ensure high retention and engagement.",
        },
        {
          title: "Backend Integration",
          description: "Robust API development and cloud integration for real-time data sync.",
        },
      ]}
      benefits={[
        "Reach Wider Audience (iOS & Android)",
        "Offline Capabilities",
        "Push Notifications for Engagement",
        "Monetization Opportunities",
        "Brand Loyalty Building",
      ]}
    />
  );
};

export default AppDevelopment;
