import React from "react";
import { render, screen } from "@testing-library/react";
import { Slider } from "@/components/ui/slider";

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
(global as any).ResizeObserver = ResizeObserver;

describe("Slider component", () => {
  it("renders thumbs based on value array", () => {
    render(<Slider value={[10, 50]} />);
    const thumbs = screen.getAllByRole("slider");
    expect(thumbs.length).toBe(2);
  });

  it("renders thumbs based on defaultValue array", () => {
    render(<Slider defaultValue={[20, 80]} />);
    const thumbs = screen.getAllByRole("slider");
    expect(thumbs.length).toBe(2);
  });

  it("renders a single thumb if value is a single number", () => {
    render(<Slider value={[30]} />);
    const thumbs = screen.getAllByRole("slider");
    expect(thumbs.length).toBe(1);
  });
});
