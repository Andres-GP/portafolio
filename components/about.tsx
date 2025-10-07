import { Card } from "@/components/ui/card";

export function About() {
  const skills = [
    "Next.js",
    "React",
    "Redux",
    "HTML5",
    "CSS3",
    "Javascript",
    "Typescript",
    "Sass",
    "Material UI",
    "Tailwind",
    "Ant Design",
    "Bootstrap",
    "Semmantic UI",
    "Element UI",
    "Cypress",
    "Jest",
    "React Testing Library",
    "Nodejs",
    "Express.js",
    "AWS",
    "Azure",
    "Git",
    "Gitlab",
    "Github",
    "Docker",
    "Adobe",
    "Figma",
  ];

  return (
    <section id="about" className="py-24">
      <div className="space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-primary font-mono text-xl">01.</span> About Me
          </h2>
          <div className="h-px w-64 bg-border" />
        </div>
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm Andrés, a passionate developer who loves bringing ideas
              to life through clean, elegant code and thoughtful design. My
              journey into web development began many years ago when I decided
              to experiment with creating my very first website — a small
              project that quickly grew into a deep curiosity for how things
              work on the web. Since then, I've been continuously learning,
              exploring new technologies, and improving my craft one project at
              a time.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Fast-forward to today, and I’ve had the privilege of collaborating
              with talented teams across different companies and industries. My
              main focus now is on building accessible, inclusive, and
              high-performing digital experiences that not only look good but
              also solve real problems for real people. I’m driven by curiosity,
              precision, and the desire to create products that blend usability,
              performance, and creativity — and I’m always excited about what’s
              coming next in the ever-evolving world of web development.
            </p>
          </div>
          <Card className="p-6 hover:border-primary/50 transition-colors">
            <h3 className="mb-4 text-xl font-semibold text-foreground">
              Technologies I work with:
            </h3>
            <ul className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-primary">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
