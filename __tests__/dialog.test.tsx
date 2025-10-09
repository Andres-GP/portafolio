import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

vi.mock("lucide-react", () => ({
  XIcon: (props: any) => <svg data-testid="x-icon" {...props} />,
}));

vi.mock("@/lib/utils", () => ({
  cn: (...classes: string[]) => classes.filter(Boolean).join(" "),
}));

vi.mock("@radix-ui/react-dialog", () => ({
  Root: (props: any) => <div data-testid="dialog-root" {...props} />,
  Trigger: (props: any) => <button data-testid="dialog-trigger" {...props} />,
  Portal: (props: any) => <div data-testid="dialog-portal" {...props} />,
  Overlay: (props: any) => <div data-testid="dialog-overlay" {...props} />,
  Close: (props: any) => <button data-testid="dialog-close" {...props} />,
  Content: (props: any) => <div data-testid="dialog-content" {...props} />,
  Title: (props: any) => <h2 data-testid="dialog-title" {...props} />,
  Description: (props: any) => (
    <p data-testid="dialog-description" {...props} />
  ),
}));

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

describe("Dialog components", () => {
  it("renders Dialog root", () => {
    render(<Dialog>Dialog Root</Dialog>);
    expect(screen.getByTestId("dialog-root")).toHaveTextContent("Dialog Root");
  });

  it("renders DialogTrigger", () => {
    render(<DialogTrigger>Open Dialog</DialogTrigger>);
    expect(screen.getByTestId("dialog-trigger")).toHaveTextContent(
      "Open Dialog"
    );
  });

  it("renders DialogPortal", () => {
    render(<DialogPortal>Portal Content</DialogPortal>);
    expect(screen.getByTestId("dialog-portal")).toHaveTextContent(
      "Portal Content"
    );
  });

  it("renders DialogOverlay with proper class", () => {
    render(<DialogOverlay />);
    const overlay = screen.getByTestId("dialog-overlay");
    expect(overlay).toBeInTheDocument();
    expect(overlay.className).toContain("fixed inset-0 z-50");
  });

  it("renders DialogContent with children and close button", () => {
    render(
      <DialogContent>
        <p>Content</p>
      </DialogContent>
    );
    expect(screen.getByTestId("dialog-content")).toHaveTextContent("Content");
    expect(screen.getByTestId("dialog-close")).toBeInTheDocument();
    expect(screen.getByTestId("x-icon")).toBeInTheDocument();
  });

  it("renders DialogContent without close button when showCloseButton is false", () => {
    render(
      <DialogContent showCloseButton={false}>
        <p>Content</p>
      </DialogContent>
    );
    expect(screen.queryByTestId("dialog-close")).not.toBeInTheDocument();
  });

  it("renders DialogClose button", () => {
    render(<DialogClose>Close</DialogClose>);
    expect(screen.getByTestId("dialog-close")).toHaveTextContent("Close");
  });

  it("renders DialogTitle", () => {
    render(<DialogTitle>Title</DialogTitle>);
    expect(screen.getByTestId("dialog-title")).toHaveTextContent("Title");
  });

  it("renders DialogDescription", () => {
    render(<DialogDescription>Description</DialogDescription>);
    expect(screen.getByTestId("dialog-description")).toHaveTextContent(
      "Description"
    );
  });
});
