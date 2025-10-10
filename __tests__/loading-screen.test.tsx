import React from "react";
import { render, screen } from "@testing-library/react";
import LoaderScreen from "@/components/loader-screen";

describe("<LoaderScreen />", () => {
  it("renders without crashing", () => {
    render(<LoaderScreen />);
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("renders two rotating motion divs (spinners)", () => {
    render(<LoaderScreen />);
    const spinners = document.querySelectorAll(".rounded-full");
    expect(spinners.length).toBeGreaterThanOrEqual(3);
  });

  it("renders blurred background motion div", () => {
    render(<LoaderScreen />);
    const blurred = document.querySelector(".blur-3xl");
    expect(blurred).toBeInTheDocument();
    expect(blurred?.className).toContain("bg-white/5");
  });

  it("renders the progress line with gradient", () => {
    render(<LoaderScreen />);
    const progressLine = document.querySelector(".bg-gradient-to-r");
    expect(progressLine).toBeInTheDocument();
    expect(progressLine?.className).toContain("via-white/40");
  });

  it("includes 'Loading...' text with motion wrapper", () => {
    render(<LoaderScreen />);
    const loadingText = screen.getByText(/Loading.../i);
    expect(loadingText).toBeInTheDocument();
    expect(loadingText.className).toContain("text-white/60");
  });
});
