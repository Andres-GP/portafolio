import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/ui/pagination";

// Mock Lucide icons
vi.mock("lucide-react", () => ({
  ChevronLeftIcon: () => <svg data-testid="chevron-left" />,
  ChevronRightIcon: () => <svg data-testid="chevron-right" />,
  MoreHorizontalIcon: () => <svg data-testid="more-icon" />,
}));

describe("Pagination Component Suite", () => {
  beforeEach(() => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );
  });

  it("renders the pagination root with proper attributes", () => {
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
    expect(nav).toHaveAttribute("aria-label", "pagination");
    expect(nav).toHaveAttribute("data-slot", "pagination");
  });

  it("renders pagination content and items correctly", () => {
    const content = screen.getByRole("list");
    expect(content).toHaveAttribute("data-slot", "pagination-content");

    const items = content.querySelectorAll("[data-slot='pagination-item']");
    expect(items.length).toBeGreaterThan(0);
  });

  it("renders pagination links with proper roles and data", () => {
    const links = screen.getAllByRole("link");
    expect(links.length).toBeGreaterThan(0);

    const activeLink = screen.getByRole("link", { name: "2" });
    expect(activeLink).toHaveAttribute("aria-current", "page");
    expect(activeLink).toHaveAttribute("data-active", "true");
  });

  it("renders previous and next buttons with icons", () => {
    const prev = screen.getByRole("link", { name: /previous/i });
    const next = screen.getByRole("link", { name: /next/i });

    expect(prev).toBeInTheDocument();
    expect(screen.getByTestId("chevron-left")).toBeInTheDocument();

    expect(next).toBeInTheDocument();
    expect(screen.getByTestId("chevron-right")).toBeInTheDocument();
  });

  it("renders the ellipsis element correctly", () => {
    const ellipsis = screen.getByTestId("more-icon");
    expect(ellipsis).toBeInTheDocument();

    const hiddenLabel = screen.getByText("More pages");
    expect(hiddenLabel).toHaveClass("sr-only");
  });
});
