import { FormControl, TextField } from "@mui/material";
import { Control, Controller, FieldError } from "react-hook-form";

interface Props {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   control: Control<any>;
   error?: FieldError;
   name: string;
   label: string;
   placeholder: string;
   type?: string;
   disabled?: boolean;
   inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export function RHFInput({
   control,
   error,
   name,
   label,
   placeholder,
   type,
   disabled,
   inputProps,
}: Props) {
   return (
      <Controller
         name={name}
         control={control}
         defaultValue={type === "number" ? 0 : ""}
         render={({ field }) => (
            <FormControl fullWidth variant="outlined">
               <TextField
                  label={label}
                  placeholder={placeholder}
                  error={!!error}
                  helperText={error?.message}
                  {...field}
                  variant="outlined"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  type={type}
                  disabled={disabled}
                  inputProps={inputProps}
               />
            </FormControl>
         )}
      />
   );
}
