import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { Label } from "@/components/ui/label";

vi.mock("@radix-ui/react-label", () => {
  const React = require("react");

  const Root = React.forwardRef(
    (
      {
        children,
        className,
        ...props
      }: React.LabelHTMLAttributes<HTMLLabelElement>,
      ref: React.Ref<HTMLLabelElement>
    ) => (
      <label
        ref={ref}
        data-testid="radix-label"
        className={className}
        {...props}
      >
        {children}
      </label>
    )
  );

  Root.displayName = "MockRadixLabel";
  return { Root };
});

describe("Label", () => {
  it("renders correctly with default slot", () => {
    render(<Label>My Label</Label>);
    const label = screen.getByTestId("radix-label");
    expect(label).toBeInTheDocument();
    expect(label).toHaveAttribute("data-slot", "label");
    expect(label).toHaveTextContent("My Label");
  });

  it("applies custom className", () => {
    render(<Label className="extra-class">Styled Label</Label>);
    const label = screen.getByTestId("radix-label");
    expect(label.className).toContain("extra-class");
  });

  it("forwards additional props (e.g., htmlFor)", () => {
    render(<Label htmlFor="email-input">Email</Label>);
    const label = screen.getByTestId("radix-label");
    expect(label).toHaveAttribute("for", "email-input");
  });

  it("renders with combined default and custom classes", () => {
    render(<Label className="custom">Combined</Label>);
    const label = screen.getByTestId("radix-label");
    expect(label.className).toContain("custom");
    expect(label).toHaveAttribute("data-slot", "label");
  });
});
