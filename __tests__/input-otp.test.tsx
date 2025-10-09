import React from "react";
import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

vi.mock("input-otp", () => {
  const OTPInputContext = React.createContext({
    slots: [
      { char: "A", hasFakeCaret: false, isActive: false },
      { char: "B", hasFakeCaret: true, isActive: true },
    ],
  });

  const OTPInput = React.forwardRef<HTMLDivElement, any>(
    ({ children, containerClassName, className, ...props }, ref) => (
      <div
        ref={ref}
        data-testid="otp-input"
        data-slot="input-otp"
        className={`${containerClassName || ""} ${className || ""}`}
        {...props}
      >
        {children}
      </div>
    )
  );

  OTPInput.displayName = "OTPInput";

  return { OTPInput, OTPInputContext };
});

vi.mock("lucide-react", () => ({
  MinusIcon: () => <svg data-testid="minus-icon" />,
}));

describe("InputOTP Components", () => {
  it("renders InputOTP with correct data-slot and custom classes", () => {
    render(
      <InputOTP
        containerClassName="container-class"
        className="inner-class"
        maxLength={6}
      >
        <div />
      </InputOTP>
    );

    const otp = screen.getByTestId("otp-input");
    expect(otp).toHaveAttribute("data-slot", "input-otp");
    expect(otp.className).toContain("container-class");
    expect(otp.className).toContain("inner-class");
  });

  it("renders InputOTPGroup correctly", () => {
    render(<InputOTPGroup>Group content</InputOTPGroup>);
    const group = screen.getByText("Group content");
    expect(group).toHaveAttribute("data-slot", "input-otp-group");
  });

  it("renders InputOTPSlot correctly with char", () => {
    render(<InputOTPSlot index={0} className="extra-slot-class" />);
    const slot = screen.getByText("A");
    expect(slot).toHaveAttribute("data-slot", "input-otp-slot");
    expect(slot).toHaveAttribute("data-active", "false");
    expect(slot.className).toContain("extra-slot-class");
  });

  it("renders InputOTPSlot with fake caret when active", () => {
    render(<InputOTPSlot index={1} />);
    const slot = screen.getByText("B");
    expect(slot).toHaveAttribute("data-active", "true");

    const caret = slot.querySelector(".animate-caret-blink");
    expect(caret).toBeInTheDocument();
  });

  it("renders InputOTPSeparator with role and icon", () => {
    render(<InputOTPSeparator />);
    const separator = screen.getByRole("separator");
    expect(separator).toHaveAttribute("data-slot", "input-otp-separator");

    const icon = screen.getByTestId("minus-icon");
    expect(icon).toBeInTheDocument();
  });

  it("allows passing extra props to InputOTPSeparator", () => {
    render(<InputOTPSeparator className="custom-separator" />);
    const separator = screen.getByRole("separator");
    expect(separator.className).toContain("custom-separator");
  });
});
