import { describe, expect, it } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Click } from "./Click.tsx";

describe(Click, () => {
  it("works", async () => {
    const user = userEvent.setup();
    render(<Click />);

    const clickMeButton = screen.getByRole("button", {
      name: "Click me!",
    });

    await user.click(clickMeButton);

    expect(screen.getByText("Result")).toMatchKoan();
  });
});
