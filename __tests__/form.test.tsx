import React from "react";
import { render, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";

function renderWithForm(ui: React.ReactNode) {
  const Wrapper: React.FC = () => {
    const methods = useForm();
    return <FormProvider {...methods}>{ui}</FormProvider>;
  };
  return render(<Wrapper />);
}

describe("Form components", () => {
  it("renders Form provider correctly", () => {
    const Wrapper: React.FC = () => {
      const form = useForm();
      return <Form {...form}>Test</Form>;
    };
    render(<Wrapper />);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("renders FormField and passes name to Controller", () => {
    renderWithForm(
      <FormField
        name="email"
        render={() => <input data-testid="email-field" />}
      />
    );
    expect(screen.getByTestId("email-field")).toBeInTheDocument();
  });

  it("renders FormLabel correctly and applies error class", () => {
    renderWithForm(
      <FormField
        name="username"
        render={() => (
          <FormItem>
            <FormLabel>Error Label</FormLabel>
          </FormItem>
        )}
      />
    );
    expect(screen.getByText("Error Label")).toBeInTheDocument();
  });

  it("renders FormControl correctly with aria attributes", () => {
    renderWithForm(
      <FormField
        name="password"
        render={() => (
          <FormItem>
            <FormControl>
              <input aria-invalid="false" />
            </FormControl>
          </FormItem>
        )}
      />
    );
    const input = screen.getByRole("textbox", { hidden: true });
    expect(input).toHaveAttribute("aria-invalid", "false");
  });

  it("renders FormMessage with error message when present", () => {
    renderWithForm(
      <FormField
        name="username"
        render={() => (
          <FormItem>
            <FormMessage>Invalid username</FormMessage>
          </FormItem>
        )}
      />
    );
    expect(screen.getByText("Invalid username")).toBeInTheDocument();
  });

  it("renders FormMessage with custom text if no error", () => {
    renderWithForm(
      <FormField
        name="info"
        render={() => (
          <FormItem>
            <FormMessage>Everything looks good!</FormMessage>
          </FormItem>
        )}
      />
    );
    expect(screen.getByText("Everything looks good!")).toBeInTheDocument();
  });

  it("does not render FormMessage when no message or error", () => {
    renderWithForm(
      <FormField
        name="empty"
        render={() => (
          <FormItem>
            <FormMessage />
          </FormItem>
        )}
      />
    );
    expect(screen.queryByText(/.+/)).toBeNull();
  });
});
