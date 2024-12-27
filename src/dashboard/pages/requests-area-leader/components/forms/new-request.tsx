import ClientAxios from '../../../../../config/client-axios'
import { Grid, Typography, Button } from "@mui/material";
import "./styles/forms.style.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, schema } from "./validations/schema-new-request";
import { RHFSelect, RHFInput, RHFMultiline } from "./components/custom-inputs";
import { RequestItems } from "../../models/request-items.model";

interface PropsNextModal {
   handleNextModal: () => void;
   handleData: (data: RequestItems) => void;
}


export function NewRequest({ handleNextModal, handleData }: PropsNextModal) {
   const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<FormValues>({
      mode: "onSubmit",
      resolver: zodResolver(schema),
      defaultValues: {
         quantity: 1,
      },
   });

   const onSubmit: SubmitHandler<FormValues> = async(data) => {
      try {
         console.log("Datos recibidos para enviar:", data);
         const response = await ClientAxios.post(
            "api/SolicitudColaborador", 
            {
               ...data,
               id: Date.now(), 
               date: new Date(),
               status: "Pendiente",
            },
            {
               headers: {
                  "Content-Type": "application/json", 
               },
            }
         );
   
         console.log("Datos enviados correctamente:", response.data);
   
         
         handleData(response.data); 
         handleNextModal();   
      } catch (error) {
         console.error("Error al enviar los datos:", error);
   
         
         alert("Ocurrió un error al enviar los datos. Por favor, intenta de nuevo.");
      }
   };

   const handleClear = () => {
      reset();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Grid container spacing={3}>
            <Grid item xs={12}>
               <Typography
                  id="transition-modal-title"
                  variant="h5"
                  component="h2"
                  marginBottom={2}
                  fontWeight="bold"
               >
                  Nueva Solicitud
               </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
               <RHFInput
                  control={control}
                  name="position"
                  label="Nombre del puesto"
                  placeholder="Desarrollador Front-End"
                  error={errors.position}

               />
            </Grid>

            <Grid item xs={12} sm={6}>
               <RHFInput
                  control={control}
                  name="quantity"
                  label="Cantidad"
                  placeholder="2"
                  error={errors.quantity}
                  type="number"
                  inputProps={{ min: 0 }}
               />
            </Grid>

            <Grid item xs={12} sm={6}>
               <RHFSelect
                  control={control}
                  name="type"
                  label="Tipo de puesto"
                  error={errors.type}
               />
            </Grid>

            <Grid item xs={12} sm={6}>
               <RHFInput
                  control={control}
                  name="softSkills"
                  label="Habilidades blandas"
                  placeholder="Separar por comas (,)"
                  error={errors.softSkills}
               />
            </Grid>

            <Grid item xs={12}>
               <RHFInput
                  control={control}
                  name="technicalKnowledge"
                  label="Conocimientos técnicos"
                  placeholder="Separar por comas (,)"
                  error={errors.technicalKnowledge}
               />
            </Grid>

            <Grid item xs={12}>
               <RHFMultiline
                  control={control}
                  name="functions"
                  label="Funciones"
                  placeholder="Funciones"
                  error={errors.functions}
               />
            </Grid>

            <Grid item xs={12}>
               <footer>
                  <Button
                     type="submit"
                     variant="contained"
                     sx={{ color: "white", paddingInline: "15px" }}
                  >
                     Solicitar
                  </Button>
                  <Button
                     sx={{ paddingInline: "15px" }}
                     variant="text"
                     onClick={handleClear}
                  >
                     Limpiar
                  </Button>
               </footer>
            </Grid>
         </Grid>
      </form>
   );
}
