import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Switch } from "@/components/ui/switch";

describe("Switch component", () => {
  it("renders the Switch component", () => {
    render(<Switch />);
    const switchElement = screen.getByRole("switch");
    expect(switchElement).toBeInTheDocument();
  });

  it("can be checked and unchecked", () => {
    render(<Switch />);
    const switchElement = screen.getByRole("switch") as HTMLInputElement;

    expect(switchElement).not.toBeChecked();

    fireEvent.click(switchElement);
    expect(switchElement).toBeChecked();

    fireEvent.click(switchElement);
    expect(switchElement).not.toBeChecked();
  });

  it("accepts custom className and disabled prop", () => {
    render(<Switch className="custom-class" disabled />);
    const switchElement = screen.getByRole("switch");

    expect(switchElement).toHaveClass("custom-class");
    expect(switchElement).toBeDisabled();
  });
});
