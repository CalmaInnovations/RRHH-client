import { Grid, Typography, Button } from "@mui/material";
import "./styles/forms.style.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, schema } from "./validations/schema-new-request";
import { RHFSelect, RHFInput, RHFMultiline } from "./components/custom-inputs";
import { CollaboratorPost } from "../../interface/request-items.model";
import { useAreas } from "../../hooks/useAreas";
import { useState } from "react";

interface PropsNextModal {
   handleNextModal: () => void;
   handleData: (data: CollaboratorPost) => void;
}

const dataPosition = [
   {
      id: 1,
      nombre: "Reclutador",
   },
   {
      id: 2,
      nombre: "Instructor de Capacitación",
   },
   {
      id: 3,
      nombre: "Desarrollador de Software",
   },
];

console.log(dataPosition);

export function NewRequest({ handleNextModal, handleData }: PropsNextModal) {
   const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<FormValues>({ mode: "onSubmit", resolver: zodResolver(schema) });

   // const [area, setarea] = useState("")

   const { areas, subAreas, Loading } = useAreas();
   const [selectedArea, setSelectedArea] = useState<string | number>(0);
   const [selectSubArea, setselectSubArea] = useState<string | number>(0);

   const onSubmit: SubmitHandler<FormValues> = async (data) => {
      const values: CollaboratorPost = {
         colaboradorLiderId: data.colaboradorLiderId,
         puestoId: data.puestoId,
         cantidad: data.cantidad,
         habilidadesBlandas: data.habilidadesBlandas,
         conocimientosTecnicos: data.conocimientosTecnicos,
         tipoModalidad: data.tipoModalidad,
         observaciones: data.observaciones,
         beneficios: data.beneficios,
      };

      handleData(values);
      handleNextModal();
   };

   const filteredSubAreas = subAreas.filter(
      ({ areaId }) => areaId === Number(selectedArea)
   );

  
   const filteredPosition = dataPosition.filter(
      ({ id }) => id === Number(selectSubArea)
   );

   console.log("Sub Areas:", filteredSubAreas);
   console.log("Filtered Positions:", filteredPosition);
   

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
               <RHFSelect
                  control={control}
                  name="area"
                  label="Area"
                  options={areas}
                  handleChange={(value) => setSelectedArea(Number(value))}
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
            <Grid item xs={12} sm={6}>
               <RHFSelect
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
                  error={errors.cantidad}
                  type="number"
                  inputProps={{ min: 0 }}
               />
            </Grid>

            <Grid item xs={12} sm={6}>
               <RHFSelect
                  control={control}
                  name="type"
                  label="Tipo de puesto"
                  options={subAreas}
               />
            </Grid>

            <Grid item xs={12} sm={6}>
               <RHFInput
                  control={control}
                  name="softSkills"
                  label="Habilidades blandas"
                  placeholder="Separar por comas (,)"
                  error={errors.habilidadesBlandas}
               />
            </Grid>

            <Grid item xs={12}>
               <RHFInput
                  control={control}
                  name="technicalKnowledge"
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
