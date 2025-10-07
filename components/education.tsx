import { Card } from "@/components/ui/card";

export function Education() {
  const education = [
    {
      degree: "MicroMasters in Finance (MMS)",
      school: "Massachusetts Institute of Technology (MITx)",
      period: "May 2025 – Dec 2026",
      description: [
        "MITx-certified advanced international program combining rigorous financial theory with hands-on applications in investment, capital markets, and quantitative analysis.",
        "Covered asset valuation, risk management, algorithmic trading, corporate finance, and portfolio optimization techniques.",
        "Focused on strategic decision-making through the use of quantitative models and emerging technologies in global markets.",
        "Engaged in collaborative projects on financial analysis, portfolio management simulations, and asset valuation exercises.",
      ],
      achievements: [
        "Completed advanced coursework in quantitative trading and portfolio optimization",
        "Active participant in finance-related research and simulations",
      ],
    },
    {
      degree: "Certifications",
      school: "Professional Development",
      period: "2020 – 2023",
      description: [
        "Certified in advanced Front-End and Back-End JavaScript Development, including React.js, Vue.js, Angular, and Node.js.",
        "Completed specialized programs in UX/UI Design, Product Design, and Graphic Design, emphasizing usability and product strategy.",
        "Certified in Business Executive and Leadership (Team Management), focused on cross-functional collaboration and agile methodologies.",
        "Developed full-stack and mobile applications with React Native, Firebase, and modern web technologies.",
      ],
      achievements: [
        "Multiple verified certifications in development, design, and leadership.",
        "Recognized for continuous professional growth through technology-driven education.",
      ],
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
