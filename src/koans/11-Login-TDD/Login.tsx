import { useState } from "react";
import { Input } from "./components/Input";

export const Login = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div>
      <h1>Login with email</h1>
      <p>Enter your email address to login with your account.</p>
      <form>
        <Input id="email-input" labelText="Your email" />
        <Input
          id="password-input"
          labelText="Your password"
          type={showPassword ? "text" : "password"}
        />
        <button
          aria-label={showPassword ? "Hidden Password" : "Show Password"}
          onClick={() => setShowPassword(!showPassword)}
        >
          <img
            src={
              showPassword
                ? "https://example.com/hiddenPassword.png"
                : "https://example.com/showPassword.png"
            }
            alt={showPassword ? "Hidden Password" : "Show Password"}
          />
        </button>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
