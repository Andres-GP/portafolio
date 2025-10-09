import * as React from "react";
import { render, screen } from "@testing-library/react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
global.ResizeObserver = ResizeObserver;

describe("Tooltip components", () => {
  it("renders TooltipTrigger", () => {
    render(
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Content</TooltipContent>
      </Tooltip>
    );

    const trigger = screen.getByText("Hover me");
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute("data-slot", "tooltip-trigger");
  });
});
