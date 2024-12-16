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
}

export function RHFInput({
   control,
   error,
   name,
   label,
   placeholder,
   type,
   disabled,
}: Props) {
   return (
      <Controller
         name={name}
         control={control}
         defaultValue={""}
         render={({ field }) => (
            <FormControl fullWidth variant="outlined">
               <TextField
                  label={label}
                  variant="outlined"
                  placeholder={placeholder}
                  id="filled-error"
                  error={!!error}
                  helperText={error?.message}
                  {...field}
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  type={type}
                  disabled={disabled}
                  sx={{
                     "& .MuiOutlinedInput-root": {
                        background: "white",
                     },
                  }}
               />
            </FormControl>
         )}
      />
   );
}
