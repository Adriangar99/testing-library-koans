import { describe, expect, it } from "vitest";
import { userEvent } from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import { Hover } from "./Hover.tsx";

describe(Hover, () => {
  it("works", async () => {
    expect(screen.getByText("Result")).toMatchKoan();
  });
});
