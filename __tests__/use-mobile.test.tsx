import { renderHook, act } from "@testing-library/react";
import { useIsMobile } from "@/hooks/use-mobile";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: (query: string) => {
      const listeners: Array<() => void> = [];
      const mql = {
        matches: window.innerWidth < 768,
        media: query,
        onchange: null,
        addEventListener: (event: string, callback: () => void) => {
          listeners.push(callback);
        },
        removeEventListener: (event: string, callback: () => void) => {
          const index = listeners.indexOf(callback);
          if (index >= 0) listeners.splice(index, 1);
        },
        dispatchListeners: () => {
          listeners.forEach((cb) => cb());
        },
        addListener: () => {}, // deprecated
        removeListener: () => {}, // deprecated
      };
      return mql;
    },
  });
});

describe("useIsMobile", () => {
  it("returns true when window.innerWidth < 768", () => {
    window.innerWidth = 500;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(true);
  });

  it("returns false when window.innerWidth >= 768", () => {
    window.innerWidth = 1024;
    const { result } = renderHook(() => useIsMobile());
    expect(result.current).toBe(false);
  });
});
