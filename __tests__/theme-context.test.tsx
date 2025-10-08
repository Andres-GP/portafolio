import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import { ThemeProvider, useTheme } from "../app/context/ThemeContext";

// Helper component to test the hook
function TestComponent() {
  const { isDark, toggleDark } = useTheme();
  return (
    <>
      <span data-testid="theme-status">{isDark ? "dark" : "light"}</span>
      <button onClick={toggleDark}>Toggle Theme</button>
    </>
  );
}

describe("ThemeProvider", () => {
  beforeEach(() => {
    document.documentElement.className = "";
    localStorage.clear();
  });

  it("renders with light theme by default", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId("theme-status").textContent).toBe("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("theme")).toBe(null);
  });

  it("toggles dark theme on button click", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const button = screen.getByText("Toggle Theme");
    fireEvent.click(button);

    expect(screen.getByTestId("theme-status").textContent).toBe("dark");
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");
  });

  it("toggles back to light theme if already dark", () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const button = screen.getByText("Toggle Theme");
    fireEvent.click(button); // dark
    fireEvent.click(button); // light

    expect(screen.getByTestId("theme-status").textContent).toBe("light");
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("throws error if useTheme is used outside ThemeProvider", () => {
    const consoleError = vi
      .spyOn(console, "error")
      .mockImplementation(() => {}); // silence error
    expect(() => render(<TestComponent />)).toThrow(
      "useTheme must be used inside ThemeProvider"
    );
    consoleError.mockRestore();
  });
});
