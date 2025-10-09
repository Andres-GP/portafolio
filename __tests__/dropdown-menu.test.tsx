import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

import {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";

vi.mock("lucide-react", () => ({
  CheckIcon: (props: any) => <svg data-testid="check-icon" {...props} />,
  ChevronRightIcon: (props: any) => (
    <svg data-testid="chevron-icon" {...props} />
  ),
  CircleIcon: (props: any) => <svg data-testid="circle-icon" {...props} />,
}));

vi.mock("@/lib/utils", () => ({
  cn: (...classes: string[]) => classes.filter(Boolean).join(" "),
}));

vi.mock("@radix-ui/react-dropdown-menu", () => ({
  Root: (props: any) => <div data-testid="dropdown-menu-root" {...props} />,
  Portal: (props: any) => <div data-testid="dropdown-menu-portal" {...props} />,
  Trigger: (props: any) => (
    <button data-testid="dropdown-menu-trigger" {...props} />
  ),
  Content: (props: any) => (
    <div data-testid="dropdown-menu-content" {...props} />
  ),
  Group: (props: any) => <div data-testid="dropdown-menu-group" {...props} />,
  Item: (props: any) => <div data-testid="dropdown-menu-item" {...props} />,
  CheckboxItem: (props: any) => (
    <div data-testid="dropdown-menu-checkbox-item" {...props} />
  ),
  ItemIndicator: (props: any) => (
    <span data-testid="dropdown-menu-indicator" {...props} />
  ),
  RadioGroup: (props: any) => (
    <div data-testid="dropdown-menu-radio-group" {...props} />
  ),
  RadioItem: (props: any) => (
    <div data-testid="dropdown-menu-radio-item" {...props} />
  ),
  Label: (props: any) => <label data-testid="dropdown-menu-label" {...props} />,
  Separator: (props: any) => (
    <hr data-testid="dropdown-menu-separator" {...props} />
  ),
  Sub: (props: any) => <div data-testid="dropdown-menu-sub" {...props} />,
  SubTrigger: (props: any) => (
    <div data-testid="dropdown-menu-sub-trigger" {...props} />
  ),
  SubContent: (props: any) => (
    <div data-testid="dropdown-menu-sub-content" {...props} />
  ),
}));

describe("DropdownMenu components", () => {
  it("renders DropdownMenu root correctly", () => {
    render(<DropdownMenu>Menu</DropdownMenu>);
    expect(screen.getByTestId("dropdown-menu-root")).toBeInTheDocument();
  });

  it("renders DropdownMenuPortal correctly", () => {
    render(<DropdownMenuPortal>Portal</DropdownMenuPortal>);
    expect(screen.getByTestId("dropdown-menu-portal")).toBeInTheDocument();
  });

  it("renders DropdownMenuTrigger correctly", () => {
    render(<DropdownMenuTrigger>Trigger</DropdownMenuTrigger>);
    expect(screen.getByTestId("dropdown-menu-trigger")).toHaveTextContent(
      "Trigger"
    );
  });

  it("renders DropdownMenuContent correctly", () => {
    render(<DropdownMenuContent>Content</DropdownMenuContent>);
    expect(screen.getByTestId("dropdown-menu-content")).toHaveTextContent(
      "Content"
    );
  });

  it("renders DropdownMenuGroup correctly", () => {
    render(<DropdownMenuGroup>Group</DropdownMenuGroup>);
    expect(screen.getByTestId("dropdown-menu-group")).toHaveTextContent(
      "Group"
    );
  });

  it("renders DropdownMenuItem with correct text", () => {
    render(<DropdownMenuItem>Item</DropdownMenuItem>);
    expect(screen.getByTestId("dropdown-menu-item")).toHaveTextContent("Item");
  });

  it("renders DropdownMenuCheckboxItem with indicator and label", () => {
    render(<DropdownMenuCheckboxItem checked>Check</DropdownMenuCheckboxItem>);
    expect(screen.getByTestId("dropdown-menu-checkbox-item")).toHaveTextContent(
      "Check"
    );
    expect(screen.getByTestId("check-icon")).toBeInTheDocument();
  });

  it("renders DropdownMenuRadioGroup correctly", () => {
    render(<DropdownMenuRadioGroup>RadioGroup</DropdownMenuRadioGroup>);
    expect(screen.getByTestId("dropdown-menu-radio-group")).toBeInTheDocument();
  });

  it("renders DropdownMenuLabel correctly", () => {
    render(<DropdownMenuLabel>Label</DropdownMenuLabel>);
    expect(screen.getByTestId("dropdown-menu-label")).toHaveTextContent(
      "Label"
    );
  });

  it("renders DropdownMenuSeparator correctly", () => {
    render(<DropdownMenuSeparator />);
    expect(screen.getByTestId("dropdown-menu-separator")).toBeInTheDocument();
  });

  it("renders DropdownMenuSub correctly", () => {
    render(<DropdownMenuSub>Sub</DropdownMenuSub>);
    expect(screen.getByTestId("dropdown-menu-sub")).toBeInTheDocument();
  });

  it("renders DropdownMenuSubTrigger correctly with icon", () => {
    render(<DropdownMenuSubTrigger>SubTrigger</DropdownMenuSubTrigger>);
    expect(screen.getByTestId("dropdown-menu-sub-trigger")).toHaveTextContent(
      "SubTrigger"
    );
    expect(screen.getByTestId("chevron-icon")).toBeInTheDocument();
  });

  it("renders DropdownMenuSubContent correctly", () => {
    render(<DropdownMenuSubContent>SubContent</DropdownMenuSubContent>);
    expect(screen.getByTestId("dropdown-menu-sub-content")).toHaveTextContent(
      "SubContent"
    );
  });
});
