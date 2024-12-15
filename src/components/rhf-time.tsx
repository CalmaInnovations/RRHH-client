import { FormControl, FormHelperText } from "@mui/material";
import { Control, Controller, FieldError } from "react-hook-form";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

interface Props {
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   control: Control<any>;
   error?: FieldError;
   name: string;
   label: string;
   defaultValue?: string | null; // Puede ser una fecha predeterminada en formato ISO o nulo
   disabled?: boolean;
}

export function RHFTimePicker({
   control,
   error,
   name,
   label,
   defaultValue = null, // Fecha predeterminada (opcional)
   disabled = false,
}: Props) {
   return (
      <Controller
         name={name}
         control={control}
         defaultValue={defaultValue} // Valor predeterminado del TimePicker
         render={({ field: { onChange, value } }) => (
            <FormControl fullWidth error={!!error}>
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <TimePicker
                     label={label}
                     value={value ? dayjs(value) : null} // Convertimos a `Dayjs` si hay valor
                     onChange={(newValue) =>
                        onChange(newValue ? newValue.toISOString() : null)
                     } // Convertimos a formato ISO para guardar
                     disabled={disabled}
                     slotProps={{
                        textField: {
                           fullWidth: true,
                           variant: "outlined",
                           InputLabelProps: { shrink: true },
                           sx: {
                              "& .MuiInputBase-root": {
                                 backgroundColor: "white",
                              },
                           },
                        },
                     }}
                  />
               </LocalizationProvider>
               <FormHelperText>{error?.message}</FormHelperText>
            </FormControl>
         )}
      />
   );
}
