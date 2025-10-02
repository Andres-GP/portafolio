import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Hero() {
  return (
    <section id="home" className="flex min-h-screen flex-col justify-center pt-16">
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-primary font-mono text-sm">Hi, my name is</p>
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">Alex Johnson</h1>
          <h2 className="text-4xl font-bold tracking-tight text-muted-foreground sm:text-5xl lg:text-6xl">
            I build things for the web.
          </h2>
        </div>
        <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
          I'm a full-stack developer specializing in building exceptional digital experiences. Currently, I'm focused on
          creating accessible, human-centered products with modern web technologies.
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" className="font-mono">
            View My Work
          </Button>
          <Button size="lg" variant="outline" className="font-mono bg-transparent">
            Get In Touch
          </Button>
        </div>
        <div className="flex gap-4 pt-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Twitter className="h-6 w-6" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="mailto:hello@example.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}
