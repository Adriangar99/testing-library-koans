type InputProps = {
  id: string;
  labelText: string;
};

export const Input = ({ id, labelText }: InputProps) => {
  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <input id={id} />
    </div>
  );
};
