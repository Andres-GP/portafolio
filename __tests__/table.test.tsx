import * as React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableRow,
  TableHead,
  TableCell,
  TableCaption,
} from "@/components/ui/table";

describe("Table components", () => {
  it("renders Table with className and props", () => {
    render(<Table className="custom-table" data-testid="my-table" />);
    const tableContainer = screen.getByTestId("my-table").parentElement;
    expect(tableContainer).toHaveAttribute("data-slot", "table-container");
    const table = screen.getByTestId("my-table");
    expect(table).toBeInTheDocument();
    expect(table).toHaveClass("custom-table");
  });

  it("renders TableHeader", () => {
    render(<TableHeader className="custom-header" data-testid="header" />);
    const header = screen.getByTestId("header");
    expect(header).toHaveAttribute("data-slot", "table-header");
    expect(header).toHaveClass("custom-header");
  });

  it("renders TableBody", () => {
    render(<TableBody className="custom-body" data-testid="body" />);
    const body = screen.getByTestId("body");
    expect(body).toHaveAttribute("data-slot", "table-body");
    expect(body).toHaveClass("custom-body");
  });

  it("renders TableFooter", () => {
    render(<TableFooter className="custom-footer" data-testid="footer" />);
    const footer = screen.getByTestId("footer");
    expect(footer).toHaveAttribute("data-slot", "table-footer");
    expect(footer).toHaveClass("custom-footer");
  });

  it("renders TableRow", () => {
    render(<TableRow className="custom-row" data-testid="row" />);
    const row = screen.getByTestId("row");
    expect(row).toHaveAttribute("data-slot", "table-row");
    expect(row).toHaveClass("custom-row");
  });

  it("renders TableHead", () => {
    render(<TableHead className="custom-th" data-testid="th" />);
    const th = screen.getByTestId("th");
    expect(th).toHaveAttribute("data-slot", "table-head");
    expect(th).toHaveClass("custom-th");
  });

  it("renders TableCell", () => {
    render(<TableCell className="custom-td" data-testid="td" />);
    const td = screen.getByTestId("td");
    expect(td).toHaveAttribute("data-slot", "table-cell");
    expect(td).toHaveClass("custom-td");
  });

  it("renders TableCaption", () => {
    render(<TableCaption className="custom-caption" data-testid="caption" />);
    const caption = screen.getByTestId("caption");
    expect(caption).toHaveAttribute("data-slot", "table-caption");
    expect(caption).toHaveClass("custom-caption");
  });
});
