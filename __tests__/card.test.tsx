import React from "react";
import { render, screen } from "@testing-library/react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

describe("Card components", () => {
  it("renders Card with custom class and props", () => {
    render(<Card className="my-card" data-testid="card" />);
    const card = screen.getByTestId("card");
    expect(card).toBeInTheDocument();
    expect(card).toHaveClass("my-card");
    expect(card).toHaveAttribute("data-slot", "card");
  });

  it("renders CardHeader", () => {
    render(<CardHeader className="my-header" data-testid="card-header" />);
    const header = screen.getByTestId("card-header");
    expect(header).toBeInTheDocument();
    expect(header).toHaveClass("my-header");
    expect(header).toHaveAttribute("data-slot", "card-header");
  });

  it("renders CardTitle", () => {
    render(<CardTitle className="my-title" data-testid="card-title" />);
    const title = screen.getByTestId("card-title");
    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("my-title");
    expect(title).toHaveAttribute("data-slot", "card-title");
  });

  it("renders CardDescription", () => {
    render(
      <CardDescription className="my-desc" data-testid="card-description" />
    );
    const desc = screen.getByTestId("card-description");
    expect(desc).toBeInTheDocument();
    expect(desc).toHaveClass("my-desc");
    expect(desc).toHaveAttribute("data-slot", "card-description");
  });

  it("renders CardAction", () => {
    render(<CardAction className="my-action" data-testid="card-action" />);
    const action = screen.getByTestId("card-action");
    expect(action).toBeInTheDocument();
    expect(action).toHaveClass("my-action");
    expect(action).toHaveAttribute("data-slot", "card-action");
  });

  it("renders CardContent", () => {
    render(<CardContent className="my-content" data-testid="card-content" />);
    const content = screen.getByTestId("card-content");
    expect(content).toBeInTheDocument();
    expect(content).toHaveClass("my-content");
    expect(content).toHaveAttribute("data-slot", "card-content");
  });

  it("renders CardFooter", () => {
    render(<CardFooter className="my-footer" data-testid="card-footer" />);
    const footer = screen.getByTestId("card-footer");
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveClass("my-footer");
    expect(footer).toHaveAttribute("data-slot", "card-footer");
  });
});
