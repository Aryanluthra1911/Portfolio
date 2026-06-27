import SectionBlock from "./SectionBlock";
import AnimatedAvatar from "./AnimatedAvatar";
import { BookOpen } from "lucide-react";

const AboutSection = () => (
  <SectionBlock id="about" title="About me">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
      <AnimatedAvatar />
      <div className="flex-1">
        <p className="body-text max-w-2xl">
          I'm Aryan Luthra, a Full-Stack Developer passionate about building scalable, high-performance web applications with modern technologies like Next.js, React.js, Node.js, and PostgreSQL.
        </p>
        <p className="body-text max-w-2xl mt-6">
          I enjoy transforming ideas into intuitive digital products by combining clean architecture, responsive design, and efficient backend systems. My experience includes developing AI-powered applications, real-time collaboration platforms, authentication systems, and interactive user interfaces.
        </p>
        <p className="body-text max-w-2xl mt-6 mb-8">
          I continuously explore new technologies, solve challenging problems, and focus on writing clean, maintainable code that delivers exceptional user experiences. My goal is to build products that are not only visually appealing but also fast, reliable, and impactful.
        </p>
      </div>
    </div>
  </SectionBlock>
);

export default AboutSection;
