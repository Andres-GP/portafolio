import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

vi.mock("@radix-ui/react-hover-card", () => {
  const React = require("react");
  return {
    Root: ({ children, ...props }: any) => (
      <div data-testid="hovercard-root" {...props}>
        {children}
      </div>
    ),
    Trigger: ({ children, ...props }: any) => (
      <button data-testid="hovercard-trigger" {...props}>
        {children}
      </button>
    ),
    Portal: ({ children, ...props }: any) => (
      <div data-testid="hovercard-portal" {...props}>
        {children}
      </div>
    ),
    Content: ({ children, ...props }: any) => (
      <div data-testid="hovercard-content" {...props}>
        {children}
      </div>
    ),
  };
});

describe("HoverCard", () => {
  it("renders HoverCard root with data-slot", () => {
    render(<HoverCard>content</HoverCard>);
    const root = screen.getByTestId("hovercard-root");
    expect(root).toHaveAttribute("data-slot", "hover-card");
  });

  it("renders HoverCardTrigger correctly with data-slot", () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Trigger</HoverCardTrigger>
      </HoverCard>
    );
    const trigger = screen.getByTestId("hovercard-trigger");
    expect(trigger).toHaveAttribute("data-slot", "hover-card-trigger");
    expect(trigger).toHaveTextContent("Trigger");
  });

  it("renders HoverCardContent inside a portal with proper slots", () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Extra info</HoverCardContent>
      </HoverCard>
    );

    const portal = screen.getByTestId("hovercard-portal");
    const content = screen.getByTestId("hovercard-content");

    expect(portal).toBeInTheDocument();
    expect(portal).toHaveAttribute("data-slot", "hover-card-portal");
    expect(content).toHaveAttribute("data-slot", "hover-card-content");
    expect(content).toHaveTextContent("Extra info");
  });

  it("applies default alignment and offset", () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent>Aligned content</HoverCardContent>
      </HoverCard>
    );
    const content = screen.getByTestId("hovercard-content");
    expect(content).toHaveAttribute("align", "center");
    expect(content).toHaveAttribute("sideOffset", "4");
  });

  it("accepts custom className for HoverCardContent", () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover me</HoverCardTrigger>
        <HoverCardContent className="custom-class">
          Custom content
        </HoverCardContent>
      </HoverCard>
    );
    const content = screen.getByTestId("hovercard-content");
    expect(content).toHaveClass("custom-class");
  });

  it("handles hover interaction logically", async () => {
    const user = userEvent.setup();
    render(
      <HoverCard>
        <HoverCardTrigger>Hover</HoverCardTrigger>
        <HoverCardContent>Visible on hover</HoverCardContent>
      </HoverCard>
    );

    const trigger = screen.getByTestId("hovercard-trigger");
    const content = screen.getByTestId("hovercard-content");

    await user.hover(trigger);
    expect(content).toBeInTheDocument();

    await user.unhover(trigger);
    expect(content).toBeInTheDocument();
  });
});
