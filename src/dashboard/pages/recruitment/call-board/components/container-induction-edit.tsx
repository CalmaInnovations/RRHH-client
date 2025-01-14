// import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { Button, Grid, MenuItem, Typography } from "@mui/material";
import { RHFTimePicker } from "../../../../../components/rhf-time";
import { RHFDate } from "../../../../../components/rhf-date";
import { RHFInput } from "../../../../../components/rhf-input";
import { RHFSelect } from "../../../../../components/rhf-select";
import { FormValues, schema } from "../validations/schema-induction-edit";
import { PostulantDataComplete } from "../interface/call-interface";
import { useCallBoardProvider } from "../hooks/use-call-board-provider";

interface Props {
   closeModalEditCard: () => void;
   selectedCardPostulation: PostulantDataComplete;
}

export const ContainerInductionEdit = ({
   closeModalEditCard,
   selectedCardPostulation,
}: Props) => {
   const { recruiters } = useCallBoardProvider();
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
         <Grid container>
            {/* <Grid item xs={12}>
               <Typography
                  id="modal-modal-title"
                  component="p"
                  sx={{ marginBottom: 2 }}
               >
                  [Nombre completo del postulante]
               </Typography>
            </Grid>

            <Grid item xs={12}>
               <Typography
                  id="modal-modal-title"
                  component="p"
                  sx={{ marginBottom: 2 }}
               >
                  [Encargado de Inducción]
               </Typography>
            </Grid>

            <Grid item xs={12}>
               <Typography
                  id="modal-modal-title"
                  component="p"
                  sx={{ marginBottom: 2 }}
               >
                  [Correcto Electrónico]
               </Typography>
            </Grid>

            <Grid item xs={12}>
               <Typography
                  id="modal-modal-title"
                  component="p"
                  sx={{ marginBottom: 2 }}
               >
                  [Puesto]
               </Typography>
            </Grid>

            <Grid item xs={12}>
               <Typography
                  id="modal-modal-title"
                  component="p"
                  sx={{ marginBottom: 2 }}
               >
                  [Enlace de CV]
               </Typography>
            </Grid>

            <Grid item xs={12}>
               <Typography
                  id="modal-modal-title"
                  component="p"
                  sx={{ marginBottom: 2 }}
               >
                  [Enlace de evidencia]
               </Typography>
            </Grid> */}
         </Grid>
         <Grid container spacing={3}>
            <Grid item xs={12}>
               <RHFSelect
                  control={control}
                  name="coordinador"
                  label="Coordinador de Onboarding"
                  error={errors.coordinador}
               >
                  {recruiters?.reclutadoresGeneral.map((recruiter) => (
                     <MenuItem key={recruiter.id} value={recruiter.nombre}>
                        {recruiter.nombre}
                     </MenuItem>
                  ))}
               </RHFSelect>
            </Grid>

            <Grid item xs={12}>
               <RHFInput
                  control={control}
                  name="enlace_meet"
                  label="Enlace de Meet"
                  placeholder="Ingresar enlace"
                  error={errors.enlace_meet}
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

            <Grid item xs={12}>
               <RHFInput
                  control={control}
                  name="observaciones"
                  label="Observaciones"
                  placeholder="Escribir"
                  error={errors.observaciones}
               />
            </Grid>

            <Grid item xs={6}>
               <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "100%", color: "white" }}
               >
                  Guardar
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
