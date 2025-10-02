import { Card } from "@/components/ui/card"

export function Experience() {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "Tech Solutions Inc.",
      period: "2022 - Present",
      description: [
        "Lead development of customer-facing web applications using React, Next.js, and Node.js",
        "Collaborate with cross-functional teams to define, design, and ship new features",
        "Mentor junior developers and conduct code reviews",
        "Improved application performance by 40% through optimization techniques",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Agency Co.",
      period: "2020 - 2022",
      description: [
        "Built and maintained web applications for various clients",
        "Implemented responsive designs and ensured cross-browser compatibility",
        "Integrated third-party APIs and services",
        "Participated in agile development processes",
      ],
      technologies: ["JavaScript", "React", "Express", "MongoDB", "AWS"],
    },
    {
      title: "Junior Developer",
      company: "StartUp Ventures",
      period: "2018 - 2020",
      description: [
        "Developed features for the company's main product",
        "Fixed bugs and improved application stability",
        "Wrote unit and integration tests",
        "Collaborated with designers to implement UI/UX improvements",
      ],
      technologies: ["JavaScript", "Vue.js", "Python", "Django", "MySQL"],
    },
  ]

  return (
    <section id="experience" className="py-24">
      <div className="space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-primary font-mono text-xl">02.</span> Experience
          </h2>
          <div className="h-px w-64 bg-border" />
        </div>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 hover:border-primary/50 transition-colors">
              <div className="space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary">{exp.company}</p>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">{exp.period}</p>
                </div>
                <ul className="space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-1">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="rounded-full bg-primary/10 px-3 py-1 text-xs font-mono text-primary">
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
  )
}
