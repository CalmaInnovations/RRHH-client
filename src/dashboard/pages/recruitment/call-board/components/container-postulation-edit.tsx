import { useForm } from "react-hook-form";
import { Alert, Button, Grid, MenuItem } from "@mui/material";
import { useAlert } from "../../../../../hooks/use-alert";
import { RHFInput } from "../../../../../components/rhf-input";
import { RHFSelect } from "../../../../../components/rhf-select";
import { FormValues, schema } from "../validations/schema-new-request";
import { zodResolver } from "@hookform/resolvers/zod";
import { Postulant, PostulantDataComplete } from "../interface/call-interface";

interface Props {
   selectedCardPostulation: PostulantDataComplete;
   closeModalEditCard: () => void;
}

export const ContainerPostulationEdit = ({
   selectedCardPostulation,
   closeModalEditCard,
}: Props) => {
   const { alert } = useAlert();

   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm<FormValues>({
      mode: "onSubmit",
      defaultValues: {
         ...selectedCardPostulation.postulante,
         fechaNacimiento: "2024-12-03T03:29:22.920Z",
         convocatoriaId: 1, // Agregar de manera dinamica
         linkedinUrl:
            "https://dosideas.com.co/wp-content/uploads/2020/04/Mockup-Carnet-Corporativo-Hermagu.jpg",
         cartaRecomendacion:
            "https://dosideas.com.co/wp-content/uploads/2020/04/Mockup-Carnet-Corporativo-Hermagu.jpg",
         fotoUrl:
            "https://dosideas.com.co/wp-content/uploads/2020/04/Mockup-Carnet-Corporativo-Hermagu.jpg",
      },
      resolver: zodResolver(schema),
   });

   const onSubmit = async (data: Postulant) => {
      console.log(data);
   };

   const { message, type } = alert;

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Grid container spacing={3}>
            <Grid item xs={6}>
               <RHFInput
                  control={control}
                  name="nombres"
                  label="Nombres"
                  placeholder="Nombre(s)"
                  error={errors.nombres}
               />
            </Grid>

            <Grid item xs={6}>
               <RHFInput
                  control={control}
                  name="apellidoPaterno"
                  label="Apellido Paterno"
                  placeholder="Apellido Paterno"
                  error={errors.apellidoPaterno}
               />
            </Grid>

            <Grid item xs={6}>
               <RHFInput
                  control={control}
                  name="apellidoMaterno"
                  label="Apellido Materno"
                  placeholder="Apellido Materno"
                  error={errors.apellidoMaterno}
               />
            </Grid>

            <Grid item xs={6}>
               <RHFInput
                  control={control}
                  name="email"
                  label="Correo Electrónico"
                  placeholder="Correo Electrónico"
                  error={errors.email}
               />
            </Grid>

            <Grid item xs={6}>
               <RHFInput
                  control={control}
                  name="dni"
                  label="Documento de identidad"
                  placeholder="Documento de identidad"
                  error={errors.dni}
               />
            </Grid>

            <Grid item xs={6}>
               <RHFInput
                  control={control}
                  name="telefono"
                  label="Teléfono"
                  placeholder="Teléfono"
                  error={errors.telefono}
               />
            </Grid>

            <Grid item xs={6}>
               <RHFSelect
                  control={control}
                  name="modalidad"
                  label="Modalidad de prácticas"
                  error={errors.modalidad}
                  defaultValue={
                     selectedCardPostulation.postulante.modalidadPracticas
                  }
               >
                  <MenuItem value="Practicante preprofesional">
                     Practicante preprofesional
                  </MenuItem>
                  <MenuItem value="Practicante profesional">
                     Practicante profesional
                  </MenuItem>
               </RHFSelect>
            </Grid>

            <Grid item xs={6}>
               <RHFInput
                  control={control}
                  name="institucionEducativa"
                  label="Institución Educativa"
                  placeholder="Institución Educativa"
                  error={errors.institucionEducativa}
               />
            </Grid>

            <Grid item xs={6}>
               <RHFInput
                  control={control}
                  name="carrera"
                  label="Carrera"
                  placeholder="Carrera"
                  error={errors.carrera}
               />
            </Grid>

            <Grid item xs={6}>
               <RHFInput
                  control={control}
                  name="direccion"
                  label="Dirección"
                  placeholder="Dirección"
                  error={errors.direccion}
               />
            </Grid>

            <Grid item xs={6}>
               <RHFInput
                  control={control}
                  name="pais"
                  label="País"
                  placeholder="País"
                  error={errors.pais}
               />
            </Grid>

            <Grid item xs={6}>
               <RHFInput
                  control={control}
                  name="departamento"
                  label="Departamento"
                  placeholder="Departamento"
                  error={errors.departamento}
               />
            </Grid>

            <Grid item xs={12}>
               <RHFInput
                  control={control}
                  name="cvUrl"
                  label="Curriculum Vitae"
                  placeholder="Pegar URL de tu CV"
                  error={errors.cvUrl}
               />
            </Grid>

            {message && (
               <Grid item xs={12} sx={{ display: "flex", gap: 2 }}>
                  <Alert variant="filled" color={type} sx={{ width: "100%" }}>
                     {message}
                  </Alert>
               </Grid>
            )}

            <Grid item xs={6} sx={{ display: "flex", gap: 2 }}>
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
