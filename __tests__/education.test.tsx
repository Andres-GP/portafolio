import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import React from "react";
import { Education } from "@/components/education";

vi.mock("@/components/ui/card", () => ({
  Card: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="card">{children}</div>
  ),
}));

describe("<Education />", () => {
  it("renders the section title correctly", () => {
    render(<Education />);
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("03.")).toBeInTheDocument();
  });

  it("renders the correct number of education cards", () => {
    render(<Education />);
    const cards = screen.getAllByTestId("card");
    expect(cards).toHaveLength(2);
  });

  it("renders each education entry with degree, school, and period", () => {
    render(<Education />);

    expect(
      screen.getByText("MicroMasters in Finance (MMS)")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Massachusetts Institute of Technology (MITx)")
    ).toBeInTheDocument();
    expect(screen.getByText("May 2025 – Dec 2026")).toBeInTheDocument();

    expect(screen.getByText("Certifications")).toBeInTheDocument();
    expect(screen.getByText("Professional Development")).toBeInTheDocument();
    expect(screen.getByText("2020 – 2023")).toBeInTheDocument();
  });

  it("renders all description bullet points", () => {
    render(<Education />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBeGreaterThan(0);
  });

  it("renders all achievements as badges", () => {
    render(<Education />);
    expect(
      screen.getByText(
        "Completed advanced coursework in quantitative trading and portfolio optimization"
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Multiple verified certifications in development, design, and leadership."
      )
    ).toBeInTheDocument();
  });
});
