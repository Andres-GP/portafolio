import { describe, it, expect, vi } from "vitest";
import { cn, scrollToSection } from "@/lib/utils";

describe("cn function", () => {
  it("merges class strings correctly", () => {
    expect(cn("text-red-500", "font-bold")).toBe("text-red-500 font-bold");
  });

  it("merges conditional classes correctly", () => {
    expect(cn("text-red-500", { "font-bold": true, italic: false })).toBe(
      "text-red-500 font-bold"
    );
  });

  it("deduplicates conflicting Tailwind classes", () => {
    expect(cn("text-red-500 text-blue-500")).toBe("text-blue-500");
  });

  it("works with arrays of classes", () => {
    expect(cn(["text-red-500", "font-bold"], "underline")).toBe(
      "text-red-500 font-bold underline"
    );
  });
});

describe("scrollToSection function", () => {
  it("calls scrollIntoView on the target element", () => {
    const scrollIntoViewMock = vi.fn();
    const element = document.createElement("div");
    element.id = "section1";
    element.scrollIntoView = scrollIntoViewMock;
    document.body.appendChild(element);

    scrollToSection("section1");
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });

    document.body.removeChild(element);
  });

  it("does nothing if element does not exist", () => {
    const result = scrollToSection("non-existent-section");
    expect(result).toBeUndefined();
  });
});
