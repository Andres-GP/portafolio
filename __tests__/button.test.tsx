import * as React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Button, buttonVariants } from "@/components/ui/button";

function expectButtonClasses(button: HTMLElement, classes: string) {
  const filtered = classes
    .split(" ")
    .filter((cls) => cls && !cls.includes(":") && !cls.includes("["));
  filtered.forEach((cls) => expect(button).toHaveClass(cls));
}

describe("Button component", () => {
  it("renders a Button with default props", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("data-slot", "button");
    expectButtonClasses(
      button,
      buttonVariants({ variant: "default", size: "default" })
    );
  });

  it("applies a custom className", () => {
    render(<Button className="custom-class">Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toHaveClass("custom-class");
  });

  it("supports variant prop", () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByText("Delete");
    expectButtonClasses(
      button,
      buttonVariants({ variant: "destructive", size: "default" })
    );
  });

  it("supports size prop", () => {
    render(<Button size="lg">Large Button</Button>);
    const button = screen.getByText("Large Button");
    expectButtonClasses(
      button,
      buttonVariants({ variant: "default", size: "lg" })
    );
  });

  it("supports asChild prop", () => {
    render(
      <Button asChild>
        <a href="/link">Link Button</a>
      </Button>
    );
    const link = screen.getByText("Link Button");
    expect(link).toBeInTheDocument();
    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("data-slot", "button");
  });

  it("renders a disabled button", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByText("Disabled");
    expect(button).toBeDisabled();
  });
});
