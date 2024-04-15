import { describe, expect, it } from "vitest";
import { Input } from "./Input";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe(Input, () => {
  it("should be accessible", () => {
    render(<Input id="input-test" labelText="My input" onChange={() => {}} />);

    const input = screen.getByLabelText("My input");

    expect(input).toBeInTheDocument();
  });

  it("should be of text type if the prop type is not expecified", () => {
    render(
      <Input
        id="input-test"
        labelText="My input of password"
        onChange={() => {}}
      />
    );

    const input = screen.getByLabelText("My input of password");

    expect(input).toHaveAttribute("type", "text");
  });

  it("should be of text type if the prop type is expecified", () => {
    render(
      <Input
        id="input-test"
        labelText="My input of password"
        type="text"
        onChange={() => {}}
      />
    );

    const input = screen.getByLabelText("My input of password");

    expect(input).toHaveAttribute("type", "text");
  });

  it("should be of password type", () => {
    render(
      <Input
        id="input-test"
        labelText="My input of password"
        type="password"
        onChange={() => {}}
      />
    );

    const input = screen.getByLabelText("My input of password");

    expect(input).toHaveAttribute("type", "password");
  });

  it("should have the value typed by the user", async () => {
    const user = userEvent.setup();
    render(<Input id="input-test" labelText="My input" onChange={() => {}} />);

    const input = screen.getByLabelText("My input");
    await user.type(input, "Hello World!");

    expect(input).toHaveValue("Hello World!");
  });

  it("should not have value if the input is clear", async () => {
    render(<Input id="input-test" labelText="My input" onChange={() => {}} />);

    const input = screen.getByLabelText("My input");

    expect(input).toHaveValue("");
  });
});
