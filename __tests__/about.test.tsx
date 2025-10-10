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
