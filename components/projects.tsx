import React from "react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "SocialApp",
      description:
        "This is a fully-featured Next.js application built with TypeScript, deployed on Vercel. It supports internationalization (i18n), API integration with Axios, Tailwind CSS, Firebase Authentication, Redux for state management, and includes both unit tests and component tests.",
      image: "/previews/social-app.png",
      technologies: [
        "Next.js",
        "Typescript",
        "React",
        "Firebase",
        "Axios",
        "I18n",
        "Redux",
        "Jest",
        "React testing library",
        "Sass",
        "Tailwind",
        "React Hooks",
        "Custom Hooks",
        "Vercel",
      ],
      github: "https://github.com/Andres-GP/SocialApp",
      demo: "https://social-app-puce-delta.vercel.app/es",
    },
    {
      title: "Realestate",
      description:
        "Real Estate page built with Next.js + TypeScript, using TailwindCSS, modern architecture with hooks, context, and composable UI.",
      image: "/previews/realestate.png",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Radix UI",
        "Geist",
        "Lucide Icons",
        "next-themes",
        "React Hooks",
        "Custom Hooks",
        "vitest",
        "Jest",
        "React testing library",
      ],
      github: "https://github.com/Andres-GP/realestate?tab=readme-ov-file",
      demo: "https://real-state-seven-tau.vercel.app/",
    },
    {
      title: "Weather",
      description:
        "Weather is a modern web application to check detailed weather information anywhere in the world. The app uses the OpenWeather API and provides an interactive interface to search and view weather data.",
      image: "/previews/weather.png",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "TailwindCSS",
        "Radix UI",
        "Geist",
        "Lucide Icons",
        "React Hooks",
        "Custom Hooks",
        "vitest",
        "Jest",
        "React testing library",
      ],
      github: "https://github.com/Andres-GP/weather",
      demo: "https://weather-app-bay-seven-21.vercel.app/",
    },
    {
      title: "User Management System",
      description:
        "A complete user management application featuring authentication, and secure CRUD operations. Built for scalability and clarity in enterprise contexts.",
      image: "/previews/ums.png",
      technologies: [
        "Node.js",
        "Javascript",
        "Express",
        "MongoDB",
        "EJS",
        "Bootstrap",
        "JWT",
        "Jest",
        "Render",
      ],
      github: "https://github.com/Andres-GP/user-management-system",
      demo: "https://user-management-system-8r1h.onrender.com/",
    },
    {
      title: "Blog",
      description:
        "A dynamic and minimalist blog application with authentication, post creation, editing. Built with clean UI/UX and deployed on Render.",
      image: "/previews/node-blog.png",
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "EJS",
        "CSS",
        "JavaScript",
        "Render",
      ],
      github: "https://github.com/Andres-GP/Blog",
      demo: "https://blog-3rab.onrender.com/",
    },
  ];
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
            <Card
              key={index}
              className="group overflow-hidden hover:border-primary/50 transition-colors"
            >
              <div className="relative aspect-video overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="space-y-4 p-6">
                <h3 className="text-xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-mono text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
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
  );
}
