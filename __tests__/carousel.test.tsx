// __tests__/carousel.test.tsx
import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { vi } from "vitest";

// Mock de embla-carousel-react
vi.mock("embla-carousel-react", () => {
  return {
    default: vi.fn(() => [
      vi.fn(), // carouselRef mock
      {
        scrollPrev: vi.fn(),
        scrollNext: vi.fn(),
        canScrollPrev: vi.fn(() => true),
        canScrollNext: vi.fn(() => true),
        on: vi.fn(),
        off: vi.fn(),
      },
    ]),
  };
});

describe("Carousel Component", () => {
  it("renders carousel container", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
        </CarouselContent>
      </Carousel>
    );

    // Solo buscamos por rol, sin name
    const carousel = screen.getByRole("region");
    expect(carousel).toBeInTheDocument();
  });

  it("renders carousel items", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
      </Carousel>
    );

    const items = screen.getAllByRole("group");
    expect(items).toHaveLength(2);
    expect(items[0]).toHaveTextContent("Slide 1");
    expect(items[1]).toHaveTextContent("Slide 2");
  });

  it("renders Previous button and can click it", () => {
    const onPrev = vi.fn();
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
        </CarouselContent>
        <CarouselPrevious onClick={onPrev} />
      </Carousel>
    );

    const prevButton = screen.getByRole("button", { name: /Previous slide/i });
    expect(prevButton).toBeInTheDocument();

    fireEvent.click(prevButton);
    expect(onPrev).toHaveBeenCalledTimes(1);
  });

  it("renders Next button and can click it", () => {
    const onNext = vi.fn();
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
        </CarouselContent>
        <CarouselNext onClick={onNext} />
      </Carousel>
    );

    const nextButton = screen.getByRole("button", { name: /Next slide/i });
    expect(nextButton).toBeInTheDocument();

    fireEvent.click(nextButton);
    expect(onNext).toHaveBeenCalledTimes(1);
  });
});
