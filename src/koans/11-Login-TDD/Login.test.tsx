import { describe, it, expect } from "vitest";
import { Login } from "./Login";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getMouseButtonId } from "@testing-library/user-event/dist/cjs/system/pointer/buttons.js";

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

  it("shows the show password image when the password is hidden", () => {
    render(<Login />);

    const image = screen.getByAltText("Show Password");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://example.com/showPassword.png"
    );
  });

  it("shows the hidden password image when the password is visible", async () => {
    const user = userEvent.setup();
    render(<Login />);

    const showPassword = screen.getByLabelText("Show Password");
    await user.click(showPassword);

    const element = screen.getByAltText("Hidden Password");

    expect(element).toBeInTheDocument();
    expect(element).toHaveAttribute(
      "src",
      "https://example.com/hiddenPassword.png"
    );
  });

  it("shows the password when the see password button is clicked", async () => {
    const user = userEvent.setup();
    render(<Login />);

    const password = screen.getByLabelText("Your password");
    const showPassword = screen.getByLabelText("Show Password");

    await user.type(password, "MySecretPassword");
    await user.click(showPassword);

    expect(password).toHaveAttribute("type", "text");
    expect(password).toHaveValue("MySecretPassword");
  });

  it("shows the login button", async () => {
    render(<Login />);

    const button = screen.getByRole("button", {
      name: /login/i,
    });

    expect(button).toBeInTheDocument();
  });
});
