import { Button, Grid, MenuItem } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { RHFInput } from "../../../../../components/rhf-input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, schema } from "../validations/schema-colaboration-edit";
import { RHFDate } from "../../../../../components/rhf-date";
import { RHFTimePicker } from "../../../../../components/rhf-time";
import { RHFSelect } from "../../../../../components/rhf-select";

interface Props {
   closeModalEditCard: () => void;
}

export const ContainerColaborationEdit = ({ closeModalEditCard }: Props) => {
   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm<FormValues>({ mode: "onSubmit", resolver: zodResolver(schema) });

   const onSubmit = async (data: FormValues) => {
      console.log(data);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Grid container spacing={3}>
            <Grid item xs={6}>
               <RHFInput
                  control={control}
                  name="nombres"
                  label="Nombre completo"
                  placeholder="Nombre completo"
                  error={errors.nombres}
               />
            </Grid>

            <Grid item xs={6}>
               <RHFInput
                  control={control}
                  name="puesto"
                  label="Puesto"
                  placeholder="Puesto"
                  error={errors.puesto}
               />
            </Grid>

            <Grid item xs={6}>
               <RHFInput
                  control={control}
                  name="dni"
                  label="Documento de identidad"
                  placeholder="Número de identificación"
                  error={errors.dni}
               />
            </Grid>

            <Grid item xs={6}>
               <RHFInput
                  control={control}
                  name="area"
                  label="Área"
                  placeholder="Nombre de área"
                  error={errors.area}
               />
            </Grid>

            <Grid item xs={6}>
               <RHFInput
                  control={control}
                  name="celular"
                  label="Número de celular"
                  placeholder="000000000"
                  error={errors.celular}
               />
            </Grid>

            <Grid item xs={6}>
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <RHFDate
                     control={control}
                     name="fecha"
                     label="Selecciona la fecha"
                     error={errors.fecha}
                  />
               </LocalizationProvider>
            </Grid>

            <Grid item xs={6}>
               <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <RHFTimePicker
                     control={control}
                     name="hora"
                     label="Selecciona la hora"
                     error={errors.hora}
                  />
               </LocalizationProvider>
            </Grid>

            <Grid item xs={6}>
               <RHFSelect
                  control={control}
                  name="genero"
                  label="Género"
                  error={errors.genero}
               >
                  <MenuItem value="masculino">Masculino</MenuItem>
                  <MenuItem value="Femenimo">Femenino</MenuItem>
               </RHFSelect>
            </Grid>

            <Grid item xs={6}>
               <Button
                  variant="contained"
                  onClick={() => console.log("Crear Colaborador")}
                  sx={{ width: "100%", color: "white" }}
               >
                  Crear
               </Button>
            </Grid>

            <Grid item xs={6}>
               <Button
                  variant="text"
                  onClick={() => closeModalEditCard()}
                  sx={{ width: "100%" }}
               >
                  Cancelar
               </Button>
            </Grid>
         </Grid>
      </form>
   );
};
