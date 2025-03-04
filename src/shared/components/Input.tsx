import React from "react";

interface InputProps {
  label?: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  className = "",
}) => {
  return (
    <div className={`w-full ${className}`}>
      {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`mt-1 p-2 border border-grey rounded-md w-full focus:outline-none`}
      />

    </div>
  );
};

export default Input;
