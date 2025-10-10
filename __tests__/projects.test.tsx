import React from "react";
import { render, screen } from "@testing-library/react";
import { Projects } from "@/components/projects";
import { vi } from "vitest";

// Mock de Button y Card si es necesario (opcional)
vi.mock("@/components/ui/button", async () => {
  const actual = await vi.importActual<any>("@/components/ui/button");
  return {
    ...actual,
    Button: ({ children, ...props }: any) => (
      <button {...props}>{children}</button>
    ),
  };
});

vi.mock("@/components/ui/card", async () => {
  const actual = await vi.importActual<any>("@/components/ui/card");
  return {
    ...actual,
    Card: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  };
});

vi.mock("lucide-react", () => ({
  Github: () => <svg data-testid="github-icon" />,
  ExternalLink: () => <svg data-testid="external-link-icon" />,
}));

describe("<Projects />", () => {
  beforeEach(() => {
    render(<Projects />);
  });

  it("renders all projects with titles and descriptions", () => {
    const titles = ["User Management System", "SocialApp", "Blog"];

    const descriptions = [
      "A complete user management application featuring authentication, role-based access control, and secure CRUD operations. Built for scalability and clarity in enterprise contexts.",
      "A modern social media platform where users can share posts, interact, and connect in real-time. Designed with a responsive UI and optimized for performance and scalability.",
      "A dynamic and minimalist blog application with authentication, post creation, editing, and flash messaging. Built with clean UI/UX and deployed on Render.",
    ];

    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });

    descriptions.forEach((desc) => {
      expect(screen.getByText(desc)).toBeInTheDocument();
    });
  });

  it("renders all technologies", () => {
    const techs = [
      "Node.js",
      "Express",
      "MongoDB",
      "EJS",
      "Bootstrap",
      "JWT",
      "React",
      "Sass",
      "JavaScript",
      "CSS",
    ];

    techs.forEach((tech) => {
      expect(screen.getAllByText(tech)[0]).toBeInTheDocument();
    });
  });

  it("renders buttons with correct links", () => {
    const codeLinks = [
      "https://github.com/Andres-GP/user-management-system",
      "https://github.com/Andres-GP/SocialApp",
      "https://github.com/Andres-GP/Blog",
    ];

    const demoLinks = [
      "https://user-management-system-8r1h.onrender.com/",
      "https://social-app-puce-delta.vercel.app/es",
      "https://blog-3rab.onrender.com/",
    ];
  });

  it("renders images with correct src and alt", () => {
    const images = [
      { src: "/previews/ums.png", alt: "User Management System" },
      { src: "/previews/social-app.png", alt: "SocialApp" },
      { src: "/previews/node-blog.png", alt: "Blog" },
    ];

    images.forEach(({ src, alt }) => {
      const img = screen.getByAltText(alt) as HTMLImageElement;
      expect(img).toBeInTheDocument();
      expect(img.src).toContain(src);
    });
  });
});
