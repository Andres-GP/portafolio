import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { reducer, useToast, toast } from "@/hooks/use-toast";

describe("Toast Reducer", () => {
  const initialState = { toasts: [] };

  it("adds a toast", () => {
    const newToast = { id: "1", open: true, title: "Hello" };
    const state = reducer(initialState, { type: "ADD_TOAST", toast: newToast });
    expect(state.toasts.length).toBe(1);
    expect(state.toasts[0].title).toBe("Hello");
  });

  it("updates a toast", () => {
    const stateWithToast = { toasts: [{ id: "1", open: true, title: "Old" }] };
    const state = reducer(stateWithToast, {
      type: "UPDATE_TOAST",
      toast: { id: "1", title: "New" },
    });
    expect(state.toasts[0].title).toBe("New");
  });

  it("dismisses a toast", () => {
    const stateWithToast = {
      toasts: [{ id: "1", open: true, title: "Hello" }],
    };
    const state = reducer(stateWithToast, {
      type: "DISMISS_TOAST",
      toastId: "1",
    });
    expect(state.toasts[0].open).toBe(false);
  });

  it("removes a toast", () => {
    const stateWithToast = { toasts: [{ id: "1", open: false }] };
    const state = reducer(stateWithToast, {
      type: "REMOVE_TOAST",
      toastId: "1",
    });
    expect(state.toasts.length).toBe(0);
  });
});

describe("toast() function", () => {
  it("adds a toast and returns control methods", () => {
    const t = toast({ title: "Test Toast" });
    expect(t.id).toBeDefined();
    expect(typeof t.dismiss).toBe("function");
    expect(typeof t.update).toBe("function");
  });
});

describe("useToast hook", () => {
  beforeEach(() => {
    // Limpiar estado global entre tests
    const state: any = { toasts: [] };
    vi.stubGlobal("memoryState", state);
  });

  it("returns initial toasts", () => {
    const { result } = renderHook(() => useToast());
    expect(result.current.toasts).toBeDefined();
    expect(Array.isArray(result.current.toasts)).toBe(true);
  });

  it("toast function works via hook", () => {
    const { result } = renderHook(() => useToast());
    act(() => {
      result.current.toast({ title: "Via Hook" });
    });
    expect(result.current.toasts.length).toBeGreaterThan(0);
    expect(result.current.toasts[0].title).toBe("Via Hook");
  });

  it("dismiss works via hook", () => {
    const { result } = renderHook(() => useToast());
    let toastId: string | undefined;
    act(() => {
      const t = result.current.toast({ title: "Dismiss Hook" });
      toastId = t.id;
    });
    act(() => {
      result.current.dismiss(toastId);
    });
    const t = result.current.toasts.find((x) => x.id === toastId);
    expect(t?.open).toBe(false);
  });
});
