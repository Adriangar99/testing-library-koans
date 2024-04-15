import { describe, expect, it } from "vitest";
import { Input } from "./Input";
import { render, screen } from "@testing-library/react";

describe(Input, () => {
  it("should be accessible", () => {
    render(<Input id="input-test" labelText="My input" />);

    const input = screen.getByLabelText("My input");

    expect(input).toBeInTheDocument();
  });

  it("should be of text type if the prop type is not expecified", () => {
    render(<Input id="input-test" labelText="My input of password" />);

    const input = screen.getByLabelText("My input of password");

    expect(input).toHaveAttribute("type", "text");
  });

  it("should be of text type if the prop type is expecified", () => {
    render(
      <Input id="input-test" labelText="My input of password" type="text" />
    );

    const input = screen.getByLabelText("My input of password");

    expect(input).toHaveAttribute("type", "text");
  });

  it("should be of password type", () => {
    render(
      <Input id="input-test" labelText="My input of password" type="password" />
    );

    const input = screen.getByLabelText("My input of password");

    expect(input).toHaveAttribute("type", "password");
  });
});
