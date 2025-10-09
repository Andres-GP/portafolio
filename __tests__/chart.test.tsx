import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import {
  ChartContainer,
  ChartTooltip,
  ChartConfig,
} from "@/components/ui/chart";

vi.mock("recharts", () => ({
  ResponsiveContainer: ({ children }: any) => (
    <div data-testid="recharts-mock">{children}</div>
  ),
  BarChart: ({ children }: any) => <div data-testid="barchart">{children}</div>,
  Bar: ({ dataKey }: any) => <div data-testid={`bar-${dataKey}`} />,
  XAxis: () => <div data-testid="x-axis" />,
  YAxis: () => <div data-testid="y-axis" />,
  Tooltip: ({ content }: any) => (
    <div data-testid="tooltip">{content || "Tooltip"}</div>
  ),
  Legend: () => <div data-testid="legend">Legend</div>,
}));

describe("Chart component", () => {
  const mockConfig: ChartConfig = {
    ventas: { label: "Ventas", color: "#FF5733" },
  };

  it("renders ChartContainer with recharts wrapper", () => {
    render(
      <ChartContainer config={mockConfig}>
        <div>Inner Chart</div>
      </ChartContainer>
    );

    expect(screen.getByTestId("recharts-mock")).toBeInTheDocument();
    expect(screen.getByText("Inner Chart")).toBeInTheDocument();
  });

  it("renders ChartTooltip correctly", () => {
    render(<ChartTooltip />);
    expect(screen.getByTestId("tooltip")).toBeInTheDocument();
  });
});
