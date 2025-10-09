import * as React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Textarea } from "@/components/ui/textarea";

describe("Textarea component", () => {
  it("renders the textarea", () => {
    render(<Textarea data-testid="textarea" />);
    const textarea = screen.getByTestId("textarea");
    expect(textarea).toBeInTheDocument();
    expect(textarea.tagName).toBe("TEXTAREA");
  });

  it("applies additional className", () => {
    render(<Textarea data-testid="textarea" className="custom-class" />);
    const textarea = screen.getByTestId("textarea");
    expect(textarea).toHaveClass("custom-class");
  });

  it("accepts props like placeholder and disabled", () => {
    render(
      <Textarea data-testid="textarea" placeholder="Type here..." disabled />
    );
    const textarea = screen.getByTestId("textarea");
    expect(textarea).toHaveAttribute("placeholder", "Type here...");
    expect(textarea).toBeDisabled();
  });
});
