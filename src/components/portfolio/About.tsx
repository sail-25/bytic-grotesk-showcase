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
              I'm a web developer focused on creating minimal, impactful digital experiences. 
              My approach combines clean design principles with modern web technologies.
            </p>
            <p>
              With expertise in React, TypeScript, and modern CSS frameworks, I transform 
              ideas into polished, performant applications that users love to interact with.
            </p>
            <p>
              When I'm not coding, you'll find me exploring design systems, staying current 
              with web standards, and refining my craft.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
