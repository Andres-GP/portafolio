import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import { Contact } from "@/components/contact";

vi.mock("@/components/ui/button", () => ({
  Button: ({ children, ...props }: any) => (
    <button {...props}>{children}</button>
  ),
}));
vi.mock("@/components/ui/card", () => ({
  Card: ({ children, ...props }: any) => <div {...props}>{children}</div>,
}));

describe("Contact Component", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders form fields and static info correctly", () => {
    render(<Contact />);

    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();
    expect(
      screen.getByText("andresgarciapedreros@gmail.com")
    ).toBeInTheDocument();
    expect(screen.getByText("+57 305 879 7720")).toBeInTheDocument();
    expect(screen.getByText("Bogotá, Colombia")).toBeInTheDocument();

    // Form fields
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();

    // Button
    expect(
      screen.getByRole("button", { name: /Send Message/i })
    ).toBeInTheDocument();
  });

  it("updates form values when user types", () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText("Name") as HTMLInputElement;
    const emailInput = screen.getByLabelText("Email") as HTMLInputElement;
    const messageInput = screen.getByLabelText(
      "Message"
    ) as HTMLTextAreaElement;

    fireEvent.change(nameInput, { target: { value: "Andrés" } });
    fireEvent.change(emailInput, { target: { value: "test@mail.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello!" } });

    expect(nameInput.value).toBe("Andrés");
    expect(emailInput.value).toBe("test@mail.com");
    expect(messageInput.value).toBe("Hello!");
  });

  it("submits successfully when fetch resolves ok", async () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce({ ok: true } as Response);

    render(<Contact />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Andrés" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@mail.com" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Hola mundo" },
    });

    fireEvent.submit(
      screen.getByRole("button", { name: /Send Message/i }).closest("form")!
    );

    expect(
      await screen.findByText(/Message sent successfully/i)
    ).toBeInTheDocument();
  });

  it("shows error when fetch fails", async () => {
    vi.spyOn(global, "fetch").mockResolvedValueOnce({ ok: false } as Response);

    render(<Contact />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Andrés" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@mail.com" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Hola mundo" },
    });

    fireEvent.submit(
      screen.getByRole("button", { name: /Send Message/i }).closest("form")!
    );

    expect(
      await screen.findByText(/Something went wrong/i)
    ).toBeInTheDocument();
  });

  it("shows error if fetch throws", async () => {
    vi.spyOn(global, "fetch").mockRejectedValueOnce(new Error("Network error"));

    render(<Contact />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Andrés" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@mail.com" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Hola mundo" },
    });

    fireEvent.submit(
      screen.getByRole("button", { name: /Send Message/i }).closest("form")!
    );

    expect(
      await screen.findByText(/Something went wrong/i)
    ).toBeInTheDocument();
  });

  it("disables the button while sending", async () => {
    const fetchMock = vi
      .spyOn(global, "fetch")
      .mockImplementation(
        () =>
          new Promise((res) =>
            setTimeout(() => res({ ok: true } as Response), 100)
          )
      );

    render(<Contact />);

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Andrés" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "test@mail.com" },
    });
    fireEvent.change(screen.getByLabelText("Message"), {
      target: { value: "Hola mundo" },
    });

    const button = screen.getByRole("button", { name: /Send Message/i });
    fireEvent.submit(button.closest("form")!);

    expect(button).toBeDisabled();

    await waitFor(() => expect(button).not.toBeDisabled(), { timeout: 2000 });

    fetchMock.mockRestore();
  });
});
