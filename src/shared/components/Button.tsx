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
      primary: "bg-[#002D72] text-white hover:bg-[#2A5BA7]",
      secondary: "bg-secondary text-light hover:bg-gray-600",
      outline:
         "border border-[#002D72] text-[#002D72] hover:bg-[#002D72] hover:text-white",
      ghost: "text-[#002D72] hover:bg-gray-100",
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
