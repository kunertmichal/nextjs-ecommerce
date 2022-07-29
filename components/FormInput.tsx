import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: string;
  register?: any;
  className?: string;
}

export const FormInput = ({
  type,
  name,
  children,
  className,
  error,
  register,
}: Props) => {
  const inputType = type ? type : "text";

  return (
    <div className={className}>
      <label className="uppercase font-bold text-xs block">
        {children}
        <input
          {...register(name)}
          type={inputType}
          className="block w-full border-gray-300 rounded"
        />
      </label>
      {error && (
        <span role="alert" className="text-red-500 text-sm">
          {error}
        </span>
      )}
    </div>
  );
};
