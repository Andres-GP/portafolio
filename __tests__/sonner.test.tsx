import React from "react";
import { render, screen } from "@testing-library/react";
import { Toaster } from "@/components/ui/sonner";
import { vi } from "vitest";

vi.mock("next-themes", () => ({
  useTheme: vi.fn(),
}));

vi.mock("sonner", () => ({
  Toaster: vi.fn(({ children, ...props }) => (
    <div data-testid="sonner-toaster" {...props}>
      {children}
    </div>
  )),
}));

import { useTheme } from "next-themes";

describe("Toaster component", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("renders the Toaster component with theme 'light'", () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: "light" });
    render(<Toaster />);
    expect(screen.getByTestId("sonner-toaster")).toBeInTheDocument();
    expect(screen.getByTestId("sonner-toaster")).toHaveAttribute(
      "theme",
      "light"
    );
  });

  it("defaults theme to 'system' if not provided", () => {
    (useTheme as jest.Mock).mockReturnValue({});
    render(<Toaster />);
    expect(screen.getByTestId("sonner-toaster")).toHaveAttribute(
      "theme",
      "system"
    );
  });

  it("forwards props to Sonner Toaster", () => {
    (useTheme as jest.Mock).mockReturnValue({ theme: "light" });
    render(<Toaster position="bottom-right" />);
    expect(screen.getByTestId("sonner-toaster")).toHaveAttribute(
      "position",
      "bottom-right"
    );
  });
});
