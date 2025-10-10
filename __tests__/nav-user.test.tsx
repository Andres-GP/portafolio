import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { NavUser } from "@/components/nav-user";
import { useSidebar } from "@/components/ui/sidebar";

vi.mock("@/components/ui/sidebar", () => ({
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

vi.mock("@/components/ui/dropdown-menu", () => ({
  DropdownMenu: ({ children }: any) => (
    <div data-testid="dropdown-menu">{children}</div>
  ),
  DropdownMenuTrigger: ({ children }: any) => (
    <div data-testid="dropdown-trigger">{children}</div>
  ),
  DropdownMenuContent: ({ children, ...props }: any) => (
    <div data-testid="dropdown-content" {...props}>
      {children}
    </div>
  ),
  DropdownMenuGroup: ({ children }: any) => (
    <div data-testid="dropdown-group">{children}</div>
  ),
  DropdownMenuItem: ({ children }: any) => (
    <div data-testid="dropdown-item">{children}</div>
  ),
  DropdownMenuLabel: ({ children }: any) => (
    <div data-testid="dropdown-label">{children}</div>
  ),
  DropdownMenuSeparator: () => <hr data-testid="dropdown-separator" />,
}));

vi.mock("@/components/ui/avatar", () => ({
  Avatar: ({ children }: any) => <div data-testid="avatar">{children}</div>,
  AvatarImage: ({ ...props }: any) => (
    <img data-testid="avatar-image" {...props} />
  ),
  AvatarFallback: ({ children }: any) => (
    <div data-testid="avatar-fallback">{children}</div>
  ),
}));

describe("<NavUser />", () => {
  const mockUser = {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatar.jpg",
  };

  const sidebarMock = {
    state: "expanded" as const,
    open: true,
    setOpen: vi.fn(),
    openMobile: false,
    setOpenMobile: vi.fn(),
    isMobile: false,
    toggleSidebar: vi.fn(),
  };

  beforeEach(() => {
    vi.mocked(useSidebar).mockReturnValue(sidebarMock);
  });

  it("renders the sidebar menu and button", () => {
    render(<NavUser user={mockUser} />);
    expect(screen.getByTestId("sidebar-menu")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar-menu-button")).toBeInTheDocument();
  });

  it("renders user avatar, fallback, name and email", () => {
    render(<NavUser user={mockUser} />);
    expect(screen.getAllByTestId("avatar")).toHaveLength(2);
    expect(screen.getAllByTestId("avatar-image")[0]).toHaveAttribute(
      "src",
      mockUser.avatar
    );
    expect(screen.getAllByTestId("avatar-image")[0]).toHaveAttribute(
      "alt",
      mockUser.name
    );
    expect(screen.getAllByText(mockUser.name)[0]).toBeInTheDocument();
    expect(screen.getAllByText(mockUser.email)[0]).toBeInTheDocument();
  });

  it("renders dropdown content with correct side when not mobile", () => {
    render(<NavUser user={mockUser} />);
    const dropdown = screen.getByTestId("dropdown-content");
    expect(dropdown).toHaveAttribute("side", "right");
  });

  it("renders all dropdown items and separators", () => {
    render(<NavUser user={mockUser} />);
    expect(screen.getAllByTestId("dropdown-item")).toHaveLength(4);
    expect(screen.getAllByTestId("dropdown-separator")).toHaveLength(2);
  });

  it("renders dropdown label with user info", () => {
    render(<NavUser user={mockUser} />);
    expect(screen.getByTestId("dropdown-label")).toBeInTheDocument();
    expect(screen.getAllByText(mockUser.name)[1]).toBeInTheDocument();
    expect(screen.getAllByText(mockUser.email)[1]).toBeInTheDocument();
  });
});
