import * as React from "react";
import { render, screen } from "@testing-library/react";
import {
  ToastProvider,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastViewport,
} from "@/components/ui/toast";

describe("Toast components", () => {
  it("renders Toast with title and description", () => {
    render(
      <ToastProvider>
        <Toast defaultOpen>
          <ToastTitle>Title</ToastTitle>
          <ToastDescription>Description</ToastDescription>
        </Toast>
        <ToastViewport />
      </ToastProvider>
    );

    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("applies className and variant", () => {
    render(
      <ToastProvider>
        <Toast defaultOpen variant="destructive" className="custom-class">
          <ToastTitle>Title</ToastTitle>
        </Toast>
        <ToastViewport />
      </ToastProvider>
    );

    const toast = screen.getByText("Title").closest("[data-state]");
    expect(toast).toHaveClass("custom-class");
    expect(toast).toHaveClass("destructive");
  });

  it("renders ToastViewport", () => {
    render(
      <ToastProvider>
        <ToastViewport />
      </ToastProvider>
    );

    const viewport = screen.getByRole("region", { hidden: true });
    expect(viewport).toBeInTheDocument();
  });
});
