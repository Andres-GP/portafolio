import * as React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb";

describe("Breadcrumb components", () => {
  it("renders Breadcrumb container", () => {
    render(<Breadcrumb>Breadcrumb</Breadcrumb>);
    const breadcrumb = screen.getByLabelText("breadcrumb");
    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveAttribute("data-slot", "breadcrumb");
  });

  it("renders BreadcrumbList with custom className", () => {
    render(<BreadcrumbList className="custom-list">List</BreadcrumbList>);
    const list = screen.getByText("List");
    expect(list).toBeInTheDocument();
    expect(list).toHaveClass("custom-list");
    expect(list).toHaveAttribute("data-slot", "breadcrumb-list");
  });

  it("renders BreadcrumbItem with custom className", () => {
    render(<BreadcrumbItem className="custom-item">Item</BreadcrumbItem>);
    const item = screen.getByText("Item");
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass("custom-item");
    expect(item).toHaveAttribute("data-slot", "breadcrumb-item");
  });

  it("renders BreadcrumbLink and supports asChild", () => {
    render(
      <BreadcrumbLink asChild>
        <button>Click me</button>
      </BreadcrumbLink>
    );
    const link = screen.getByText("Click me");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("data-slot", "breadcrumb-link");
    expect(link.tagName).toBe("BUTTON");
  });

  it("renders BreadcrumbPage with correct aria attributes", () => {
    render(<BreadcrumbPage>Current Page</BreadcrumbPage>);
    const page = screen.getByText("Current Page");
    expect(page).toBeInTheDocument();
    expect(page).toHaveAttribute("aria-disabled", "true");
    expect(page).toHaveAttribute("aria-current", "page");
    expect(page).toHaveAttribute("data-slot", "breadcrumb-page");
  });

  it("renders BreadcrumbSeparator with default ChevronRight", () => {
    render(<BreadcrumbSeparator />);
    const separator = screen.getByRole("presentation", { hidden: true });
    expect(separator).toBeInTheDocument();
    expect(separator).toHaveAttribute("data-slot", "breadcrumb-separator");
    expect(separator.querySelector("svg")).toBeInTheDocument();
  });

  it("renders BreadcrumbEllipsis with MoreHorizontal icon", () => {
    render(<BreadcrumbEllipsis />);
    const ellipsis = screen.getByRole("presentation", { hidden: true });
    expect(ellipsis).toBeInTheDocument();
    expect(ellipsis).toHaveAttribute("data-slot", "breadcrumb-ellipsis");
    expect(ellipsis.querySelector("svg")).toBeInTheDocument();
    expect(screen.getByText("More")).toBeInTheDocument();
  });

  it("applies custom className to BreadcrumbEllipsis", () => {
    render(<BreadcrumbEllipsis className="custom-ellipsis" />);
    const ellipsis = screen.getByRole("presentation", { hidden: true });
    expect(ellipsis).toHaveClass("custom-ellipsis");
  });
});
