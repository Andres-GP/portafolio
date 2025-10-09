import { render, screen } from "@testing-library/react";
import React from "react";
import Loader from "@/components/ui/loader"; // ajusta si la ruta es distinta

describe("Loader", () => {
  it("renderiza correctamente el contenedor principal", () => {
    render(<Loader />);
    const container = screen.getByTestId("loader-container");

    expect(container).toBeInTheDocument();
    expect(container).toHaveClass("flex");
    expect(container).toHaveClass("items-center");
    expect(container).toHaveClass("justify-center");
  });

  it("contiene el spinner con clases de animación", () => {
    render(<Loader />);
    const spinner = screen.getByTestId("loader-spinner");

    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass("animate-spin");
    expect(spinner).toHaveClass("rounded-full");
  });
});
