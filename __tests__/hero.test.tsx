import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { Hero } from "@/components/hero";
import { useTheme } from "@/app/context/ThemeContext";
import { scrollToSection } from "@/lib/utils";

vi.mock("@/lib/utils", async () => {
  const actual = await vi.importActual<typeof import("@/lib/utils")>(
    "@/lib/utils"
  );
  return {
    ...actual,
    scrollToSection: vi.fn(),
    cn: (...classes: string[]) => classes.filter(Boolean).join(" "),
  };
});

vi.mock("@splinetool/react-spline/next", () => ({
  default: () => <div data-testid="spline" />,
}));

vi.mock("../app/context/ThemeContext", () => ({
  useTheme: vi.fn(),
}));

vi.mock("./ui/loader", () => ({
  default: () => <div data-testid="loader" />,
}));

describe("Hero Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the main texts correctly", () => {
    (useTheme as vi.Mock).mockReturnValue({ isDark: false });

    render(<Hero />);

    expect(screen.getByText("Hi, my name is")).toBeInTheDocument();
    expect(screen.getByText("Andrés García")).toBeInTheDocument();
    expect(screen.getByText("I build things for the web.")).toBeInTheDocument();
  });

  it("renders description paragraph", () => {
    (useTheme as vi.Mock).mockReturnValue({ isDark: false });

    render(<Hero />);
    expect(
      screen.getByText(/Frontend Developer with \+5 years of experience/i)
    ).toBeInTheDocument();
  });

  it("calls scrollToSection when buttons are clicked", () => {
    (useTheme as vi.Mock).mockReturnValue({ isDark: false });
    render(<Hero />);

    const workButton = screen.getByText("View My Work");
    const contactButton = screen.getByText("Get In Touch");

    fireEvent.click(workButton);
    expect(scrollToSection).toHaveBeenCalledWith("projects");

    fireEvent.click(contactButton);
    expect(scrollToSection).toHaveBeenCalledWith("contact");
  });

  it("renders social media links correctly", () => {
    (useTheme as vi.Mock).mockReturnValue({ isDark: false });

    render(<Hero />);

    const githubLink = screen.getByRole("link", { name: "GitHub" });
    const linkedinLink = screen.getByRole("link", { name: "LinkedIn" });
    const emailLink = screen.getByRole("link", { name: "Email" });

    expect(githubLink).toHaveAttribute("href", "https://github.com/Andres-GP");
    expect(linkedinLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/andres-felipe-garcia-pedreros/"
    );
    expect(emailLink).toHaveAttribute(
      "href",
      "mailto:andresgarciapedreros@gmail.com"
    );
  });

  it("renders Spline with dark theme scene when isDark=true", () => {
    (useTheme as vi.Mock).mockReturnValue({ isDark: true });

    render(<Hero />);
    const spline = screen.getByTestId("spline");
    expect(spline).toBeInTheDocument();
  });

  it("renders Spline with light theme scene when isDark=false", () => {
    (useTheme as vi.Mock).mockReturnValue({ isDark: false });

    render(<Hero />);
    const spline = screen.getByTestId("spline");
    expect(spline).toBeInTheDocument();
  });
});
