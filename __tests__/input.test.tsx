import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Input } from "@/components/ui/input";

describe("Input Component", () => {
  it("renders with data-slot attribute and default classes", () => {
    render(<Input type="text" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("data-slot", "input");
    expect(input).toHaveClass("flex", "rounded-md", "border");
  });

  it("applies custom className correctly", () => {
    render(<Input type="text" className="custom-class" />);
    const input = screen.getByRole("textbox");
    expect(input.className).toContain("custom-class");
  });

  it("renders placeholder correctly", () => {
    render(<Input placeholder="Enter your email" />);
    const input = screen.getByPlaceholderText("Enter your email");
    expect(input).toBeInTheDocument();
  });

  it("respects the disabled state", () => {
    render(<Input disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
    expect(input.className).toContain("disabled:opacity-50");
  });

  it("handles user input", () => {
    render(<Input type="text" />);
    const input = screen.getByRole("textbox");

    fireEvent.change(input, { target: { value: "Hello World" } });
    expect((input as HTMLInputElement).value).toBe("Hello World");
  });

  it("renders with aria-invalid and corresponding classes", () => {
    render(<Input aria-invalid="true" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input.className).toContain("aria-invalid:border-destructive");
  });
});
