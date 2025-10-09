import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, it, expect, vi } from "vitest";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";

vi.spyOn(console, "error").mockImplementation(() => {});

describe("Drawer", () => {
  it("renders the DrawerTrigger with data-slot within Drawer", () => {
    render(
      <Drawer open={true} onOpenChange={() => {}}>
        <DrawerTrigger data-testid="trigger">Open</DrawerTrigger>
      </Drawer>
    );
    const trigger = screen.getByTestId("trigger");
    expect(trigger).toHaveAttribute("data-slot", "drawer-trigger");
  });

  it("renders DrawerContent with children correctly", () => {
    render(
      <Drawer open={true} onOpenChange={() => {}}>
        <DrawerContent data-testid="content">
          <p>Drawer Body</p>
        </DrawerContent>
      </Drawer>
    );
    const content = screen.getByTestId("content");
    expect(content).toHaveAttribute("data-slot", "drawer-content");
    expect(content).toHaveTextContent("Drawer Body");
  });

  it("renders DrawerHeader and DrawerFooter inside Drawer", () => {
    render(
      <Drawer open={true} onOpenChange={() => {}}>
        <DrawerContent>
          <DrawerHeader data-testid="header">Header</DrawerHeader>
          <DrawerFooter data-testid="footer">Footer</DrawerFooter>
        </DrawerContent>
      </Drawer>
    );

    const header = screen.getByTestId("header");
    const footer = screen.getByTestId("footer");

    expect(header).toHaveAttribute("data-slot", "drawer-header");
    expect(footer).toHaveAttribute("data-slot", "drawer-footer");
  });

  it("renders DrawerTitle and DrawerDescription correctly", () => {
    render(
      <Drawer open={true} onOpenChange={() => {}}>
        <DrawerContent>
          <DrawerTitle data-testid="title">My Drawer</DrawerTitle>
          <DrawerDescription data-testid="desc">
            Description here
          </DrawerDescription>
        </DrawerContent>
      </Drawer>
    );

    const title = screen.getByTestId("title");
    const desc = screen.getByTestId("desc");

    expect(title).toHaveAttribute("data-slot", "drawer-title");
    expect(desc).toHaveAttribute("data-slot", "drawer-description");
    expect(title).toHaveTextContent("My Drawer");
    expect(desc).toHaveTextContent("Description here");
  });
});
