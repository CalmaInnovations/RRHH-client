import { Grid, Typography, Button } from "@mui/material";
import { useState, useEffect } from "react";

import { RHFInput, RHFMultiline, RHFSelect } from "./components/custom-inputs";
import { FormValues, schema } from "./validations/schema-new-request";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Collaborator } from "../../interface/request-items.model";
import { useAreas } from "../../hooks/useAreas";
import { RHFSelectModalidad } from "./components/custom-inputs/rhf-select-modalidad";

interface OnCloseProps {
   onClose: () => void;
   handleData: (data: Collaborator) => void;
}

export function PreviewRequest({
   puestoId,
   cantidad,
   tipoModalidad,
   habilidadesBlandas,
   conocimientosTecnicos,
   observaciones,
   onClose,
   handleData,
}: Collaborator & OnCloseProps) {
   const [isEditable, setIsEditable] = useState(false);
   const [savedSuccessfully, setSavedSuccessfully] = useState(false);
   const { areas, subAreas, position } = useAreas();
   const [selectedArea, setSelectedArea] = useState<string | number>(0);
   const [selectSubArea, setselectSubArea] = useState<string | number>(0);

   const {
      control,
      handleSubmit,
      formState: { errors },
      reset,
   } = useForm<FormValues>({
      mode: "all",
      resolver: zodResolver(schema),
      defaultValues: {
         puestoId,
         cantidad,
         tipoModalidad,
         habilidadesBlandas,
         conocimientosTecnicos,
         observaciones,
      },
   });

   useEffect(() => {
      reset({
         puestoId,
         cantidad,
         tipoModalidad,
         habilidadesBlandas,
         conocimientosTecnicos,
         observaciones,
      });
   }, [
      puestoId,
      cantidad,
      tipoModalidad,
      habilidadesBlandas,
      conocimientosTecnicos,
      observaciones,
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

   const filteredSubAreas = subAreas.filter(
      ({ areaId }) => areaId === Number(selectedArea)
   );

   const filteredPosition = position.filter(
      ({ subAreaId }) => subAreaId === Number(selectSubArea)
   );

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
               <RHFSelect
                  control={control}
                  name="area"
                  label="Area"
                  options={areas}
                  handleChange={(value) => setSelectedArea(Number(value))}
                  disabled
               />
            </Grid>

            <Grid item xs={12} sm={6}>
               <RHFSelect
                  control={control}
                  name="subarea"
                  label="Sub Area"
                  options={filteredSubAreas}
                  handleChange={(value) => setselectSubArea(Number(value))}
                  disabled={!selectedArea}
               />
            </Grid>

            <Grid item xs={12} sm={12}>
               <RHFSelect
                  control={control}
                  name="puestoId"
                  label="Tipo de puesto"
                  options={filteredPosition}
                  disabled={!selectSubArea}
               />
            </Grid>
            <Grid item xs={12} sm={6}>
               <RHFSelectModalidad
                  control={control}
                  name="tipoModalidad"
                  label="tipo de Modalidad"
                  options={filteredPosition}
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
                  inputProps={{ min: 2, type: "number" }}
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
               <RHFMultiline
                  control={control}
                  name="observaciones"
                  label="Observaciones"
                  placeholder="Observaciones"
                  error={errors.observaciones}
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
