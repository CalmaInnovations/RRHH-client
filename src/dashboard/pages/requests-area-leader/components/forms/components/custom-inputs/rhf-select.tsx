import {
   FormControl,
   InputLabel,
   Select,
   MenuItem,
   FormHelperText,
} from "@mui/material";
import { Control, Controller, FieldError } from "react-hook-form";

interface option {
   id?: number;
   nombre?: string;
   puesto?: string;
}

interface Props {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   control: Control<any>;
   error?: FieldError;
   name: string;
   label: string;
   disabled?: boolean;
   options: option[];
   handleChange?: (value: string | number) => void;
}

export function RHFSelect({
   control,
   error,
   name,
   label,
   disabled,
   options,
   handleChange,
}: Props) {
   return (
      <Controller
         name={name}
         control={control}
         defaultValue={options[0]?.id || 0}
         render={({ field }) => (
            <FormControl fullWidth variant="outlined">
               <InputLabel shrink htmlFor={name}>
                  {label}
               </InputLabel>
               <Select
                  id={name}
                  label={label}
                  {...field}
                  disabled={disabled}
                  value={field.value}
                  error={!!error}
                  onChange={(event) => {
                     field.onChange(event);
                     handleChange?.(event.target.value);
                  }}
               >
                  {options.map(({ id, nombre }) => (
                     <MenuItem key={id} value={id}>
                        {nombre}
                     </MenuItem>
                  ))}
               </Select>
               <FormHelperText sx={{ color: "red" }}>
                  {error?.message}
               </FormHelperText>
            </FormControl>
         )}
      />
   );
}
