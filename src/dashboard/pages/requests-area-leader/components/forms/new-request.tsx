import { Grid, Typography, Button } from "@mui/material";
import "./styles/forms.style.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormValues, schema } from "./validations/schema-new-request";
import { RHFSelect, RHFInput } from "./components/custom-inputs";
import { Collaborator } from "../../interface/request-items.model";
import { createColaboradorService } from "../../components/table/service/request-service";
import { CollaboratorPost } from "../../interface/request-items.model";
import { useAreas } from "../../hooks/useAreas";
import { useState } from "react";

interface PropsNextModal {
   handleNextModal: () => void;
   handleData: (data: Collaborator) => void;
}

const initialFormState: CollaboratorPost = {
   colaboradorLiderId: 0,
   puestoId: 0,
   cantidad: 0,
   habilidadesBlandas: "",
   conocimientosTecnicos: "",
   tipoModalidad: "",
   observaciones: "",
};

export function NewRequest({ handleNextModal, handleData }: PropsNextModal) {
   const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<FormValues>({
      mode: "onSubmit",
      resolver: zodResolver(schema),
      defaultValues: {},
   });

   const { position, collaboratorModality } = useAreas();
   const [selectedArea, setSelectedArea] = useState<string | number>("0");
   const [selectedModalidad, setSelectedModalidad] = useState<string | number>("0");
   const [cardItems, setCardItems] = useState<Collaborator[]>([]);
   const [formValues, setFormValues] = useState<CollaboratorPost>(initialFormState);

   const onSubmit: SubmitHandler<FormValues> = async (data) => {
      const newCollaborator: CollaboratorPost = {
         colaboradorLiderId: 1,
         puestoId: data.puestoId,
         cantidad: data.cantidad,
         habilidadesBlandas: data.habilidadesBlandas,
         conocimientosTecnicos: data.conocimientosTecnicos,
         tipoModalidad: data.tipoModalidad,
         observaciones: data.observaciones || "",
      };

      try {
         const response = await createColaboradorService(newCollaborator);
         console.log("Solicitud enviada exitosamente:", response);
         handleData(response);
         reset();
         handleNextModal();
      } catch (error) {
         console.error("Error al enviar la solicitud:", error);
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

            <Grid item xs={12} sm={12}>
               <RHFSelect
                  control={control}
                  name="area"
                  label="Nombre del puesto"
                  options={position}
                  handleChange={(value) => setSelectedArea(value)}
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
                  handleChange={(value) => setSelectedModalidad(value)}
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
