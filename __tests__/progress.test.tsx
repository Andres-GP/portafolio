import * as React from "react";
import { render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

import { Progress } from "@/components/ui/progress";

afterEach(() => {
  cleanup();
});

describe("Progress Component", () => {
  it("renders the Progress root element", () => {
    render(<Progress value={60} />);
    const root = screen.getByTestId("progress-root");
    expect(root).toBeInTheDocument();
  });

  it("renders the Progress indicator element", () => {
    render(<Progress value={60} />);
    const indicator = screen.getByTestId("progress-indicator");
    expect(indicator).toBeInTheDocument();
  });

  it("applies the correct transform style based on value", () => {
    render(<Progress value={60} />);
    const indicator = screen.getByTestId("progress-indicator");
    expect(indicator.style.transform).toBe("translateX(-40%)");
  });

  it("applies custom className to root element", () => {
    render(<Progress value={50} className="custom-progress" />);
    const root = screen.getByTestId("progress-root");
    expect(root.className).toContain("custom-progress");
  });

  it("handles value 0 correctly", () => {
    render(<Progress value={0} />);
    const indicator = screen.getByTestId("progress-indicator");
    expect(indicator.style.transform).toBe("translateX(-100%)");
  });

  it("handles value 100 correctly", () => {
    render(<Progress value={100} />);
    const indicator = screen.getByTestId("progress-indicator");
    expect(indicator.style.transform).toBe("translateX(-0%)");
  });

  it("defaults to 0 if value is undefined", () => {
    render(<Progress />);
    const indicator = screen.getByTestId("progress-indicator");
    expect(indicator.style.transform).toBe("translateX(-100%)");
  });
});
