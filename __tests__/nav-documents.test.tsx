import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { NavDocuments } from "@/components/nav-documents";
import { IconFolder } from "@tabler/icons-react";

vi.mock("@/components/ui/sidebar", () => ({
  SidebarGroup: ({ children, ...props }: any) => (
    <div data-testid="sidebar-group" {...props}>
      {children}
    </div>
  ),
  SidebarGroupLabel: ({ children }: any) => (
    <div data-testid="sidebar-group-label">{children}</div>
  ),
  SidebarMenu: ({ children }: any) => (
    <ul data-testid="sidebar-menu">{children}</ul>
  ),
  SidebarMenuItem: ({ children }: any) => (
    <li data-testid="sidebar-menu-item">{children}</li>
  ),
  SidebarMenuButton: ({ children }: any) => (
    <button data-testid="sidebar-menu-button">{children}</button>
  ),
  SidebarMenuAction: ({ children, ...props }: any) => (
    <button data-testid="sidebar-menu-action" {...props}>
      {children}
    </button>
  ),
  useSidebar: vi.fn(),
}));

vi.mock("@/components/ui/dropdown-menu", () => ({
  DropdownMenu: ({ children }: any) => (
    <div data-testid="dropdown-menu">{children}</div>
  ),
  DropdownMenuContent: ({ children, ...props }: any) => (
    <div data-testid="dropdown-content" {...props}>
      {children}
    </div>
  ),
  DropdownMenuTrigger: ({ children }: any) => (
    <div data-testid="dropdown-trigger">{children}</div>
  ),
  DropdownMenuItem: ({ children, ...props }: any) => (
    <div data-testid="dropdown-item" {...props}>
      {children}
    </div>
  ),
  DropdownMenuSeparator: (props: any) => (
    <hr data-testid="dropdown-separator" {...props} />
  ),
}));

import { useSidebar } from "@/components/ui/sidebar";
import type { SidebarContextProps } from "@/components/ui/sidebar";

describe("<NavDocuments />", () => {
  const mockItems = [
    { name: "File A", url: "/a", icon: IconFolder },
    { name: "File B", url: "/b", icon: IconFolder },
  ];

  const sidebarMock: SidebarContextProps = {
    state: "expanded",
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

  it("renders the group label 'Documents'", () => {
    render(<NavDocuments items={mockItems} />);
    expect(screen.getByText("Documents")).toBeInTheDocument();
  });

  it("renders all items passed in props", () => {
    render(<NavDocuments items={mockItems} />);
    expect(screen.getByText("File A")).toBeInTheDocument();
    expect(screen.getByText("File B")).toBeInTheDocument();
  });

  it("renders dropdown items (Open, Share, Delete)", () => {
    render(<NavDocuments items={mockItems} />);
    expect(screen.getAllByText("Open")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Share")[0]).toBeInTheDocument();
    expect(screen.getAllByText("Delete")[0]).toBeInTheDocument();
  });

  it("uses correct dropdown positioning when mobile", () => {
    vi.mocked(useSidebar).mockReturnValue({ ...sidebarMock, isMobile: true });
    render(<NavDocuments items={mockItems} />);
    const dropdown = screen.getAllByTestId("dropdown-content")[0];
    expect(dropdown).toHaveAttribute("side", "bottom");
    expect(dropdown).toHaveAttribute("align", "end");
  });

  it("renders correct number of SidebarMenuItem elements", () => {
    render(<NavDocuments items={mockItems} />);
    const menuItems = screen.getAllByTestId("sidebar-menu-item");
    expect(menuItems.length).toBe(3);
  });

  it("renders SidebarMenuAction button for each item", () => {
    render(<NavDocuments items={mockItems} />);
    const actions = screen.getAllByTestId("sidebar-menu-action");
    expect(actions.length).toBe(mockItems.length);
  });
});
