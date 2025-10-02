import { Card } from "@/components/ui/card"

export function About() {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "Git",
  ]

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
              Hello! I'm Alex, a passionate developer who loves creating things that live on the internet. My interest
              in web development started back in 2018 when I decided to try building my first website — turns out
              hacking together a custom WordPress theme taught me a lot about HTML & CSS!
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Fast-forward to today, and I've had the privilege of working at a start-up, a large corporation, and a
              digital agency. My main focus these days is building accessible, inclusive products and digital
              experiences for a variety of clients.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I also recently launched a course that covers everything you need to build a web app with the Spotify API
              using Node & React.
            </p>
          </div>
          <Card className="p-6">
            <h3 className="mb-4 text-xl font-semibold text-foreground">Technologies I work with:</h3>
            <ul className="grid grid-cols-2 gap-2">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  )
}
