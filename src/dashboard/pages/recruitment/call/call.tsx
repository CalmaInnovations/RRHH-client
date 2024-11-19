import { useState } from "react";
import {
   Box,
   Container,
   Grid,
   MenuItem,
   Select,
   SelectChangeEvent,
   Typography,
} from "@mui/material";
import { CardCall } from "../call-board/components/card-call";

export const Call = () => {
   // FIX: Mejorar este campo
   const [area, setArea] = useState("");
   const [subArea, setSubArea] = useState("");

   const handleChangeArea = (event: SelectChangeEvent) => {
      setArea(event.target.value as string);
   };

   const handleChangeSubArea = (event: SelectChangeEvent) => {
      setSubArea(event.target.value as string);
   };

   return (
      <Container sx={{ marginTop: 3 }}>
         <Typography
            variant="h4"
            sx={{ marginBottom: "1rem", fontWeight: "600" }}
            component="h1"
         >
            Convocatorias
         </Typography>

         <Box>
            <Select
               sx={{
                  width: 200,
                  marginRight: 4,
                  color: "#0A99E6",
                  fontWeight: 500,
                  borderRadius: 2,
               }}
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={area}
               onChange={handleChangeArea}
               displayEmpty
            >
               <MenuItem value="">Área</MenuItem>
               <MenuItem value={10}>Área</MenuItem>
            </Select>

            <Select
               sx={{
                  width: 200,
                  marginRight: 4,
                  color: "#0A99E6",
                  fontWeight: 500,
                  borderRadius: 2,
               }}
               labelId="demo-simple-select-label"
               id="demo-simple-select"
               value={subArea}
               onChange={handleChangeSubArea}
               displayEmpty
            >
               <MenuItem value="">Subárea</MenuItem>
               <MenuItem value={20}>Subárea</MenuItem>
               <MenuItem value={30}>Subárea</MenuItem>
            </Select>
         </Box>

         <Box sx={{ marginTop: 5 }}>
            <Grid container spacing={2}>
               <Grid item xs={6}>
                  <CardCall />
               </Grid>

               <Grid item xs={6}>
                  <CardCall />
               </Grid>

               <Grid item xs={6}>
                  <CardCall />
               </Grid>

               <Grid item xs={6}>
                  <CardCall />
               </Grid>

               <Grid item xs={6}>
                  <CardCall />
               </Grid>

               <Grid item xs={6}>
                  <CardCall />
               </Grid>
            </Grid>
         </Box>
      </Container>
   );
};
