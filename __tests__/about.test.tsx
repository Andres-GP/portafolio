import React from "react";

import { render, screen } from "@testing-library/react";
import { About } from "@/components/about";

describe("About component", () => {
  it("renders the main title with correct text", () => {
    render(<About />);
    const title = screen.getByText(/about me/i);
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("H2");
  });

  it("renders both descriptive paragraphs", () => {
    render(<About />);
    const paragraphs = screen.getAllByText(/web|developer|project|digital/i);
    expect(paragraphs.length).toBeGreaterThanOrEqual(2);
  });

  it("renders the technologies title inside the card", () => {
    render(<About />);
    const cardTitle = screen.getByText(/technologies i work with/i);
    expect(cardTitle).toBeInTheDocument();
    expect(cardTitle.tagName).toBe("H3");
  });

  it("renders the list of skills correctly", () => {
    render(<About />);
    const skills = [
      // Languages
      "JavaScript",
      "TypeScript",
      "Python",
      // Databases
      "PostgreSQL",
      "MongoDB",
      "SQL",
      "Supabase",
      // Frontend
      "React",
      "Next.js",
      "Redux",
      "HTML5",
      "CSS3",
      "Jest",
      "React Testing Library",
      // Cloud
      "OCI",
      "AWS",
      "Docker",
      // UI & Styling
      "Material UI",
      "Tailwind CSS",
      "Sass",
      "Ant Design",
      "Element UI",
      "Semantic UI",
      "Bootstrap",
      "Figma",
      "Adobe Suite",
      // Data & Analytics
      "Pandas",
      "NumPy",
      "SciPy",
      "statsmodels",
      "scikit-learn",
      "Matplotlib",
      "Jupyter",
      "Quantitative Research & Development",
      // Backend
      "Node.js",
      "Express.js",
      "FastAPI",
      "Pytest",
      // Tools & AI
      "Git",
      "GitLab",
      "GitHub",
      "Copilot",
      "v0",
      "ChatGPT",
      "Gemini",
      "Cursor",
      "DeepSeek",
      "Claude Code",
      "MCP",
    ];

    for (const skill of skills) {
      const skillItem = screen.getByText(skill);
      expect(skillItem).toBeInTheDocument();
    }
  });

  it("renders bullet icons (▹) next to each skill", () => {
    render(<About />);
    const bullets = screen.getAllByText("▹");
    expect(bullets.length).toBeGreaterThan(0);
    // Debe haber uno por cada skill
    const skills = screen.getAllByRole("listitem");
    expect(bullets.length).toBe(skills.length);
  });

  it("renders a Card element wrapping the skills", () => {
    render(<About />);
    const card = screen.getByText(/technologies i work with/i).closest("div");
    expect(card).toBeInTheDocument();
  });
});
