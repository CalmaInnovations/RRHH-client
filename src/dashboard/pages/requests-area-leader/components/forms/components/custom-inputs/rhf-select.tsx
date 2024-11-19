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
}

export function RHFSelect({ control, error, name, label, disabled }: Props) {
   return (
      <Controller
         name={name}
         control={control}
         defaultValue={"Seleccionar"}
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
               >
                  <MenuItem value="Seleccionar" disabled>
                     Seleccionar
                  </MenuItem>
                  <MenuItem value={"Practicante"}>Practicante</MenuItem>
                  <MenuItem value={"Voluntario"}>Voluntario</MenuItem>
               </Select>
               <FormHelperText sx={{ color: "red" }}>
                  {error?.message}
               </FormHelperText>
            </FormControl>
         )}
      />
   );
}
