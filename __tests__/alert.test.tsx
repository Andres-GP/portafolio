import React from "react";
import { render, screen } from "@testing-library/react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

describe("Alert component", () => {
  it("renders Alert with title and description", () => {
    render(
      <Alert>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>This is a warning message.</AlertDescription>
      </Alert>
    );

    const alert = screen.getByRole("alert");
    expect(alert).toBeInTheDocument();

    const title = screen.getByText("Warning");
    expect(title).toBeInTheDocument();

    const description = screen.getByText("This is a warning message.");
    expect(description).toBeInTheDocument();
  });

  it("applies the default variant styles", () => {
    render(<Alert>Default Alert</Alert>);
    const alert = screen.getByRole("alert");

    expect(alert).toHaveClass("bg-card");
  });

  it("applies the destructive variant styles", () => {
    render(<Alert variant="destructive">Destructive Alert</Alert>);
    const alert = screen.getByRole("alert");

    expect(alert).toHaveClass("text-destructive");
  });

  it("renders AlertDescription with proper text", () => {
    render(
      <Alert>
        <AlertDescription>Details about the alert</AlertDescription>
      </Alert>
    );

    const description = screen.getByText("Details about the alert");
    expect(description).toBeInTheDocument();
    expect(description).toHaveAttribute("data-slot", "alert-description");
  });

  it("renders AlertTitle with proper text", () => {
    render(
      <Alert>
        <AlertTitle>Info Title</AlertTitle>
      </Alert>
    );

    const title = screen.getByText("Info Title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute("data-slot", "alert-title");
  });
});
