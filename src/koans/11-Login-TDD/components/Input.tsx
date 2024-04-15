import { InputHTMLAttributes } from "react";

type InputPropsType = InputHTMLAttributes<HTMLInputElement>["type"];

type InputProps = {
  id: string;
  labelText: string;
  type?: InputPropsType;
  onChange: (value: string) => void;
};

export const Input = ({
  id,
  labelText,
  type = "text",
  onChange,
}: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input
        id={id}
        type={type}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};
