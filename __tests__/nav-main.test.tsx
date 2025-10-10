import React from "react"; // <- esto soluciona el error
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { NavMain } from "@/components/nav-main";
import {
  IconCirclePlusFilled,
  IconMail,
  IconFolder,
} from "@tabler/icons-react";

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
  useSidebar: vi.fn(),
}));

import { useSidebar } from "@/components/ui/sidebar";

describe("<NavMain />", () => {
  const mockItems = [
    { title: "File A", url: "/a", icon: IconFolder },
    { title: "File B", url: "/b", icon: IconFolder },
  ];

  const sidebarMock = {
    state: "expanded" as const,
    open: false,
    setOpen: vi.fn(),
    openMobile: false,
    setOpenMobile: vi.fn(),
    isMobile: false,
    toggleSidebar: vi.fn(),
  };

  beforeEach(() => {
    vi.mocked(useSidebar).mockReturnValue(sidebarMock);
  });

  it("renders Quick Create button and Inbox button", () => {
    render(<NavMain items={mockItems} />);
    expect(screen.getByText("Quick Create")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Inbox/i })).toBeInTheDocument();
  });

  it("renders all items passed in props", () => {
    render(<NavMain items={mockItems} />);
    expect(screen.getByText("File A")).toBeInTheDocument();
    expect(screen.getByText("File B")).toBeInTheDocument();
  });

  it("renders correct number of SidebarMenuItem elements", () => {
    render(<NavMain items={mockItems} />);
    const menuItems = screen.getAllByTestId("sidebar-menu-item");
    expect(menuItems.length).toBe(mockItems.length + 1); // Quick Create + items
  });

  it("renders icons if provided", () => {
    render(<NavMain items={mockItems} />);
    const icons = screen
      .getAllByTestId("sidebar-menu-button")
      .map((btn) => btn.querySelector("svg"));
    expect(icons.filter(Boolean).length).toBe(3); // Quick Create + 2 items
  });
});
