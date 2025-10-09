import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
} from "@/components/ui/navigation-menu";

vi.mock("@radix-ui/react-navigation-menu", () => {
  const React = require("react");
  return {
    Root: ({ children, ...props }: any) => <nav {...props}>{children}</nav>,
    List: ({ children, ...props }: any) => <ul {...props}>{children}</ul>,
    Item: ({ children, ...props }: any) => <li {...props}>{children}</li>,
    Trigger: ({ children, ...props }: any) => (
      <button {...props}>{children}</button>
    ),
    Content: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    Viewport: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    Link: ({ children, ...props }: any) => (
      <a href="#" {...props}>
        {children}
      </a>
    ),
    Indicator: ({ children, ...props }: any) => (
      <div {...props}>{children}</div>
    ),
  };
});

vi.mock("lucide-react", () => ({
  ChevronDownIcon: () => <svg data-testid="chevron-icon" />,
}));

describe("NavigationMenu", () => {
  beforeEach(() => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Home</NavigationMenuLink>
              <NavigationMenuLink>About</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
      </NavigationMenu>
    );
  });

  it("renders the NavigationMenu root with correct data attributes", () => {
    const menu = screen.getByRole("navigation");
    expect(menu).toBeInTheDocument();
    expect(menu).toHaveAttribute("data-slot", "navigation-menu");
    expect(menu).toHaveAttribute("data-viewport", "true");
  });

  it("renders the trigger with the chevron icon", () => {
    const trigger = screen.getByText("Menu");
    expect(trigger).toBeInTheDocument();
    const icon = screen.getByTestId("chevron-icon");
    expect(icon).toBeInTheDocument();
  });

  it("renders menu items and links inside content", () => {
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders the viewport by default", () => {
    const viewport = screen
      .getByRole("navigation")
      .querySelector("[data-slot='navigation-menu-viewport']");
    expect(viewport).toBeInTheDocument();
  });
});
