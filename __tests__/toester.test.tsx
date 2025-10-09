// __tests__/toaster.test.tsx
import * as React from "react";
import { render, screen } from "@testing-library/react";
import { Toaster } from "@/components/ui/toaster";
import { describe, it, expect, vi } from "vitest";

vi.mock("@/hooks/use-toast", () => ({
  useToast: vi.fn(),
}));

import { useToast } from "@/hooks/use-toast";

describe("Toaster", () => {
  it("renders toasts with title and description", () => {
    (useToast as jest.Mock).mockReturnValue({
      toasts: [
        {
          id: "1",
          title: "Test Title",
          description: "Test Description",
        },
      ],
    });

    render(<Toaster />);

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("renders multiple toasts", () => {
    (useToast as jest.Mock).mockReturnValue({
      toasts: [
        { id: "1", title: "Title 1", description: "Desc 1" },
        { id: "2", title: "Title 2", description: "Desc 2" },
      ],
    });

    render(<Toaster />);

    expect(screen.getByText("Title 1")).toBeInTheDocument();
    expect(screen.getByText("Desc 1")).toBeInTheDocument();
    expect(screen.getByText("Title 2")).toBeInTheDocument();
    expect(screen.getByText("Desc 2")).toBeInTheDocument();
  });

  it("renders ToastClose button for each toast", () => {
    (useToast as jest.Mock).mockReturnValue({
      toasts: [{ id: "1", title: "Title", description: "Desc" }],
    });

    render(<Toaster />);

    const closeButtons = screen.getAllByRole("button", { hidden: true });
    expect(closeButtons.length).toBe(1);
  });

  it("renders ToastViewport", () => {
    (useToast as jest.Mock).mockReturnValue({ toasts: [] });

    render(<Toaster />);

    const viewport = screen.getByRole("region", { hidden: true });
    expect(viewport).toBeInTheDocument();
  });
});
