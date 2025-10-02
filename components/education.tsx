import { Card } from "@/components/ui/card";

export function Education() {
  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2014 - 2018",
      description: [
        "Graduated with honors, GPA: 3.8/4.0",
        "Focused on software engineering, algorithms, and data structures",
        "Completed senior project on machine learning applications",
        "Active member of the Computer Science Club",
      ],
      achievements: [
        "Dean's List",
        "Best Project Award",
        "Scholarship Recipient",
      ],
    },
    {
      degree: "Relevant Certifications",
      school: "Professional Development",
      period: "2018 - Present",
      description: [
        "AWS Certified Solutions Architect",
        "Google Cloud Professional Developer",
        "MongoDB Certified Developer",
        "Completed various online courses in advanced React and system design",
      ],
      achievements: ["Multiple Industry Certifications"],
    },
  ];

  return (
    <section id="education" className="py-24">
      <div className="space-y-12">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            <span className="text-primary font-mono text-xl">03.</span>{" "}
            Education
          </h2>
          <div className="h-px w-64 bg-border" />
        </div>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="p-6 hover:border-primary/50 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">
                      {edu.degree}
                    </h3>
                    <p className="text-primary">{edu.school}</p>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono">
                    {edu.period}
                  </p>
                </div>
                <ul className="space-y-2">
                  {edu.description.map((item, i) => (
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
                  {edu.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className="rounded-full bg-primary/10 px-3 py-1 text-xs font-mono text-primary"
                    >
                      {achievement}
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
