import { LoginForm } from "./components/LoginForm";

export const Login = () => {
  const onLogin = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    console.log(email, password);
  };

  return (
    <div>
      <h1>Login with email</h1>
      <p>Enter your email address to login with your account.</p>
      <LoginForm onLogin={onLogin} />
    </div>
  );
};
