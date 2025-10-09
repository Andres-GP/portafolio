import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

describe("RadioGroup Component", () => {
  it("renders the RadioGroup root element", () => {
    render(<RadioGroup />);
    const root = screen.getByRole("radiogroup");
    expect(root).toBeInTheDocument();
  });

  it("applies custom className to RadioGroup root", () => {
    render(<RadioGroup className="custom-group" />);
    const root = screen.getByRole("radiogroup");
    expect(root.className).toContain("custom-group");
  });
});

describe("RadioGroupItem Component", () => {
  it("renders the RadioGroupItem element", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="1" />
      </RadioGroup>
    );
    const item = screen.getByRole("radio");
    expect(item).toBeInTheDocument();
  });

  it("applies custom className to RadioGroupItem", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="1" className="custom-item" />
      </RadioGroup>
    );
    const item = screen.getByRole("radio");
    expect(item.className).toContain("custom-item");
  });

  it("allows selecting an item", () => {
    render(
      <RadioGroup defaultValue="1">
        <RadioGroupItem value="1" />
        <RadioGroupItem value="2" />
      </RadioGroup>
    );
    const items = screen.getAllByRole("radio");
    const item1 = items[0];
    const item2 = items[1];

    expect(item1.getAttribute("aria-checked")).toBe("true");
    fireEvent.click(item2);
    expect(item2.getAttribute("aria-checked")).toBe("true");
    expect(item1.getAttribute("aria-checked")).toBe("false");
  });
});
