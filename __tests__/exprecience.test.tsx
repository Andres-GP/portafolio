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

  it("renders periods for each experience", () => {
    render(<Experience />);
    expect(
      screen.getByText(/June 2025 – Present · Remote/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Jan 2021 – Dec 2021 · Remote/i),
    ).toBeInTheDocument();
  });

  it("renders at least one description item per experience", () => {
    render(<Experience />);
    expect(
      screen.getByText(
        /As client engagements scaled, there was a need for someone to bridge technical execution with client relationships, while also growing junior team members and keeping project delivery on track./i,
      ),
    ).toBeInTheDocument();

    expect(
      screen.getByText(
        /I led collaboration with clients throughout development, testing, and optimization; mentored and coached team members with regular feedback; guided technical exercises to identify improvement opportunities; and drove project planning processes. I also stepped in as Senior Frontend Developer on select client accounts using React.js, Next.js, AWS, and Azure./i,
      ),
    ).toBeInTheDocument();
  });
});
