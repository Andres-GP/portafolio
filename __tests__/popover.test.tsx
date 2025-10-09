import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import * as React from "react";

vi.mock("@radix-ui/react-popover", () => {
  const Root = ({ children, ...props }: any) => (
    <div data-testid="popover-root" {...props}>
      {children}
    </div>
  );

  const Trigger = ({ children, ...props }: any) => (
    <button data-testid="popover-trigger" {...props}>
      {children}
    </button>
  );

  const Content = ({ children, ...props }: any) => (
    <div data-testid="popover-content" {...props}>
      {children}
    </div>
  );

  const Anchor = ({ children, ...props }: any) => (
    <div data-testid="popover-anchor" {...props}>
      {children}
    </div>
  );

  const Portal = ({ children }: any) => (
    <div data-testid="portal">{children}</div>
  );

  return { Root, Trigger, Content, Anchor, Portal };
});

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from "@/components/ui/popover";

describe("Popover Component Suite", () => {
  beforeEach(() => {
    render(
      <Popover>
        <PopoverAnchor>anchor</PopoverAnchor>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover content</PopoverContent>
      </Popover>
    );
  });

  it("renders the Popover root correctly", () => {
    const popover = screen.getByTestId("popover-root");
    expect(popover).toBeInTheDocument();
    expect(popover).toHaveAttribute("data-slot", "popover");
  });

  it("renders PopoverTrigger with correct data attributes", () => {
    const trigger = screen.getByTestId("popover-trigger");
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveAttribute("data-slot", "popover-trigger");
    expect(trigger).toHaveTextContent("Open Popover");
  });

  it("renders PopoverAnchor correctly", () => {
    const anchor = screen.getByTestId("popover-anchor");
    expect(anchor).toBeInTheDocument();
    expect(anchor).toHaveAttribute("data-slot", "popover-anchor");
  });

  it("renders PopoverContent within a portal", () => {
    const portal = screen.getByTestId("portal");
    expect(portal).toBeInTheDocument();

    const content = screen.getByTestId("popover-content");
    expect(content).toBeInTheDocument();
    expect(content).toHaveAttribute("data-slot", "popover-content");
  });

  it("applies default className and side alignment to PopoverContent", () => {
    const content = screen.getByTestId("popover-content");
    expect(content.className).toContain("bg-popover");
    expect(content).toHaveAttribute("align", "center");
    expect(content).toHaveAttribute("sideoffset", "4");
  });

  it("allows overriding PopoverContent className", () => {
    render(
      <Popover>
        <PopoverContent className="custom-style">Custom Content</PopoverContent>
      </Popover>
    );

    const custom = screen.getByText("Custom Content");
    expect(custom.className).toContain("custom-style");
  });

  it("supports trigger interaction (click simulation)", () => {
    const trigger = screen.getByTestId("popover-trigger");
    fireEvent.click(trigger);

    expect(trigger).toBeInTheDocument();
  });
});
