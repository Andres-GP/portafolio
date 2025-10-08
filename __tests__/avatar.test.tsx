import * as React from "react";
import { render } from "@testing-library/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { describe, it, expect, vi } from "vitest";

vi.mock("@radix-ui/react-avatar", async () => {
  const actual = await vi.importActual("@radix-ui/react-avatar");
  return {
    ...actual,
    Root: ({ children, className, ...props }: any) => (
      <span data-slot="avatar" className={className} {...props}>
        {children}
      </span>
    ),
    Image: ({ src, alt, className, ...props }: any) => (
      <img
        data-slot="avatar-image"
        src={src}
        alt={alt}
        className={className}
        {...props}
      />
    ),
    Fallback: ({ children, className, ...props }: any) => (
      <span data-slot="avatar-fallback" className={className} {...props}>
        {children}
      </span>
    ),
  };
});

describe("Avatar components", () => {
  it("renders the Avatar container", () => {
    render(<Avatar />);
    const avatar = document.querySelector('[data-slot="avatar"]');
    expect(avatar).toBeInTheDocument();
  });

  it("applies custom className to Avatar", () => {
    render(<Avatar className="custom-avatar" />);
    const avatar = document.querySelector('[data-slot="avatar"]');
    expect(avatar).toHaveClass("custom-avatar");
  });

  it("renders AvatarImage inside Avatar", () => {
    render(
      <Avatar>
        <AvatarImage src="test.png" alt="Test Image" />
      </Avatar>
    );
    const avatarImage = document.querySelector('[data-slot="avatar-image"]');
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute("src", "test.png");
    expect(avatarImage).toHaveAttribute("alt", "Test Image");
  });

  it("renders AvatarFallback inside Avatar", () => {
    render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    );
    const avatarFallback = document.querySelector(
      '[data-slot="avatar-fallback"]'
    );
    expect(avatarFallback).toBeInTheDocument();
    expect(avatarFallback).toHaveTextContent("AB");
  });

  it("applies custom className to AvatarImage and AvatarFallback", () => {
    render(
      <Avatar>
        <AvatarImage className="custom-image" src="test.png" alt="Test Image" />
        <AvatarFallback className="custom-fallback">AB</AvatarFallback>
      </Avatar>
    );
    const avatarImage = document.querySelector('[data-slot="avatar-image"]');
    const avatarFallback = document.querySelector(
      '[data-slot="avatar-fallback"]'
    );

    expect(avatarImage).toHaveClass("custom-image");
    expect(avatarFallback).toHaveClass("custom-fallback");
  });
});
