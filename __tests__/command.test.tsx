import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

vi.mock("lucide-react", () => ({
  SearchIcon: (props: any) => <svg data-testid="search-icon" {...props} />,
}));

vi.mock("@/lib/utils", () => ({
  cn: (...classes: string[]) => classes.filter(Boolean).join(" "),
}));

vi.mock("cmdk", () => ({
  Command: (props: any) => <div data-testid="cmdk-root" {...props} />,
  CommandInput: (props: any) => <input data-testid="cmdk-input" {...props} />,
  CommandList: (props: any) => <ul data-testid="cmdk-list" {...props} />,
  CommandEmpty: (props: any) => <div data-testid="cmdk-empty" {...props} />,
  CommandGroup: (props: any) => <div data-testid="cmdk-group" {...props} />,
  CommandItem: (props: any) => <div data-testid="cmdk-item" {...props} />,
  CommandSeparator: (props: any) => (
    <hr data-testid="cmdk-separator" {...props} />
  ),
}));

vi.mock("@/components/ui/dialog", () => ({
  Dialog: ({ children, ...props }: any) => (
    <div data-testid="dialog" {...props}>
      {children}
    </div>
  ),
  DialogContent: ({ children, ...props }: any) => (
    <div data-testid="dialog-content" {...props}>
      {children}
    </div>
  ),
  DialogHeader: ({ children, ...props }: any) => (
    <div data-testid="dialog-header" {...props}>
      {children}
    </div>
  ),
  DialogTitle: ({ children, ...props }: any) => (
    <h2 data-testid="dialog-title" {...props}>
      {children}
    </h2>
  ),
  DialogDescription: ({ children, ...props }: any) => (
    <p data-testid="dialog-description" {...props}>
      {children}
    </p>
  ),
}));

import {
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
} from "@/components/ui/command";

describe("Command UI Components", () => {
  it("renders CommandList correctly", () => {
    render(
      <CommandList>
        <li>Item</li>
      </CommandList>
    );
    const list = screen.getByTestId("cmdk-list");
    expect(list).toBeInTheDocument();
    expect(list).toHaveTextContent("Item");
  });

  it("renders CommandEmpty correctly", () => {
    render(<CommandEmpty>No results</CommandEmpty>);
    const empty = screen.getByTestId("cmdk-empty");
    expect(empty).toBeInTheDocument();
    expect(empty).toHaveTextContent("No results");
  });

  it("renders CommandGroup correctly", () => {
    render(<CommandGroup>Group</CommandGroup>);
    expect(screen.getByTestId("cmdk-group")).toHaveTextContent("Group");
  });

  it("renders CommandItem correctly", () => {
    render(<CommandItem>Item</CommandItem>);
    expect(screen.getByTestId("cmdk-item")).toHaveTextContent("Item");
  });

  it("renders CommandSeparator correctly", () => {
    render(<CommandSeparator />);
    expect(screen.getByTestId("cmdk-separator")).toBeInTheDocument();
  });
});
