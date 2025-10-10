import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Experience } from "@/components/experience";

vi.mock("@/components/ui/card", () => ({
  Card: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="card">{children}</div>
  ),
}));

describe("<Experience />", () => {
  it("renders all experience cards", () => {
    render(<Experience />);
    const cards = screen.getAllByTestId("card");
    expect(cards.length).toBe(4);
  });

  it("renders each job title and company correctly", () => {
    render(<Experience />);

    expect(screen.getByText("Frontend Developer")).toBeInTheDocument();
    expect(screen.getByText("Freelance")).toBeInTheDocument();

    expect(screen.getByText("Front-End Developer")).toBeInTheDocument();
    expect(screen.getByText("A&L Software")).toBeInTheDocument();
  });

  it("renders periods for each experience", () => {
    render(<Experience />);
    expect(
      screen.getByText(/March 2025 – Present · Remote/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Jan 2020 – Dec 2021 · Remote/i)
    ).toBeInTheDocument();
  });

  it("renders at least one description item per experience", () => {
    render(<Experience />);
    expect(
      screen.getByText(/Lead project planning and architecture design/i)
    ).toBeInTheDocument();

    expect(
      screen.getByText(/Developed and optimized large-scale web applications/i)
    ).toBeInTheDocument();
  });

  it("renders micro-frontends and micro-services tags", () => {
    render(<Experience />);
    expect(screen.getAllByText("Micro-Frontends").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Micro-Services").length).toBeGreaterThan(0);
  });

  it("matches the snapshot structure", () => {
    const { container } = render(<Experience />);
    expect(container).toMatchSnapshot();
  });
});
