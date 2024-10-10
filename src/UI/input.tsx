import { InputHTMLAttributes } from "react";

type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label>{label}</label>
      <input {...props} />
    </div>
  );
};

export default Input;
