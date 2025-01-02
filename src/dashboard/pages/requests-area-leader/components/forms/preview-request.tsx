import { Grid, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";
import { RequestItems } from "../../interface/request-items.model";
import { RHFInput, RHFMultiline, RHFSelect } from "./components/custom-inputs";
import { FormValues, schema } from "./validations/schema-new-request";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface OnCloseProps {
   onClose: () => void;
   handleData: (data: RequestItems) => void;
}

export function PreviewRequest({
   position,
   quantity,
   type,
   softSkills,
   technicalKnowledge,
   functions,
   onClose,
   handleData,
}: RequestItems & OnCloseProps) {
   const [isEditable, setIsEditable] = useState(false);
   const [savedSuccessfully, setSavedSuccessfully] = useState(false);

   const {
      control,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<FormValues>({
      mode: "all",
      resolver: zodResolver(schema),
      defaultValues: {
         position,
         quantity,
         type,
         softSkills,
         technicalKnowledge,
         functions,
      },
   });

   useEffect(() => {
      reset({
         position,
         quantity,
         type,
         softSkills,
         technicalKnowledge,
         functions,
      });
   }, [
      position,
      quantity,
      type,
      softSkills,
      technicalKnowledge,
      functions,
      reset,
   ]);

   const onSubmit: SubmitHandler<FormValues> = (data) => {
      handleData(data);
      setSavedSuccessfully(true);
      setTimeout(() => setSavedSuccessfully(false), 2000);
   };

   const handleEdit = () => {
      if (isEditable) {
         handleSubmit(onSubmit)();
      }
      setIsEditable(!isEditable);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Grid container spacing={3}>
            {savedSuccessfully && (
               <Grid item xs={12}>
                  <Typography variant="body1" color="green" align="center">
                     Guardado exitoso
                  </Typography>
               </Grid>
            )}

            <Grid item xs={12}>
               <Typography
                  variant="h5"
                  component="h2"
                  marginBottom={2}
                  fontWeight="bold"
               >
                  Solicitud de colaborador
               </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
               <RHFInput
                  control={control}
                  name="position"
                  label="Nombre del puesto"
                  placeholder="Desarrollador Front-End"
                  error={errors.position}
                  disabled={!isEditable}
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
                  disabled={!isEditable}
               />
            </Grid>

            <Grid item xs={12} sm={6}>
               <RHFSelect
                  control={control}
                  name="type"
                  label="Tipo de puesto"
                  error={errors.type}
                  disabled={!isEditable}
               />
            </Grid>

            <Grid item xs={12} sm={6}>
               <RHFInput
                  control={control}
                  name="softSkills"
                  label="Habilidades blandas"
                  placeholder="Separar por comas (,)"
                  error={errors.softSkills}
                  disabled={!isEditable}
               />
            </Grid>

            <Grid item xs={12}>
               <RHFInput
                  control={control}
                  name="technicalKnowledge"
                  label="Conocimientos técnicos"
                  placeholder="Separar por comas (,)"
                  error={errors.technicalKnowledge}
                  disabled={!isEditable}
               />
            </Grid>

            <Grid item xs={12}>
               <RHFMultiline
                  control={control}
                  name="functions"
                  label="Funciones"
                  placeholder="Funciones"
                  error={errors.functions}
                  disabled={!isEditable}
               />
            </Grid>

            <Grid item xs={12}>
               <footer>
                  <Button
                     onClick={handleEdit}
                     variant="contained"
                     sx={{ color: "white", paddingInline: "15px" }}
                  >
                     {isEditable ? "Guardar" : "Editar"}
                  </Button>
                  <Button
                     sx={{ paddingInline: "15px" }}
                     variant="text"
                     onClick={onClose}
                  >
                     Cerrar
                  </Button>
               </footer>
            </Grid>
         </Grid>
      </form>
   );
}
