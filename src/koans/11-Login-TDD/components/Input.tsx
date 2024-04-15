import { InputHTMLAttributes } from "react";

type InputPropsType = InputHTMLAttributes<HTMLInputElement>["type"];

type InputProps = {
  id: string;
  labelText: string;
  type?: InputPropsType;
};

export const Input = ({ id, labelText, type = "text" }: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} type={type} />
    </div>
  );
};
