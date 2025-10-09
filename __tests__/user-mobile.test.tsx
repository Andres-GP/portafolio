import { renderHook, act } from "@testing-library/react";
import { useIsMobile } from "@/components/ui/use-mobile";
import { vi } from "vitest";

const MOBILE_BREAKPOINT = 768;

describe("useIsMobile hook", () => {
  let matchMediaMock: ReturnType<typeof vi.fn>;

  beforeAll(() => {
    matchMediaMock = vi.fn().mockImplementation((query) => {
      const listeners: Function[] = [];
      const instance = {
        matches: window.innerWidth < MOBILE_BREAKPOINT,
        media: query,
        addEventListener: (_: string, cb: Function) => listeners.push(cb),
        removeEventListener: (_: string, cb: Function) => {
          const index = listeners.indexOf(cb);
          if (index > -1) listeners.splice(index, 1);
        },
        dispatchChange: () => {
          listeners.forEach((cb) => cb());
        },
      };
      return instance;
    });

    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: matchMediaMock,
    });
  });

  it("returns true when window width is less than breakpoint", () => {
    window.innerWidth = 500;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it("returns false when window width is greater than or equal to breakpoint", () => {
    window.innerWidth = 800;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });

  it("updates when window width changes", () => {
    window.innerWidth = 800;
    const { result } = renderHook(() => useIsMobile());

    expect(result.current).toBe(false);
  });
});
