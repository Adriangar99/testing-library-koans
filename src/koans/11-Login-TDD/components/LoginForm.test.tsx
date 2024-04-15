import { describe, it, expect, vi } from "vitest";
import { LoginForm } from "./LoginForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe(LoginForm, () => {
  it("shows the input for introduce the email", () => {
    const onLogin = vi.fn();
    render(<LoginForm onLogin={onLogin} />);

    const email = screen.getByLabelText("Your email");

    expect(email).toBeInTheDocument();
  });

  it("shows the input for introduce the password", () => {
    const onLogin = vi.fn();
    render(<LoginForm onLogin={onLogin} />);

    const password = screen.getByLabelText("Your password");

    expect(password).toBeInTheDocument();
  });

  it("shows the show password image when the password is hidden", () => {
    const onLogin = vi.fn();
    render(<LoginForm onLogin={onLogin} />);

    const image = screen.getByAltText("Show Password");

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      "src",
      "https://example.com/showPassword.png"
    );
  });

  it("shows the hidden password image when the password is visible", async () => {
    const onLogin = vi.fn();
    const user = userEvent.setup();
    render(<LoginForm onLogin={onLogin} />);

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
    const onLogin = vi.fn();
    const user = userEvent.setup();
    render(<LoginForm onLogin={onLogin} />);

    const password = screen.getByLabelText("Your password");
    const showPassword = screen.getByLabelText("Show Password");

    await user.type(password, "MySecretPassword");
    await user.click(showPassword);

    expect(password).toHaveAttribute("type", "text");
    expect(password).toHaveValue("MySecretPassword");
  });

  it("shows the login button", async () => {
    const onLogin = vi.fn();
    render(<LoginForm onLogin={onLogin} />);

    const button = screen.getByRole("button", {
      name: /login/i,
    });

    expect(button).toBeInTheDocument();
  });

  it("does login", async () => {
    const user = userEvent.setup();
    const onLogin = vi.fn();
    render(<LoginForm onLogin={onLogin} />);

    const emailInput = screen.getByLabelText("Your email");
    const passwordInput = screen.getByLabelText("Your password");

    await user.type(emailInput, "test@test.com");
    await user.type(passwordInput, "123456789");

    const loginButton = screen.getByRole("button", { name: /login/i });

    await user.click(loginButton);

    expect(onLogin).toHaveBeenCalledWith({
      email: "test@test.com",
      password: "123456789",
    });
  });
});
