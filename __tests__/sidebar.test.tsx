import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  SidebarProvider,
  Sidebar,
  SidebarTrigger,
  SidebarMenuButton,
  SidebarMenuAction,
  useSidebar,
} from "@/components/ui/sidebar";

import { vi, describe, expect, beforeEach } from "vitest";

vi.mock("@/hooks/use-mobile", () => ({
  useIsMobile: vi.fn(),
}));

import { useIsMobile } from "@/hooks/use-mobile";

describe("Sidebar components", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    (useIsMobile as vi.Mock).mockReturnValue(false);
  });

  test("SidebarProvider provides context", () => {
    const TestComponent = () => {
      const { state, open } = useSidebar();
      return (
        <div data-testid="test-context">
          {state}-{open ? "open" : "closed"}
        </div>
      );
    };

    render(
      <SidebarProvider defaultOpen>
        <TestComponent />
      </SidebarProvider>
    );

    expect(screen.getByTestId("test-context")).toHaveTextContent(
      "expanded-open"
    );
  });

  test("Sidebar renders in desktop", () => {
    render(
      <SidebarProvider>
        <Sidebar>Content</Sidebar>
      </SidebarProvider>
    );

    const sidebar = document.querySelector('[data-slot="sidebar"]');
    expect(sidebar).toBeInTheDocument();
    expect(sidebar).toHaveAttribute("data-state", "expanded");
    expect(sidebar).toHaveTextContent("Content");
  });

  test("SidebarTrigger toggles sidebar", async () => {
    const user = userEvent.setup();

    render(
      <SidebarProvider defaultOpen>
        <SidebarTrigger />
        <Sidebar>Content</Sidebar>
      </SidebarProvider>
    );

    const trigger = screen.getByRole("button", { name: /toggle sidebar/i });
    const sidebar = document.querySelector('[data-slot="sidebar"]');

    expect(sidebar).toHaveAttribute("data-state", "expanded");

    await user.click(trigger);
    expect(sidebar).toHaveAttribute("data-state", "collapsed");

    await user.click(trigger);
    expect(sidebar).toHaveAttribute("data-state", "expanded");
  });

  test("SidebarMenuButton renders correctly", () => {
    render(
      <SidebarProvider>
        <SidebarMenuButton>Menu</SidebarMenuButton>
      </SidebarProvider>
    );

    const button = document.querySelector('[data-slot="sidebar-menu-button"]');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Menu");
  });

  test("SidebarMenuAction renders correctly", () => {
    render(
      <SidebarProvider>
        <SidebarMenuAction>Action</SidebarMenuAction>
      </SidebarProvider>
    );

    const action = document.querySelector('[data-slot="sidebar-menu-action"]');
    expect(action).toBeInTheDocument();
    expect(action).toHaveTextContent("Action");
  });
});
