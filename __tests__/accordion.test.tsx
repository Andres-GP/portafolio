import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";

describe("Accordion component", () => {
  it("renders Accordion and AccordionItem", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText("Trigger 1");
    expect(trigger).toBeInTheDocument();

    const accordionItem = trigger.closest('[data-slot="accordion-item"]');
    const content = accordionItem?.querySelector(
      '[data-slot="accordion-content"]'
    );
    expect(content).toBeTruthy();

    expect(accordionItem).toHaveAttribute("data-state", "closed");
  });

  it("toggles content when trigger is clicked", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText("Trigger 1");
    const accordionItem = trigger.closest('[data-slot="accordion-item"]');
    const content = accordionItem?.querySelector(
      '[data-slot="accordion-content"]'
    );

    if (!accordionItem || !content) {
      throw new Error("AccordionItem or Content not found");
    }

    expect(accordionItem).toHaveAttribute("data-state", "closed");

    fireEvent.click(trigger);
    expect(accordionItem).toHaveAttribute("data-state", "open");

    fireEvent.click(trigger);
    expect(accordionItem).toHaveAttribute("data-state", "closed");
  });
});
