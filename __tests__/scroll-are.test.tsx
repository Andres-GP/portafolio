import React from "react";
import { render, screen } from "@testing-library/react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

describe("ScrollArea Component", () => {
  it("renders the ScrollArea root element", () => {
    render(
      <ScrollArea>
        <div>Content</div>
      </ScrollArea>
    );
    const root = document.querySelector('[data-slot="scroll-area"]');
    expect(root).toBeInTheDocument();
  });

  it("applies custom className to ScrollArea root", () => {
    render(
      <ScrollArea className="custom-scroll-area">
        <div>Content</div>
      </ScrollArea>
    );
    const root = document.querySelector('[data-slot="scroll-area"]');
    expect(root?.className).toContain("custom-scroll-area");
  });

  it("renders the viewport and children inside", () => {
    render(
      <ScrollArea>
        <div data-testid="content">Hello World</div>
      </ScrollArea>
    );
    const viewport = document.querySelector(
      '[data-slot="scroll-area-viewport"]'
    );
    const content = screen.getByTestId("content");

    expect(viewport).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(content.textContent).toBe("Hello World");
  });
});
