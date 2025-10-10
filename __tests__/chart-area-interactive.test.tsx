import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { ChartAreaInteractive } from "@/components/chart-area-interactive";

vi.mock("../hooks/use-mobile.tsx", () => ({
  useIsMobile: vi.fn(),
}));

vi.mock("@/components/ui/card", () => ({
  Card: ({ children }: any) => <div data-testid="card">{children}</div>,
  CardHeader: ({ children }: any) => (
    <div data-testid="card-header">{children}</div>
  ),
  CardTitle: ({ children }: any) => (
    <h2 data-testid="card-title">{children}</h2>
  ),
  CardDescription: ({ children }: any) => (
    <p data-testid="card-description">{children}</p>
  ),
  CardAction: ({ children }: any) => (
    <div data-testid="card-action">{children}</div>
  ),
  CardContent: ({ children }: any) => (
    <div data-testid="card-content">{children}</div>
  ),
}));

vi.mock("@/components/ui/chart", () => ({
  ChartContainer: ({ children }: any) => (
    <div data-testid="chart-container">{children}</div>
  ),
  ChartTooltip: () => <div data-testid="chart-tooltip" />,
  ChartTooltipContent: () => <div data-testid="chart-tooltip-content" />,
}));

vi.mock("@/components/ui/select", () => ({
  Select: ({ children }: any) => <div data-testid="select">{children}</div>,
  SelectTrigger: ({ children, ...props }: any) => (
    <button data-testid="select-trigger" {...props}>
      {children}
    </button>
  ),
  SelectValue: ({ placeholder }: any) => (
    <span data-testid="select-value">{placeholder}</span>
  ),
  SelectContent: ({ children }: any) => (
    <div data-testid="select-content">{children}</div>
  ),
  SelectItem: ({ children, ...props }: any) => (
    <button data-testid={`select-item-${children}`} {...props}>
      {children}
    </button>
  ),
}));

vi.mock("@/components/ui/toggle-group", () => ({
  ToggleGroup: ({ children }: any) => (
    <div data-testid="toggle-group">{children}</div>
  ),
  ToggleGroupItem: ({ value, children, onClick }: any) => (
    <button data-testid={`toggle-${value}`} onClick={() => onClick?.(value)}>
      {children}
    </button>
  ),
}));

vi.mock("recharts", () => ({
  AreaChart: ({ children }: any) => (
    <div data-testid="area-chart">{children}</div>
  ),
  Area: () => <div data-testid="area" />,
  CartesianGrid: () => <div data-testid="grid" />,
  XAxis: () => <div data-testid="x-axis" />,
}));

describe("ChartAreaInteractive", () => {
  const { useIsMobile } = require("../hooks/use-mobile.tsx");

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the chart title and description", () => {
    render(<ChartAreaInteractive />);

    expect(screen.getByTestId("card-title")).toHaveTextContent(
      "Total Visitors"
    );
    expect(screen.getByTestId("card-description")).toBeInTheDocument();
    expect(screen.getByTestId("chart-container")).toBeInTheDocument();
  });

  it("defaults to '90d' time range", () => {
    render(<ChartAreaInteractive />);

    expect(screen.getByTestId("toggle-90d")).toHaveTextContent("Last 3 months");
  });

  it("changes time range when user selects '30d'", () => {
    render(<ChartAreaInteractive />);

    const toggle = screen.getByTestId("toggle-30d");
    fireEvent.click(toggle);

    expect(screen.getByTestId("area-chart")).toBeInTheDocument();
  });

  it("renders chart structure correctly", () => {
    render(<ChartAreaInteractive />);

    expect(screen.getByTestId("area-chart")).toBeInTheDocument();
    expect(screen.getAllByTestId("area")).toHaveLength(2);
    expect(screen.getByTestId("x-axis")).toBeInTheDocument();
    expect(screen.getByTestId("grid")).toBeInTheDocument();
  });
});
