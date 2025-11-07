import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Momentum",
    description: "A productivity platform with task management, time tracking, and analytics",
    tech: ["React", "TypeScript", "Supabase"],
    link: "#",
  },
  {
    title: "Nexus",
    description: "Real-time collaboration tool for distributed teams",
    tech: ["Next.js", "WebSockets", "PostgreSQL"],
    link: "#",
  },
  {
    title: "Prism",
    description: "Design system and component library for modern web applications",
    tech: ["React", "Storybook", "Tailwind"],
    link: "#",
  },
];

export const Projects = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Selected Work
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-lg transition-all duration-300 border-border group cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-4 flex-1">
                  <h3 className="text-2xl font-semibold tracking-tight group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="h-6 w-6 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
