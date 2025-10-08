import * as React from "react";
import { render, screen } from "@testing-library/react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

describe("AspectRatio component", () => {
  it("renders the AspectRatio container", () => {
    const { container } = render(<AspectRatio />);

    const aspectRatio = container.querySelector('[data-slot="aspect-ratio"]');
    expect(aspectRatio).toBeInTheDocument();
  });

  it("accepts custom className", () => {
    const { container } = render(<AspectRatio className="custom-class" />);
    const aspectRatio = container.querySelector('[data-slot="aspect-ratio"]');
    expect(aspectRatio).toHaveClass("custom-class");
  });

  it("can render children inside the aspect ratio", () => {
    render(
      <AspectRatio>
        <span>Child</span>
      </AspectRatio>
    );
    expect(screen.getByText("Child")).toBeInTheDocument();
  });
});
