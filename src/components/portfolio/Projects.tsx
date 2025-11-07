import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";

const projects = {
  websites: [
    {
      title: "YALF Africa",
      description: "Young African Leaders Fellowship platform",
      link: "https://yalf.africa",
    },
    {
      title: "Publishing Institute",
      description: "Educational publishing institution website",
      link: "https://publishing-institute.org",
    },
    {
      title: "LEAD Africa",
      description: "Leadership and development platform",
      link: "https://lead-africa.com",
    },
  ],
  "project design": [
    {
      title: "Brand Identity System",
      description: "Complete design system with brand guidelines and assets",
      link: "#",
    },
    {
      title: "Product UI/UX",
      description: "User interface and experience design for SaaS products",
      link: "#",
    },
  ],
  "ai automations": [
    {
      title: "AI Workflow Engine",
      description: "Custom automation system with n8n integration and AI agent orchestration",
      link: "#",
    },
    {
      title: "WhatsApp AI Agent",
      description: "Intelligent conversational agent with natural language understanding",
      link: "#",
    },
    {
      title: "Website Chatbot Platform",
      description: "Embeddable AI chatbot with custom knowledge base integration",
      link: "#",
    },
  ],
};

export const Projects = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Selected Work
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </div>

        <div className="space-y-16">
          {Object.entries(projects).map(([category, items]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-accent mb-6 capitalize">
                {category}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((project, index) => (
                  <a
                    key={index}
                    href={project.link}
                    target={project.link.startsWith('http') ? '_blank' : undefined}
                    rel={project.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-border group cursor-pointer h-full">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="text-lg font-semibold tracking-tight group-hover:text-accent transition-colors">
                            {project.title}
                          </h4>
                          <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
