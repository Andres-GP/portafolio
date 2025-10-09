/**
 * @file __tests__/checkbox.test.tsx
 * @description Tests for Checkbox component
 */

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Checkbox } from "@/components/ui/checkbox";

vi.mock("lucide-react", () => ({
  CheckIcon: () => <svg data-testid="check-icon" />,
}));

describe("Checkbox component", () => {
  it("renders without crashing", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("applies the base classes", () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.className).toContain("border-input");
    expect(checkbox.className).toContain("rounded-[4px]");
  });

  it("toggles checked state when clicked", async () => {
    render(<Checkbox />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toHaveAttribute("data-state", "checked");

    fireEvent.click(checkbox);
    expect(checkbox).toHaveAttribute("data-state", "checked");

    fireEvent.click(checkbox);
    expect(checkbox).not.toHaveAttribute("data-state", "checked");
  });

  it("respects the 'checked' prop when controlled", () => {
    render(<Checkbox checked data-testid="controlled" />);
    const checkbox = screen.getByTestId("controlled");
    expect(checkbox).toHaveAttribute("data-state", "checked");
  });

  it("does not toggle when disabled", () => {
    render(<Checkbox disabled />);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeDisabled();
    fireEvent.click(checkbox);
    expect(checkbox).not.toHaveAttribute("data-state", "checked");
  });

  it("applies custom className", () => {
    render(<Checkbox className="custom-class" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox.className).toContain("custom-class");
  });
});
