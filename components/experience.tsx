import React from "react";
import { Card } from "@/components/ui/card";

export function Experience() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Freelance",
      period: "March 2025 – Present · Remote",
      description: [
        "Lead project planning and architecture design for client applications.",
        "Develop and design high-quality web apps with React.js, Next.js, and modern technologies.",
        "Implement scalable micro-frontends and micro-services to ensure flexibility and performance.",
        "Collaborate with clients to deliver intuitive, responsive, and efficient web solutions.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "AWS",
        "Azure",
        "Node.js",
        "TypeScript",
        "Jest",
        "Express.js",
        "Material-UI",
        "Git",
        "GitHub",
        "GitLab",
        "Figma",
        "HTML5",
        "CSS",
        "Sass",
        "Micro-Frontends",
        "Micro-Services",
      ],
    },
    {
      title: "Web UI Developer (Semi-Senior Advanced)",
      company: "Globant",
      period: "Oct 2023 – March 2025 · Remote",
      description: [
        "Led collaboration with clients through the full development lifecycle — from testing to optimization.",
        "Coached and mentored developers, providing technical feedback and promoting best practices.",
        "Participated in agile project planning and delivery processes to meet product goals.",
        "Drove UI performance improvements and enhanced accessibility in production applications.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Jest",
        "Material-UI",
        "Azure",
        "AWS",
        "GitLab",
        "Agile",
        "HTML5",
        "CSS",
        "Sass",
        "Micro-Frontends",
        "Micro-Services",
      ],
    },
    {
      title: "Front-End Developer & UX/UI Designer",
      company: "Kovah",
      period: "Dec 2021 – Oct 2023 · Remote",
      description: [
        "Developed and optimized large-scale web applications using React with Redux, Sagas, and Tailwind.",
        "Supervised UX/UI design processes to improve usability and visual consistency using Figma.",
        "Coordinated with team members and project managers for continuous delivery and feature planning.",
        "Led technical interviews to expand and strengthen the development team.",
      ],
      technologies: [
        "React.js",
        "Redux",
        "Sass",
        "Tailwind",
        "Material-UI",
        "Semantic UI",
        "Formik",
        "Yup",
        "Emotion",
        "Framer",
        "Rollup.js",
        "Webpack",
        "HTML5",
        "CSS",
        "TypeScript",
        "JavaScript",
        "Micro-Frontends",
        "Micro-Services",
        "Figma",
      ],
    },
    {
      title: "Front-End Developer",
      company: "A&L Software",
      period: "Jan 2020 – Dec 2021 · Remote",
      description: [
        "Developed, tested, and optimized React-based applications using modern front-end frameworks.",
        "Collaborated with project managers, stakeholders, and clients to deliver high-quality solutions.",
        "Implemented responsive UIs and ensured cross-browser compatibility using modern web standards.",
        "Worked with Next.js, Tailwind, and Ant Design to enhance performance and maintainability.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Axios",
        "Ant Design",
        "Tailwind",
        "Bootstrap",
        "Formik",
        "Webpack",
        "HTML5",
        "CSS",
      ],
    },
  ];

  return (
    <section id="experience" className="py-24">
      <div className="space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-primary font-mono text-xl">02.</span>{" "}
            Experience
          </h2>
          <div className="h-px w-64 bg-border" />
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 hover:border-primary/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">
                    {exp.period}
                  </p>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="text-primary mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-mono text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
