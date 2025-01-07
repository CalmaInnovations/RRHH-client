import React, { useState } from "react";
import {
   Grid,
   Select,
   MenuItem,
   FormControl,
   InputLabel,
   Button,
   SelectChangeEvent,
} from "@mui/material";
import MainModal from "./MainModal";
import { useGetReclutadoresQuery } from "../../../redux/services/recruiter/recruiter-api";

interface ModalAssingRecruiterProps {
   open: boolean;
   handleClose: () => void;
}

export const ModalAssingRecruiter: React.FC<ModalAssingRecruiterProps> = ({
   open,
   handleClose,
}) => {
   const [recruiterType, setRecruiterType] = useState<string>("");
   const [selectedRecruiter, setSelectedRecruiter] = useState<string>("");
   const { data, isLoading } = useGetReclutadoresQuery();


   const handleRecruiterTypeChange = (event: SelectChangeEvent<string>) => {
      setRecruiterType(event.target.value);
   };

   const handleRecruiterChange = (event: SelectChangeEvent<string>) => {
      setSelectedRecruiter(event.target.value);
   };

   return (
      <MainModal open={open} handleClose={handleClose} title="Asignar Reclutador">
         <Grid container spacing={2} sx={{ mt: 2 }}>
            <Grid item xs={12}>
               <FormControl fullWidth>
                  <InputLabel id="recruiter-label">Tipo de Reclutador</InputLabel>
                  <Select
                     labelId="recruiter-label"
                     label="Tipo de Reclutador"
                     value={recruiterType}
                     onChange={handleRecruiterTypeChange}
                  >
                     <MenuItem value="senior">Reclutador Senior</MenuItem>
                     <MenuItem value="general">Reclutador General</MenuItem>
                  </Select>
               </FormControl>
            </Grid>

            <Grid item xs={12}>
               <FormControl fullWidth>
                  <InputLabel id="position-label">
                     {recruiterType === "senior"
                        ? "Reclutadores Senior"
                        : "Reclutadores Generales"}
                  </InputLabel>
                  <Select
                     labelId="position-label"
                     label="Reclutador"
                     value={selectedRecruiter}
                     onChange={handleRecruiterChange}
                     disabled={isLoading || !recruiterType}
                  >
                     {recruiterType === "senior" &&
                        data?.reclutadoresSenior.map((recruiter) => (
                           <MenuItem
                              key={recruiter.id}
                              value={recruiter.id.toString()}
                           >
                              {recruiter.nombre}
                           </MenuItem>
                        ))}
                     {recruiterType === "general" &&
                        data?.reclutadoresGeneral.map((recruiter) => (
                           <MenuItem
                              key={recruiter.id}
                              value={recruiter.id.toString()}
                           >
                              {recruiter.nombre}
                           </MenuItem>
                        ))}
                  </Select>
               </FormControl>
            </Grid>

            <Grid item xs={12}>
               <Button
                  fullWidth
                  variant="contained"
                  sx={{
                     color: "white",
                     position: "relative",
                     bottom: 0,
                     backgroundColor: "#5BC1E6",
                  }}
               >
                  Asignar
               </Button>
            </Grid>
         </Grid>
      </MainModal>
   );
};


