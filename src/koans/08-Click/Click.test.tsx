import { describe, expect, it } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Click } from "./Click.tsx";

describe(Click, () => {
  it("works", async () => {
    expect(screen.getByText("Result")).toMatchKoan();
  });
});
