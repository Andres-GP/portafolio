import * as React from "react";
import { render, screen } from "@testing-library/react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

describe("ToggleGroup", () => {
  it("renders ToggleGroupItem with inherited variant and size from context", () => {
    render(
      <ToggleGroup type="single" variant="outline" size="sm">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
      </ToggleGroup>
    );

    const item = screen.getByText("Item 1");
    expect(item).toBeInTheDocument();
    expect(item).toHaveAttribute("data-variant", "outline");
    expect(item).toHaveAttribute("data-size", "sm");
  });

  it("renders multiple ToggleGroupItems correctly", () => {
    render(
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
        <ToggleGroupItem value="item2">Item 2</ToggleGroupItem>
      </ToggleGroup>
    );

    const item1 = screen.getByText("Item 1");
    const item2 = screen.getByText("Item 2");

    expect(item1).toBeInTheDocument();
    expect(item2).toBeInTheDocument();
  });

  it("allows passing additional className", () => {
    render(
      <ToggleGroup type="single" className="custom-class">
        <ToggleGroupItem value="item1">Item 1</ToggleGroupItem>
      </ToggleGroup>
    );

    const toggleGroup = screen.getByRole("group");
    expect(toggleGroup).toHaveClass("custom-class");
  });
});
