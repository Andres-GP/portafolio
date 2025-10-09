import React from "react";
import { render, screen } from "@testing-library/react";
import { Calendar } from "@/components/ui/calendar";

describe("Calendar component", () => {
  it("renders the calendar root", () => {
    render(<Calendar />);
    const calendar = screen.getByRole("grid", { name: /October 2025/i });
    expect(calendar).toBeInTheDocument();
  });

  it("renders navigation buttons", () => {
    render(<Calendar />);
    const prevButton = screen.getByRole("button", { name: /previous month/i });
    const nextButton = screen.getByRole("button", { name: /next month/i });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it("renders days with correct aria-label", () => {
    render(<Calendar />);
    const today = new Date();
    const dayCell = screen.getByLabelText(
      new RegExp(
        `${today.toLocaleString("en-US", {
          month: "long",
        })} ${today.getDate()}.*2025`
      )
    );
    expect(dayCell).toBeInTheDocument();
  });
});
