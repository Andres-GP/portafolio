import React from "react";
import { render, screen } from "@testing-library/react";
import { SectionCards } from "@/components/section-cards";
import { vi } from "vitest";

// Mock de Tabler Icons
vi.mock("@tabler/icons-react", () => ({
  IconTrendingUp: () => <svg data-testid="icon-trending-up" />,
  IconTrendingDown: () => <svg data-testid="icon-trending-down" />,
}));

// Mock de Badge y Card
vi.mock("@/components/ui/badge", async () => {
  const actual = await vi.importActual<any>("@/components/ui/badge");
  return {
    ...actual,
    Badge: ({ children, ...props }: any) => <span {...props}>{children}</span>,
  };
});

vi.mock("@/components/ui/card", async () => {
  const actual = await vi.importActual<any>("@/components/ui/card");
  return {
    ...actual,
    Card: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    CardHeader: ({ children }: any) => <div>{children}</div>,
    CardFooter: ({ children }: any) => <div>{children}</div>,
    CardTitle: ({ children }: any) => <h3>{children}</h3>,
    CardDescription: ({ children }: any) => <p>{children}</p>,
    CardAction: ({ children }: any) => <div>{children}</div>,
  };
});

describe("<SectionCards />", () => {
  beforeEach(() => {
    render(<SectionCards />);
  });

  it("renders 4 cards with correct descriptions and titles", () => {
    const descriptions = [
      "Total Revenue",
      "New Customers",
      "Active Accounts",
      "Growth Rate",
    ];
    const titles = ["$1,250.00", "1,234", "45,678", "4.5%"];

    descriptions.forEach((desc) => {
      expect(screen.getByText(desc)).toBeInTheDocument();
    });

    titles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it("renders badges with correct percentages and icons", () => {
    const badges = [
      { text: "+12.5%", icon: "icon-trending-up" },
      { text: "-20%", icon: "icon-trending-down" },
      { text: "+12.5%", icon: "icon-trending-up" },
      { text: "+4.5%", icon: "icon-trending-up" },
    ];
  });

  it("renders footer texts correctly", () => {
    const footerTexts = [
      "Trending up this month",
      "Visitors for the last 6 months",
      "Down 20% this period",
      "Acquisition needs attention",
      "Strong user retention",
      "Engagement exceed targets",
      "Steady performance increase",
      "Meets growth projections",
    ];

    footerTexts.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });
});
