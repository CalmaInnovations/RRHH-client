import { AxiosError } from "axios";
import {
   Alert,
   Box,
   Button,
   Grid,
   MenuItem,
   Modal,
   Typography,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAlert } from "../../../../../hooks/use-alert";
import { createPostulantService } from "../services/call-board-service";
import { FormValues, schema } from "../validations/schema-new-request";
import { RHFInput } from "../../../../../components/rhf-input";
import { RHFSelect } from "../../../../../components/rhf-select";
import { Postulant } from "../interface/call-interface";

interface Props {
   isOpenModal: boolean;
   handleCloseModal: () => void;
}

export const ModalPostulantCreate = ({
   isOpenModal,
   handleCloseModal,
}: Props) => {
   const { alert, showAlert } = useAlert();
   const {
      control,
      handleSubmit,
      formState: { errors },
   } = useForm<FormValues>({ mode: "onSubmit", resolver: zodResolver(schema) });

   const onSubmit: SubmitHandler<FormValues> = async (data) => {
      const values: Postulant = {
         ...data,
         fechaNacimiento: "2024-12-03T03:29:22.920Z",
         convocatoriaId: 1, // Agregar de manera dinamica
         modalidadPracticas: data.modalidad,
         linkedinUrl:
            "https://dosideas.com.co/wp-content/uploads/2020/04/Mockup-Carnet-Corporativo-Hermagu.jpg",
         cartaRecomendacion:
            "https://dosideas.com.co/wp-content/uploads/2020/04/Mockup-Carnet-Corporativo-Hermagu.jpg",
         fotoUrl:
            "https://dosideas.com.co/wp-content/uploads/2020/04/Mockup-Carnet-Corporativo-Hermagu.jpg",
      };

      try {
         const response = await createPostulantService(values);

         console.log(response); // FIX: Actualizar state
      } catch (error) {
         if (error instanceof AxiosError) {
            console.log(error);
            showAlert("error", error.response?.data.message);
         } else {
            showAlert("error", "Ocurrió un error inesperado");
         }
      }
   };

   const { message, type } = alert;

   return (
      <Modal open={isOpenModal} onClose={handleCloseModal}>
         <Box
            sx={{
               position: "absolute",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               width: 640,
               bgcolor: "#EBF2F5",
               boxShadow: 24,
               p: 4,
               borderRadius: 2,
            }}
         >
            <div className="flex flex-col w-full items-start gap-y-4">
               <Typography
                  variant="h5"
                  component="h2"
                  sx={{
                     marginBottom: 2,
                     fontWeight: 500,
                  }}
               >
                  Añadir Postulante
               </Typography>

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

                     <Grid
                        item
                        xs={6}
                        sx={{
                           display: "flex",
                           flexDirection: "column",
                        }}
                     >
                        <RHFSelect
                           control={control}
                           name="modalidad"
                           label="Modalidad de prácticas"
                           error={errors.modalidad}
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
                           <Alert
                              variant="filled"
                              color={type}
                              sx={{ width: "100%" }}
                           >
                              {message}
                           </Alert>
                        </Grid>
                     )}

                     <Grid item xs={12} sx={{ display: "flex", gap: 2 }}>
                        <Button
                           type="submit"
                           variant="contained"
                           sx={{ width: "100%", color: "white" }}
                        >
                           Añadir
                        </Button>
                     </Grid>
                  </Grid>
               </form>
            </div>
         </Box>
      </Modal>
   );
};
