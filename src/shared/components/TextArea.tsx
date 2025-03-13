import React from "react";

type TextAreaProps = {
   label?: string;
   placeholder?: string;
   id?: string;
   value?: string;
   onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
   rows?: number;
   className?: string;
};

const TextArea: React.FC<TextAreaProps> = ({
   label,
   placeholder = "Escribe aquí...",
   id = "textarea",
   value = "",
   onChange,
   rows = 4,
   className = "",
}) => {
   return (
      <div className="w-full">
         {label && (
            <label
               htmlFor={id}
               className="block text-sm font-medium text-gray-700 mb-1"
            >
               {label}
            </label>
         )}
         <textarea
            id={id}
            className={`w-full p-2 border rounded-md focus:outline-none border-grey ${className}`}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            rows={rows}
         />
      </div>
   );
};

export default TextArea;
