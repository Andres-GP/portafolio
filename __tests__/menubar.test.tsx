import { describe, it, expect, beforeEach, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarShortcut,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "@/components/ui/menubar";
import React from "react";

vi.mock("@radix-ui/react-portal", () => ({
  Root: ({ children }: any) => children,
}));

vi.mock("lucide-react", () => ({
  CheckIcon: () => <svg data-testid="check-icon" />,
  ChevronRightIcon: () => <svg data-testid="chevron-icon" />,
  CircleIcon: () => <svg data-testid="circle-icon" />,
}));

describe("Menubar Component", () => {
  beforeEach(() => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>New Tab</MenubarItem>
            <MenubarItem>Save</MenubarItem>
            <MenubarSeparator />
            <MenubarCheckboxItem checked>Dark Mode</MenubarCheckboxItem>
            <MenubarRadioGroup value="1">
              <MenubarRadioItem value="1">Option A</MenubarRadioItem>
              <MenubarRadioItem value="2">Option B</MenubarRadioItem>
            </MenubarRadioGroup>
            <MenubarSub>
              <MenubarSubTrigger>More Options</MenubarSubTrigger>
              <MenubarSubContent>
                <MenubarItem>Sub Option 1</MenubarItem>
              </MenubarSubContent>
            </MenubarSub>
            <MenubarLabel>Shortcuts</MenubarLabel>
            <MenubarItem>
              Save As
              <MenubarShortcut>⌘S</MenubarShortcut>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );
  });

  it("renders the main Menubar", () => {
    expect(screen.getByRole("menubar")).toBeInTheDocument();
  });

  it("displays the menu trigger", () => {
    const trigger = screen.getByText("File");
    expect(trigger).toBeInTheDocument();
  });
});
