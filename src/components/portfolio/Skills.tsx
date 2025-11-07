const skills = {
  "AI & Automation": ["RAG", "AI Agents", "LangChain", "OpenAI", "n8n", "Workflow Automation"],
  "Development": ["React", "TypeScript", "Next.js", "Node.js", "REST APIs"],
  "AI Solutions": ["Chatbots", "WhatsApp Agents", "Internal AI Systems", "Vector Databases"],
  "Design": ["Web Design", "Product Design", "Figma", "UI/UX", "Tailwind CSS"],
};

export const Skills = () => {
  return (
    <section id="skills" className="py-32 px-6 bg-card">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h3 className="text-xl font-semibold tracking-tight text-accent">
                {category}
              </h3>
              <ul className="space-y-2">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="text-muted-foreground flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
