import {
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    FormHelperText,
 } from "@mui/material";
 import { Control, Controller, FieldError } from "react-hook-form";
 
 interface option {
    id: number;
    puesto: "Voluntariado" | "Prácticas";
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
 
 export function RHFSelectModalidad({
    control,
    error,
    name,
    label,
    disabled,
    handleChange,
 }: Props) {

    const options = [
        { id: 1, puesto: "Voluntariado" },
        { id: 2, puesto: "Prácticas" },
     ];
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
                   {...field}
                   disabled={disabled}
                   value={field.value || ""}
                   error={!!error}
                   onChange={(event) => {
                      field.onChange(event); 
                      handleChange?.(event.target.value); 
                   }}
                >
                   <MenuItem value="" disabled>
                      Seleccionar
                   </MenuItem>
                   {options.map(({ id, puesto }) => (
                      <MenuItem key={id} value={puesto}>
                         {puesto}
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
 