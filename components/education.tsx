import React from "react";
import { Card } from "@/components/ui/card";

export function Education() {
  const education = [
    {
      degree: "MicroMasters in Finance (MMS)",
      school: "Massachusetts Institute of Technology (MITx)",
      period: "2025 – Present",
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
      degree: "MicroMasters in Statistics and Data Science (MMS)",
      school: "Massachusetts Institute of Technology (MITx)",
      period: "2025 – Present",
      description: [
        "MITx-certified advanced international program focused on statistical reasoning, data analysis, and applied machine learning using real-world datasets.",
        "Covered probability theory, statistical inference, linear models, optimization methods, and core machine learning algorithms.",
        "Emphasized data-driven decision making through rigorous mathematical foundations and computational implementation in Python.",
        "Engaged in hands-on projects involving data cleaning, exploratory data analysis, predictive modeling, and evaluation of statistical and machine learning models.",
      ],
      achievements: [
        "Completed advanced coursework in probability, statistics, and applied machine learning",
        "Developed end-to-end data analysis and modeling projects using Python",
      ],
    },
    {
      degree: "Bachelor’s Degree in Multimedia Engineering",
      school: "Universidad Nacional Abierta y a Distancia - UNAD Colombia",
      period: "2026 – Present",
      description: [
        "Undergraduate engineering program focused on the design, development, and integration of multimedia systems combining software engineering, digital content, and interactive technologies.",
        "Covered fundamentals of programming, data structures, software engineering, databases, and web technologies, alongside multimedia systems, digital graphics, and user interaction.",
        "Emphasized applied engineering practices through project-based learning in areas such as web applications, multimedia platforms, and interactive systems.",
        "Developed technical and analytical skills for building scalable digital products, integrating frontend, backend, and multimedia components.",
      ],
      achievements: [],
    },
    {
      degree:
        "Double Bachellor's Degree in Computer Engineering and Business Administration, Computer Engineering / Business Administration (ADE)",
      school: "Universitat Oberta de Catalunya - UOC",
      period: "2026 – Present",
      description: [
        "Double Bachellor's Degree undergraduate program integrating computer engineering and business administration into a single 360-ECTS curriculum, combining technical systems",
        "development with strategic business management. The program covers core foundations in programming, algorithms, databases, software engineering, computer networks, and",
        "artificial intelligence, alongside financial accounting, corporate strategy, marketing, and business analytics. It emphasizes an interdisciplinary approach that bridges",
        "technology and management, preparing graduates to design and build software solutions while also leading teams, driving business decisions, and launching technology-based",
        "ventures — strengthening both technical and executive competencies applicable to leadership roles in engineering, product, and entrepreneurship.",
      ],
      achievements: [],
    },
    {
      degree: "Certifications",
      school: "Professional Development",
      period: "2020 – 2023",
      description: [
        "Oracle Cloud Infrastructure AI Foundations Associate (1Z0-1122-26)",
        "BigQuery for Data Analysts (Google)",
        "AWS Cloud Support Associate Professional Certificate (Amazon Web Services)",
        "Google Business Intelligence Professional Certificate (Google)",
        "Machine Learning for Trading Specialization (New York Institute of Finance)",
        "Investment Management with Python and Machine Learning Specialization (EDHEC Business School)",
        "Data Engineering, Big Data, and Machine Learning on GCP Specialization (Google)",
        "Machine Learning and Reinforcement Learning in Finance Specialization (New York University)",
        "Market Microstructure (Università degli Studi di Napoli Federico II)",
        "B2 level of English (Centro Colombo Americano)",
        "Applied Data Science with Python Specialization (University of Michigan)",
        "Business Executive – Learning Path (19 certified courses) (Platzi)",
        "Leadership (Team Management) – Learning Path (19 certified courses) (Platzi)",
        "Graphic Designer – Learning Path (31 certified courses) (Platzi)",
        "UX UI Design - Learning Path (20 certified courses) (Platzi)",
      ],

      achievements: [
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
            Education & Certifications
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
