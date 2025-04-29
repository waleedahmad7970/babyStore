import React from "react";

interface InputFieldProps {
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  required?: boolean;
  disabled?: boolean;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
  placeholder = "",
  value,
  error,
  onChange,
  className = `rounded-md border px-4 py-2 text-sm shadow-sm transition outline-none ${error ? "" : ""} focus:border-pink-500 focus:ring-2 focus:ring-pink-500 disabled:bg-gray-100`,
  required = false,
  disabled = false,
}) => {
  return (
    <div className={`flex w-full flex-col gap-1 sm:w-auto`}>
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`${className}`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default InputField;
