import { POST } from "../app/api/send/route";
import { describe, it, expect, vi, beforeEach } from "vitest";

let mockSend: any;

vi.mock("resend", () => {
  return {
    Resend: class {
      emails = {
        send: (...args: any[]) => mockSend(...args),
      };
    },
  };
});

describe("POST /api/send", () => {
  beforeEach(() => {
    mockSend = vi.fn();
  });

  it("Should return error 400 if fields are missing", async () => {
    const req = new Request("http://localhost/api/send", {
      method: "POST",
      body: JSON.stringify({ name: "Andrés" }),
    });

    const res = await POST(req);
    expect(res.status).toBe(400);
  });

  it("Should send an email if all fields are present", async () => {
    mockSend.mockResolvedValueOnce({ id: "123" });

    const req = new Request("http://localhost/api/send", {
      method: "POST",
      body: JSON.stringify({
        name: "Andrés",
        email: "test@example.com",
        message: "Hola",
      }),
    });

    const res = await POST(req);
    expect(mockSend).toHaveBeenCalledTimes(1);
    expect(res.status).toBe(200);
  });

  it("should return 500 if Resend fails", async () => {
    mockSend.mockRejectedValueOnce(new Error("Fallo de envío"));

    const req = new Request("http://localhost/api/send", {
      method: "POST",
      body: JSON.stringify({
        name: "Andrés",
        email: "test@example.com",
        message: "Hola",
      }),
    });

    const res = await POST(req);
    expect(res.status).toBe(500);
  });
});
