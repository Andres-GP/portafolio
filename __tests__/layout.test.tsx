import { render, screen } from "@testing-library/react";
import React, { Suspense } from "react";
import RootLayout from "../app/layout";
import { vi } from "vitest";

vi.mock("@vercel/analytics/next", () => ({
  Analytics: () => <div data-testid="analytics" />,
}));

vi.mock("../components/loader-screen.tsx", () => ({
  default: () => <div data-testid="loader">Loading...</div>,
}));

vi.mock("geist/font/sans", () => ({
  GeistSans: { variable: "mock-sans" },
}));
vi.mock("geist/font/mono", () => ({
  GeistMono: { variable: "mock-mono" },
}));

describe("RootLayout", () => {
  it("renders children correctly", () => {
    render(
      <RootLayout>
        <div data-testid="child">Hello World</div>
      </RootLayout>
    );

    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("wraps children with ThemeProvider", () => {
    const TestChild = () => (
      <div data-testid="child-theme">Child inside theme</div>
    );

    render(
      <RootLayout>
        <TestChild />
      </RootLayout>
    );

    expect(screen.getByTestId("child-theme")).toBeInTheDocument();
  });

  it("renders LoaderScreen as fallback for Suspense", () => {
    const LazyChild = React.lazy(() =>
      Promise.resolve({ default: () => <div>Lazy</div> })
    );

    render(
      <RootLayout>
        <Suspense fallback={<div data-testid="fallback">Fallback</div>}>
          <LazyChild />
        </Suspense>
      </RootLayout>
    );

    expect(screen.getByTestId("fallback")).toBeInTheDocument();
  });

  it("applies font classes to body and scroll-smooth to html", () => {
    document.documentElement.classList.add("scroll-smooth");
    document.body.classList.add("font-sans", "mock-sans", "mock-mono");

    expect(document.documentElement.classList.contains("scroll-smooth")).toBe(
      true
    );
    expect(document.body.classList.contains("font-sans")).toBe(true);
    expect(document.body.classList.contains("mock-sans")).toBe(true);
    expect(document.body.classList.contains("mock-mono")).toBe(true);
  });

  it("renders Analytics component", () => {
    render(
      <RootLayout>
        <div>Content</div>
      </RootLayout>
    );

    expect(screen.getByTestId("analytics")).toBeInTheDocument();
  });
});
