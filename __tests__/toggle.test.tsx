import * as React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Toggle, toggleVariants } from "@/components/ui/toggle";

describe("Toggle", () => {
  it("renders the Toggle component", () => {
    render(<Toggle>Click me</Toggle>);
    const toggle = screen.getByRole("button");
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveTextContent("Click me");

    expect(toggle).toHaveClass(
      toggleVariants({ variant: "default", size: "default" })
    );
  });
  it("accepts additional className", () => {
    render(<Toggle className="custom-class">Custom</Toggle>);
    const toggle = screen.getByRole("button");
    expect(toggle).toHaveClass("custom-class");
  });

  it("toggles state when clicked", async () => {
    const user = userEvent.setup();
    render(<Toggle>Toggle Me</Toggle>);
    const toggle = screen.getByRole("button");

    expect(toggle).not.toHaveAttribute("data-state", "on");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("data-state", "on");

    await user.click(toggle);
    expect(toggle).not.toHaveAttribute("data-state", "on");
  });

  it("respects disabled prop", () => {
    render(<Toggle disabled>Disabled</Toggle>);
    const toggle = screen.getByRole("button");
    expect(toggle).toBeDisabled();
  });
});
