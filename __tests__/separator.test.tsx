import React from "react";
import { render, screen } from "@testing-library/react";
import { Separator } from "../components/ui/separator";

describe("Separator Component", () => {
  test("renders the separator", () => {
    render(<Separator data-testid="separator" />);
    const separator = screen.getByTestId("separator");
    expect(separator).toBeInTheDocument();
  });

  test("applies horizontal orientation by default", () => {
    render(<Separator data-testid="separator" />);
    const separator = screen.getByTestId("separator");
    expect(separator).toHaveAttribute("data-orientation", "horizontal");
  });

  test("applies vertical orientation when passed", () => {
    render(<Separator data-testid="separator" orientation="vertical" />);
    const separator = screen.getByTestId("separator");
    expect(separator).toHaveAttribute("data-orientation", "vertical");
  });

  test("applies custom className", () => {
    render(<Separator data-testid="separator" className="custom-class" />);
    const separator = screen.getByTestId("separator");
    expect(separator).toHaveClass("custom-class");
  });

  test("respects decorative prop", () => {
    render(<Separator data-testid="separator" decorative={false} />);
    const separator = screen.getByTestId("separator");
    expect(separator).toHaveAttribute("role", "separator");
  });
});
