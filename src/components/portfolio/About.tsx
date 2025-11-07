export const About = () => {
  return (
    <section id="about" className="py-32 px-6 bg-card">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              About Me
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I specialize in AI automation and intelligent systems, building everything from 
              workflow automations with n8n to custom AI agents and RAG implementations.
            </p>
            <p>
              My work spans website chatbots, WhatsApp agents, and internal AI solutions for companies. 
              I also design and develop modern web applications and products with a focus on clean, 
              user-centric interfaces.
            </p>
            <p>
              As a thought leader in the AI automation space, I combine technical expertise with 
              strategic thinking to deliver solutions that transform how businesses operate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
