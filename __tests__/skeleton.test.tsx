import React from "react"; // <--- agregar esto
import { render, screen } from "@testing-library/react";
import { Skeleton } from "@/components/ui/skeleton";
import { describe, it, expect } from "vitest";

describe("Skeleton component", () => {
  it("renders with default classes", () => {
    render(<Skeleton />);
    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveClass("bg-accent animate-pulse rounded-md");
  });

  it("applies additional className", () => {
    render(<Skeleton className="custom-class" />);
    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveClass(
      "bg-accent animate-pulse rounded-md custom-class"
    );
  });

  it("spreads extra props", () => {
    render(<Skeleton id="test-skeleton" data-test="123" />);
    const skeleton = screen.getByTestId("skeleton");
    expect(skeleton).toHaveAttribute("id", "test-skeleton");
    expect(skeleton).toHaveAttribute("data-test", "123");
  });
});
