import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full" />
          </div>

          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            I'm always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, feel free to reach out.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button 
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
              asChild
            >
              <a href="mailto:hello@bytic.dev" className="inline-flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                hello@bytic.dev
              </a>
            </Button>
          </div>

          <div className="flex gap-4 pt-8">
            {socials.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="hover:bg-accent hover:text-accent-foreground transition-colors"
                asChild
              >
                <a href={social.href} aria-label={social.label} target="_blank" rel="noopener noreferrer">
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-32 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2024 bytic. Crafted with precision.</p>
        </div>
      </div>
    </section>
  );
};
