import { forwardRef, InputHTMLAttributes } from "react";

type InputProps = {
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2 w-full">
        {label && <label>{label}</label>}
        <input ref={ref} {...props} />
      </div>
    );
  }
);

export default Input;
