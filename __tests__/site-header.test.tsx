import React from "react";
import { render, screen } from "@testing-library/react";
import { SiteHeader } from "@/components/site-header";
import { vi } from "vitest";

// Mock de componentes de UI
vi.mock("@/components/ui/button", async () => {
  const actual = await vi.importActual<any>("@/components/ui/button");
  return {
    ...actual,
    Button: ({ children, ...props }: any) => (
      <button {...props}>{children}</button>
    ),
  };
});

vi.mock("@/components/ui/separator", async () => {
  const actual = await vi.importActual<any>("@/components/ui/separator");
  return {
    ...actual,
    Separator: ({ ...props }: any) => (
      <div {...props} data-testid="separator" />
    ),
  };
});

vi.mock("@/components/ui/sidebar", async () => {
  const actual = await vi.importActual<any>("@/components/ui/sidebar");
  return {
    ...actual,
    SidebarTrigger: ({ ...props }: any) => (
      <div {...props} data-testid="sidebar-trigger" />
    ),
  };
});

describe("<SiteHeader />", () => {
  beforeEach(() => {
    render(<SiteHeader />);
  });

  it("renders the SidebarTrigger component", () => {
    expect(screen.getByTestId("sidebar-trigger")).toBeInTheDocument();
  });

  it("renders the Separator component", () => {
    expect(screen.getByTestId("separator")).toBeInTheDocument();
  });

  it("renders the title 'Documents'", () => {
    expect(screen.getByText("Documents")).toBeInTheDocument();
  });

  it("renders the GitHub button with correct link", () => {
    const githubLink = screen.getByRole("link", { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/shadcn-ui/ui/tree/main/apps/v4/app/(examples)/dashboard"
    );
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
