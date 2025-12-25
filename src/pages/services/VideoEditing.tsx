import { ServiceTemplate } from "@/components/templates/ServiceTemplate";

const VideoEditing = () => (
  <ServiceTemplate
    title="Video Editing"
    subtitle="Professional Visual Storytelling"
    description="Engage your audience with high-quality video content. From social media reels to corporate presentations, we turn raw footage into compelling visual narratives."
    features={[
      { title: "Corporate & Promo Videos", description: "Polished videos that communicate your brand value professionally." },
      { title: "Social Media Reels/Shorts", description: "Trendy, fast-paced edits designed for virality." },
      { title: "Motion Graphics & VFX", description: "Adding dynamic elements to enhance visual appeal." },
      { title: "Color Grading & Sound Design", description: "Cinematic finishing touches for a premium look." },
    ]}
    benefits={["Higher Engagement Rates", "Improved Brand Perception", "More Social Shares", "Clearer Communication"]}
  />
);
export default VideoEditing;
