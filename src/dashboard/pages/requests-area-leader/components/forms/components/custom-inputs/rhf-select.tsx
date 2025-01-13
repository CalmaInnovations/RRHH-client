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
         defaultValue={options.length > 0 ? options[0]?.id ?? "" : ""}
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
                  value={
                     options.some((option) => option.id === field.value)
                        ? field.value
                        : ""
                  }
                  error={!!error}
                  onChange={(event) => {
                     field.onChange(event);
                     handleChange?.(event.target.value);
                  }}
               >
                  {options.length > 0 ? (
                     options.map(({ id, nombre }) => (
                        <MenuItem key={id} value={id}>
                           {nombre}
                        </MenuItem>
                     ))
                  ) : (
                     <MenuItem value="">Sin opciones disponibles</MenuItem>
                  )}
               </Select>
               <FormHelperText sx={{ color: "red" }}>
                  {error?.message}
               </FormHelperText>
            </FormControl>
         )}
      />
   );
}
