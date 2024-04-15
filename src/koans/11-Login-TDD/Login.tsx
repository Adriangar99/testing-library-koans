import { Input } from "./components/Input";

export const Login = () => {
  return (
    <div>
      <h1>Login with email</h1>
      <p>Enter your email address to login with your account.</p>
      <Input id="email-input" labelText="Your email" />
      <Input id="password-input" labelText="Your password" />
    </div>
  );
};
