import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { Navigation } from "@/components/navigation";

import { scrollToSection } from "@/lib/utils";
import { useTheme } from "../app/context/ThemeContext";

vi.mock("@/lib/utils", async (importOriginal) => {
  const actual = (await importOriginal()) as Record<string, any>;
  return {
    ...actual,
    scrollToSection: vi.fn(),
  };
});

vi.mock("../app/context/ThemeContext", () => ({
  useTheme: vi.fn(),
}));

describe("<Navigation />", () => {
  const mockToggleDark = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useTheme as any).mockReturnValue({
      isDark: false,
      toggleDark: mockToggleDark,
    });
  });

  it("renders Portfolio button and nav items", () => {
    render(<Navigation />);
    expect(screen.getByText("Portfolio")).toBeInTheDocument();
    ["Home", "About", "Experience", "Projects", "Contact"].forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
    expect(screen.getByText("Toggle to Dark theme")).toBeInTheDocument();
  });

  it("calls scrollToSection when Portfolio button is clicked", () => {
    render(<Navigation />);
    fireEvent.click(screen.getByText("Portfolio"));
    expect(scrollToSection).toHaveBeenCalledWith("home");
  });

  it("calls scrollToSection with correct section id on nav item click", () => {
    render(<Navigation />);
    fireEvent.click(screen.getByText("Projects"));
    expect(scrollToSection).toHaveBeenCalledWith("projects");
  });

  it("calls toggleDark when theme button is clicked", () => {
    render(<Navigation />);
    fireEvent.click(screen.getByText("Toggle to Dark theme"));
    expect(mockToggleDark).toHaveBeenCalled();
  });

  it("displays correct theme text when isDark=true", () => {
    (useTheme as any).mockReturnValue({
      isDark: true,
      toggleDark: mockToggleDark,
    });
    render(<Navigation />);
    expect(screen.getByText("Toggle to Light theme")).toBeInTheDocument();
  });
});
