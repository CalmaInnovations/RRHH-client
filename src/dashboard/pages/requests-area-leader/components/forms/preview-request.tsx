import { useState, useEffect } from "react";
import { Grid, Typography, Button, Alert } from "@mui/material";
import { RHFInput, RHFSelect } from "./components/custom-inputs";
import { FormValues } from "./validations/schema-new-request";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Collaborator } from "../../interface/request-items.model";
import { useAreas } from "../../hooks/useAreas";
import { RHFSelectModalidad } from "./components/custom-inputs/rhf-select-modalidad";
import { useEditRequestMutation } from "@/redux/services/request/request-api";
import { schema } from "./validations/schema-edit-request";
import { useAlert } from "@/hooks/use-alert";

interface OnCloseProps {
   onClose: () => void;
   setCards: React.Dispatch<React.SetStateAction<Collaborator[]>>;
}

export function PreviewRequest({
   id,
   cantidad,
   tipoModalidad,
   habilidadesBlandas,
   conocimientosTecnicos,
   onClose,
   setCards,
}: Collaborator & OnCloseProps) {
   const { areas, subAreas, position } = useAreas();
   const { alert, showAlert } = useAlert();
   const [editRequest] = useEditRequestMutation();
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
         // puestoId,
         cantidad,
         tipoModalidad,
         habilidadesBlandas,
         conocimientosTecnicos,
      },
   });

   useEffect(() => {
      reset({
         // puestoId,
         cantidad,
         tipoModalidad,
         habilidadesBlandas,
         conocimientosTecnicos,
      });
   }, [
      cantidad,
      tipoModalidad,
      habilidadesBlandas,
      conocimientosTecnicos,
      reset,
   ]);

   const handleEdit: SubmitHandler<FormValues> = async (values) => {
      const { data } = await editRequest({
         id_request: +id!,
         values: {
            cantidad: values.cantidad,
            habilidadesBlandas: values.habilidadesBlandas,
            conocimientosTecnicos: values.conocimientosTecnicos,
         },
      });

      if (!data) {
         showAlert("error", "Ocurrio un error");
         return;
      }

      showAlert("success", data.message);

      setCards((prev) =>
         prev.map((card) => (card.id === id ? { ...card, ...values } : card))
      );
   };

   const filteredSubAreas = subAreas.filter(
      ({ areaId }) => areaId === Number(selectedArea)
   );

   const filteredPosition = position.filter(
      ({ subAreaId }) => subAreaId === Number(selectSubArea)
   );

   const { message, type } = alert;

   return (
      <form onSubmit={handleSubmit(handleEdit)}>
         <Grid container spacing={3}>
            <Grid item xs={12}>
               <Typography
                  id="transition-modal-title"
                  variant="h5"
                  component="h2"
                  marginBottom={2}
                  fontWeight="bold"
               >
                  Editar Solicitud
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
                  inputProps={{ min: 1, type: "number" }}
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

            {message && (
               <Grid item xs={12} sx={{ display: "flex", gap: 2 }}>
                  <Alert variant="filled" color={type} sx={{ width: "100%" }}>
                     {typeof message === "string" && message.trim()
                        ? message
                        : "Mensaje no disponible"}
                  </Alert>
               </Grid>
            )}

            <Grid item xs={12}>
               <footer>
                  <Button
                     type="submit"
                     variant="contained"
                     sx={{ color: "white", paddingInline: "15px" }}
                  >
                     Editar
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
