import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

describe("Tabs components", () => {
  it("renders Tabs with className and props", () => {
    render(<Tabs className="custom-tabs" data-testid="tabs" />);
    const tabs = screen.getByTestId("tabs");
    expect(tabs).toBeInTheDocument();
    expect(tabs).toHaveAttribute("data-slot", "tabs");
    expect(tabs).toHaveClass("custom-tabs");
  });

  it("renders TabsList, TabsTrigger and TabsContent correctly", () => {
    render(
      <Tabs defaultValue="tab1" data-testid="tabs">
        <TabsList data-testid="tabs-list" className="custom-list">
          <TabsTrigger
            value="tab1"
            data-testid="tabs-trigger"
            className="custom-trigger"
          >
            Tab 1
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="tab1"
          data-testid="tabs-content"
          className="custom-content"
        >
          Content 1
        </TabsContent>
      </Tabs>
    );

    const list = screen.getByTestId("tabs-list");
    const trigger = screen.getByTestId("tabs-trigger");
    const content = screen.getByTestId("tabs-content");

    expect(list).toBeInTheDocument();
    expect(list).toHaveClass("custom-list");
    expect(trigger).toBeInTheDocument();
    expect(trigger).toHaveClass("custom-trigger");
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass("custom-content");
  });

  it("changes content when trigger is clicked", () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Content 1</TabsContent>
        <TabsContent value="tab2">Content 2</TabsContent>
      </Tabs>
    );

    expect(screen.getByText("Content 1")).toBeVisible();

    fireEvent.click(screen.getByText("Tab 2"));
  });
});
