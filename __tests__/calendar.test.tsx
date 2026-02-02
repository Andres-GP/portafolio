import React from "react";
import { render, screen } from "@testing-library/react";
import { Calendar } from "@/components/ui/calendar";

describe("Calendar component", () => {
  it("renders navigation buttons", () => {
    render(<Calendar />);
    const prevButton = screen.getByRole("button", { name: /previous month/i });
    const nextButton = screen.getByRole("button", { name: /next month/i });

    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });
});
