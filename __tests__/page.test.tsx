import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import { vi } from "vitest";

vi.mock("../components/hero", () => ({
  Hero: () => <div data-testid="hero">Hero</div>,
}));
vi.mock("../components/about", () => ({
  About: () => <div data-testid="about">About</div>,
}));
vi.mock("../components/experience", () => ({
  Experience: () => <div data-testid="experience">Experience</div>,
}));
vi.mock("../components/education", () => ({
  Education: () => <div data-testid="education">Education</div>,
}));
vi.mock("../components/projects", () => ({
  Projects: () => <div data-testid="projects">Projects</div>,
}));
vi.mock("../components/contact", () => ({
  Contact: () => <div data-testid="contact">Contact</div>,
}));
vi.mock("../components/navigation", () => ({
  Navigation: () => <div data-testid="navigation">Navigation</div>,
}));

describe("Home Page", () => {
  it("renders all main sections", () => {
    render(<Home />);

    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByTestId("hero")).toBeInTheDocument();
    expect(screen.getByTestId("about")).toBeInTheDocument();
    expect(screen.getByTestId("experience")).toBeInTheDocument();
    expect(screen.getByTestId("education")).toBeInTheDocument();
    expect(screen.getByTestId("projects")).toBeInTheDocument();
    expect(screen.getByTestId("contact")).toBeInTheDocument();
  });

  it("has a main container with expected class", () => {
    render(<Home />);
    const main = screen.getByRole("main");
    expect(main).toHaveClass("mx-auto max-w-7xl px-6 lg:px-8");
  });
});
