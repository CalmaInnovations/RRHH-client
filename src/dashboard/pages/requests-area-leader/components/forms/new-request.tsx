import { useState, useRef } from "react";
import { Grid, Typography, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, schema } from "./validations/schema-new-request";
import { RHFSelect, RHFInput } from "./components/custom-inputs";
import { useCreateColaboradorServiceMutation } from "../../../../../redux/services/request/request-api";
import { useAreas } from "../../hooks/useAreas";

interface PropsNextModal {
   handleNextModal: () => void;
   handleData: (data: any) => void;
}

export function NewRequest({ handleNextModal, handleData }: PropsNextModal) {
   const renderCount = useRef(0);
   renderCount.current += 1;
   console.log(`Render #${renderCount.current} del componente NewRequest`);

   const [createRequest, { isLoading, error }] = useCreateColaboradorServiceMutation();

   const { control, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
      mode: "onSubmit",
      resolver: zodResolver(schema),
      defaultValues: {},
   });

   const { position, collaboratorModality } = useAreas();
   
   const selectedArea = useRef<string | number>("0");
   const selectedModalidad = useRef<string | number>("0");

   const handleChangeArea = (value: string | number) => {
      console.log("Cambió el área:", value);
      selectedArea.current = value;
   };

   const handleChangeModalidad = (value: string | number) => {
      console.log("Cambió la modalidad:", value);
      selectedModalidad.current = value;
   };

   const onSubmit = async (data: FormValues) => {
      console.log("Enviando formulario...");
   
      if (selectedArea.current === "0") {
         console.error("No se ha seleccionado un puesto.");
         return;
      }
      if (selectedModalidad.current === "0") {
         console.error("No se ha seleccionado un tipo de modalidad.");
         return;
      }
   
      const newCollaborator = {
         colaboradorLiderId: 1,
         puestoId: Number(selectedArea.current),
         cantidad: data.cantidad || 0,
         habilidadesBlandas: data.habilidadesBlandas || "",
         conocimientosTecnicos: data.conocimientosTecnicos || "",
         tipoModalidad: String(selectedModalidad.current),
         observaciones: data.observaciones || "",
         beneficios: data.beneficios || "",
      };
   
      console.log("Datos preparados para enviar:", newCollaborator);
   
      try {
         console.log("Enviando solicitud a la API...");
         const response = await createRequest(newCollaborator).unwrap();
   
         console.log("Solicitud enviada correctamente:", response);
         handleData(response);
         reset();
         handleNextModal();
      } catch (error) {
         console.error("Error en la solicitud:", error);
      }
   };
   

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <Grid container spacing={3}>
            <Grid item xs={12}>
               <Typography variant="h5" fontWeight="bold">Nueva Solicitud</Typography>
            </Grid>

            <Grid item xs={12}>
               <RHFSelect
                  control={control}
                  name="area"
                  label="Nombre del puesto"
                  options={position}
                  handleChange={handleChangeArea}
                  error={errors.area}
               />
            </Grid>

            <Grid item xs={12} sm={6}>
               <RHFInput
                  control={control}
                  name="cantidad"
                  label="Cantidad"
                  placeholder="2"
                  error={errors.cantidad}
                  type="number"
                  inputProps={{ min: 0 }}
               />
            </Grid>

            <Grid item xs={12} sm={6}>
               <RHFSelect
                  control={control}
                  name="tipoModalidad"
                  label="Tipo de Modalidad"
                  options={collaboratorModality.map((mod, index) => ({ id: index, nombre: mod }))}
                  handleChange={handleChangeModalidad}
                  error={errors.tipoModalidad}
               />
            </Grid>

            <Grid item xs={12} sm={6}>
               <RHFInput
                  control={control}
                  name="habilidadesBlandas"
                  label="Habilidades blandas"
                  placeholder="Separar por comas (,)"
                  error={errors.habilidadesBlandas}
               />
            </Grid>

            <Grid item xs={12} sm={6}>
               <RHFInput
                  control={control}
                  name="conocimientosTecnicos"
                  label="Conocimientos técnicos"
                  placeholder="Separar por comas (,)"
                  error={errors.conocimientosTecnicos}
               />
            </Grid>

            <Grid item xs={12}>
               <footer>
                  <Button
                     type="submit"
                     variant="contained"
                     sx={{ color: "white", paddingInline: "15px" }}
                     disabled={isLoading}
                  >
                     {isLoading ? "Enviando..." : "Solicitar"}
                  </Button>

                  <Button
                     sx={{ paddingInline: "15px" }}
                     variant="text"
                     onClick={() => reset()}
                  >
                     Limpiar
                  </Button>
               </footer>
               {error && <Typography color="error">Error al enviar la solicitud</Typography>}
            </Grid>
         </Grid>
      </form>
   );
}