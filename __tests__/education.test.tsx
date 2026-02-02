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
    expect(screen.getByText("Education & Certifications")).toBeInTheDocument();
    expect(screen.getByText("03.")).toBeInTheDocument();
  });

  it("renders all description bullet points", () => {
    render(<Education />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBeGreaterThan(0);
  });
});
