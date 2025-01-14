import { FormControl, FormHelperText } from "@mui/material";
import { Control, Controller, FieldError } from "react-hook-form";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
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

export function RHFDate({
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
         defaultValue={defaultValue} // Valor predeterminado del DatePicker
         render={({ field: { onChange, value } }) => (
            <FormControl fullWidth error={!!error}>
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                     label={label}
                     value={value ? dayjs(value) : null} // Convertimos a `Dayjs` si hay valor
                     onChange={(newValue) =>
                        onChange(
                           newValue
                              ? dayjs(newValue).format("YYYY-MM-DD")
                              : null
                        )
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
