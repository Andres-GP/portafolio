import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

vi.mock("lucide-react", () => ({
  CheckIcon: (props: any) => <svg data-testid="check-icon" {...props} />,
  ChevronRightIcon: (props: any) => (
    <svg data-testid="chevron-right" {...props} />
  ),
  CircleIcon: (props: any) => <svg data-testid="circle-icon" {...props} />,
}));

vi.mock("@/lib/utils", () => ({
  cn: (...classes: string[]) => classes.filter(Boolean).join(" "),
}));

vi.mock("@radix-ui/react-context-menu", () => ({
  Root: (props: any) => <div data-testid="context-menu-root" {...props} />,
  Trigger: (props: any) => (
    <button data-testid="context-menu-trigger" {...props} />
  ),
  Group: (props: any) => <div data-testid="context-menu-group" {...props} />,
  Portal: (props: any) => <div data-testid="context-menu-portal" {...props} />,
  Sub: (props: any) => <div data-testid="context-menu-sub" {...props} />,
  RadioGroup: (props: any) => (
    <div data-testid="context-menu-radio-group" {...props} />
  ),
  SubTrigger: (props: any) => (
    <div data-testid="context-menu-sub-trigger" {...props} />
  ),
  SubContent: (props: any) => (
    <div data-testid="context-menu-sub-content" {...props} />
  ),
  Content: (props: any) => (
    <div data-testid="context-menu-content" {...props} />
  ),
  Item: (props: any) => <div data-testid="context-menu-item" {...props} />,
  CheckboxItem: (props: any) => (
    <div data-testid="context-menu-checkbox-item" {...props} />
  ),
  RadioItem: (props: any) => (
    <div data-testid="context-menu-radio-item" {...props} />
  ),
  Label: (props: any) => <label data-testid="context-menu-label" {...props} />,
  Separator: (props: any) => (
    <hr data-testid="context-menu-separator" {...props} />
  ),
  ItemIndicator: (props: any) => (
    <span data-testid="item-indicator" {...props} />
  ),
}));

import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
} from "@/components/ui/context-menu";

describe("ContextMenu components", () => {
  it("renders ContextMenu root", () => {
    render(<ContextMenu>Menu</ContextMenu>);
    expect(screen.getByTestId("context-menu-root")).toHaveTextContent("Menu");
  });

  it("renders ContextMenuTrigger", () => {
    render(<ContextMenuTrigger>Open Menu</ContextMenuTrigger>);
    expect(screen.getByTestId("context-menu-trigger")).toHaveTextContent(
      "Open Menu"
    );
  });

  it("renders ContextMenuGroup", () => {
    render(<ContextMenuGroup>Group</ContextMenuGroup>);
    expect(screen.getByTestId("context-menu-group")).toHaveTextContent("Group");
  });

  it("renders ContextMenuPortal", () => {
    render(<ContextMenuPortal>Portal</ContextMenuPortal>);
    expect(screen.getByTestId("context-menu-portal")).toHaveTextContent(
      "Portal"
    );
  });

  it("renders ContextMenuSub", () => {
    render(<ContextMenuSub>Sub</ContextMenuSub>);
    expect(screen.getByTestId("context-menu-sub")).toHaveTextContent("Sub");
  });

  it("renders ContextMenuRadioGroup", () => {
    render(<ContextMenuRadioGroup>Radios</ContextMenuRadioGroup>);
    expect(screen.getByTestId("context-menu-radio-group")).toHaveTextContent(
      "Radios"
    );
  });

  it("renders ContextMenuSubTrigger with chevron icon", () => {
    render(<ContextMenuSubTrigger>Sub Trigger</ContextMenuSubTrigger>);
    expect(screen.getByTestId("context-menu-sub-trigger")).toHaveTextContent(
      "Sub Trigger"
    );
    expect(screen.getByTestId("chevron-right")).toBeInTheDocument();
  });

  it("renders ContextMenuSubContent", () => {
    render(<ContextMenuSubContent>Sub Content</ContextMenuSubContent>);
    expect(screen.getByTestId("context-menu-sub-content")).toHaveTextContent(
      "Sub Content"
    );
  });

  it("renders ContextMenuContent", () => {
    render(<ContextMenuContent>Content</ContextMenuContent>);
    expect(screen.getByTestId("context-menu-content")).toHaveTextContent(
      "Content"
    );
  });

  it("renders ContextMenuItem with default variant", () => {
    render(<ContextMenuItem>Item</ContextMenuItem>);
    const item = screen.getByTestId("context-menu-item");
    expect(item).toHaveTextContent("Item");
    expect(item).toHaveAttribute("data-variant", "default");
  });

  it("renders ContextMenuItem with destructive variant", () => {
    render(<ContextMenuItem variant="destructive">Delete</ContextMenuItem>);
    const item = screen.getByTestId("context-menu-item");
    expect(item).toHaveAttribute("data-variant", "destructive");
  });

  it("renders ContextMenuCheckboxItem with indicator and checked state", () => {
    render(<ContextMenuCheckboxItem checked>Option</ContextMenuCheckboxItem>);
    const checkbox = screen.getByTestId("context-menu-checkbox-item");
    expect(checkbox).toHaveTextContent("Option");
    expect(screen.getByTestId("check-icon")).toBeInTheDocument();
    expect(screen.getByTestId("item-indicator")).toBeInTheDocument();
  });

  it("renders ContextMenuLabel", () => {
    render(<ContextMenuLabel>Label</ContextMenuLabel>);
    expect(screen.getByTestId("context-menu-label")).toHaveTextContent("Label");
  });

  it("renders ContextMenuSeparator", () => {
    render(<ContextMenuSeparator />);
    expect(screen.getByTestId("context-menu-separator")).toBeInTheDocument();
  });
});
