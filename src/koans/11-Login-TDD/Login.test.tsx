import { describe, it, expect } from "vitest";
import { Login } from "./Login";
import { render, screen } from "@testing-library/react";

describe(Login, () => {
  it("shows the title of the login form", () => {
    render(<Login />);

    const title = screen.getByRole("heading", {
      name: /login/i,
    });

    expect(title).toBeInTheDocument();
  });

  it("shows the explaining text of the form", () => {
    render(<Login />);

    const description = screen.getByText(
      "Enter your email address to login with your account."
    );

    expect(description).toBeInTheDocument();
  });

  it("shows the input for introduce the email", () => {
    render(<Login />);

    const email = screen.getByLabelText("Your email");

    expect(email).toBeInTheDocument();
  });

  it("shows the input for introduce the password", () => {
    render(<Login />);

    const password = screen.getByLabelText("Your password");

    expect(password).toBeInTheDocument();
  });
});
