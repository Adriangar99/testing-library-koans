import { describe, expect, it } from "vitest";
import { Input } from "./Input";
import { render, screen } from "@testing-library/react";

describe(Input, () => {
  it("should be accessible", () => {
    render(<Input id="input-test" labelText="My input" />);

    const input = screen.getByLabelText("My input");

    expect(input).toBeInTheDocument();
  });
});
