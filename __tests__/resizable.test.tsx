import React from "react";
import { render } from "@testing-library/react";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";

describe("ResizablePanelGroup Component", () => {
  it("renders the panel group root element", () => {
    render(<ResizablePanelGroup direction="horizontal" />);
    const root = document.querySelector('[data-slot="resizable-panel-group"]');
    expect(root).toBeInTheDocument();
  });

  it("applies custom className to panel group", () => {
    render(
      <ResizablePanelGroup direction="horizontal" className="custom-group" />
    );
    const root = document.querySelector('[data-slot="resizable-panel-group"]');
    expect(root?.className).toContain("custom-group");
  });
});

describe("ResizablePanel Component", () => {
  it("renders the panel element", () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Panel 1</ResizablePanel>
      </ResizablePanelGroup>
    );
    const panel = document.querySelector('[data-slot="resizable-panel"]');
    expect(panel).toBeInTheDocument();
    expect(panel?.textContent).toBe("Panel 1");
  });
});

describe("ResizableHandle Component", () => {
  it("renders the handle element", () => {
    render(
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle />
      </ResizablePanelGroup>
    );
    const handle = document.querySelector('[data-slot="resizable-handle"]');
    expect(handle).toBeInTheDocument();
  });
});
