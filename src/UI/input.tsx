import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = {
  label?: string;
  errors?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, errors, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && <label>{label}</label>}
        <input ref={ref} {...props} />
        <small className="text-red-500">{errors}</small>
      </div>
    );
  }
);

export default Input;
