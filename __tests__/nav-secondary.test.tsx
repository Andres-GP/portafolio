import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { NavSecondary } from "@/components/nav-secondary";
import { IconFolder } from "@tabler/icons-react";

// Mock del sidebar
vi.mock("@/components/ui/sidebar", () => ({
  SidebarGroup: ({ children, ...props }: any) => (
    <div data-testid="sidebar-group" {...props}>
      {children}
    </div>
  ),
  SidebarGroupContent: ({ children, ...props }: any) => (
    <div data-testid="sidebar-group-content" {...props}>
      {children}
    </div>
  ),
  SidebarMenu: ({ children }: any) => (
    <ul data-testid="sidebar-menu">{children}</ul>
  ),
  SidebarMenuItem: ({ children }: any) => (
    <li data-testid="sidebar-menu-item">{children}</li>
  ),
  SidebarMenuButton: ({ children, ...props }: any) => (
    <button data-testid="sidebar-menu-button" {...props}>
      {children}
    </button>
  ),
}));

describe("<NavSecondary />", () => {
  const mockItems = [
    { title: "Doc A", url: "/a", icon: IconFolder },
    { title: "Doc B", url: "/b", icon: IconFolder },
  ];

  it("renders the SidebarGroup wrapper", () => {
    render(<NavSecondary items={mockItems} />);
    expect(screen.getByTestId("sidebar-group")).toBeInTheDocument();
  });

  it("renders all SidebarMenuItem elements", () => {
    render(<NavSecondary items={mockItems} />);
    const menuItems = screen.getAllByTestId("sidebar-menu-item");
    expect(menuItems.length).toBe(mockItems.length);
  });

  it("renders the correct links with icons and titles", () => {
    render(<NavSecondary items={mockItems} />);
    mockItems.forEach((item) => {
      const link = screen.getByText(item.title).closest("a");
      expect(link).toHaveAttribute("href", item.url);
      expect(link?.querySelector("svg")).toBeInTheDocument();
    });
  });

  it("passes additional props to SidebarGroup", () => {
    render(<NavSecondary items={mockItems} data-test="custom-prop" />);
    const group = screen.getByTestId("sidebar-group");
    expect(group).toHaveAttribute("data-test", "custom-prop");
  });
});
