import {
   FormControl,
   InputLabel,
   Select,
   MenuItem,
   FormHelperText,
} from "@mui/material";
import { Control, Controller, FieldError } from "react-hook-form";

interface Props {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   control: Control<any>;
   error?: FieldError;
   name: string;
   label: string;
   disabled?: boolean;
   children: JSX.Element[];
   defaultValue?: string; // Nueva propiedad
}

export function RHFSelect({
   control,
   error,
   name,
   label,
   disabled,
   children,
   defaultValue,
}: Props) {
   return (
      <Controller
         name={name}
         control={control}
         defaultValue={defaultValue}
         render={({ field }) => (
            <FormControl fullWidth variant="outlined">
               <InputLabel shrink htmlFor={name}>
                  {label}
               </InputLabel>
               <Select
                  id={name}
                  label={label}
                  defaultValue={[""]}
                  {...field}
                  disabled={disabled}
                  sx={{
                     "& .MuiInputBase-input": {
                        background: "white",
                     },
                  }}
               >
                  <MenuItem value="" disabled>
                     Seleccionar
                  </MenuItem>
                  {children}
               </Select>
               <FormHelperText sx={{ color: "red" }}>
                  {error?.message}
               </FormHelperText>
            </FormControl>
         )}
      />
   );
}
