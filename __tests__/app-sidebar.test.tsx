import React from "react";
import { render, screen } from "@testing-library/react";
import { AppSidebar } from "@/components/app-sidebar";

vi.mock("@/components/nav-main", () => ({
  NavMain: ({ items }: any) => (
    <nav data-testid="nav-main">
      {items.map((item: any) => (
        <a key={item.title} href={item.url}>
          {item.title}
        </a>
      ))}
    </nav>
  ),
}));

vi.mock("@/components/nav-documents", () => ({
  NavDocuments: ({ items }: any) => (
    <nav data-testid="nav-documents">
      {items.map((item: any) => (
        <a key={item.name} href={item.url}>
          {item.name}
        </a>
      ))}
    </nav>
  ),
}));

vi.mock("@/components/nav-secondary", () => ({
  NavSecondary: ({ items }: any) => (
    <nav data-testid="nav-secondary">
      {items.map((item: any) => (
        <a key={item.title} href={item.url}>
          {item.title}
        </a>
      ))}
    </nav>
  ),
}));

vi.mock("@/components/nav-user", () => ({
  NavUser: ({ user }: any) => (
    <div data-testid="nav-user">
      <span>{user.name}</span>
      <span>{user.email}</span>
    </div>
  ),
}));

vi.mock("@/components/ui/sidebar", () => ({
  Sidebar: ({ children }: any) => (
    <aside data-testid="sidebar">{children}</aside>
  ),
  SidebarHeader: ({ children }: any) => (
    <header data-testid="sidebar-header">{children}</header>
  ),
  SidebarContent: ({ children }: any) => (
    <main data-testid="sidebar-content">{children}</main>
  ),
  SidebarFooter: ({ children }: any) => (
    <footer data-testid="sidebar-footer">{children}</footer>
  ),
  SidebarMenu: ({ children }: any) => <ul>{children}</ul>,
  SidebarMenuButton: ({ children }: any) => <button>{children}</button>,
  SidebarMenuItem: ({ children }: any) => <li>{children}</li>,
}));

describe("AppSidebar", () => {
  beforeEach(() => {
    render(<AppSidebar />);
  });

  it("renders the sidebar container", () => {
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  it("renders the header with company name", () => {
    expect(screen.getByTestId("sidebar-header")).toHaveTextContent("Acme Inc.");
  });

  it("renders the main navigation items", () => {
    const navMain = screen.getByTestId("nav-main");
    expect(navMain).toHaveTextContent("Dashboard");
    expect(navMain).toHaveTextContent("Team");
  });

  it("renders the documents navigation", () => {
    const navDocs = screen.getByTestId("nav-documents");
    expect(navDocs).toHaveTextContent("Data Library");
    expect(navDocs).toHaveTextContent("Reports");
  });

  it("renders the secondary navigation", () => {
    const navSecondary = screen.getByTestId("nav-secondary");
    expect(navSecondary).toHaveTextContent("Settings");
    expect(navSecondary).toHaveTextContent("Get Help");
  });

  it("renders the user section with name and email", () => {
    const userSection = screen.getByTestId("nav-user");
    expect(userSection).toHaveTextContent("shadcn");
    expect(userSection).toHaveTextContent("m@example.com");
  });

  it("renders header, content and footer sections", () => {
    expect(screen.getByTestId("sidebar-header")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar-content")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar-footer")).toBeInTheDocument();
  });
});
