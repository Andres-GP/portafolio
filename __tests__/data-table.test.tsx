import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import React from "react";
import { DataTable } from "@/components/data-table";
import { useIsMobile } from "@/hooks/use-mobile";

vi.mock("@/hooks/use-mobile", () => ({
  useIsMobile: vi.fn(),
}));

vi.mock("sonner", () => ({
  toast: {
    promise: vi.fn(),
  },
}));

const mockData = [
  {
    id: 1,
    header: "Header A",
    type: "Table of Contents",
    status: "Done",
    target: "100",
    limit: "200",
    reviewer: "Assign reviewer",
  },
  {
    id: 2,
    header: "Header B",
    type: "Technical Approach",
    status: "In Progress",
    target: "150",
    limit: "300",
    reviewer: "Eddie Lake",
  },
];

describe("<DataTable />", () => {
  beforeEach(() => {
    (useIsMobile as vi.Mock).mockReturnValue(false);
  });

  it("renders correctly with initial data", () => {
    render(<DataTable data={mockData} />);

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Section Type")).toBeInTheDocument();
    expect(screen.getByText("Status")).toBeInTheDocument();

    expect(screen.getByText("Header A")).toBeInTheDocument();
    expect(screen.getByText("Header B")).toBeInTheDocument();
  });

  it("renders pagination correctly", () => {
    render(<DataTable data={mockData} />);

    expect(screen.getByText(/Page 1 of/i)).toBeInTheDocument();

    const nextButton = screen.getByRole("button", { name: /Go to next page/i });
    expect(nextButton).toBeInTheDocument();
  });

  it("submits target/limit forms correctly", () => {
    const { getAllByLabelText } = render(<DataTable data={mockData} />);

    const targetInput = getAllByLabelText("Target")[0];
    fireEvent.change(targetInput, { target: { value: "123" } });
    fireEvent.submit(targetInput.closest("form")!);

    expect(targetInput).toHaveValue("123");
  });
});
