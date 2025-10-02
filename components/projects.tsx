import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, shopping cart, checkout process, and payment integration. Built with modern web technologies for optimal performance.",
      image: "/ecommerce-dashboard.png",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, team workspaces, and project tracking. Features drag-and-drop interface and deadline notifications.",
      image: "/task-management-app.png",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Redux"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard that displays current conditions, forecasts, and weather maps. Includes location search and favorite locations feature.",
      image: "/weather-dashboard-interface.png",
      technologies: ["React", "OpenWeather API", "Chart.js", "CSS Modules"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Portfolio CMS",
      description:
        "A headless CMS for managing portfolio content with a custom admin panel. Supports markdown, image uploads, and dynamic page generation.",
      image: "/cms-admin-panel.jpg",
      technologies: ["Next.js", "Sanity", "TypeScript", "Vercel"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  return (
    <section id="projects" className="py-24">
      <div className="space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-primary font-mono text-xl">03.</span> Projects
          </h2>
          <div className="h-px w-64 bg-border" />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:border-primary/50 transition-colors">
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
