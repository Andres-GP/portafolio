import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetClose,
} from "@/components/ui/sheet";

describe("Sheet Components", () => {
  test("renders Sheet and its subcomponents", async () => {
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>Header</SheetHeader>
          <SheetTitle>Title</SheetTitle>
          <SheetDescription>Description</SheetDescription>
          <SheetFooter>Footer</SheetFooter>
          <SheetClose />
        </SheetContent>
      </Sheet>
    );

    // Abrir la Sheet
    await userEvent.click(screen.getByText("Open"));

    // Verificar elementos visibles
    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();

    // Botón Close
    const closeButton = screen.getByRole("button", { name: /close/i });
    expect(closeButton).toBeInTheDocument();
    expect(closeButton.querySelector("svg")).toBeInTheDocument();
  });

  test("SheetContent applies correct side classes", async () => {
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent side="left">Content</SheetContent>
      </Sheet>
    );

    await userEvent.click(screen.getByText("Open"));
    const content = screen
      .getByText("Content")
      .closest('[data-slot="sheet-content"]');
    expect(content).toHaveClass("data-[state=closed]:slide-out-to-left");
    expect(content).toHaveClass("data-[state=open]:slide-in-from-left");
  });
});
