import React from "react";
import { render, screen } from "@testing-library/react";
import { Select, SelectTrigger, SelectValue } from "../components/ui/select";

describe("Select Component", () => {
  test("renders the Select root element", () => {
    render(
      <Select>
        <SelectTrigger data-testid="select">
          <SelectValue />
        </SelectTrigger>
      </Select>
    );
    const select = screen.getByTestId("select");
    expect(select).toBeInTheDocument();
  });
});

describe("SelectTrigger Component", () => {
  test("renders the trigger with default size", () => {
    render(
      <Select>
        <SelectTrigger data-testid="trigger">
          <SelectValue />
        </SelectTrigger>
      </Select>
    );
    expect(screen.getByTestId("trigger")).toBeInTheDocument();
  });

  test("applies custom className", () => {
    render(
      <Select>
        <SelectTrigger data-testid="trigger" className="custom-class">
          <SelectValue />
        </SelectTrigger>
      </Select>
    );
    const trigger = screen.getByTestId("trigger");
    expect(trigger).toHaveClass("custom-class");
  });
});

describe("SelectValue Component", () => {
  test("renders the value", () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue data-testid="value" />
        </SelectTrigger>
      </Select>
    );
    expect(screen.getByTestId("value")).toBeInTheDocument();
  });
});
