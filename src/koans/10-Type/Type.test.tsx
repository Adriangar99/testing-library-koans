import { describe, expect, it } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Type } from "./Type.tsx";

describe(Type, () => {
  it("works with click and keyboard", async () => {
    const user = userEvent.setup();
    render(<Type />);

    const input = screen.getByLabelText("Type me!");

    await user.click(input);
    await user.keyboard("Hello World!");

    expect(screen.getByText("Result")).toMatchKoan();
  });

  it("works with type", async () => {
    const user = userEvent.setup();
    render(<Type />);

    const input = screen.getByLabelText("Type me!");

    await user.type(input, "Hello World!");

    expect(screen.getByText("Result")).toMatchKoan();
  });
});
