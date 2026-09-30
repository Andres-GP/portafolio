import React from "react";
import { Card } from "@/components/ui/card";

export function Experience() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Freelance",
      period: "June 2025 – Present · Remote",
      description: [
        // Problem or challenge
        "Clients needed scalable, high-performing web applications delivered independently, without the safety net of a large in-house team — requiring end-to-end ownership from architecture to deployment.",
        // Solution
        "I designed and built full-stack solutions using React.js, Next.js, and Node.js, deploying on AWS and Oracle Cloud Infrastructure (OCI), and integrating micro-frontend and micro-service architectures with automated CI/CD pipelines via GitHub Actions.",
        // Outcome or impact
        "Delivered reliable, production-ready applications with strong performance and maintainability, meeting client requirements independently across multiple projects.",
        // Learning & personal growth
        "Working as a freelancer sharpened my end-to-end ownership skills — from technical decision-making to client communication — and deepened my expertise across the full stack, including Python and FastAPI for backend services.",
      ],
      technologies: [
        "HTML5",
        "React.js",
        "Amazon Web Services (AWS)",
        "Jest",
        "Material-UI",
        "FastAPI",
        "TypeScript",
        "Pytest",
        "Sass",
        "Oracle Cloud Infrastructure (OCI)",
        "English",
        "CSS",
        "Node.js",
        "Express.js",
        "Webpack",
        "Figma",
        "GitHub",
        "JavaScript",
        "Next.js",
        "Python",
        "Git",
      ],
    },
    {
      title: "Web UI Developer (Semi-Senior Advanced)",
      company: "Globant",
      period: "Oct 2023 – March 2025 · Remote",
      description: [
        // Problem or challenge
        "As client engagements scaled, there was a need for someone to bridge technical execution with client relationships, while also growing junior team members and keeping project delivery on track.",
        // Solution
        "I led collaboration with clients throughout development, testing, and optimization; mentored and coached team members with regular feedback; guided technical exercises to identify improvement opportunities; and drove project planning processes. I also stepped in as Senior Frontend Developer on select client accounts using React.js, Next.js, AWS, and Azure.",
        // Outcome or impact
        "Strengthened client relationships through consistent, high-quality delivery, while helping team members grow technically — improving both project outcomes and team capability over time.",
        // Learning & personal growth
        "This role developed my leadership and mentoring skills, taught me how to balance technical delivery with stakeholder management, and gave me hands-on experience with project planning and cross-cloud architectures (AWS and Azure).",
      ],
      technologies: [
        "HTML5",
        "React.js",
        "Amazon Web Services (AWS)",
        "Mentoring",
        "Jest",
        "Material-UI",
        "TypeScript",
        "Sass",
        "English",
        "GitLab",
        "CSS",
        "Node.js",
        "Express.js",
        "Webpack",
        "Figma",
        "GitHub",
        "JavaScript",
        "Next.js",
        "Git",
        "Docker",
      ],
    },
    {
      title: "Front-End Software Engineer",
      company: "Kovah",
      period: "Dec 2021 – Oct 2023 · Remote",
      description: [
        // Problem or challenge
        "The company's main product needed to keep growing in complexity and scale, while the team itself needed to expand and its design/UX processes needed continuous iteration.",
        // Solution
        "I developed, tested, and optimized the front-end of large-scale web applications using React with Sass, Redux, Sagas, Bootstrap, Tailwind, Material UI, Semantic UI, Yup, Formik, Emotion, Rollup.js, Framer, and Webpack. I coordinated closely with the team and Project Manager, led interview processes to grow the team, and supervised UX/UI design iterations in Figma.",
        // Outcome or impact
        "Contributed to a more robust and scalable core product, helped grow the engineering team through structured hiring, and improved the product's design consistency through ongoing UX/UI iteration.",
        // Learning & personal growth
        "This role gave me hands-on experience with state management at scale (Redux, Sagas), deepened my front-end tooling knowledge, and introduced me to technical hiring and cross-functional design collaboration.",
      ],
      technologies: [
        "HTML5",
        "React.js",
        "Amazon Web Services (AWS)",
        "Material-UI",
        "TypeScript",
        "Semantic UI",
        "Sass",
        "English",
        "CSS",
        "Bootstrap",
        "Webpack",
        "Figma",
        "GitHub",
        "Redux.js",
        "JavaScript",
        "Stripe",
        "Front-End Development",
        "Git",
        "Docker",
      ],
    },
    {
      title: "Software Developer & Team Lead",
      company: "A&L Software",
      period: "Jan 2021 – Dec 2021 · Remote",
      description: [
        // Problem or challenge
        "Projects required close coordination across team members, Project Managers, stakeholders, and clients to deliver solutions that met evolving business needs.",
        // Solution
        "I developed, tested, and optimized solutions using React (with Jest, Ant UI, Semantic UI, Bootstrap, Formik, Tailwind, Webpack, Next.js) and Node.js with Express, while coordinating directly with all stakeholders to align technical execution with business goals.",
        // Outcome or impact
        "Delivered consistent, well-tested solutions that met stakeholder expectations, strengthening trust with clients and improving cross-team communication.",
        // Learning & personal growth
        "This role built my foundation in full-stack development and taught me how to communicate effectively across technical and non-technical stakeholders — a skill that shaped how I lead client relationships today.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind",
        "Bootstrap",
        "Jest",
        "Semantic UI",
        "Sass",
        "Node.js",
        "Express.js",
        "Figma",
        "Git",
        "Github",
        "Redux",
        "Material-UI",
        "Formik",
        "Webpack",
        "HTML5",
        "CSS",
        "Fullstack Development",
        "Mentorship",
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
