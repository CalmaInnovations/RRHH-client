import React from "react";

interface ButtonProps {
   type?: "button" | "submit" | "reset";
   size?: "small" | "medium" | "large";
   variant?: "primary" | "secondary" | "outline" | "ghost";
   disabled?: boolean;
   fullWidth?: boolean;
   onClick?: () => void;
   className?: string;
   icon?: React.ReactNode;
   children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
   type = "button",
   size = "small",
   variant = "primary",
   disabled = false,
   onClick,
   className = "",
   icon,
   fullWidth = false,
   children,
}) => {
   const baseStyles =
      "rounded transition-all duration-200 flex items-center justify-center font-medium";

   const sizeStyles = {
      small: "px-3 py-2 text-sm",
      medium: "px-4 py-2 text-base",
      large: "px-6 py-3 text-lg",
   };

   const variantStyles = {
      primary:
         "bg-[var(--color-button-primary)] text-white hover:bg-[var(--color-button-hover)]",
      secondary:
         "border border-[var(--color-button-primary)] text-[var(--color-button-primary)] hover:bg-[var(--color-button-hover)] hover:text-white",
      outline:
         "border border-[var(--color-button-primary)] text-[var(--color-button-primary)] hover:bg-[var(--color-button-primary)] hover:text-white",
      ghost: "text-[var(--color-button-primary)] hover:bg-gray-100",
   };

   const buttonClasses = `${baseStyles} ${sizeStyles[size]} ${
      variantStyles[variant]
   } ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} ${
      fullWidth ? "w-full" : ""
   } ${className}`;

   return (
      <button
         type={type}
         disabled={disabled}
         onClick={onClick}
         className={buttonClasses}
      >
         {icon && <span className="mr-2">{icon}</span>}
         {children}
      </button>
   );
};

export default Button;
