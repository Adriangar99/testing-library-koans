import { useState } from "react";
import { Input } from "./Input";

type LoginFormProps = {
  onLogin: ({ email, password }: { email: string; password: string }) => void;
};

export const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onLogin({ email, password });
      }}
    >
      <Input id="email-input" labelText="Your email" onChange={setEmail} />
      <Input
        id="password-input"
        labelText="Your password"
        type={showPassword ? "text" : "password"}
        onChange={setPassword}
      />
      <button
        aria-label={showPassword ? "Hidden Password" : "Show Password"}
        onClick={() => setShowPassword(!showPassword)}
        type="button"
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
  );
};
