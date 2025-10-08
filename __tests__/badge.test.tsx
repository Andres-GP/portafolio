import * as React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Badge } from "@/components/ui/badge";

describe("Badge component", () => {
  it("renders the Badge container", () => {
    render(<Badge>New</Badge>);
    const badge = screen.getByText("New");
    expect(badge).toBeInTheDocument();
    expect(badge).toHaveAttribute("data-slot", "badge");
  });

  it("applies custom className", () => {
    render(<Badge className="custom-badge">New</Badge>);
    const badge = screen.getByText("New");
    expect(badge).toHaveClass("custom-badge");
  });

  it("renders default variant by default", () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByText("Default");
    expect(badge).toHaveClass("bg-primary");
  });

  it("applies secondary variant", () => {
    render(<Badge variant="secondary">Secondary</Badge>);
    const badge = screen.getByText("Secondary");
    expect(badge).toHaveClass("bg-secondary");
  });

  it("applies destructive variant", () => {
    render(<Badge variant="destructive">Destructive</Badge>);
    const badge = screen.getByText("Destructive");
    expect(badge).toHaveClass("bg-destructive");
  });

  it("applies outline variant", () => {
    render(<Badge variant="outline">Outline</Badge>);
    const badge = screen.getByText("Outline");
    expect(badge).toHaveClass("text-foreground");
  });

  it("renders asChild with Slot", () => {
    render(
      <Badge asChild>
        <button>Click me</button>
      </Badge>
    );
    const badgeButton = screen.getByText("Click me");
    expect(badgeButton).toBeInTheDocument();
    expect(badgeButton).toHaveAttribute("data-slot", "badge");
    expect(badgeButton.tagName).toBe("BUTTON");
  });
});
