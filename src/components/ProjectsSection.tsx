import { Github, ExternalLink } from "lucide-react";
import SectionBlock from "./SectionBlock";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "WorkXFlow – AI Project Management Platform",
    isNew: true,
    description:
      "An AI-powered project management and collaboration platform with role-based access control, Kanban task management, real-time team chat, analytics dashboards, and Gemini AI integration for intelligent project assistance.",
    tags: [
      "Next.js",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "WebSockets",
      "Gemini AI",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Aryanluthra1911/WorkXFlow",
    liveUrl: "https://workxflow-mu.vercel.app/",
  },
  {
    title: "CodeQuest – Gamified Learning Platform",
    description:
      "A gamified coding platform featuring XP levels, leaderboards, personalized learning paths, secure authentication, and AI-powered coding practice to make programming more interactive, engaging, and accessible for learners of all levels.",
    tags: [
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "NextAuth",
      "Gemini AI",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Aryanluthra1911/codequest-ai",
    liveUrl: "https://codequest-two.vercel.app/",
  },
  {
    title: "Trackify – Jewellery Billing System",
    description:
      "A full-stack GST-compliant jewellery billing and sales management platform built for efficient business operations. It includes secure JWT authentication, inventory management, customer billing, sales analytics, and detailed reporting to streamline daily transactions and improve business insights.",
    tags: [
      "React",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
      "JWT",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Aryanluthra1911/Trackify",
    liveUrl: "https://trackify-eta.vercel.app/",
  },
];

const ProjectsSection = () => (
  <SectionBlock id="projects" title="Projects">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group relative border-2 border-black p-5 flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 bg-white"
        >
          {"isNew" in project && project.isNew && (
            <div className="absolute -top-3 -right-3 bg-black text-white px-2 py-1 text-[10px] font-black uppercase tracking-tighter border-2 border-black z-10 rotate-12">
              LATEST WORK
            </div>
          )}
          <div>
            <h3 className="text-xl font-black text-foreground group-hover:underline decoration-4 underline-offset-4">
              {project.title}
            </h3>
            <p className="body-text mt-4 text-sm font-normal">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="font-mono text-[10px] font-bold border border-black/10 px-1.5 py-0"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-black/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
            >
              <Github className="w-3.5 h-3.5" />
              Source
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-black bg-white text-[10px] font-black uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-black hover:text-white"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Live Demo
            </a>
          </div>
        </div>
      ))}
    </div>
  </SectionBlock>
);

export default ProjectsSection;
