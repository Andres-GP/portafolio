import React from "react";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@/components/theme-provider";

// Mock de window.matchMedia para next-themes
beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }),
  });
});

// Mock de NextThemesProvider para no depender de su implementación
vi.mock("next-themes", async () => {
  const actual = await vi.importActual<any>("next-themes");
  return {
    ...actual,
    ThemeProvider: ({ children }: any) => (
      <div data-testid="theme-provider">{children}</div>
    ),
  };
});

describe("<ThemeProvider />", () => {
  it("renders children correctly", () => {
    render(
      <ThemeProvider>
        <div data-testid="child">Hello World</div>
      </ThemeProvider>
    );
    expect(screen.getByTestId("child")).toHaveTextContent("Hello World");
  });

  it("renders without crashing", () => {
    const { container } = render(
      <ThemeProvider>
        <div>Test</div>
      </ThemeProvider>
    );
    expect(container).toBeInTheDocument();
  });
});
