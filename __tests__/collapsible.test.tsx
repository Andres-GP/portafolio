import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { vi } from "vitest";

vi.mock("@radix-ui/react-collapsible", () => {
  const React = require("react");

  const Root = ({ open, onOpenChange, children, ...props }: any) => {
    const [isOpen, setIsOpen] = React.useState(open ?? false);

    const toggle = () => {
      const newValue = !isOpen;
      setIsOpen(newValue);
      if (onOpenChange) onOpenChange(newValue);
    };

    const clonedChildren = React.Children.map(children, (child: any) => {
      if (!React.isValidElement(child)) return child;
      return React.cloneElement(child as React.ReactElement<any>, {
        "data-open": isOpen,
        onToggle: toggle,
      });
    });

    return (
      <div data-testid="mock-collapsible-root" {...props}>
        {clonedChildren}
      </div>
    );
  };

  const CollapsibleTrigger = ({ onToggle, ...props }: any) => (
    <button
      data-testid="mock-collapsible-trigger"
      onClick={onToggle}
      {...props}
    />
  );

  const CollapsibleContent = ({ "data-open": isOpen, ...props }: any) => (
    <div data-testid="mock-collapsible-content" hidden={!isOpen} {...props} />
  );

  return {
    Root,
    CollapsibleTrigger,
    CollapsibleContent,
  };
});

describe("Collapsible components", () => {
  it("renders Collapsible with correct data-slot", () => {
    render(<Collapsible />);
    const root = screen.getByTestId("mock-collapsible-root");
    expect(root).toBeInTheDocument();
    expect(root).toHaveAttribute("data-slot", "collapsible");
  });

  it("renders Trigger and Content with correct data-slot", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Hidden Content</CollapsibleContent>
      </Collapsible>
    );

    expect(screen.getByTestId("mock-collapsible-trigger")).toHaveAttribute(
      "data-slot",
      "collapsible-trigger"
    );
    expect(screen.getByTestId("mock-collapsible-content")).toHaveAttribute(
      "data-slot",
      "collapsible-content"
    );
  });

  it("toggles content visibility when trigger is clicked", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    );

    const trigger = screen.getByTestId("mock-collapsible-trigger");
    const content = screen.getByTestId("mock-collapsible-content");

    expect(content).toHaveAttribute("hidden");

    fireEvent.click(trigger);
    expect(content).not.toHaveAttribute("hidden");

    fireEvent.click(trigger);
    expect(content).toHaveAttribute("hidden");
  });

  it("calls onOpenChange when toggled", () => {
    const onOpenChange = vi.fn();
    render(
      <Collapsible onOpenChange={onOpenChange}>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>
    );

    const trigger = screen.getByTestId("mock-collapsible-trigger");

    fireEvent.click(trigger);
    expect(onOpenChange).toHaveBeenCalledWith(true);

    fireEvent.click(trigger);
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });
});
