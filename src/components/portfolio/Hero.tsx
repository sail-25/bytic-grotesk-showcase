import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="space-y-4">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              AI Engineer
            </p>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none">
              Building intelligent
              <br />
              <span className="text-accent">automation</span>
            </h1>
          </div>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl font-light leading-relaxed">
            AI agents, workflow automation, RAG systems, and modern web experiences—from n8n to custom builds.
          </p>
          
          <div className="flex gap-4 pt-4">
            <Button 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground group"
            >
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
            >
              View work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
