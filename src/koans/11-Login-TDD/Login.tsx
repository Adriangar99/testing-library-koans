import { useState } from "react";
import { LoginForm } from "./components/LoginForm";

export const Login = () => {
  const [loginCompleted, setLoginCompleted] = useState<boolean>(false);

  const onLogin = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    console.log(email, password);
    setLoginCompleted(true);
  };

  return (
    <div>
      <h1>Login with email</h1>
      <p>Enter your email address to login with your account.</p>
      {loginCompleted ? (
        <p>You are logged!</p>
      ) : (
        <LoginForm onLogin={onLogin} />
      )}
    </div>
  );
};
